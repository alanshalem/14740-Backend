import { IDao } from "./src/interfaces/daos/IDao";
import { DaoFactory } from "./src/daoFactory";

//////////////////

const MEMORY: number = 1;
const MONGODB: number = 2;
const MYSQL: number = 3;

//////////////////

const OPCION = MYSQL;

//////////////////

const daoFactory = new DaoFactory();
const dao: IDao = daoFactory.getDao(OPCION);

dao.insertProducto("Guitarra");
