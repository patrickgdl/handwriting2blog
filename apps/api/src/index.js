// import * as dotenv from "dotenv";
// dotenv.config();
// http://localhost:8001/v1/detection?bucket=projeto-tcc-ocr&file=texto-com-data-e-fundo-pintado-maior.jpeg

import vars from "./config/vars.js";
import server from "./config/express.js";

const { port, env } = vars;

server.listen(port, () => console.log(`Server started on port ${port} ${env}`));

export default server;
