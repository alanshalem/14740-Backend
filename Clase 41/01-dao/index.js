import minimist from "minimist";
import ProductosDaoDB from "./dao/ProductosDAODB.js";

class ProductosApi {
  constructor() {
    this.productosDao = new ProductosDaoDB();
  }

  async agregar(prodParaAgregar) {
    const prodAgregado = await this.productosDao.add(prodParaAgregar);

    return prodAgregado;
  }

  async buscar(id) {
    let productos;

    if (id) {
      productos = await this.productosDao.getById(id);
    } else {
      productos = await this.productosDao.getAll();
    }

    return productos;
  }

  async borrar(id) {
    if (id) {
      await this.productosDao.deleteById(id);
    } else {
      await this.productosDao.deleteAll();
    }
  }

  async reemplazar(id, prodParaReemplazar) {
    const prodReemplazado = await this.productosDao.updateById(
      id,
      prodParaReemplazar
    );

    return prodReemplazado;
  }

  exit() {
    this.productosDao.exit();
  }
}

console.log("Instanciando la API");
const productosApi = new ProductosApi();

async function ejecutarCmds() {
  const argv = minimist(process.argv.slice(2));
  const { cmd, id, nombre, precio, stock } = argv;

  try {
    switch (cmd.toLowerCase()) {
      case "buscar":
        console.log(cmd);
        console.log(await productosApi.buscar(id));
        break;
      case "agregar":
        console.log(cmd);
        console.log(
          await productosApi.agregar({
            nombre,
            precio,
            stock,
          })
        );

        break;
      case "reemplazar":
        console.log(cmd);
        console.log(
          await productosApi.reemplazar(id, {
            nombre,
            precio,
            stock,
          })
        );

        break;
      case "borrar":
        console.log(cmd);
        await productosApi.borrar(id);

        break;
      default:
        console.log("comando no válido:", cmd);
    }
  } catch (error) {
    console.log(error);
  }

  productosApi.exit();
}

ejecutarCmds();
