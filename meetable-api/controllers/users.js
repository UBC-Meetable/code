const { User, UserClass } = require("../models/User");
const Group = require("../models/Group");
const CourseGroup = require("../models/CourseGroup");
const QuizInstance = require("../models/QuizInstance");

async function createUser (req, res) {
  try {
    console.log(req.body);
    const userInfo = {};
    for (const attribute in req.body) {
      userInfo[attribute] = req.body[attribute];
    }
    let user = await User.findOne({ authid: userInfo.authid });
    if (user) {
      console.log("user exists");

      const socials = [user.snapchat, user.instagram, user.facebook];
      if (socials.length < 1 || !user.bio) {
        return res.status(200).send({
          msg: "Meetable user exists additional steps required",
          id: user._id,
          snapchat: user.snapchat,
          instagram: user.instagram,
          bio: user.bio,
        });
      }
      return res.status(200).send({
        msg: "Meetable user exists",
        id: user._id,
        snapchat: user.snapchat,
        instagram: user.instagram,
        bio: user.bio,
      });
    }
    user = new User({
      authid: userInfo.authid,
      name: userInfo.name,
    });
    for (const attribute in userInfo) {
      user[attribute] = userInfo[attribute];
    }
    console.log(user);
    await user.save();
    res.status(200).send({
      msg: "Meetable user exists additional steps required",
      id: user._id,
    });
  } catch (err) {
    console.log(err);
    res.status(500).send(JSON.stringify(err));
  } 
}
