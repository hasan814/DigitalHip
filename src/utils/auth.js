import { connectDB } from "./connectDB";
import { compare } from "bcryptjs";
import { User } from "@/models/User";

import CredentialsProvider from "next-auth/providers/credentials";
import credentials from "next-auth/providers/credentials";
import GitHub from "next-auth/providers/github";
import NextAuth from "next-auth";

const login = async () => {
  try {
    await connectDB();

    const user = await User.findOne({ username: credentials.username });
    if (!user) throw new Error("Wrong credentials");

    const isPasswordCorrect = await compare(
      credentials.password,
      user.password
    );
    if (!isPasswordCorrect) throw new Error("Wrong Credentials");

    return user;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to login");
  }
};

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
  providers: [
    GitHub({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    CredentialsProvider({
      async authorize(credentials) {
        try {
          const user = await login(credentials);
        } catch (error) {
          return null;
        }
      },
    }),
  ],
  callbacks: {
    async signIn({ user, account, profile }) {
      console.log(user, account, profile);
      if (account.provider === "github") {
        connectDB();
        try {
          const user = await User.findOne({ email: profile.email });
          if (!user) {
            const newUser = new User({
              username: profile.login,
              email: profile.email,
              image: profile.avatar_url,
            });
            await newUser.save();
          }
        } catch (error) {
          console.log(error);
          return false;
        }
      }
      return true;
    },
  },
});
