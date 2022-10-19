import { config } from '@keystone-6/core';
import { withAuth, session } from './auth';
import User from './schemas/user'
import Product from './schemas/product';
import Cart from './schemas/cart';
import * as dotenv from 'dotenv';
dotenv.config({path: '.env'})

export default config(
  withAuth( {
    server: {
      cors: { origin: ['http://localhost:3001'], credentials: true }
    },
    db: {
      provider: 'sqlite',
      url: 'file:./keystone.db',
    },
    lists: {
      User,
      Product,
      Cart
    },
    session,
    ui: {
      isAccessAllowed: (context) => !!context.session?.data,
    },
  })
)