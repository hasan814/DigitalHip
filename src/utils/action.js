"use server";

import { signIn, signOut } from "./auth";
import { revalidatePath } from "next/cache";
import { connectDB } from "./connectDB";
import { Post } from "@/models/Post";
import { User } from "@/models/User";
import { genSalt, hash } from "bcrypt";

export const addPost = async (formData) => {
  const { title, desc, slug, userId } = Object.fromEntries(formData);

  try {
    await connectDB();
    const newPost = new Post({
      title,
      desc,
      slug,
      userId,
    });
    await newPost.save();
    console.log("Saved to DB");
    revalidatePath("/blog");
  } catch (error) {
    console.log(error);
    return { error: "Something went wrong!" };
  }
};

export const deletePost = async (formData) => {
  const { id } = Object.fromEntries(formData);

  try {
    await connectDB();
    await Post.findByIdAndDelete(id);
    console.log("Delete From DB");
    revalidatePath("/blog");
  } catch (error) {
    console.log(error);
    return { error: "Something went wrong!" };
  }
};

export const handlerGithubLogin = async () => {
  "use server";
  await signIn("github");
};

export const handleLogout = async () => {
  "use server";
  await signOut();
};

export const register = async (formData) => {
  const { username, password, email, img, passwordRepeat } =
    Object.fromEntries(formData);
  console.log(formData);
  if (password !== passwordRepeat) return "Passwords do not match";

  try {
    await connectDB();
    const user = await User.findOne({ username });
    if (user) return "Username already exist";

    const salt = await genSalt();
    const hashedPassword = await hash(password, salt);

    const newUser = new User({
      username,
      email,
      password,
      img,
    });

    await newUser.save();
    console.log("Saved to DB");
  } catch (error) {
    console.log(error);
    return { error: "Something went wrong!" };
  }
};
