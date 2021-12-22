import { Db, MongoClient } from "mongodb";
import minimist from "minimist";

import HeroRepository from "./repositories/HeroRepository";
import Hero from "./entities/Hero";
import SpartanRepository from "./repositories/SpartanRepository";
import Spartan from "./entities/Spartan";

// #region [minimist]

async function ejecutarCmds() {
  try {
    // #region [conexion db]

    console.log("Contectando a la Base de datos...");

    const connection: MongoClient = await MongoClient.connect(
      "mongodb://localhost",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );

    const db = connection.db("warriors");

    console.log("Base de datos conectada");

    // #endregion

    const argv: minimist.ParsedArgs = minimist(process.argv.slice(2));
    let { tipo, cmd }: minimist.ParsedArgs = argv;
    const { id, nombre, valor }: minimist.ParsedArgs = argv;

    tipo = tipo ? tipo.toLowerCase() : "";
    cmd = cmd ? cmd.toLowerCase() : "";

    if (tipo === "spartan") {
      console.log("Instanciando el Repository spartans");

      let resultSpartan: boolean;
      let spartan: Spartan;
      let count: number;
      const repositorySpartan: SpartanRepository = new SpartanRepository(
        db,
        "spartans"
      );

      switch (cmd) {
        case "buscar":
          if (id) {
            console.log(await repositorySpartan.findOne(id));

            break;
          }

          console.log(await repositorySpartan.find());

          break;
        case "agregar":
          spartan = new Spartan(nombre, valor);

          resultSpartan = await repositorySpartan.create(spartan);

          console.log(
            `spartan inserted with ${resultSpartan ? "success" : "fail"}`
          );

          break;
        case "reemplazar":
          resultSpartan = await repositorySpartan.update(
            id,
            new Spartan(nombre, valor)
          );

          console.log(
            `spartan updated with ${resultSpartan ? "success" : "fail"}`
          );

          break;
        case "borrar":
          resultSpartan = await repositorySpartan.delete(id);

          console.log(
            `spartan deleted with ${resultSpartan ? "success" : "fail"}`
          );

          break;
        case "count":
          count = await repositorySpartan.countOfSpartans();

          console.log(`the count of spartans is ${count}`);

          break;
        default:
          console.log("comando no válido:", cmd);
      }

      return;
    }

    if (tipo === "hero") {
      console.log("Instanciando el Repository heros");

      let resultHero: boolean;
      let hero: Hero;
      let count: number;
      const heroRepository: HeroRepository = new HeroRepository(db, "heroes");

      switch (cmd) {
        case "buscar":
          console.log(`${cmd} no implementado para ${tipo}`);

          break;
        case "agregar":
          hero = new Hero(nombre, valor);
          resultHero = await heroRepository.create(hero);

          console.log(`hero inserted with ${resultHero ? "success" : "fail"}`);

          break;
        case "reemplazar":
          console.log(`${cmd} no implementado para ${tipo}`);

          break;
        case "borrar":
          console.log(`${cmd} no implementado para ${tipo}`);

          break;
        case "count":
          count = await heroRepository.countOfHeros();

          console.log(`the count of heros is ${count}`);

          break;
        default:
          console.log("comando no válido:", cmd);
      }

      return;
    }

    console.log("tipo no válido:", tipo);

    await connection.close();

    console.log("Base de datos desconectada");
  } catch (error) {
    console.log(error);
  }
}

// ! ejecutarCmds();

// #endregion

// #region [app]

(async () => {
  // #region [conexion db]

  const connection: MongoClient = await MongoClient.connect(
    "mongodb://localhost",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  );
  
  const db: Db = connection.db("warriors");

  // #endregion

  // #region Spartans
  const spartanRepository: SpartanRepository = new SpartanRepository(
    db,
    "spartans"
  );

  const spartan: Spartan = new Spartan("Leonidas", 1020);

  let result: boolean = await spartanRepository.create(spartan);
  console.log(`spartan inserted with ${result ? "success" : "fail"}`);

  const spartans: Spartan[] = await spartanRepository.find();
  console.log("Los spartans son:", spartans);

  const count: number = await spartanRepository.countOfSpartans();
  console.log(`the count of spartans is ${count}`);

  result = await spartanRepository.update(
    "61b7821337423c0926405b62",
    new Spartan("Leonidas", 777)
  );

  console.log(`spartan updated with ${result ? "success" : "fail"}`);

  result = await spartanRepository.delete("61b7821337423c0926405b62");
  console.log(`spartan deleted with ${result ? "success" : "fail"}`);

  // #endregion

  // #region [Heroes]

  const heroRepository: HeroRepository = new HeroRepository(db, "heroes");
  const hero: Hero = new Hero("Spider Man", 200);
  const resultHero: boolean = await heroRepository.create(hero);

  console.log(`hero inserted with ${resultHero ? "success" : "fail"}`);

  // #endregion

  await connection.close();
})();

// #endregion
