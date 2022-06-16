const routes = require("next-routes")();
routes
  //.add("/user/ticket/", "/ticket")
  .add("/ticket", "/user/ticket")

module.exports = routes;
