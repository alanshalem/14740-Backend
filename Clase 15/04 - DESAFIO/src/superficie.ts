export class Superficie {
  calcularSuperficieCuadrado(lado: number): number {
    return lado ** 2;
  }

  calcularSuperficieRectangulo(ancho: number, largo: number): number {
    return ancho * largo;
  }

  calcularSuperficieCirculo(radio: number): number {
    return Math.PI * radio ** 2;
  }
}
