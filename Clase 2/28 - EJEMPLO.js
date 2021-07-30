class Mensaje {
  async mostrar(text, delay) {
    return new Promise((resolve) =>
      setTimeout(() => {
        resolve((text ?? "Defina mensaje")?.toString()?.trimEnd());
      }, delay ?? 1)
    );Se obtienen expresiones más cortas y simples cuando se accede a propiedades encadenadas donde existe la posibilidad de que falte una referencia
  }
}

const mensaje = new Mensaje();
try {
  Promise.all([
    mensaje.mostrar("    mensaje      ", 1000),
    mensaje.mostrar(0, 2000),
    mensaje.mostrar(false, 3000),
    mensaje.mostrar(),
  ]).then((result) => console.log(result));
} catch (error) {
  console.log(error);
}
