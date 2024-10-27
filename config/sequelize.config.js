import { Sequelize } from "sequelize";
import dotenv from "dotenv";

dotenv.config();

const sequelize = new Sequelize(process.env.DB_URL, {
  dialect: "postgres",
  logging: false,
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
});

const connectPostgres = async () => {
  try {
    await sequelize.authenticate();
    console.log("Database has been connected successfully.");
    if (process.env.NODE_ENV === "development") {
      await sequelize.sync();
      console.log("Database synchronized.");
    }
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};

export { sequelize, connectPostgres };