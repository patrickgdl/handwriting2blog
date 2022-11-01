// Imports the Google Cloud client library
import { ImageAnnotatorClient } from "@google-cloud/vision";

async function detectFullTextLocal() {
  // Creates a client
  const client = new ImageAnnotatorClient();

  // Read a local image as a text document
  const fileName = "/path/to/image.png";

  // Read a local image as a text document
  const [result] = await client.documentTextDetection(fileName);

  const fullTextAnnotation = result.fullTextAnnotation;

  console.log(`Full text: ${fullTextAnnotation.text}`);

  fullTextAnnotation.pages.forEach((page) => {
    page.blocks.forEach((block) => {
      console.log(`Block confidence: ${block.confidence}`);
      block.paragraphs.forEach((paragraph) => {
        console.log(`Paragraph confidence: ${paragraph.confidence}`);
        paragraph.words.forEach((word) => {
          const wordText = word.symbols.map((s) => s.text).join("");
          console.log(`Word text: ${wordText}`);
          console.log(`Word confidence: ${word.confidence}`);
          word.symbols.forEach((symbol) => {
            console.log(`Symbol text: ${symbol.text}`);
            console.log(`Symbol confidence: ${symbol.confidence}`);
          });
        });
      });
    });
  });
}

async function getDetectedTextFromLocal(req, res) {
  const result = await detectFullTextLocal();
  return res.send(result);
}

export default getDetectedTextFromLocal;
