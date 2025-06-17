import { DataTypes } from "sequelize";

import sequelize from "./sequelize.js";

const App = sequelize.define(
    "app",
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            unique: {
                args: true,
                msg: "Category with this name already exist"
            },
        },
        name: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: false,
            validate: {
                len: [2],
            }
        },
        size: {
            type: DataTypes.INTEGER,
            allowNull: false,
        }
    }
);

// App.sync();

export default App;
