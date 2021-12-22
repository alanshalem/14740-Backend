import BaseRepository from "./base/BaseRepository";
import Hero from "../entities/Hero";

export default class HeroRepository extends BaseRepository<Hero> {
  countOfHeros(): Promise<number> {
    return this.collection.countDocuments({});
  }
}
