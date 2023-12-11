import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/github"

const handler =  NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID!,
      clientSecret: process.env.GOOGLE_SECRET!,
    }),
  ],
})

export { handler as GET, handler as POST };

// export const getAuthSession = () => getServerSession(authOptions);
// import { NextAuthOptions, User, getServerSession } from "next-auth";
// import GoogleProvider from "next-auth/providers/google";


// export const authOptions: NextAuthOptions = {
//   session: {
//     strategy: "jwt",
//   },
//   providers: [
//     GoogleProvider({
//       // clientId: process.env.GOOGLE_ID as string,
//       // clientSecret: process.env.GOOGLE_SECRET as string,
//       clientId: process.env.GOOGLE_ID!,
//       clientSecret: process.env.GOOGLE_SECRET!,
//     }),
//   ],
// };

// export const getAuthSession = () => getServerSession(authOptions);



























// import { NextAuthOptions, Session } from "next-auth";
// import GoogleProvider from "next-auth/providers/google";

// interface CustomSession extends Session {
//   accessToken?: string;
// }

// export const authOptions: NextAuthOptions = {
//   providers: [
//     GoogleProvider({
//       clientId: process.env.GOOGLE_CLIENT_ID!,
//       clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
//     }),
//   ],
//   secret: process.env.NEXTAUTH_SECRET,
//   callbacks: {
//     async jwt({ token, account }: { token: any; account: any }) {
//       // Persist the OAuth access_token to the token right after signin
//       if (account) {
//         (token as CustomSession).accessToken = account.access_token;
//       }
//       return token;
//     },
//     async session({ session, token }: { session: CustomSession; token: any }) {
//       // Send properties to the client, like an access_token from a provider.
//       (session as CustomSession).accessToken = (token as CustomSession).accessToken;
//       return session;
//     },
//   },
//   debug: false,
//   jwt: {
//     maxAge: 3 * 24 * 60 * 60,
//   },
// };

  