/* eslint-disable arrow-body-style */
/* eslint-disable indent */

/* eslint-env jest */
const mongoose = require("mongoose");
const { constructUser, moreCompatible } = require("../routes/users");
const { User, UserClass } = require("../models/User");
const testCluster = "mongodb+srv://admin:Csi3i2h9cStvsRb@meetable-test.jwya1.mongodb.net/test?authSource=admin&replicaSet=atlas-jejadc-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true";

let db;

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

afterAll(async () => {
  await db.disconnect();
});

test("database access", () => {
  return User.find().then((data) => {
    expect(data).toBeTruthy();
  });
});

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
