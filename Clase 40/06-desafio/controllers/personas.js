// const personas = require("../models/personas");
const dao = require("../models/factory");

// #region [controllers]

const getPersonas = async (_request, response) =>
  response.render("personas", { personas: await dao.get() });

const postPersonas = async (request, response) => {
  await dao.set(request.body);

  return response.render("personas", { personas: await dao.get() });
};

const getPersonasData = async (_request, response) =>
  response.sendFile(`${process.cwd()}/views/personas-data-onwire.html`);

const postPersonasData = async (request, response) => {
  await dao.set(request.body);

  return response.json({ personas: await dao.get() });
};

const getPersonasJson = async (_request, response) =>
  response.status(200).json({ personas: await dao.get() });

// #endregion

module.exports = {
  getPersonas,
  postPersonas,
  getPersonasData,
  postPersonasData,
  getPersonasJson,
};
