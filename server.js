const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require('body-parser');
const User = require("./models/User");

const app = express();
app.use(json())
// Define Routes
app.use('/api/users', require('./routes/users').default);
app.use('/api/quizs', require('./routes/quizs'));
app.use('/api/responses', require('./routes/responses'));
app.use('/api/auth', require('./routes/auth'));
app.use('/api/groups', require('./routes/groups'));

const connectDB = async () => {
  try {
    await connect(
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

app.listen(4000, () => console.log("Meetable api listening on port 4000"));
