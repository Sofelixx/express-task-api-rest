import type { Request, Response, NextFunction } from "express";
import { TaskModel } from "../models/Task.model";

export const TasksGetAll = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const tasks = await TaskModel.findAll();
    res.json(tasks);
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
}

export const TaskCreate = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const newTask = await TaskModel.create(req.body);
    res.json(newTask);
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
}

export const TaskUpdate = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const task = await TaskModel.findByPk(req.params.id);
    task?.set(req.body);
    task?.save();
    res.json(task);
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
}

export const TaskDelete = async (req: Request, res: Response, next: NextFunction) => {
  try {
    TaskModel.destroy({
      where: {
        id: req.params.id
      }
    })
    res.status(204);
  } catch (error: any) {
    res.status(404).json({ message: error.message });
  }
}