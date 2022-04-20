import Express, { json } from "express"
import { TaskRoutes } from "./routes/Task.routes";
import cors from "cors";

export const app = Express();

app
  .use(cors())
  .use(json())
  .use(TaskRoutes);
