import BaseRepository from "./base/BaseRepository";
import Persona from "../entities/Persona";

export default class PersonaRepository extends BaseRepository<Persona> {
  countOfPersonas(): Promise<number> {
    return this.collection.countDocuments({});
  }
}
