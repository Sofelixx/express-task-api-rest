import { app } from "./App";
import { db } from "./database/database";

async function main() {
  await db.sync({ alter: false });
  console.log("Connected to database");
  app.listen(3000, () => console.log("Server listening on port 3000"));
}

main();