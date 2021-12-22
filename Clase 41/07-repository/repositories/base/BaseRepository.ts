import {
  Db,
  Collection,
  InsertOneWriteOpResult,
  WithId,
  DeleteWriteOpResultObject,
  UpdateWriteOpResult,
  ObjectId,
} from "mongodb";

import IWrite from "../interfaces/IWrite";
import IRead from "../interfaces/IRead";

export default abstract class BaseRepository<T> implements IWrite<T>, IRead<T> {
  public readonly collection: Collection;

  constructor(db: Db, collectionName: string) {
    this.collection = db.collection(collectionName);
  }

  async create(item: T): Promise<boolean> {
    const result: InsertOneWriteOpResult<WithId<T>> =
      await this.collection.insertOne(item);

    return !!result.result.ok;
  }

  async update(id: string, item: T): Promise<boolean> {
    const result: UpdateWriteOpResult = await this.collection.updateOne(
      {
        _id: new ObjectId(id),
      },
      {
        $set: item,
      }
    );

    return !!result.modifiedCount;
  }

  async delete(id: string): Promise<boolean> {
    const result: DeleteWriteOpResultObject = await this.collection.deleteOne({
      _id: new ObjectId(id),
    });

    return !!result.deletedCount;
  }

  async find(): Promise<T[]> {
    return this.collection.find({}).toArray();
  }

  async findOne(id: string): Promise<T> {
    return this.collection.findOne({
      _id: new ObjectId(id),
    });
  }
}
