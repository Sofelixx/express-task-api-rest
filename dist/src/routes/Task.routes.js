"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskRoutes = void 0;
const express_1 = require("express");
const Task_controller_1 = require("../controllers/Task.controller");
exports.TaskRoutes = (0, express_1.Router)();
exports.TaskRoutes
    .get("/tasks", Task_controller_1.TasksGetAll)
    .post("/tasks", Task_controller_1.TaskCreate)
    .put("/tasks/:id", Task_controller_1.TaskUpdate)
    .delete("/tasks/:id", Task_controller_1.TaskDelete);
//# sourceMappingURL=Task.routes.js.map