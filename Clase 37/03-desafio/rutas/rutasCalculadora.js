const express = require('express');
const controladorCalculadora = require('../controlador/controladorCalculadora');

const router = express.Router();

router.get(
  '/suma',
  controladorCalculadora.getSuma,
);

router.get(
  '/resta',
  controladorCalculadora.getResta,
);

router.get(
  '/multiplicacion',
  controladorCalculadora.getMultiplicacion,
);

router.get(
  '/division',
  controladorCalculadora.getDivision,
);

module.exports = router;
