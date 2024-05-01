"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class UserWord extends Model {
    static associate(models) {
    }
  }
  UserWord.init(
    {
      user_id: DataTypes.INTEGER,
      word_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "UserWord",
    }
  );
  return UserWord;
};
