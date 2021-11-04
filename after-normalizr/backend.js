const normalizr = require('normalizr');

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

// #region Implementation

const messages = [];
let idMessage = 0;

const postMessage = (message) => {
  // ! Guardar en la DB
  messages.push(
    {
      id: idMessage += 1,
      ...message,
    },
  );
};

const messagesData = {
  id: 1,
  messages: [],
};

const getMessages = () => {
  // ! Leer la DB
  messagesData.messages = messages;

  return normalizr.normalize(
    messagesData,
    messagesSchema,
  );
};

// #endregion

module.exports = {
  postMessage,
  getMessages,
};
