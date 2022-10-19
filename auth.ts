import { createAuth } from '@keystone-6/auth';
import { statelessSessions } from '@keystone-6/core/session';
import * as dotenv from 'dotenv';
dotenv.config({path: '.env'})

let sessionSecret = process.env.SESSION_SECRET || '';
let sessionMaxAge = 60 * 60 * 24 * 30;

const session = statelessSessions({
  maxAge: sessionMaxAge,
  secret: sessionSecret,
});

const { withAuth } = createAuth({
  listKey: 'User',
  identityField: 'email',
  sessionData: 'name',
  secretField: 'password',
});

export { withAuth, session };