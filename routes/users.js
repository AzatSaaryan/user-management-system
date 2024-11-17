const express = require("express");
const User = require("../models/User");
const router = express.Router();

router.get("/users", async (req, res) => {
  const { firstName, lastName, age } = req.query;

  const query = {};

  if (firstName) query.firstName = { $regex: firstName, $options: "i" };
  if (lastName) query.lastName = { $regex: lastName, $options: "i" };
  if (age) query.age = age;

  const users = await User.find(query);

  res.json(users);
});

module.exports = router;
