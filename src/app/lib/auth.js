import { betterAuth } from "better-auth";
import { mongodbAdapter } from "better-auth/adapters/mongodb";
import { MongoClient } from "mongodb";

const client = new MongoClient(process.env.MONGODB_URI);
const db = client.db("ProCoderBd");

export const auth = betterAuth({
  database: mongodbAdapter(db),
  baseURL: process.env.BETTER_AUTH_URL,
  emailAndPassword: {
    enabled: true,
  },
  socialProviders: {
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    },
  },
  session:{
    expiresIn: 60*60*24*7,

  },
  trustedOrigins:[process.env.BETTER_AUTH_URL],
  advanced:{
    useSecureCookies:process.env.NODE_ENV ==="production",
    defaultCookieAttributes:{
      sameSite:"lax",
      httpOnly: true,
    },
  },
}); 