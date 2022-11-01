// Imports the Google Cloud client library.
import { Storage } from "@google-cloud/storage";

const credentials = JSON.parse(
  Buffer.from(process.env.GOOGLE_SERVICE_KEY, "base64").toString()
);

const listBuckets = async () => {
  // Instantiates a client. Specified credentials are on Windows PATH (GOOGLE_APPLICATION_CREDENTIALS),
  // the client library will look for credentials there.
  const storage = new Storage({
    credentials,
  });

  // Makes an authenticated API request.
  try {
    const results = await storage.getBuckets();

    const [buckets] = results;

    return buckets;
  } catch (err) {
    console.error("ERROR:", err);
  }
};

export async function getBuckets(req, res) {
  const result = await listBuckets();
  return res.send(result);
}

const googleStorageUpload = async (bucketName, filePath, destFileName) => {
  const generationMatchPrecondition = 0;

  /**
   * TODO(developer): Uncomment the following lines before running the sample.
   */
  // The ID of your GCS bucket
  // const bucketName = 'your-unique-bucket-name';

  // The path to your file to upload
  // const filePath = 'path/to/your/file';

  // The new ID for your GCS file
  // const destFileName = 'your-new-file-name';

  // Creates a client
  const storage = new Storage({
    credentials,
  });

  try {
    const options = {
      destination: destFileName,
      // Optional:
      // Set a generation-match precondition to avoid potential race conditions
      // and data corruptions. The request to upload is aborted if the object's
      // generation number does not match your precondition. For a destination
      // object that does not yet exist, set the ifGenerationMatch precondition to 0
      // If the destination object already exists in your bucket, set instead a
      // generation-match precondition using its generation number.
      preconditionOpts: { ifGenerationMatch: generationMatchPrecondition },
    };

    return await storage.bucket(bucketName).upload(filePath, options);
  } catch (error) {
    console.error(error);
  }
};

export async function uploadToBucket(req, res) {
  const bucketName = process.env.BUCKET_NAME;

  const result = await googleStorageUpload(
    bucketName,
    req.file.path,
    req.file.originalname
  );

  if (result) {
    console.log(`${req.file.path} uploaded to ${bucketName}`);

    return res.send(result);
  }

  return res.status(500).send("Error uploading file");
  // return res.json({ message: req.file });
}
