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
const pg = require('pg');

const db = new pg.Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  }
});

const app = express();

app.use(staticMiddleware);
app.use(bodyParser.json());

app.post('/api/storygenerate', async (req, res) => {
  try {
    const response = await openai.createCompletion({
      model: 'text-davinci-003',
      prompt: req.body.prompt,
      max_tokens: 900,
      temperature: 0.9,
      stream: false
    });
    res.status(201).json({ story: response.data.choices[0].text });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.post('/api/savestory', (req, res) => {
  const { title, story } = req.body;
  if (!title || !story) {
    return res.status(400).send({ error: 'title and story are required' });
  }
  const sql = `
    insert into "stories" ("title", "story", "userId")
    values($1, $2, $3)
    returning *
  `;
  const params = [title, story, 1];
  db.query(sql, params)
    .then(result => {
      res.sendStatus(201);
    })
    .catch(error => {
      console.error(error);
      res.status(500).send({ error: 'Failed to save story to the database' });
    });
});

app.get('/api/getstories', (req, res) => {
  const sql = `
        SELECT "storyId", "title" FROM "stories"
    `;
  db.query(sql)
    .then(result => {
      res.json({ stories: result.rows });
    })
    .catch(error => {
      console.error(error);
      res.status(500).send({ error: 'Failed to fetch stories' });
    });
});

app.use(errorMiddleware);

app.listen(process.env.PORT, () => {
  process.stdout.write(`\n\napp listening on port ${process.env.PORT}\n\n`);
});
