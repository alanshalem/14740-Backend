import firebaseAdmin from "firebase-admin";

firebaseAdmin.initializeApp({
  credential: firebaseAdmin.credential.cert("./db/cert.json"),
  databaseURL: "https://...",
});

console.log("Base de datos conectada!");

(async () => {
  const firestoreAdmin = firebaseAdmin.firestore();
  const collection = firestoreAdmin.collection("colores");

  try {
    console.log("CREATE");
    
    let id = 1;
    await collection.doc(`${id++}`).create({ nombre: "red" });
    await collection.doc(`${id++}`).create({ nombre: "green" });
    await collection.doc(`${id++}`).create({ nombre: "blue" });
    console.log("Datos insertados");

    console.log("READ ALL");
    const queryGet = await collection.get();
    const response = queryGet.docs.map((doc) => {
      const data = doc.data();

      return {
        id: doc.id,
        nombre: data.nombre,
      };
    });

    console.log(response);

    console.log("UPDATE");
    let doc = await collection.doc("3").update({ nombre: "navy" });
    console.log(doc);
    // const query = await collection.where("nombre", "==", "cac2").get();
    // query.docs[0].ref.update({ nombre: "red" });
    
    console.log("DELETE");
    doc = await collection.doc("2").delete();
    console.log(doc);
  } catch (error) {
    console.log(error);
  }
})();
