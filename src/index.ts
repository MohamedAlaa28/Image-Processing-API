import express from 'express';
import resize from './middleware/resizeMiddleware';
const app = express();
const port = 8000;

app.get('/api/images', resize, (req, res) => {
  //send status equal 200
  res.sendStatus(200);
});

app.listen(port, () => {
  console.log(`server started at localhost:${port}`);
});

export default app;
