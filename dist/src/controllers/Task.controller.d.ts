import type { Request, Response, NextFunction } from "express";
export declare const TasksGetAll: (req: Request, res: Response, next: NextFunction) => Promise<void>;
export declare const TaskCreate: (req: Request, res: Response, next: NextFunction) => Promise<void>;
export declare const TaskUpdate: (req: Request, res: Response, next: NextFunction) => Promise<void>;
export declare const TaskDelete: (req: Request, res: Response, next: NextFunction) => Promise<void>;
