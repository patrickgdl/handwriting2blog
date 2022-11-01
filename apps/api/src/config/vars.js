import * as dotenv from "dotenv";

dotenv.config();

export default {
  googleServiceKey: process.env.GOOGLE_SERVICE_KEY,
  env: process.env.NODE_ENV,
  port: process.env.PORT,
};
