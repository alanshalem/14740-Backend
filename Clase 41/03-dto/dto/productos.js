const productoConInfo = (producto) => ({
  fyh: new Date().toLocaleString(),
  pid: process.pid,
  producto: producto.nombre.toUpperCase(),
  precioEnPesos: producto.precio,
  precioEnUSD: producto.precio / 157,
});

module.exports = {
  productoConInfo,
};
