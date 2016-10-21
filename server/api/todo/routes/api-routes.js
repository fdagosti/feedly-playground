"use strict";
const ctrlAuth = require("../controllers/authentication");

module.exports = class ApiRoutes {
  static init(router){
    router.route('/register').post(ctrAuth.register);
  }
}