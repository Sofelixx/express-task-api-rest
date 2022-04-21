"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const App_1 = require("./App");
const database_1 = require("./database/database");
async function main() {
    await database_1.db.sync({ alter: false });
    console.log("Connected to database");
    App_1.app.listen(80, () => console.log("Server listening on port 80"));
}
main();
//# sourceMappingURL=index.js.map