import { DataTypes } from "sequelize";
import { db } from "../database/database";


export const TaskModel = db.define("Task", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING,
  },
  description: {
    type: DataTypes.STRING
  },
  image: {
    type: DataTypes.STRING
  }
})
