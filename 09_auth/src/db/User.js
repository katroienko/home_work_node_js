import { DataTypes } from "sequelize";
import sequelize from "./sequelize.js";

import { emailValidation } from "../constans/users.constants.js";

const User = sequelize.define('user', {
    fullName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    unique: {
      args: true,
      msg: `user/manager/admin with  email already exist`,
    },
    allowNull: false,
    validate: {
      is: {
        args: emailValidation.value,
        msg: emailValidation.message,
      },
    },
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  role: {
    type: DataTypes.STRING,
    defaultValue: "user",
    allowNull: false,
    validate: {
      isIn: {
        args: [["superadmin", "admin", "manager", "user"]],
        msg: "Role can be only superadmin, admin, manager or user",
      },
    },
  },
  mustChangePassword: {
  type: DataTypes.BOOLEAN,
  allowNull: false,
  defaultValue: false,
}
     
})
//  User.sync( {alter: true});
export default User;