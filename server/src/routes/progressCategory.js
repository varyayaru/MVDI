const express = require("express");
const { Category, UserWord, Word } = require("../../db/models");
const verifyAccessToken = require("../middlewares/verifyAccessToken");

const progressCategory = express.Router();

progressCategory.get("/", /*verifyAccessToken,*/ async (req, res) => {
  const progress = await Category.findAll({
    include: {
      model: Word,
      include: { model: UserWord/*, where: { userId: res.locals.user.id }*/ },
    },
  });
  res.json(progress);
});

module.exports = progressCategory;
