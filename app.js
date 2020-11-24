const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, 'build')));

const timer = async ms => {
  return new Promise(resolve => {
    setTimeout(resolve, ms);
  });
};

app.get('/api', async (req, res) => {
  await timer(2000);
  res.json({
    data: 'success!',
  });
});

app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(4000);
