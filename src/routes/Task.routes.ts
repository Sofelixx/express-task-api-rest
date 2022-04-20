import { Router } from "express";
import type { Request, Response } from "express";
import { TaskCreate, TaskDelete, TasksGetAll, TaskUpdate } from "../controllers/Task.controller";

export const TaskRoutes = Router();

TaskRoutes
  .get("/tasks", TasksGetAll)
  .post("/tasks", TaskCreate)
  .put("/tasks/:id", TaskUpdate)
  .delete("/tasks/:id", TaskDelete);