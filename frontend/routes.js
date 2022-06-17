const routes = require("next-routes")();
routes
  //.add("/user/ticket/", "/ticket")
  .add("user/ticket", "/user/ticket")

module.exports = routes;
