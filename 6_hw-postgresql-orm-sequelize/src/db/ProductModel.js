import { DataTypes } from "sequelize";
import sequelize from "./sequelize.js";

const ProductModel = sequelize.define("product", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  category: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  animal: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  price: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  stock: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  brand: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  image: {
    type: DataTypes.STRING,
    allowNull: false,
  }
});

// ❗ Лучше использовать sync({ alter: true }) в разработке,
// чтобы Sequelize автоматически подгонял таблицу под модель:
// await ProductModel.sync({ alter: true });
// await Product.sync({ force: true }); // удалит таблицу и создаст заново

export default ProductModel;





// import { DataTypes } from "sequelize";

// import sequelize from "./sequelize.js";

// const Product = sequelize.define(
//     "product",
//     {
//         name: {
//             type: DataTypes.STRING,
//             allowNull: false,
//         },
//         description: {
//             type: DataTypes.TEXT,
//             allowNull: false,
//         },
//         price: {
//             type: DataTypes.FLOAT,
//             allowNull: false,
//         }
//     }
// );

// Product.sync();

// export default Product;
