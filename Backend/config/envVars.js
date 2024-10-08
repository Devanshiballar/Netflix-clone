import dotenv from "dotenv";

dotenv.config();




export const ENV_VARS = {
    MONGO_URL:process.env.MONGO_URL,
    PORT:process.env.PORT || 5000,
    JWT_SECRET:process.env.JWT_SECRET,
    NODE_ENV:process.env.NODE_ENV,
    TMDP_API_KEY:process.env.TMDP_API_KEY,
}