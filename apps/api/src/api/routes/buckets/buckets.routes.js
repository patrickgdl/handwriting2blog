import express from "express";

import uploadMiddleware from "../../../config/multer.js";
import { getBuckets, uploadToBucket } from "../../controllers/buckets/index.js";

const router = express.Router();

router.get("/", getBuckets);
router.post("/upload", uploadMiddleware, uploadToBucket);

export default router;
