// Задание 1
// Класс `Animal` и его наследник `Dog`
// Создайте класс `Animal`, который содержит свойства `name` (имя животного) и `species` (вид животного).
// Добавьте метод `sound()`, который выводит в консоль `"The animal makes a sound"`.
// Затем создайте класс-наследник `Dog`, который добавляет новое свойство `breed` (порода собаки) и переопределяет метод `sound()`, чтобы он выводил `"The dog barks"`.


class Animal {
  name: string;
  species: string;

  constructor(name: string, species: string) {
    this.name = name;
    this.species = species;
  }

  sound(): void {
    console.log("The animal makes a sound");
  }
}


class Dog extends Animal {
  breed: string;

  constructor(name: string, species: string, breed: string) {
    super(name, species); 
    this.breed = breed;
  }

  override sound(): void {
    console.log("The dog barks");
  }
}


const myDog = new Dog("Buddy", "Canine", "Labrador");
console.log(myDog.name);       
console.log(myDog.species);     
console.log(myDog.breed);       
myDog.sound();                  




// Задание 2
// Статическое свойство для учета всех книг
// Создайте класс `Library`, который имеет статическое свойство `totalBooks` (общее количество книг).
// При каждом добавлении книги это свойство должно увеличиваться.
// В классе также должен быть метод `addBook()`, который увеличивает счетчик книг.
// Создайте несколько объектов класса и проверьте, как изменяется общее количество книг.

class Library {
    static totalBooks: number = 0;

  addBook() {
    Library.totalBooks++;
  }
}

const library1 = new Library();
const library2 = new Library();
const library3 = new Library();

library1.addBook(); 
library2.addBook(); 
library2.addBook(); 
library3.addBook(); 

console.log(`Total books: ${Library.totalBooks}`); // Total books: 4


// Задание 3
// Переопределение конструктора в классе `Vehicle`
// Создайте класс `Vehicle`, который содержит свойства `make` (марка) и `model` (модель).
// Добавьте конструктор, который инициализирует эти свойства.
// Затем создайте класс-наследник `Motorcycle`, который добавляет новое свойство `type` (тип мотоцикла) и переопределяет конструктор для инициализации всех трех свойств.
// Убедитесь, что данные правильно инициализируются при создании объекта.

class Vehicle {
  make: string;
  model: string;

  constructor(make: string, model: string) {
    this.make = make;
    this.model = model;
  }
}


class Motorcycle extends Vehicle {
  type: string;

  constructor(make: string, model: string, type: string) {
    super(make, model); 
    this.type = type;   
  }
}


const moto = new Motorcycle('Yamaha', 'MT-07', 'naked');

console.log(moto.make); 
console.log(moto.model); 
console.log(moto.type); 
