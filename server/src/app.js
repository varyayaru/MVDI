const express = require('express');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const tokensRouter = require('./routes/tokens.router');
const authRouter = require('./routes/auth.router');
const progressCategory = require('./routes/progressCategory');
const app = express();

app.use(morgan("dev"));
app.use(cookieParser());
app.use(express.json());

app.use('/api/tokens', tokensRouter);
app.use('/api/auth', authRouter);
app.use('/api/progress', progressCategory);

module.exports = app;
