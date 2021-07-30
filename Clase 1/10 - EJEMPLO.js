var nombre = "Tom";
const rouco = {
  nombre: "Rouco",
  especie: "gato",
  saludar() {
    console.log(`Miauuuuu (Hola me llamo ${this.nombre})`);
    console.log(this === rouco);
  },
};

rouco.saludar();

let saludar = rouco.saludar;
saludar();
