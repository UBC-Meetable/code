/* eslint-disable no-underscore-dangle */
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
/*
const major = require("./routes/major");
const majorRouter = major.router;
*/
const cors = require("cors");
const path = require("path");
require("dotenv").config();
const sslRedirect = require("heroku-ssl-redirect");

const http = require("http");
const socketIO = require("socket.io");
const { Expo } = require("expo-server-sdk");
const pushNotifications = require("./pushNotifications");
const Group = require("./models/Group");
const ChatMessage = require("./models/ChatMessage");
const User = require("./models/User");

const app = express();
const server = http.createServer(app);
app.use(cors());
app.use(bodyParser.json());

const prodCluster = "mongodb+srv://admin:S4FxYOzuB1fsn01P@cluster1.t0s2m.mongodb.net/meetable?retryWrites=true&w=majority";
const testCluster = "mongodb+srv://admin:Csi3i2h9cStvsRb@meetable-test.jwya1.mongodb.net/test?authSource=admin&replicaSet=atlas-jejadc-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true";

// Define Routes
app.use("/api/users", require("./routes/users").router);
app.use("/api/quizs", require("./routes/quizs"));
app.use("/api/responses", require("./routes/responses"));
app.use("/api/auth", require("./routes/auth"));
app.use("/api/groups", require("./routes/groups"));
app.use("/api/media", require("./routes/media"));
app.use("/api/forms", require("./routes/forms"));
app.use("/api/chat", require("./routes/chat"));
app.use("/api/status", require("./routes/status"));
const connectDB = async () => {
  try {
    await mongoose.connect(
      testCluster,
      {
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false,
        useUnifiedTopology: true,
      },
    );

    console.log("MongoDB Connected...");
  } catch (err) {
    console.error(err.message);
    // Exit process with failure
    process.exit(1);
  }
};

// Connect Database
connectDB();
app.use(sslRedirect());

// Chat
const io = socketIO(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
    allowedHeaders: ["my-custom-header"],
    credentials: true,
  },
});
io.on("connection", (socket) => {
  // disconnect is fired when a client leaves the server
  // author, text, uid are String
  /*
       file: {
        data: Buffer,
        contentType: String // this would probably be like 'image/png' or 'video/mp4'
    },
    */
  socket.on("message", async (msg) => {
    const msgObj = JSON.parse(msg);
    const message = new ChatMessage({
      author: msgObj.author,
      text: msgObj.text,
      uid: msgObj.uid,
      file: msgObj.file,
    });
    message.save().catch((err) => {
      console.error(err);
    });
    const group = await Group.findOne({ _id: msgObj.gid }).populate("members");
    group.messages.push(message._id);
    group.save().catch((err) => {
      console.error(err);
    });
    // push notification logic
    let pushTokens = [];
    pushTokens = group.members.forEach((member) => {
      pushTokens.push(member.expoPushToken);
    });
    pushNotifications.notifyGroup(pushTokens, message);
  });
  socket.on("typing", (user) => {
    console.log(`username ${user} is typing..`);
  });
  socket.on("disconnect", () => {
    console.log("user disconnected");
  });
});
server.listen(5000, () => console.log("Listening to chat room on port 5000"));

// req : request
// res : response

app.post("/submitForm", (req, res) => {
  // {
  //     "name": "brendan",
  //     "email": "wubrendan7@gmail.com",
  //     "password": "asdfdsafsdfsa"
  // }

  const { body } = req;
  const { name } = body;
  const { email } = body;
  const { password } = body;

  const u = new User({ name, email, password });
  u.save().then(() => {
    res.json({
      status: "success",
      code: 200,
      msg: "User saved",
    });
  });
});

// Serve static assets in production
if (true) {
  // Set static folder
  app.use(express.static("build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "build", "index.html"));
  });
}

const PORT = process.env.NODE_ENV === "production" ? process.env.PORT : 4000;
app.listen(PORT, () => console.log(`Meetable api listening on port ${PORT}`));
