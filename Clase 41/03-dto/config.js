const Config = {
  db: {
    name: "my_database",
    collection: "productos",
    cnxStr: "mongodb://localhost/",
    projection: {
      __v: 0,
    },
  },
};

module.exports = Config;
