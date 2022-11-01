import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import http from "http";

import routes from "../api/routes/index.js";

const app = express();
const server = http.createServer(app);

// secure apps by setting various HTTP headers
app.use(helmet());

// enable CORS - Cross Origin Resource Sharing
app.use(cors());
app.options("*", cors());

// request logging. dev: console | production: file
app.use(morgan("dev"));

// entry point for the API
app.use("/v1", routes);

export default server;
