import { Sequelize } from "sequelize";

export const db = new Sequelize("task", process.env["DB_USER"], process.env["DB_PASSWD"], {
  host: process.env["DB_HOST"],
  dialect: "mysql",
  dialectOptions: {
    ssl: {
      rejectUnauthorized: false
    }
  }
})
