const formatFecha = (fecha) =>
  `${fecha.getDate()} ${fecha.getMonth() + 1} ${fecha.getFullYear()}`;

const escribirArchivo = (rutas, datos, callback) => {
  console.log(rutas);
  console.log(datos);

  const fechaString = formatFecha(new Date());
  callback(fechaString, "Grabación correcta");
};

const loguear = (fecha, mensaje) => console.log(`${fecha}: ${mensaje}`);
escribirArchivo("./path", "Datos de prueba", loguear);

escribirArchivo("./path", "Datos de prueba2", (fecha, mensaje) =>
  console.log(`${fecha}: ${mensaje}`)
);
