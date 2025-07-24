// Задание 1
// Модули для работы со строками
// Создайте файл `stringUtils.ts`, в котором определите функции:
// `capitalize`, которая делает первую букву строки заглавной.
// `reverseString`, которая переворачивает строку задом наперед.
// В файле `main.ts` импортируйте эти функции и протестируйте их на примерах строк.

/**
 * Делает первую букву строки заглавной.
 */
export function capitalize(str: string): string {
    if (!str) return '';
    return str.charAt(0).toUpperCase() + str.slice(1);
}


//   Переворачивает строку задом наперед.

export function reverseString(str: string): string {
    return str.split('').reverse().join('');
}

const original = 'hello world';

console.log('Оригинал:', original);
console.log('С заглавной буквой:', capitalize(original));
console.log('Перевёрнутая строка:', reverseString(original));
