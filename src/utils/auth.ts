// import { NextAuthOptions } from "next-auth";
// import GoogleProvider from "next-auth/providers/google";

// export const authOptions: NextAuthOptions = {
//   providers: [
//     GoogleProvider({
//       clientId: process.env.GOOGLE_ID as string,
//       clientSecret: process.env.GOOGLE_SECRET as string,
//       httpOptions: {
//         timeout: 400000,
//       },
//     }),
//   ],
//   callbacks: {
//     async signIn(data) {
//       console.log("REACHED", data);
//       return true;
//     },
//   },
//   debug: true,
//   session: {
//     maxAge: 3 * 24 * 60 * 60,
//   },
//   jwt: {
//     maxAge: 3 * 24 * 60 * 60,
//   },
// };


import { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export const authOptions: NextAuthOptions = {
  debug: true,
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID as string,
      clientSecret: process.env.GOOGLE_SECRET as string,
      httpOptions: {
        timeout: 400000,
      },
    }),
  ],
  callbacks: {
    async signIn({ profile, account, user: authUser, credentials, email }) {
      try {
        console.log("REACHED!!!");
        return true;
      } catch (error) {
        console.error("SIGN_IN ERROR", { error });
        return false;
      }
    },
    jwt: async ({ token, user, account, profile, session, trigger }) => {
      if (!token || !token.email || !token.id) return token;
      try {
        console.log("TOKEN", token);
        return token;
      } catch (error) {
        console.error(error);
        return token;
      }
    },
    async session({ session, token, user, newSession, trigger }) {
      console.log("SESSION", session);
      return session;
    },
  },
  events: {
    async signOut({ token, session }) {
      console.log("SIGNING_OUT!");
      return;
    },
  },
  session: {
    maxAge: 24 * 60 * 60, // Set the session max age to 24 hours
  },
};

