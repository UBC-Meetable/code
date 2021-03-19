/* eslint-disable no-underscore-dangle */
/* eslint-disable arrow-body-style */
/* eslint-disable indent */

/* eslint-env jest */
const mongoose = require("mongoose");
const { moreCompatible, createUser, updateProfile } = require("../routes/users");
const { User, UserClass } = require("../models/User");

const testCluster = "mongodb+srv://admin:Csi3i2h9cStvsRb@meetable-test.jwya1.mongodb.net/test?authSource=admin&replicaSet=atlas-jejadc-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true";

let db;
let res = {
  end() {},
  status(s) { this.statusCode = s; return this; },
  send() {},
};

beforeAll(async () => {
  // database access test would time out with default 5000
  jest.setTimeout(10000);
    try {
      db = await mongoose.connect(
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
      console.error(err);
      // Exit process with failure
      process.exit(1);
    }
  });

afterEach(async () => {
  const result = await User.find();
  if (result.length !== 0) {
    await User.collection.drop();
  }
});

afterAll(async () => {
  // await User.collection.drop();
  await db.disconnect();
});

test("database access", async () => {
  const attributes = {
    name: "...",
    authid: "1",
  };
  let userModel = new User(attributes);
  await userModel.save();
  return User.find({ name: "..." }).then((data) => {
    expect(data.length).toBe(1);
  });
});

test("create user exists", async () => {
  const attributes = {
    name: "createUserUserExists",
    authid: "createUserUserExists",
  };
  await createUser({ body: attributes }, res);
  await createUser({ body: attributes }, res);
  const data = await User.find({ authid: "createUserUserExists" });
  expect(data.length).toBe(1);
});

test("create user not exists", async () => {
  const attributes = {
    name: "createUserNotExists",
    authid: "createUserNotExists",
  };
  const attributes1 = {
    name: "createUserNotExists",
    authid: "createUserNotExists1",
  };
  await createUser({ body: attributes }, res);
  await createUser({ body: attributes1 }, res);
  const data = await User.find({ name: "createUserNotExists" });
  expect(data.length).toBe(2);
});

test("create user has expected attributes", async () => {
  const attributes = {
    name: "createUserExpectedAttr",
    authid: "createUserExpectedAttr",
    email: "awefdf@awefwef.com",
    avatar: "wefawef.com/wefwfe.png",
    instagram: "wefwef",
  };
  await createUser({ body: attributes }, res);
  const data = await User.findOne({ name: "createUserExpectedAttr" });
  expect(data.name).toBe(attributes.name);
  expect(data.authid).toBe(attributes.authid);
  expect(data.email).toBe(attributes.email);
  expect(data.avatar).toBe(attributes.avatar);
  expect(data.instagram).toBe(attributes.instagram);
});

test("update profile violates schema", async () => {
  // max length of name
  const a = {
    name: "update",
    authid: "update",
  };
  const req = {
    body: {
      uid: "...",
      newAttributes: {
        name: "01234567890123456789012345678901234567890123456789",
      },
    },
  };
  await createUser({ body: a }, res);
  let user = await User.findOne({ name: "update" });
  req.body.uid = user._id;
  await updateProfile(req, res);
  user = await User.findOne({ name: "update" });
  expect(user.name).toBe("update");
});

test("update profile multiple", async () => {
  const a = {
    name: "name",
    authid: "authid",
    instagram: "instagram",
    bio: "bio",
  };
  const req = {
    body: {
      uid: "...",
      newAttributes: {
        name: "updated",
        authid: "updated",
        instagram: "updated",
        bio: "updated",
      },
    },
  };
  await createUser({ body: a }, res);
  let user = await User.findOne({ name: "name" });
  req.body.uid = user._id;
  await updateProfile(req, res);
  user = await User.findOne({ name: "name" });
  expect(user.name).toBe("updated");
  expect(user.authid).toBe("updated");
  expect(user.instagram).toBe("updated");
  expect(user.bio).toBe("updated");
});

/*
test("creates new user with attributes", () => {
    // const expected = new User({
    //     name: "...",
    //     authid: "1",
    // });
    const expected = new UserClass("...", "1");

    const attributes = {
        name: "...",
        id: "1",
    };
    // seems that object comparison must use toEqual, not toBe
    expect(constructUser(attributes)).toEqual(expected);
  });
  */

test("moreCompatible", () => {
    let qi = {};
    let qi1 = {};
    let qi2 = {};
    let responseMap = new Map();
    responseMap.set("q1", "1");
    responseMap.set("q2", "1");
    responseMap.set("q3", "1");
    qi.responses = responseMap;
    qi1.responses = responseMap;
    let responseMap2 = new Map(responseMap);
    responseMap2.set("q1", "2");
    qi2.responses = responseMap2;

    expect(moreCompatible(qi, qi1, qi2)).toBe(true);
    expect(moreCompatible(qi, qi2, qi1)).toBe(false);
    qi2.responses = responseMap;
    expect(moreCompatible(qi, qi1, qi2)).toBe(false);
  });

test("basic test", () => {
    const num = 1 + 2;
    expect(num).toBe(3);
  });
