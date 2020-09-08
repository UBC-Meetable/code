const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const User = require("./models/User");
const Question = require("./models/Question");
const cors = require("cors");
const path = require('path')
require('dotenv').config()
const sslRedirect = require('heroku-ssl-redirect')

const app = express();
app.use(cors());
app.use(bodyParser.json());
// Define Routes
app.use("/api/users", require("./routes/users"));
app.use("/api/quizs", require("./routes/quizs"));
app.use("/api/responses", require("./routes/responses"));
app.use("/api/auth", require("./routes/auth"));
app.use("/api/groups", require("./routes/groups"));
app.use("/api/media", require("./routes/media"));

const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://admin:S4FxYOzuB1fsn01P@cluster0.t0s2m.mongodb.net/meetable?retryWrites=true&w=majority",
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
app.use(sslRedirect())

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
  app.use(express.static('build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'build', 'index.html'));
  });
}

const PORT = process.env.NODE_ENV === "production" ? process.env.PORT : 4000
app.listen(PORT, () => console.log(`Meetable api listening on port ${PORT}`));
