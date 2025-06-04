import express from 'express';
import cors from 'cors';

import "dotenv/config"

const port = process.env.PORT


const app = express();


app.use(cors());

app.get('/', (req, res) => {
        console.log(req);
  const authHeader = req.headers.authorization;


  if (!authHeader) {
    res.status(401)
      .set('Content-Type', 'text/plain')
      .send('Unauthorized');
  } else {
    res.status(200)
      .set('Content-Type', 'text/plain')
      .send('Authorization header received');
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
