import axios from 'axios';

// disable body parser because we need to pass the request as is
export const config = {
  api: {
    bodyParser: false,
  },
};

const postToApi = async (req, res) => {
  try {
    const { data } = await axios.post(
      `${process.env.BASE_URL}/v1/bucket/upload`,
      req,
      {
        headers: {
          'Content-Type': req.headers['content-type'], // multipart/form-data with boundary included
        },
      },
    );

    return res.status(201).send(data);
  } catch (error) {
    if (error.response) {
      return res.status(error.response.status).send(error.response.data);
    }
    return res.status(500).send(error);
  }
};

const handler = (req, res) => {
  return req.method === 'POST'
    ? postToApi(req, res)
    : res.status(405).json({ message: 'Method not allowed' });
};

export default handler;
