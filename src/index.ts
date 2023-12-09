import dotenv from "dotenv";
import { getInstance } from "./db";
import { addBlogItem } from "./models/blog";
import { insertPerson, getPersonByName } from "./models/person";
dotenv.config();
console.log(process.env.DB_URI);
async function run() {
  const db = getInstance(process.env.DB_URI || "", "sample_mflix");
  // console.log(db);
  // const res = await addBlogItem({
  //   title: "heal the world",
  //   author: "nanan",
  //   body: "lalalala",
  //   comments: [],
  //   meta: {},
  // });
  // await insertPerson({
  //   name: "nina",
  //   age: 18,
  // });
  console.log(await getPersonByName("nina"));
  // console.log(res);
}
run().catch();
