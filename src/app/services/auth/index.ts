import NextAuth from 'next-auth'
import EmailProvider from "next-auth/providers/email";
import { PrismaAdapter } from '@auth/prisma-adapter'
import { prisma } from '../database'

export const {
    handlers: { GET, POST },
    auth,
 } = NextAuth({
    pages: {
       signIn: '/auth',
       signOut: '/auth',
       error: '/auth',
       verifyRequest: '/auth',
       newUser: '/app',
    },
    adapter: PrismaAdapter(prisma),
    providers: [
       EmailProvider({
          server: {
             host: process.env.EMAIL_SERVER_HOST,
             port: process.env.EMAIL_SERVER_PORT,
             auth: {
                user: process.env.EMAIL_SERVER_USER,
                pass: process.env.EMAIL_SERVER_PASSWORD
             }
          },
          from: process.env.EMAIL_FROM
       }),
    ],
 })
