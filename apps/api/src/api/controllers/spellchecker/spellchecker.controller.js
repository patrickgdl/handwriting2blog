import { Configuration, OpenAIApi } from "openai";

const OPENAI_MODEL_TYPES = {
  davinci: "text-davinci-002",
  curie: "text-curie-002",
  babbage: "text-babbage-002",
  ada: "text-ada-002",
};

// Creates a client
const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

// instantiate the OpenAIApi class
const openai = new OpenAIApi(configuration);

async function openAIToPTBr(prompt) {
  // create a completion request
  const response = await openai.createCompletion({
    model: OPENAI_MODEL_TYPES.davinci,
    prompt: generatePrompt(prompt),
    max_tokens: 60,
    temperature: 0.6,
  });

  return response;
}

export default async function spellchecker(req, res) {
  const { query } = req;

  const completion = await openAIToPTBr(query.prompt);
  res.status(200).json({ result: completion.data.choices[0].text });
}

function generatePrompt(prompt) {
  const capitalized = prompt[0].toUpperCase() + prompt.slice(1).toLowerCase();
  return `Correct this to standard Portuguese:\n\n.

Prompt: verificar si es bolitos ustão oburtos no banco 
Result: verificar se os boletos estão abertos no banco
Prompt: verificar si entrou o pix no pogseguro.
Result: verificar se entrou o pix na pagseguro
Prompt: ${capitalized}
Result:`;
}
