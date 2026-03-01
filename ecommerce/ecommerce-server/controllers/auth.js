const User = require("../models/User");

const signUp = async (req, res) => {
  // has the password
  let user = await User.create({
    firstName: "ram",
    lastName: "bahadur",
    password: "has",
  });
  res.send({ user });
};



const login = async (req, res) => {
  let user = await User.create({
    firstName: "ram",
    lastName: "bahadur",
  });
  res.send({ user });
};

module.exports = {
  signUp,
  login: login,
};
