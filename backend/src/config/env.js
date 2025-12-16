import dotenv from "dotenv";

dotenv.config();

const env = {
  nodeEnv: process.env.NODE_ENV || "development",
  port: process.env.PORT ? Number(process.env.PORT) : 4000,
  appName: process.env.APP_NAME || "mobile-parts-ecommerce API",
  mongoUri: process.env.MONGODB_URI || "",
};

export default env;
