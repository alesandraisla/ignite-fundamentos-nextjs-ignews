import { query } from 'faunadb';
import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";

import { fauna } from '../../../services/fauna';

export default NextAuth({
    providers: [
    GithubProvider({
        clientId: process.env.GITHUB_CLIENT_ID,
        clientSecret: process.env.GITHUB_CLIENT_SECRET,
        authorization: {
            params: {
                scope: 'read:user',
            }, 
        },
    }),
    ],
    //retorna o login do usuario 
    // o dado vai para o fauna no campo collections
    callbacks: {
        async signIn({ user, account, profile}) {
            const { email } = user;
            try {
                await fauna.query(
                    query.Create(
                        query.Collection('igUser'),
                        { data: { email }}
                    )
                )
                return true
            } catch {
                return false;
            }
        },
    }
})
