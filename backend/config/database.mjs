import knex from 'knex';
import {DB_CLIENT, DB_HOST, DB_PASSWORD, DB_PORT, DB_USER, DB_DATABASE} from './app.mjs';

const db_config = {
  client: DB_CLIENT,
  connection: {
    host: DB_HOST,
    port: DB_PORT,
    user: DB_USER,
    password: DB_PASSWORD,
    database: DB_DATABASE,
  },
  pool: {
    min: 0,
    max: 50,
    propagateCreateError: false,
  }
};

export const dbConnection = knex(db_config);
