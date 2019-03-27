const { Router } = require("express");
const routes = Router();

const SessionController = require("./app/controllers/SessionController");

routes.post("/sessions", SessionController.store);

// auth middleware
routes.use(require("./app/middlewares/auth"));

routes.get("/dashboard", (req, res) => {
  return res.status(200).send();
});

module.exports = routes;
