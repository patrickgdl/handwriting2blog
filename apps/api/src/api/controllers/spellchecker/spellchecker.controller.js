import { Configuration, OpenAIApi } from "openai";

const OPENAI_MODEL_TYPES = {
  davinci: "text-davinci-002",
  curie: "text-curie-002",
  babbage: "text-babbage-002",
  ada: "text-ada-002",
};

async function openAIToPTBr(prompt) {
  // Creates a client
  const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
  });

  // instantiate the OpenAIApi class
  const openai = new OpenAIApi(configuration);

  // create a completion request
  const response = await openai.createCompletion({
    model: OPENAI_MODEL_TYPES.davinci,
    prompt: `Correct this to standard Portuguese:\n\n${prompt}`,
    temperature: 0,
    max_tokens: 60,
    top_p: 1.0,
    frequency_penalty: 0.0,
    presence_penalty: 0.0,
  });

  return response;
}

async function correctToPt(req, res) {
  const { query } = req;

  const { data } = await openAIToPTBr(query.prompt);
  return res.send(data);
}

export default correctToPt;
