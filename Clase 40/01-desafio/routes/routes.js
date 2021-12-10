const express = require("express");
const personasController = require("../controllers/personas");

// #region [router]

const router = express.Router();

router.get("/html-onwire", personasController.getPersonas);
router.post("/html-onwire", personasController.postPersonas);
router.get("/data-json", personasController.getPersonasJson);

// #endregion

module.exports = {
  router,
};
