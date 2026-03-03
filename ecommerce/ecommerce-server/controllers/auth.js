const bcrypt = require("bcrypt");
const Joi = require("joi");

const User = require("../models/User");

// improt bcrpt

const signUp = async (req, res) => {
  // if (!req.body.password) {
  //   return res.status(400).send({
  //     errors: [
  //       {
  //         field: "password",
  //         msg: "requrieed",
  //       },
  //     ],
  //   });
  // }

  // has the password

  // server side validation
  const signupValidationSchema = Joi.object({
    firstName: Joi.string().required(),
    password: Joi.string().required().min(8),
    email: Joi.string()
      .required()
      .email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } }),
  });

  let validate = signupValidationSchema.validate(req.body, { abortEarly: false, allowUnknown: true });

  if (validate.error?.details) {
    return res.status(400).send(validate.error.details);
  }

  let hashedPw = await bcrypt.hash(req.body.password, 10);

  let user = await User.create({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    password: hashedPw,
  });
  res.send({ user });
};

const login = async (req, res) => {
  let loggedIn = false;
  let user = await User.findOne({
    where: {
      email: req.body.email,
    },
  });

  if (user) {
    let pwMatched = await bcrypt.compare(req.body.password, user.password);
    if (pwMatched) {
      loggedIn = true;
    }
  }

  if (loggedIn) {
    res.status(200).send({
      msg: "logged IN",
    });
  } else {
    res.status(401).send({
      msg: "invalid credentails",
    });
  }
};

module.exports = {
  signUp,
  login: login,
};
