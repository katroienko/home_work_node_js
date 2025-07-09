//  Задание 1
// Напишите стрелочную функцию `sumEvenNumbers`, которая принимает массив чисел и возвращает сумму всех четных чисел.

const sumEvenNumbers = (numbers: number[]): number => {
  return numbers
    .filter(num => num % 2 === 0)  
    .reduce((sum, num) => sum + num, 0); 
};


const result = sumEvenNumbers([1, 2, 3, 4, 5, 6]);
console.log(result); 



// Задание 2
// Определите интерфейс `StringToBooleanFunction` для функции, которая принимает строку и возвращает `boolean` (например, проверяет, является ли строка пустой). Реализуйте такую функцию.

interface StringToBooleanFunction {
  (input: string): boolean;
}

const isEmpty: StringToBooleanFunction = (input) => {
  return input.trim() === '';
};

console.log(isEmpty(""));      
console.log(isEmpty("   "));   
console.log(isEmpty("hello"));

// Задание 3
// Создайте тип `CompareStrings` для функции, принимающей две строки и возвращающей `boolean` (например, для проверки равенства строк). Напишите функцию, соответствующую этому типу.
type CompareStrings = (a: string, b: string) => boolean;


const areStringsEqual: CompareStrings = (a, b) => {
  return a === b;
};

console.log(areStringsEqual("hello", "hello"));
console.log(areStringsEqual("hello", "world"))

// Задание 4
// Напишите обобщенную функцию `getLastElement`, которая принимает массив любого типа и возвращает последний элемент этого массива.

function getLastElement<T>(arr: T[]): T | undefined {
  return arr[arr.length - 1];
}

console.log(getLastElement([1, 2, 3]));     
console.log(getLastElement(['е', 'd', 'c']));   
console.log(getLastElement([true, false, true])); 
console.log(getLastElement([]));               

// Задание 5
// Создайте обобщенную функцию make Triple, которая принимает три аргумента одного типа и возвращает массив из этих трёх элементов.

function makeTriple<T>(a: T, b: T, c: T): T[] {
  return [a, b, c];
}

console.log(makeTriple(1, 2, 3));          
console.log(makeTriple('a', 'b', 'c'));      
console.log(makeTriple(true, false, true));    
console.log(makeTriple({x:1}, {x:2}, {x:3}));  