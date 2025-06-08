import { DateTime } from 'luxon';

const now = DateTime.local();


const format1 = now.toFormat('dd-MM-yyyy');   
const format2 = now.toFormat("LLL dd '23");   // MMM Do YY (имитация "Do" и "YY")
const format3 = now.toFormat('cccc');         // день недели

// Вывод в консоль
console.log('Формат DD-MM-YYYY:', format1);
console.log('Формат MMM Do YY:', format2);
console.log('Формат dddd:', format3);
