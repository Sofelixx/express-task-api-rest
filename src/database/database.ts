import { Sequelize } from "sequelize";

export const db = new Sequelize("task", "hkh18rd73s0q", "pscale_pw_Z2Myg3H0h3DoAIzVylT0PeYqh2ar1nWlFVJg4tRbq4U", {
  host: "a6fat11636n9.aws-sa-east-1-1.psdb.cloud",
  dialect: "mysql",
  dialectOptions: {
    ssl: {
      rejectUnauthorized: false
    }
  }
})