"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
const typeorm_1 = require("typeorm");
exports.AppDataSource = new typeorm_1.DataSource({
    type: "sqlite",
    database: "./data/angular.db",
    entities: ["dist/entidades/*.js"],
    logging: true,
    synchronize: true,
});
// dev => entities: ["src/entidades/*.ts"]
// prod => entities: ["dist/entidades/*.js"]
