const getTime = () => {
  const fechaYHora = new Date().toLocaleString();
  const timestamp = Date.now();

  return {
    fechaYHora: fechaYHora,
    timestamp,
  };
};

module.exports = {
  getTime,
};
