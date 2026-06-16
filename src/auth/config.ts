import { betterAuth } from 'better-auth';
import { drizzleAdapter } from '@better-auth/postgres';
import { db } from './client';

export const auth = betterAuth({
  database: drizzleAdapter(db, {
    provider: 'pg',
    schema: {
      user: 'auth_user',
      account: 'auth_account',
      session: 'auth_session',
      verification: 'auth_verification',
    },
  }),
  emailAndPassword: {
    enabled: true,
  },
  plugins: [],
});
