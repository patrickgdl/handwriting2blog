import express from "express";

import {
  getDetectedTextFromCloud,
  getDetectedTextFromLocal,
  getDetectedTextFromPdf,
} from "../../controllers/detection/index.js";

const router = express.Router();

router.get("/", getDetectedTextFromCloud);
router.get("/local", getDetectedTextFromLocal);
router.get("/pdf", getDetectedTextFromPdf);

export default router;
