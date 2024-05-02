"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate({ UserWord, Word }) {
      // this.belongsToMany(UserWord, {
      //   through: "UserWords",
      //   foreignKey: "user_id",
      // });
      this.hasMany(UserWord, { foreignKey: "user_id" });
      this.belongsToMany(Word, { through: "UserWord", foreignKey: "user_id" });
    }
  }
  User.init(
    {
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "User",
    }
  );
  return User;
};
