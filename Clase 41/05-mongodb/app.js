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

    const database = client.db("sample_mflix");
    const movies = database.collection("movies");

    const query = {
      title: "Back to the future",
    };

    const movie = await movies.findOne(query);

    console.log(movie);
  } finally {
    await client.close();
  }
};

run().catch(console.dir);
