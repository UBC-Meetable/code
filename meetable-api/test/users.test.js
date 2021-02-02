/* eslint-disable indent */
const { constructUser, moreCompatible } = require("../routes/users");
const { User, UserClass } = require("../models/User");

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
    const qi = {
        responses: {
            q1: "yea",
            q2: "yea",
            q3: "yea",
        },
    };
    const qi1 = {
        responses: {
            q1: "yea",
            q2: "yea",
            q3: "yea",
        },
    };
    const qi2 = {
        responses: {
            q1: "no",
            q2: "yea",
            q3: "yea",
        },
    };
    expect(moreCompatible(qi, qi1, qi2)).toBe(true);
  });

test("basic test", () => {
    const num = 1 + 2;
    expect(num).toBe(3);
  });
