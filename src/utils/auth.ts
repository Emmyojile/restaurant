import { NextAuthOptions, Session } from "next-auth";
import GoogleProvider from "next-auth/providers/google";

interface CustomSession extends Session {
  accessToken?: string;
}

export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    async jwt({ token, account }: { token: any; account: any }) {
      // Persist the OAuth access_token to the token right after signin
      if (account) {
        (token as CustomSession).accessToken = account.access_token;
      }
      return token;
    },
    async session({ session, token }: { session: CustomSession; token: any }) {
      // Send properties to the client, like an access_token from a provider.
      (session as CustomSession).accessToken = (token as CustomSession).accessToken;
      return session;
    },
  },
  debug: false,
  jwt: {
    maxAge: 3 * 24 * 60 * 60,
  },
};




// export const authOptions: NextAuthOptions = {
  //   providers: [
  //     GoogleProvider({
  //       clientId: process.env.GOOGLE_CLIENT_ID!,
  //       clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
  //     }),
  //   ],
  // };
  
  
  // export const authOptions: NextAuthOptions = {
  //   providers: [
  //     GoogleProvider({
  //       clientId: process.env.GOOGLE_CLIENT_ID!,
  //       clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
  //     }),
  //   ],
  //   secret: process.env.NEXTAUTH_SECRET,
  //   callbacks: {
  //     async signIn({ user, account, profile, email, credentials }) {
  //       // Your logic for signIn callback
  //       console.log("SignIn Callback: ", user, account, profile, email, credentials);
  //       return Promise.resolve(true);
  //     },
  //     async redirect({ url, baseUrl }) {
  //       // Your logic for redirect callback
  //       return Promise.resolve(url);
  //     },
  //     // Add other callback functions if needed
  //   },
  //   debug: false,
  //   jwt: {
  //     maxAge: 3 * 24 * 60 * 60,
  //   },
  // };
  