import { betterAuth } from "better-auth";
import { nextCookies } from "better-auth/next-js";
import { mongodbAdapter } from "better-auth/adapters/mongodb";
import { getClient } from "@/db/mongoose";

const client = await getClient();
export const auth = betterAuth({
  database: mongodbAdapter(client),
  emailAndPassword: {
    enabled: true,
  },
  plugins: [nextCookies()],
});
