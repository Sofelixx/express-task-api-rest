"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskDelete = exports.TaskUpdate = exports.TaskCreate = exports.TasksGetAll = void 0;
const Task_model_1 = require("../models/Task.model");
const TasksGetAll = async (req, res, next) => {
    try {
        const tasks = await Task_model_1.TaskModel.findAll();
        res.json(tasks);
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
};
exports.TasksGetAll = TasksGetAll;
const TaskCreate = async (req, res, next) => {
    try {
        const newTask = await Task_model_1.TaskModel.create(req.body);
        res.json(newTask);
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
};
exports.TaskCreate = TaskCreate;
const TaskUpdate = async (req, res, next) => {
    try {
        const task = await Task_model_1.TaskModel.findByPk(req.params.id);
        task?.set(req.body);
        task?.save();
        res.json(task);
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
};
exports.TaskUpdate = TaskUpdate;
const TaskDelete = async (req, res, next) => {
    try {
        Task_model_1.TaskModel.destroy({
            where: {
                id: req.params.id
            }
        });
        res.status(204);
    }
    catch (error) {
        res.status(404).json({ message: error.message });
    }
};
exports.TaskDelete = TaskDelete;
//# sourceMappingURL=Task.controller.js.map