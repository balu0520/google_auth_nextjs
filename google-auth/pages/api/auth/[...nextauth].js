import NextAuth from 'next-auth/next'
import GoogleProvider from 'next-auth/providers/google'
import CredentialsProvider from 'next-auth/providers/credentials'

export default NextAuth({
    providers: [
        GoogleProvider({
            clientId:process.env.GOOGLE_CLIENT_ID,
            clientSecret:process.env.GOOGLE_CLIENT_SECRET,
        }),
        CredentialsProvider({
            name: 'credentials',
            credentials: {
                username: { label: "username", type: "text" },
                password: { label: "password", type: "password" }
            },
            authorize: async (credentials) => {
                if (credentials.username === 'balakrishna8045@gmail.com' && credentials.password === 'balakrishna1234') {
                  return Promise.resolve({ user: 'balakrishna'});
                } else {
                  return Promise.resolve(null);
                }
              }
        }),
    ],
    secret: process.env.JWT_SECRET,
})