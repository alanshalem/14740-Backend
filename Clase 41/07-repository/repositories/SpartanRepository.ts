import BaseRepository from "./base/BaseRepository";
import Spartan from "../entities/Spartan";

export default class SpartanRepository extends BaseRepository<Spartan> {
  countOfSpartans(): Promise<number> {
    return this.collection.countDocuments({});
  }
}
