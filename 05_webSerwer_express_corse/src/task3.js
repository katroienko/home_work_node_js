import express from 'express';

import "dotenv/config"

const app = express();


const port = process.env.PORT


app.put('/', (req, res) => {
  res
    .status(200)
    .set('Content-Type', 'text/plain')
    .send('PUT-done');
});


app.delete('/', (req, res) => {
  res
    .status(200)
    .set('Content-Type', 'text/plain')
    .send('DELETE-done');
});


app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
