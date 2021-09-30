const firebaseAdmin = require("firebase-admin");

firebaseAdmin.initializeApp({
  credential: firebaseAdmin.credential.cert("./db/cert.json"),
  databaseURL: "https://...",
});

console.log("Base de datos conectada!");

// https://stackoverflow.com/questions/58950209/error-13-internal-an-internal-error-occurred-happened-in-firebase-functions
(async () => {
  const firestoreAdmin = firebaseAdmin.firestore();
  const collection = firestoreAdmin.collection("usuarios");

  try {
    console.log("CREATE");

    let id = 1;
    let doc = collection.doc(id.toString());
    await doc.create({ nombre: "Jose", dni: 11222333 });
    id++;
    doc = collection.doc(id.toString());
    await doc.create({ nombre: "Ana", dni: 22333444 });
    id++;
    doc = collection.doc(id.toString());
    await doc.create({ nombre: "Diego", dni: 33444555 });
    console.log("Datos insertados");

    console.log("READ ALL");
    const queryGet = await collection.get();
    const response = queryGet.docs.map((doc) => {
      const data = doc.data();

      return {
        id: doc.id,
        nombre: data.nombre,
        dni: data.dni,
      };
    });

    console.log(response);

    console.log("UPDATE");
    doc = await collection.doc("2").update({
      dni: 99888777,
    });
    
    console.log(doc);

    console.log("DELETE");
    doc = await collection.doc("1").delete();
    console.log(doc);
  } catch (error) {
    console.log(error);
  }
})();
