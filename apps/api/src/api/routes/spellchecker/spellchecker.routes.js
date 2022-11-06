import express from "express";

import { correctToPt } from "../../controllers/spellchecker/index.js";

const router = express.Router();

router.get("/", correctToPt);

export default router;
