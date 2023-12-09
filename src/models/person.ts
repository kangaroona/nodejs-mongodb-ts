import { PersonObject } from "./../interfaces/mongoose.gen";
import { Person } from "../schema/person";
export const insertPerson = async (person: Omit<PersonObject, "_id">) => {
  const personIns = new Person(person);
  return await personIns.save();
};
export const getPersonByName = async (name: string) => {
  return await Person.findOne({ name: name }).exec();
};
// getPersonByName("nina");
