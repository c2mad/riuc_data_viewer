import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

const handler = NextAuth({
  providers: [ GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
      // Fuerza la selección de cuenta cada vez que se inicia sesión
      authorization: {
        params: {
          prompt: "select_account", 
        },
      },
    }),
  ],
});

export { handler as GET, handler as POST};