console.log("node - module system");

// common js module
const http = require("http");
const path = require("path");
const fs = require("fs");

/*  

    es module
    
    import http from "http"
    import path from "path"
    import fs from "fs"

*/

fs.writeFileSync("logfile.txt", "this is my logs");

// const register = require("./auth");  // in case of default export and import

const auth = require("./auth");
const { login, signup } = require("./auth");

/* 
    es module sytanx

    import auth from "./auth"
    import {login,signup} from "./auth"
*/

/* 
    global objects
        - console
        - setTimeout
        - setInterval
        - require
        - module


    global modules
        - fs
        - http // replaced by express
        - path
        - process
    
    local modules
        

    thrid-party modules
        - bcrypt // npm install bcrypt

*/

auth.signup("ram@gmail.com", "2342423"); //@#$^#asdfasdfadsfasdf42352345!@#$34
