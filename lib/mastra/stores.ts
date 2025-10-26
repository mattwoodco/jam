import { PostgresStore } from "@mastra/pg";

export const storage = new PostgresStore({
  connectionString:
    process.env.DATABASE_URL ||
    "postgresql://postgres:postgres@localhost:5433/postgres",
});
