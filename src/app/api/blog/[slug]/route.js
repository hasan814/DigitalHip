import { NextResponse } from "next/server";
import { connectDB } from "@/utils/connectDB";
import { Post } from "@/models/Post";

export const DELETE = async ({ params }) => {
  const { slug } = params;
  try {
    await connectDB();
    await Post.deleteOne({ slug });
    return NextResponse.json("post deleted");
  } catch (error) {
    console.log(error);
    throw new Error("Failed to delete posts!");
  }
};

// export const GET = async ({ params }) => {
//   const { slug } = params;
//   try {
//     await connectDB();
//     const post = await Post.findOne({ slug });
//     return NextResponse.json(post);
//   } catch (error) {
//     console.log(error);
//     throw new Error("Failed to fetch posts!");
//   }
// };
