import { unstable_noStore as noStore } from "next/cache";
import { connectDB } from "./connectDB";
import { Post } from "@/models/Post";
import { User } from "@/models/User";

// ========= Temporary Data ============
// const users = [
//   { id: 1, name: "Hasan" },
//   { id: 2, name: "Mohsen" },
// ];

// const posts = [
//   { id: 1, title: "Post 1", body: "...", userId: 1 },
//   { id: 2, title: "Post 2", body: "...", userId: 2 },
// ];

export const getPosts = async () => {
  try {
    await connectDB();
    const posts = await Post.find();
    return posts;
  } catch (error) {
    throw new Error("Failed to Fetch posts");
  }
};

export const getPost = async (slug) => {
  try {
    await connectDB();
    const post = await Post.findOne({ slug });
    return post;
  } catch (error) {
    throw new Error("Failed to Fetch post");
  }
};

export const getUser = async (id) => {
  noStore();
  try {
    await connectDB();
    const user = await User.findById(id);
    return user;
  } catch (error) {
    throw new Error("Failed to Fetch user");
  }
};
export const getUsers = async () => {
  try {
    await connectDB();
    const users = await User.find();
    return users;
  } catch (error) {
    throw new Error("Failed to Fetch users");
  }
};
