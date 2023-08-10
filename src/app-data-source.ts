import { DataSource } from "typeorm"
export const AppDataSource = new DataSource({
    type: "sqlite",
    database: "./data/angular.db",
    entities: ["dist/entidades/*.js"],
    logging: true,
    synchronize: true,
})

// dev => entities: ["src/entidades/*.ts"]
// prod => entities: ["dist/entidades/*.js"]