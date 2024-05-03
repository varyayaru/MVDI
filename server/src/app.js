const express = require('express');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const tokensRouter = require('./routes/tokens.router');
const authRouter = require('./routes/auth.router');
<<<<<<< HEAD
const progressCategory = require('./routes/progressCategory');
=======
const wordsRouter = require('./routes/words.router');
>>>>>>> main
const app = express();

app.use(morgan("dev"));
app.use(cookieParser());
app.use(express.json());

app.use('/api/tokens', tokensRouter);
app.use('/api/auth', authRouter);
<<<<<<< HEAD
app.use('/api/progress', progressCategory);
=======
app.use('/api/words',wordsRouter)
>>>>>>> main

module.exports = app;
