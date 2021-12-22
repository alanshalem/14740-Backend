const Config = {
  db: {
    name: "my_database",
    collection: "productos",
    cnxStr: "mongodb://localhost:27017/",
    projection: {
      // * Para no mostrar este valor
      // * https://mongoosejs.com/docs/guide.html#versionKey
      __v: 0,
    },
  },
};

export default Config;
