const express = require("express");
const authRouter = express.Router();
const User = require("../models/user");
const jwt = require("jsonwebtoken");

// Signup
authRouter.post("/signup", (req, res, next) => {
  User.findOne({ username: req.body.username.toLowerCase() }, (err, user) => {
    if (err) {
      return next(err); // Use next to handle errors
    }
    if (user) {
      return res.status(409).send({ error: "Username is already taken" });
    }
    const newUser = new User(req.body);
    newUser.save((err, savedUser) => {
      if (err) {
        return next(err); // Use next to handle errors
      }
      const token = jwt.sign(savedUser.withoutPassword(), process.env.SECRET);
      return res.status(201).send({ token, user: savedUser.withoutPassword() });
    });
  });
});

// Login
authRouter.post("/login", (req, res, next) => {
  User.findOne({ username: req.body.username.toLowerCase() }, (err, user) => {
    if (err) {
      return next(err); // Use next to handle errors
    }
    if (!user) {
      return res.status(401).send({ error: "Username or password is incorrect" });
    }

    user.checkPassword(req.body.password, (err, isMatch) => {
      if (err || !isMatch) {
        return res.status(401).send({ error: "Username or password is incorrect" });
      }
      const token = jwt.sign(user.withoutPassword(), process.env.SECRET);
      return res.status(200).send({ token, user: user.withoutPassword() });
    });
  });
});

module.exports = authRouter;
