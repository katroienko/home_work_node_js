import express from 'express';
import fs from 'fs';
import "dotenv/config"

const port = process.env.PORT

const app = express();
// const port = 3000;

app.get('/', (req, res) => {
  try {
    throw new Error('Test error from Express route');

  } catch (error) {
    const logEntry = `${new Date().toISOString()} - ${error.message}\n`;
    fs.appendFile('errors.log', logEntry, (err) => {
      if (err) {
        console.error('error:', err);
      }
    });


    res.status(500).set('Content-Type', 'text/plain').send('Internal Server Error');
  }
});

app.listen(port, () => {
  console.log(`Express server running at http://localhost:${port}`);
});
