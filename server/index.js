require('dotenv/config');
const { Configuration, OpenAIApi } = require('openai');
const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY
});
const openai = new OpenAIApi(configuration);
const express = require('express');
const staticMiddleware = require('./static-middleware');
const errorMiddleware = require('./error-middleware');
const bodyParser = require('body-parser');

const app = express();

app.use(staticMiddleware);
app.use(bodyParser.json());

app.post('/api/storygenerate', async (req, res) => {
  try {
    const response = await openai.createCompletion({
      model: 'text-davinci-003',
      prompt: req.body.prompt,
      max_tokens: 200,
      temperature: 0.9,
      stream: false
    });
    res.status(201).json({ story: response.data.choices[0].text });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.use(errorMiddleware);

app.listen(process.env.PORT, () => {
  process.stdout.write(`\n\napp listening on port ${process.env.PORT}\n\n`);
});
