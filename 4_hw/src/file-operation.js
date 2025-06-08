import "dotenv/config";
import * as fs from 'node:fs/promises';

const filename = process.env.FILENAME;

const content = 'Привет!';

try {
 
  await fs.writeFile(filename, content, 'utf-8');
  console.log(`Файл "${filename}" успешно создан и заполнен.`);

  const fileData = await fs.readFile(filename, 'utf-8');
  console.log('Содержимое файла:');
  console.log(fileData);
} catch (error) {
  console.error(' Ошибка при работе с файлом:', error.message);
}
