// Задание 1
// Обработка цепочки промисов с `async/await`
// Создайте несколько функций, которые возвращают промисы с разным временем выполнения.
// Напишите функцию, которая вызывает эти промисы поочерёдно, используя `await`, и обрабатывает результаты каждой операции.
// Убедитесь, что цепочка промисов выполняется последовательно.

// main.ts

/**
 * Симулює асинхронну операцію з задержкой
 */
function fetchData1(): Promise<string> {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('Данные 1 получены через 1 секунду');
        }, 1000);
    });
}

function fetchData2(): Promise<string> {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('Данные 2 получены через 2 секунды');
        }, 2000);
    });
}

function fetchData3(): Promise<string> {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('Данные 3 получены через 1.5 секунды');
        }, 1500);
    });
}

/**
 * Последовательно вызывает асинхронные функции
 */
async function runSequentially() {
    console.log('Начинаем выполнение цепочки промисов...\n');

    const result1 = await fetchData1();
    console.log(result1); 

    const result2 = await fetchData2();
    console.log(result2); 

    const result3 = await fetchData3();
    console.log(result3); 

    console.log('\nВсе операции завершены');
}

runSequentially();

// Задание 2
// Асинхронная обработка данных из массива
// Напишите функцию, которая принимает массив строк.
// Каждая строка будет асинхронно обрабатываться (например, преобразовываться в верхний регистр с задержкой).
// Используйте `Promise.all` для выполнения всех операций параллельно и вывода всех результатов.

function processStringAsync(str: string): Promise<string> {
    return new Promise(resolve => {
        const delay = Math.floor(Math.random() * 1000) + 500; // задержка от 500 до 1500 мс
        setTimeout(() => {
            resolve(str.toUpperCase());
        }, delay);
    });
}

/**
 * Обрабатывает массив строк параллельно
 * @param strings - массив строк
 */
async function processAllStrings(strings: string[]): Promise<void> {
    console.log('Обработка началась...\n');

    const promises = strings.map(str => processStringAsync(str));
    const results = await Promise.all(promises);

    console.log('Результаты обработки:');
    results.forEach((res, i) => {
        console.log(`  ${i + 1}. ${res}`);
    });

    console.log('\nВсе строки обработаны.');
}

const inputStrings = ['hello', 'world', 'typescript', 'async', 'await'];
processAllStrings(inputStrings);

// Задание 3
// Обработка ошибки в параллельных промисах
// Напишите функцию, которая вызывает три промиса параллельно с помощью `Promise.all`.
// Один из промисов должен намеренно завершиться с ошибкой через `reject`. 
// Обработайте эту ошибку с использованием `try/catch` и выведите соответствующее сообщение.

function successPromise(name: string, delay: number): Promise<string> {
    return new Promise(resolve => {
        setTimeout(() => resolve(`${name} выполнен успешно`), delay);
    });
}


function failPromise(name: string, delay: number): Promise<string> {
    return new Promise((_, reject) => {
        setTimeout(() => reject(new Error(`${name} завершился с ошибкой`)), delay);
    });
}


async function runParallelWithErrorHandling() {
    const p1 = successPromise('Промис 1', 1000);
    const p2 = failPromise('Промис 2 (ошибка)', 1500); 
    const p3 = successPromise('Промис 3', 500);

    try {
        const results = await Promise.all([p1, p2, p3]);
        console.log('Результаты:', results);
    } catch (error) {
        console.error(' Ошибка при выполнении промисов:', (error as Error).message);
    } finally {
        console.log(' Все промисы обработаны (успехи или ошибки)');
    }
}

runParallelWithErrorHandling();


// Задание 4
// Асинхронная функция с динамическим временем выполнения
// Напишите асинхронную функцию, которая принимает массив чисел.
// Для каждого числа создайте промис, который будет завершаться через количество миллисекунд, равное значению числа.
// Используйте `Promise.all` для ожидания завершения всех промисов и вывода результатов в консоль.

/**
 * Функция, которая возвращает промис, завершающийся через N миллисекунд
  */
function delayWithValue(value: number): Promise<number> {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(value);
        }, value); 
    });
}

/**
 * Асинхронная функция, принимающая массив чисел и ожидающая завершения всех промисов
 */
async function runDynamicDelays(numbers: number[]): Promise<void> {
    console.log(' Запуск асинхронных задержек...');

    const promises = numbers.map(delayWithValue); 
    const results = await Promise.all(promises); 

    console.log(' Все задержки завершены. Результаты:');
    console.log(results); 
}


runDynamicDelays([1000, 500, 1500, 700]);
