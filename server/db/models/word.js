"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Word extends Model {
    static associate({ Category, UserWord, User }) {
      this.belongsTo(Category, { foreignKey: "category_id" });
      this.hasMany(UserWord, { foreignKey: 'word_id'})
      this.belongsToMany(User, {
        through: "UserWord",
        foreignKey: "word_id",
      });
      // this.belongsToMany(UserWord, {
      //   through: "UserWords",
      //   foreignKey: "word_id",
      // });
    }
  }
  Word.init(
    {
      word: DataTypes.STRING,
      translation: DataTypes.STRING,
      category_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Word",
    }
  );
  return Word;
};
