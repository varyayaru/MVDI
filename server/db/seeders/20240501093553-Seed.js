"use strict";
const bcrypt = require('bcrypt')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Users",
      [
        {
          name: "Alex",
          email: "alex@gmail.com",
          password: bcrypt.hashSync('18kek@lol', 10),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
    await queryInterface.bulkInsert(
      "Categories",
      [
        {
          name: "Food",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Animals",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Sport",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Cloth",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Devices",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
    await queryInterface.bulkInsert(
      "Words",
      [
        {
          word: "Egg",
          translation: "Яйцо",
          category_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          word: "Pizza",
          translation: "Пицца",
          category_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          word: "Sandwich",
          translation: "Бутерброд",
          category_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          word: "Pasta",
          translation: "Паста",
          category_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          word: "Burger",
          translation: "Бургер",
          category_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          word: "Sushi",
          translation: "Суши",
          category_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          word: "Steak",
          translation: "Стейк",
          category_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          word: "Soup",
          translation: "Суп",
          category_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          word: "Cake",
          translation: "Торт",
          category_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          word: "Salad",
          translation: "Салат",
          category_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          word: "Dog",
          translation: "Собака",
          category_id: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          word: "Cat",
          translation: "Кошка",
          category_id: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          word: "Elephant",
          translation: "Слон",
          category_id: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          word: "Lion",
          translation: "Лев",
          category_id: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          word: "Tiger",
          translation: "Тигр",
          category_id: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          word: "Giraffe",
          translation: "Жираф",
          category_id: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          word: "Bear",
          translation: "Медведь",
          category_id: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          word: "Rabbit",
          translation: "Кролик",
          category_id: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          word: "Monkey",
          translation: "Обезьяна",
          category_id: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          word: "Horse",
          translation: "Лошадь",
          category_id: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          word: "Football",
          translation: "Футбол",
          category_id: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          word: "Basketball",
          translation: "Баскетбол",
          category_id: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          word: "Tennis",
          translation: "Теннис",
          category_id: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          word: "Swimming",
          translation: "Плавание",
          category_id: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          word: "Cycling",
          translation: "Велоспорт",
          category_id: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          word: "Running",
          translation: "Бег",
          category_id: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          word: "Gymnastics",
          translation: "Гимнастика",
          category_id: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          word: "Volleyball",
          translation: "Волейбол",
          category_id: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          word: "Boxing",
          translation: "Бокс",
          category_id: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          word: "Golf",
          translation: "Гольф",
          category_id: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          word: "Shirt",
          translation: "Рубашка",
          category_id: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          word: "Pants",
          translation: "Штаны",
          category_id: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          word: "Dress",
          translation: "Платье",
          category_id: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          word: "Jacket",
          translation: "Куртка",
          category_id: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          word: "Shoes",
          translation: "Обувь",
          category_id: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          word: "Hat",
          translation: "Шляпа",
          category_id: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          word: "Skirt",
          translation: "Юбка",
          category_id: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          word: "Sweater",
          translation: "Свитер",
          category_id: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          word: "Socks",
          translation: "Носки",
          category_id: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          word: "Coat",
          translation: "Пальто",
          category_id: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          word: "Smartphone",
          translation: "Смартфон",
          category_id: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          word: "Laptop",
          translation: "Ноутбук",
          category_id: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          word: "Tablet",
          translation: "Планшет",
          category_id: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          word: "Smartwatch",
          translation: "Умные часы",
          category_id: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          word: "Camera",
          translation: "Камера",
          category_id: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          word: "Headphones",
          translation: "Наушники",
          category_id: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          word: "Speaker",
          translation: "Колонка",
          category_id: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          word: "Router",
          translation: "Маршрутизатор",
          category_id: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          word: "Gaming console",
          translation: "Игровая приставка",
          category_id: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          word: "E-reader",
          translation: "Электронная книга",
          category_id: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
    await queryInterface.bulkInsert(
      "UserWords",
      [
        {
          user_id: 1,
          word_id: 1,
          done: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
