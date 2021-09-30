import mongoose from "mongoose";

(async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://..."
    );

    console.log("Base de datos conectada");
  } catch (error) {
    console.log(error);
  } finally {
    await mongoose.disconnect();
    console.log("Base de datos desconectada");
  }
})();
