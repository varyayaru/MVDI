"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class UserWord extends Model {
    static associate({User,Word}) {
      this.belongsTo(User, { foreignKey: "user_id" });
      this.belongsTo(Word, { foreignKey: "word_id" });
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
