import { Pool } from "pg";
import { DATABASE, DB_HOST, DB_PASSWORD, DB_PORT, DB_USER } from "../common/config";

const pool = new Pool({
  user: DB_USER,
  password: DB_PASSWORD,
  host: DB_HOST,
  port: DB_PORT,
  database: DATABASE
});

export {
  pool
};
