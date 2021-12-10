const personas = require("../models/personas");

// #region [controllers]

const getPersonas = async (_request, response) =>
  response.render("personas", { personas: await personas.get() });

const postPersonas = async (request, response) => {
  await personas.set(request.body);

  return response.render("personas", { personas: await personas.get() });
};

const getPersonasData = async (_request, response) =>
  response.sendFile(`${process.cwd()}/views/personas-data-onwire.html`);

const postPersonasData = async (request, response) => {
  await personas.set(request.body);

  return response.json({ personas: await personas.get() });
};

const getPersonasJson = async (_request, response) =>
  response.status(200).json({ personas: await personas.get() });

// #endregion

module.exports = {
  getPersonas,
  postPersonas,
  getPersonasData,
  postPersonasData,
  getPersonasJson,
};
