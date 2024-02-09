// url-checker-server/server.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 5000; // You can choose your own port number

app.use(cors());
app.use(bodyParser.json());

app.post('/api/check-url', (req, res) => {
  const { url } = req.body;

  // Simulate checking the URL (replace with your actual logic)
  const isUrlValid = Math.random() < 0.5;

  if (isUrlValid) {
    res.json({ message: 'URL found' });
  } else {
    res.status(404).json({ message: 'URL not found' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
