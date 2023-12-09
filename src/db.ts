import mongoose from "mongoose";
interface DBInterface {
  connect: () => void;
}
let dbCache: Record<string, DB> = {};

export const getInstance = (uri: string, dbName: string) => {
  if (!dbCache[dbName]) {
    dbCache[dbName] = new DB(uri, dbName);
    dbCache[dbName].connect();
  }
  return dbCache[dbName];
};
export class DB implements DBInterface {
  uri: string;
  dbName: string;
  db: mongoose.Connection | null;

  constructor(uri: string, dbName: string) {
    this.uri = uri;
    this.db = null;
    this.dbName = dbName;
    this.#init();
  }
  connect() {
    mongoose.connect(this.uri, { dbName: this.dbName });
  }
  #init() {
    this.db = mongoose.connection;
    console.log(this.db);
    this.db?.on("error", console.error.bind(console, "connection error:"));
    this.db?.once("open", function () {
      console.log("succ");
    });
  }
  getDB() {
    return this.db;
  }
}
