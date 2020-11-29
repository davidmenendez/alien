require('dotenv').config();

const express = require('express');
const path = require('path');
const logger = require('morgan')
const mongoose = require('mongoose');
const app = express();

const dbUrl = process.env.DB_HOST;
mongoose.connect(dbUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

const userRouter = require('./routes/user');
const fightRouter = require('./routes/fight');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'build')));

app.use('/api/user', userRouter);
app.use('/api/fight', fightRouter);

app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.use((error, req, res, next) => {
  return res.status(500).json({ error: error.toString() });
});

app.listen(4000);
