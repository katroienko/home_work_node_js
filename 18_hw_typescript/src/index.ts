// Задание 1
// Объединение и пересечение типов
// Создайте два типа: `Admin` и `User`.
// Тип `Admin` должен включать поля `name` (строка) и `permissions` (массив строк), а тип `User` должен включать поля `name` (строка) и `email` (строка).
// Создайте тип `AdminUser`, который объединяет свойства обоих типов, и создайте объект этого типа.

type Admin = {
  name: string;
  permissions: string[];
};

type User = {
  name: string;
  email: string;
};

// Задание 2
// Вложенные объекты и опциональные поля
// Создайте объект `Car` с полями `make` (строка), `model` (строка), и вложенным объектом `engine`, который имеет поля `type` (строка) и `horsepower` (число).
// Добавьте опциональное поле `year` (число) для года выпуска машины.
// Напишите функцию, которая выводит информацию о машине.
type Car = {
  make: string;
  model: string;
  engine: {
    type: string;
    horsepower: number;
  };
  year?: number; 
};

const myCar: Car = {
  make: "Toyota",
  model: "Camry",
  engine: {
    type: "Hybrid",
    horsepower: 200
  },
  year: 2022
};


function printCarInfo(car: Car): void {
  console.log(`Марка: ${car.make}`);
  console.log(`Модель: ${car.model}`);
  console.log(`Двигатель: ${car.engine.type}, ${car.engine.horsepower} л.с.`);
  if (car.year !== undefined) {
    console.log(`Год выпуска: ${car.year}`);
  } else {
    console.log("Год выпуска не указан.");
  }
}

printCarInfo(myCar);

const oldCar: Car = {
  make: "Ford",
  model: "Focus",
  engine: {
    type: "Petrol",
    horsepower: 120
  }
};

printCarInfo(oldCar);


// Задание 3
// Интерфейс для функции с объектом
// Создайте интерфейс для функции `calculateDiscount`, которая принимает объект `Product` с полями `name` (строка) и `price` (число), а также параметр `discount` (число).
// Функция должна возвращать новую цену продукта с учетом скидки.

interface Product {
  name: string;
  price: number;
}

interface CalculateDiscount {
  (product: Product, discount: number): number;
}

const calculateDiscount: CalculateDiscount = (product, discount) => {
  return product.price * (1 - discount);
};

const prod: Product = { name: "Shoes", price: 100 };
const newPrice = calculateDiscount(prod, 0.2); 
console.log(newPrice); 

// Задание 5
// Массив объектов и функции
// Создайте интерфейс `Employee`, который включает поля `name` (строка) и `salary` (число).
// Создайте массив объектов `Employee`, затем напишите функцию, которая принимает этот массив и возвращает массив зарплат всех сотрудников.

interface Employee {
  name: string;
  salary: number;
}

const employees: Employee[] = [
  { name: "Alice", salary: 5000 },
  { name: "Alex", salary: 4500 },
  { name: "Max", salary: 6000 }
];

function getSalaries(empArray: Employee[]): number[] {
  return empArray.map(employee => employee.salary);
}

// Задание 5
// Наследование интерфейсов и работа с объектами
// Создайте интерфейс `Person` с полями `firstName` (строка) и `lastName` (строка).
// Создайте интерфейс `Student`, который наследует `Person` и добавляет поле `grade` (число).
// Создайте объект `student` этого типа и напишите функцию, которая выводит полное имя студента и его оценку.

interface Person {
  firstName: string;
  lastName: string;
}
interface Student extends Person {
  grade: number;
}
const student: Student = {
  firstName: "Ivan",
  lastName: "Petrov",
  grade: 90
};

function printStudentInfo(s: Student): void {
  console.log(`Студент: ${s.firstName} ${s.lastName}, Оценка: ${s.grade}`);
}

printStudentInfo(student);

// Задание 6
// Интерфейс для функции с несколькими параметрами
// Создайте интерфейс для функции `concatStrings`, которая принимает два параметра: `str1` и `str2` (оба строки) и возвращает их объединение.
// Реализуйте эту функцию и протестируйте её.

interface ConcatStrings {
  (str1: string, str2: string): string;
}

const concatStrings: ConcatStrings = (str1, str2) => {
  return str1 + str2;
};

console.log(concatStrings("Hello, ", "world!")); 
console.log(concatStrings("Type", "Script"));    