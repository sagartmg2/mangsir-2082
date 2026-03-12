const jwt = require("jsonwebtoken");

const checkAuthentication = (req, res, next) => {
  let loggedIn = false;

  let token = req.headers.authorization?.replace("Bearer ", "");

  if (token) {
    try {
      let decoded = jwt.verify(token, process.env.JWT_SECRET);
      loggedIn = true;
    } catch (err) {
      
    }
  }

  if (!loggedIn) {
    return res.status(401).send({
      message: "not Authenticated",
    });
  }

  next();
};

module.exports = checkAuthentication;
