import { blogSchema } from "../schema";
import { model } from "mongoose";
const Blog = model("Blog", blogSchema);
export const addBlogItem = async (item: any) => {
  const blog = new Blog(item);
  await blog.save();
};
const updateBlog = async () => {};
