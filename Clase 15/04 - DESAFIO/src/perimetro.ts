export class Perimetro {
  calcularPerimetroCuadrado(lado: number): number {
    return lado * 4;
  }

  calcularPerimetroRectangulo(base: number, altura: number): number {
    return (base + altura) * 2;
  }

  calcularPerimetroCirculo(radio: number): number {
    return 2 * Math.PI * radio;
  }
}
