const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require('body-parser')

const app = express();
app.use(bodyParser.json())

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

const User = mongoose.model("User", { 
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    profilePic: {
        type: String,
        required: false
    },
    school: {
        type: String,
        required: false
    },
    major: {
        type: String,
        required: false
    },
    year: {
        type: Number,
        required: false
    },
    
});

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

app.listen(3000, () => console.log("Meetable api listening on port 3000"));
