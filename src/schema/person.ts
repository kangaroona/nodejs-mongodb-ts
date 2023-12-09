import { Schema, model } from "mongoose";
import {
  PersonDocument,
  PersonModel,
  PersonSchema,
} from "../interfaces/mongoose.gen";
const personSchema: PersonSchema = new Schema({
  age: Number,
  name: String,
  weight: Number,
});

export const Person: PersonModel = model<PersonDocument, PersonModel>(
  "Person",
  personSchema
);
