import mongoose from "mongoose";
interface DBInterface {
  connect: () => void;
}
let dbCache: Record<string, DB> = {};

export const getInstance = (uri: string, dbName: string) => {
  if (!dbCache[uri]) {
    dbCache[uri] = new DB(uri, dbName);
    dbCache[uri].connect();
  }
  return dbCache[uri];
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
    this.db.on("error", console.error.bind(console, "connection error:"));
    this.db.once("open", function () {
      console.log();
    });
  }
}
