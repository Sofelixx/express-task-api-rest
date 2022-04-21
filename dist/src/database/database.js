"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.db = void 0;
const sequelize_1 = require("sequelize");
exports.db = new sequelize_1.Sequelize("task", "gnj71velhwej", "pscale_pw_E4Vpzjsds3UR-unVghY1yuqAH5b1yrK0mcptZwqIGO8", {
    host: "a6fat11636n9.aws-sa-east-1-1.psdb.cloud",
    dialect: "mysql",
    dialectOptions: {
        ssl: {
            rejectUnauthorized: false
        }
    }
});
//# sourceMappingURL=database.js.map