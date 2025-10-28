import postgres from "postgres";

import { drizzle } from "drizzle-orm/postgres-js";
import { migrate } from "drizzle-orm/postgres-js/migrator";

const connetion = postgres('postgresql://postgres:docker@localhost:5432/pizzashop', {max: 1});
const db = drizzle(connetion);

await migrate(db, { migrationsFolder: './src/db/schema/index.ts' });

await connetion.end();

process.exit();