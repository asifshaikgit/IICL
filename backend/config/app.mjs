// config.js
import dotenv from "dotenv";
dotenv.config();

export const PORT = process.env.PORT || 9000;
export const DB_CLIENT = process.env.DB_CLIENT || "pg";
export const DB_USER = process.env.DB_USER || "postgres";
export const DB_HOST = process.env.DB_HOST || "localhost";
export const DB_PORT = process.env.DB_PORT ? parseInt(process.env.DB_PORT) : 5432;
export const DB_DATABASE = process.env.DB_DATABASE || "blogdb";
export const DB_PASSWORD = process.env.DB_PASSWORD || "";

