import { NextResponse } from "next/server";
import { connectDB } from "@/utils/connectDB";
import { Post } from "@/models/Post";



export const GET = async (request) => {
    await connectDB();
    const posts = await Post.find();
    return NextResponse.json(posts);
  } catch (error) {
    console.log(error);
    throw new Error("Failed to fetch posts!");
  }
};
