import { Blog } from "../schema";
import { BlogObject } from "../interfaces/mongoose.gen";
// import { UserDocument, UserModel, UserSchema, UserObject } from "../interfaces/mongoose.gen.ts";

export const addBlogItem = async (item: Omit<BlogObject, "_id">) => {
  const blog = new Blog(item);
  return await blog.save();
};
const updateBlog = async () => {};
