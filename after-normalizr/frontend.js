const normalizr = require('normalizr');
const util = require('util');
const backend = require('./backend');

// #region Actions

const message = {
  author: {
    email: 'hola@gmail.com', // ! email es Id
    nombre: 'nombre del usuario',
    apellido: 'apellido del usuario',
    edad: 'edad del usuario',
    alias: 'alias del usuario',
    avatar: 'url avatar (foto, logo) del usuario',
  },
  text: 'mensaje del usuario',
};

for (let index = 0; index < 5; index += 1) {
  backend.postMessage(message);
}

const backendData = backend.getMessages();

// #endregion

// #region Schema

const authorSchema = new normalizr.schema.Entity(
  'author',
  undefined,
  {
    idAttribute: 'email',
  },
);

const messageSchema = new normalizr.schema.Entity(
  'message',
  {
    author: authorSchema,
  },
);

const messagesSchema = new normalizr.schema.Entity(
  'messages',
  {
    messages: [messageSchema],
  },
);

// #endregion

console.log('Informacion NORMALIZADA ---------------');
const inspectNormalizedData = util.inspect(
  backendData,
  false,
  12,
  true,
);
console.log(inspectNormalizedData);
console.log('---------------');

console.log('Informacion DESNORMALIZADA ---------------');
const denormalizedData = normalizr.denormalize(
  backendData.result,
  messagesSchema,
  backendData.entities,
);
const inspecteDenormalizedData = util.inspect(
  denormalizedData,
  false,
  12,
  true,
);
console.log(inspecteDenormalizedData);
console.log('---------------');
