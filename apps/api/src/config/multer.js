import multer from "multer";
import crypto from "node:crypto";

const MAX_FILE_SIZE = 5;

// multer config
const config = {
  storage: multer.diskStorage({
    filename: (req, file, callback) => {
      crypto.randomBytes(16, (err, hash) => {
        if (err) callback(err);

        const fileName = `${hash.toString("hex")}-${file.originalname}`;

        callback(null, fileName);
      });
    },
  }),
  limits: {
    fileSize: MAX_FILE_SIZE * 1024 * 1024,
  },
  fileFilter: (req, file, callback) => {
    const allowedMimes = ["image/jpeg", "image/pjpeg", "image/png"];

    if (allowedMimes.includes(file.mimetype)) {
      callback(null, true);
    } else {
      const fileNameParts = file.originalname.split(".");
      const extension = fileNameParts[fileNameParts.length - 1];

      // Don't throw error because we want to handle it in the middleware.
      req.fileTypeError = `The file type ${extension.toUpperCase()} is not accepted.`;

      callback(null, false, req.fileTypeError);
    }
  },
};

// multer instance with configs
const uploader = multer(config).single("file");

// middleware to handle multer
const fileUpload = (req, res, next) => {
  // multer instance
  uploader(req, res, (err) => {
    if (err) {
      if (err?.code === "LIMIT_FILE_SIZE") {
        return res.status(400).json({
          message: `File is too big. File uploads must be smaller than ${MAX_FILE_SIZE} MB.`,
        });
      }

      // An unknown error occurred when uploading.
      return res.status(400).json({ message: err });
    } else {
      // Even though we have an error handling above we have to handle types error here as it wasn't throwed
      if (req.fileTypeError) {
        return res.status(400).json({ message: req.fileTypeError });
      }

      // Everything went fine.
      next();
    }
  });
};

export default fileUpload;
