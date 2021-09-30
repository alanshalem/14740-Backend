import { MemoryDao } from "./daos/MemoryDao";
import { MongoDbDao } from "./daos/MongoDbDao";
import { MySqlDao } from "./daos/MySqlDao";
import { IDao } from "./interfaces/daos/IDao";

export class DaoFactory {
  getDao(opcion: number): IDao {
    switch (opcion) {
      case 1:
        return new MemoryDao();
      case 2:
        return new MongoDbDao();
      case 3:
        return new MySqlDao();
      default:
        throw new Error("DAO no encontrado");
    }
  }
}
