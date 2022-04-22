import { Sequelize } from "sequelize";

export const db = new Sequelize("task", "s5c5gu4ei1nn", "pscale_pw_Ovw5vuVvcsrMx1AO3hyfvbzCaPsRUEnb33H8AAqeZhk", {
  host: "a6fat11636n9.aws-sa-east-1-1.psdb.cloud",
  dialect: "mysql",
  dialectOptions: {
    ssl: {
      rejectUnauthorized: false
    }
  }
})