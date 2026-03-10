const bcrypt = require("bcrypt");
const Joi = require("joi");

const User = require("../models/User");

// improt bcrpt

const signUp = async (req, res) => {
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
    let errors = validate.error.details.map((el) => ({
      field: el.context.key,
      message: el.message,
    }));

    return res.status(400).send(errors);
  }

  // let emailExists = await User.findOne({
  //   where: {
  //     email: req.body.email,
  //   },
  // });

  // if (emailExists) {
  //   return res.status(400).send({
  //     message: "bad request",
  //     errors: [
  //       {
  //         field: "email",
  //         message: "email already exitsts",
  //       },
  //     ],
  //   });
  // }

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
  const signupValidationSchema = Joi.object({
    password: Joi.string().required().min(8),
    email: Joi.string()
      .required()
      .email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } }),
  });

  let validate = signupValidationSchema.validate(req.body, { abortEarly: false, allowUnknown: true });

  if (validate.error?.details) {
    let errors = validate.error.details.map((el) => ({
      field: el.context.key,
      message: el.message,
    }));

    return res.status(400).send({
      errors: errors,
      message: "bad request",
    });
  }

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
      totken:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWUsImlhdCI6MTUxNjIzOTAyMn0.KMUFsIDTnFmyG3nMiGM6H9FNFUROf3wh7SmqJp-QV30"
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
