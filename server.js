const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const User = require("./models/User");
const ChatMessage = require("./models/ChatMessage");
const Group = require("./models/Group");
const cors = require("cors");
const path = require("path");
require("dotenv").config();
const sslRedirect = require("heroku-ssl-redirect");

const http = require("http");
const socketIO = require("socket.io");

const app = express();
const server = http.createServer(app);
app.use(cors());
app.use(bodyParser.json());

const prodCluster = "mongodb+srv://admin:S4FxYOzuB1fsn01P@cluster1.t0s2m.mongodb.net/meetable?retryWrites=true&w=majority";
const testCluster = "mongodb+srv://admin:S4FxYOzuB1fsn01P@cluster0.t0s2m.mongodb.net/meetable?retryWrites=true&w=majority";




// Define Routes
app.use("/api/users", require("./routes/users"));
app.use("/api/quizs", require("./routes/quizs"));
app.use("/api/responses", require("./routes/responses"));
app.use("/api/auth", require("./routes/auth"));
app.use("/api/groups", require("./routes/groups"));
app.use("/api/media", require("./routes/media"));
app.use("/api/forms", require("./routes/forms"));
app.use("/api/chat", require("./routes/chat"));

const connectDB = async () => {
  try {
    await mongoose.connect(
      testCluster,
      {
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false,
        useUnifiedTopology: true,
      }
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
let io = socketIO(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
    allowedHeaders: ["my-custom-header"],
    credentials: true,
  },
});
io.on("connection", (socket) => {
  
  // disconnect is fired when a client leaves the server
  socket.on("message", async (msg)=>{
    console.log(msg);
    let msgObj = JSON.parse(msg);
    let message = new ChatMessage({
      text: msgObj.text,
      uid: msgObj.uid,
    });
    await message.save().catch((err) => {
      console.log(err);
    });
    let group = await Group.findOne({_id: msgObj.gid});
    group.messages.push(message._id);
    group.save().catch((err) => {
      console.log(err);
    });
  })
  socket.on("typing", (user)=>{
    console.log(`username ${user} is typing..`);

  })
  socket.on("disconnect", () => {
    console.log("user disconnected");
  });
});
server.listen(5000, () => console.log("Listening to chat room on port 5000"));

//req : request
//res : response

app.post("/submitForm", (req, res) => {
  // {
  //     "name": "brendan",
  //     "email": "wubrendan7@gmail.com",
  //     "password": "asdfdsafsdfsa"
  // }

  const body = req.body;
  const name = body.name;
  const email = body.email;
  const password = body.password;

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
