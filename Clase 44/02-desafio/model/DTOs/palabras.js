const palabraDTO = (palabra, _id, timestamp) => ({
  ...palabra,
  _id,
  timestamp,
});

module.exports = palabraDTO;
