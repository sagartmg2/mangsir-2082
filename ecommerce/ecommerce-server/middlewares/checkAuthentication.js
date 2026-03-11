const checkAuthentication = (req, res, next) => {
  let loggedIn = true;

  //   let token = req.headers.Authorization;

  if (!loggedIn) {
    return res.status(401).send({
      message: "not Authenticated",
    });
  }

  next();
};

module.exports = checkAuthentication;
