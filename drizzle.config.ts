import { defineConfig } from 'drizzle-kit';

export default defineConfig({
  schema: "./db/schema.ts", // Path to your schema file
  dialect: 'postgresql',     // Database dialect
  dbCredentials: {
    url: process.env.DATABASE_URL!,  // Make sure this env variable is correctly spelled
  },
  verbose: true,
  strict: true,
});
