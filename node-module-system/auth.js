const bcrypt = require("bcrypt");

const signup = (email, password) => {
  //  validation: email and pasword
  //  email already exists ?
  //  hash passwod
  //  store in database
  //  send respnose
  bcrypt.hash(password, 12, function (err, hash) {
    // Store hash in your password DB.
    console.log(hash);
    console.log(`signed up for ${email}, ${password}`);
  });
};

const login = (email, password) => {
  //  validation: email and pasword
  //  email matched ?
  //  password matched ?
  //  send token
  //  send respnose
  console.log(`login up for ${email}, ${password}`);
};

// module.exports = signup; // default export: when we need to export only one objcect from a file // in common js
// export default signup  // in es module systnax



//  named export
module.exports = {
  signup: signup,
  login,
};


/* 
    export const signup 
    export const login
*/