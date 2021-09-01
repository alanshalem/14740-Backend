class Paint {
  constructor() {
    this.rectangleMap = new Array(1280);
    this.initMap();
  }

  initMap() {
    for (let index = 0; this.rectangleMap.length < 1280; index++) {
      this.rectangleMap[index] = new Array(1280);
    }
  }

  mapToArray() {
    const array = [];
    for (let index1 = 0; index1 < this.rectangleMap.length; index1++) {
      for (let index2 = 0; index2 < this.rectangleMap[index1].length; index2++) {
        const value = this.rectangleMap[index1][index2];
        if (value != null) {
          array.push(value);
        }
      }
    }

    return array;
  }

  Shape(x, y, ancho, alto, red, green, blue) {
    return {
      x: x,
      y: y,
      w: ancho,
      h: alto,
      r: red,
      g: green,
      b: blue,
    };
  }
}

module.exports = new Paint();
