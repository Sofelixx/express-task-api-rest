import { Sequelize } from "sequelize";

export const db = new Sequelize("task", process.env?.DB_USER || "user", process.env?.DB_PASSWD || "passwd", {
  host: process.env?.DB_HOST || "host",
  dialect: "mysql",
  dialectOptions: {
    ssl: {
      rejectUnauthorized: false
    }
  }
})
