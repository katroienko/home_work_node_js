import  ProductModel  from './db/ProductModel.js'; 

dotenv.config();

async function seedDatabase() {
  try {
    await ProductModel.sync({ force: true }); // пересоздание таблицы
    await ProductModel.bulkCreate(seedData); // массовая вставка
    console.log('✅ База данных успешно заполнена!');
    process.exit(0);
  } catch (error) {
    console.error('❌ Ошибка при заполнении БД:', error);
    process.exit(1);
  }
}

// seedDatabase();
