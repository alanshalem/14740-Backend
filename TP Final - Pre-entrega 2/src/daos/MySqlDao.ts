import { IDao } from "../interfaces/daos/IDao";

export class MySqlDao implements IDao {
  constructor() {
    // TODO: Conectarse a la base
  }

  insertProducto(producto: string): void {
    console.log(`Insertando ${producto} en MySQL`);
  }
}
