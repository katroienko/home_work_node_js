import { DataTypes } from "sequelize";
import sequelize from "./sequelize.js";

const Books = sequelize.define("Books", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  title: {
    type: DataTypes.STRING,
    unique: {
      msg: "This title is already in use.",
    },
    allowNull: false,
    validate: {
      notNull: {
        msg: "Title is required.",
      },
      notEmpty: {
        msg: "Title cannot be empty.",
      },
      len: {
        args: [2, 255],
        msg: "Title must be between 2 and 255 characters long.",
      },
    },
  },
  author: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notNull: {
        msg: "Author is required.",
      },
      notEmpty: {
        msg: "Author cannot be empty.",
      },
      len: {
        args: [2, 30],
        msg: "Author name must be between 2 and 30 characters long.",
      },
    },
  },
  year: {
    type: DataTypes.INTEGER,
    allowNull: false,
    validate: {
      notNull: {
        msg: "Year is required.",
      },
      isInt: {
        msg: "Year must be an integer.",
      },
    },
  },
});

// Books.sync()
export default Books;
