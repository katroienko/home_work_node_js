// Задание 1
// Функция приветствия
// Напишите функцию `greetUser`, которая принимает имя пользователя (строка) и выводит приветственное сообщение в консоль: `"Привет, <name>!"`. Используйте строгую типизацию.

const greetUser =( name: string, lastName: string): string =>
    {
       return `Hi ${name} ${lastName}`
}

console.log(greetUser('Eva', 'Langoria'));




// Задание 2
// Типизация функции с объектом в качестве параметра
// Создайте интерфейс `Person`, который описывает человека с полями `name`, `age`, и `city`.
// Напишите функцию `printPersonInfo`, которая принимает объект типа `Person` и выводит информацию о человеке в формате: `"Имя: <name>, Возраст: <age>, Город: <city>"`.


interface Person {
  name: string;
  age: number;
  city: string;
}

// Function that accepts an object of type Person
const printPersonInfo = (person: Person): void => {
  console.log(`Name: ${person.name}, Age: ${person.age}, City: ${person.city}`);
};

// Example call
const person1: Person = {
  name: "Alexey",
  age: 30,
  city: "Kyiv"
};

printPersonInfo(person1);


// Задание 3
// Простая типизация для числового параметра
// Напишите функцию `squareNumber`, которая принимает число и возвращает его квадрат. Используйте строгую типизацию.

const squareNumber = (num: number): number => {
  return num * num;
};

console.log(squareNumber(5)); // Output: 25

// Задание 4
// Типизация функции с boolean
// Напишите функцию `isEven`, которая принимает число и возвращает `true`, если число четное, и `false`, если нечетное. Используйте строгую типизацию.

const isEven = (num: number): boolean => {
  return num % 2 === 0;
};

console.log(isEven(4)); // Output: true


// Задание 5
// Создание интерфейса для объекта
// Создайте интерфейс `Student`, который описывает студента с полями `name` (строка) и `grade` (число).
// Напишите функцию `printStudentInfo`, которая принимает объект типа `Student` и выводит информацию о студенте в формате: `"Студент: <name>, Оценка: <grade>"`.

interface Student {
  name: string;
  grade: number;
}


const printStudentInfo = (student: Student): void => {
  console.log(`Студент: ${student.name}, Оценка: ${student.grade}`);
};

const student1: Student = {
  name: "Ольга",
  grade: 9
};

printStudentInfo(student1);


// Задание 6
// Функция с типом `void`
// Напишите функцию `logMessage`, которая принимает строку и выводит её в консоль без возвращаемого значения. Используйте тип `void`.
const logMessage = (message: string): void => {
  console.log(message);
};

logMessage("Hello, world!");
