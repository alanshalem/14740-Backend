class Color {
  generateColor() {
    this.red = Math.random() * 255;
    this.green = Math.random() * 255;
    this.blue = Math.random() * 255;
  }

  getColor() {
    return {
      red: this.red,
      green: this.green,
      blue: this.blue,
    };
  }
}

const color = new Color();

let colorObject;
for (let index = 0; index < 5; index++) {
  console.log("--- NEW COLOR ---");

  color.generateColor();

  colorObject = color.getColor();
  Object.keys(colorObject).forEach((key) => {
    console.log(`${key}: ${colorObject[key]}`);
  });
}
