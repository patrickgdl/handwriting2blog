import { format } from "date-fns";
import express from "express";

import bucketsRoutes from "./buckets/buckets.routes.js";
import detectionRoutes from "./detection/detection.routes.js";
import spellcheckerRoutes from "./spellchecker/spellchecker.routes.js";

const router = express.Router();

router.get("/status", (_, res) => {
  res.send(`Yes, I'm here!! - ${format(new Date(), "dd/MM/yyyy HH:mm:ss")}`);
});

router.use("/bucket", bucketsRoutes);
router.use("/detection", detectionRoutes);
router.use("/spellchecker", spellcheckerRoutes);

export default router;
