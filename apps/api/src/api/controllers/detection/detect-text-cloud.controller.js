// Imports the Google Cloud client libraries
import { ImageAnnotatorClient } from "@google-cloud/vision";

const credentials = JSON.parse(
  Buffer.from(process.env.GOOGLE_SERVICE_KEY, "base64").toString()
);

async function detectFullTextCloud(bucketName, fileName) {
  // Creates a client
  const client = new ImageAnnotatorClient({
    credentials,
  });

  // Read a remote image as a text document
  const [result] = await client.documentTextDetection(
    `gs://${bucketName}/${fileName}`
  );

  const fullTextAnnotation = result.fullTextAnnotation;
  return fullTextAnnotation.text;
}

async function getDetectedTextFromCloud(req, res) {
  const { query } = req;

  const result = await detectFullTextCloud(query.bucket, query.file);
  return res.send(result);
}

export default getDetectedTextFromCloud;
