const express = require('express');
const verifyAccessToken = require('../middlewares/verifyAccessToken');
const wordsRouter = express.Router();

wordsRouter.post(verifyAccessToken, async (req, res) => {
    const newWord = await Item.create({ ...req.body, user_id: res.locals.user.id });

  });

module.exports = wordsRouter;