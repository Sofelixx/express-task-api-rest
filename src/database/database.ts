import { Sequelize } from "sequelize";

export const db = new Sequelize("task", "gnj71velhwej", "pscale_pw_E4Vpzjsds3UR-unVghY1yuqAH5b1yrK0mcptZwqIGO8", {
  host: "a6fat11636n9.aws-sa-east-1-1.psdb.cloud",
  dialect: "mysql",
  dialectOptions: {
    ssl: {
      rejectUnauthorized: false
    }
  }
})