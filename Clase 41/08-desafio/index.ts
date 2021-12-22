import { MongoClient } from "mongodb";
import minimist from "minimist";
import PersonaRepository from "./repositories/PersonaRepository";
import Persona from "./entities/Persona";

async function ejecutarCmds() {
  try {
    console.log("Contectando a la Base de datos...");

    const connection: MongoClient = await MongoClient.connect(
      "mongodb://localhost",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );

    const personaRepository: PersonaRepository = new PersonaRepository(
      connection.db("datos"),
      "personas"
    );

    console.log("Base de datos conectada");

    const argv: minimist.ParsedArgs = minimist(process.argv.slice(2));
    let { cmd }: minimist.ParsedArgs = argv;
    const { id, nombre, apellido, DNI }: minimist.ParsedArgs = argv;

    cmd = cmd ? cmd.toLowerCase() : "";
    console.log("Instanciando el Repository personas");

    let resultPersona: boolean;
    let count: number;
    let persona: Persona;

    switch (cmd) {
      case "buscar":
        if (id) {
          console.log(await personaRepository.findOne(id));

          break;
        }

        console.log(await personaRepository.find());

        break;
      case "agregar":
        persona = new Persona(nombre, apellido, DNI);

        resultPersona = await personaRepository.create(persona);

        console.log(
          `Persona inserted with ${resultPersona ? "success" : "fail"}`
        );

        break;
      case "reemplazar":
        resultPersona = await personaRepository.update(
          id,
          new Persona(nombre, apellido, DNI)
        );

        console.log(
          `Persona updated with ${resultPersona ? "success" : "fail"}`
        );

        break;
      case "borrar":
        resultPersona = await personaRepository.delete(id);

        console.log(
          `Persona deleted with ${resultPersona ? "success" : "fail"}`
        );

        break;
      case "count":
        count = await personaRepository.countOfPersonas();

        console.log(`the count of Personas is ${count}`);

        break;
      default:
        console.log("comando no válido:", cmd);
    }

    await connection.close();

    console.log("Base de datos desconectada");
  } catch (error) {
    console.log(error);
  }
}

ejecutarCmds();
