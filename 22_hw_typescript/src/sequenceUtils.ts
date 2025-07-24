// Задание 4
// Модули для работы с числовыми последовательностями
// Создайте файл `sequenceUtils.ts`, в котором определите функции:
// `generateFibonacci`, которая генерирует последовательность Фибоначчи до указанного числа.
// `generatePrimeNumbers`, которая генерирует простые числа до указанного числа.
// В файле `main.ts` импортируйте эти функции и протестируйте их на примерах.



/**
 * Генерирует последовательность Фибоначчи до указанного числа (включительно).
 *  */
export function generateFibonacci(limit: number): number[] {
    const result: number[] = [];
    let a = 0, b = 1;

    while (a <= limit) {
        result.push(a);
        [a, b] = [b, a + b];
    }

    return result;
}

/**
 * Генерирует простые числа до указанного числа (включительно).
 */
export function generatePrimeNumbers(limit: number): number[] {
    const result: number[] = [];

    for (let i = 2; i <= limit; i++) {
        let isPrime = true;

        for (let j = 2; j <= Math.sqrt(i); j++) {
            if (i % j === 0) {
                isPrime = false;
                break;
            }
        }

        if (isPrime) {
            result.push(i);
        }
    }

    return result;
}


// Пример: Последовательность Фибоначчи до 100
const fibonacci = generateFibonacci(100);
console.log('Фибоначчи до 100:', fibonacci);

// Пример: Простые числа до 50
const primes = generatePrimeNumbers(50);
console.log('Простые числа до 50:', primes);