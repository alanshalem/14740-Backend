const { MongoClient } = require("mongodb");

const uri =
  "mongodb://localhost:27017/?readPreference=primary&appname=mongodb-vscode%200.7.0&ssl=false";

const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const run = async () => {
  try {
    await client.connect();

    client.db("datos");
  } finally {
    await client.close();
  }
};

run().catch(console.dir);
