const mongoose = require('mongoose');

function conectarDB(url, callback) {
  mongoose.connect(
    url,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
    (error) => {
      if (!error && callback != null) {
        return callback(error);
      }

      throw error;
    },
  );
}

module.exports = {
  conectarDB,
};
