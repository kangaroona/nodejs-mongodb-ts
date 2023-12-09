import { Schema, model } from "mongoose";
import {
  BlogSchema,
  BlogModel,
  BlogDocument,
} from "../interfaces/mongoose.gen";
const blogSchema: BlogSchema = new Schema({
  title: String,
  author: String,
  body: String,
  comments: [{ body: String, date: Date }],
  date: { type: Date, default: Date.now },
  hidden: Boolean,
  meta: {
    votes: Number,
    favs: Number,
  },
});
export const Blog: BlogModel = model<BlogDocument, BlogModel>(
  "Blog",
  blogSchema
);
