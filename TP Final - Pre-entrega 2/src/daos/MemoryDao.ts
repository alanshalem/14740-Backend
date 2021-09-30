import { IDao } from "../interfaces/daos/IDao";

export class MemoryDao implements IDao {
  carrito: Array<string>;

  constructor() {
    this.carrito = new Array<string>();
  }

  insertProducto(producto: string): void {
    console.log(`Insertando ${producto} en Memory`);
    this.carrito.push(producto);
  }
}
