const express = require('express');
const articlesRouter = require('./routes/articlesRouter');
const userRouter = require('./routes/userRouter');

const app = express();

app.use(express.json());

app.use('/api/v1/articles', articlesRouter);
app.use('/api/v1/users', userRouter);

module.exports = app;
