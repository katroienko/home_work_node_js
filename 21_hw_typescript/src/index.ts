// Абстрактный класс Animal
// Создайте абстрактный класс Animal с абстрактным методом makeSound().
// Затем создайте классы Dog и Cat, которые наследуют Animal и реализуют метод makeSound() по-своему (Dog должен возвращать "Bark", а Cat — "Meow").
// Создайте массив типа Animal[], включающий объекты Dog и Cat, и вызовите метод makeSound() для каждого элемента массива.

abstract class Animal {
  abstract makeSound(): string;
}

class Dog extends Animal {
 override  makeSound(): string {
    return "Bark";
  }
}

class Cat extends Animal {
 override  makeSound(): string {
    return "Meow";
  }
}


const animals: Animal[] = [new Dog(), new Cat()];

animals.forEach(animal => {
  console.log(animal.makeSound());
});


// Задание 2
// Абстрактный класс Shape с цветом
// Создайте абстрактный класс `ColoredShape`, который наследует `Shape` (из задания 4 на уроке) и добавляет абстрактное поле `color`.
// Реализуйте классы `ColoredCircle` и `ColoredRectangle`, которые наследуют `ColoredShape`, задают `color` и реализуют метод `calculateArea()`.
// Выведите площадь и цвет для каждого объекта.
// Абстрактный базовый класс Shape
abstract class Shape {
  abstract calculateArea(): number;
}
abstract class ColoredShape extends Shape {
  abstract color: string;
}

class ColoredCircle extends ColoredShape {
  radius: number;
  override color: string;

  constructor(radius: number, color: string) {
    super();
    this.radius = radius;
    this.color = color;
  }

  override calculateArea(): number {
    return Math.PI * this.radius * this.radius;
  }
}


class ColoredRectangle extends ColoredShape {
  width: number;
  height: number;
  override color: string;

  constructor(width: number, height: number, color: string) {
    super();
    this.width = width;
    this.height = height;
    this.color = color;
  }

  override calculateArea(): number {
    return this.width * this.height;
  }
}

// Создаем объекты и выводим площадь и цвет
const shapes: ColoredShape[] = [
  new ColoredCircle(5, "red"),
  new ColoredRectangle(4, 6, "blue"),
];

shapes.forEach(shape => {
  console.log(`Color: ${shape.color}, Area: ${shape.calculateArea().toFixed(2)}`);
});

// Задание 3
// Абстрактный класс Appliance
// Создайте абстрактный класс `Appliance` с абстрактными методами `turnOn()` и `turnOff()`.
// Затем создайте классы `WashingMachine` и `Refrigerator`, которые наследуют `Appliance` и реализуют методы `turnOn()` и `turnOff()`, выводя соответствующие сообщения.
// Создайте массив типа `Appliance[]`, добавьте в него объекты `WashingMachine` и `Refrigerator`, и вызовите методы `turnOn()` и `turnOff()` для каждого элемента.

// Абстрактный класс Appliance
abstract class Appliance {
  abstract turnOn(): void;
  abstract turnOff(): void;
}

class WashingMachine extends Appliance {
  override turnOn(): void {
    console.log("Washing machine is now ON ");
  }

  override turnOff(): void {
    console.log("Washing machine is now OFF ");
  }
}


class Refrigerator extends Appliance {
  override turnOn(): void {
    console.log("Refrigerator is now ON ");
  }

  override turnOff(): void {
    console.log("Refrigerator is now OFF ");
  }
}


const appliances: Appliance[] = [
  new WashingMachine(),
  new Refrigerator()
];

for (const appliance of appliances) {
  appliance.turnOn();
  appliance.turnOff();
}


// Задание 4
// Абстрактный класс Account
// Создайте абстрактный класс `Account` с абстрактными методами `deposit(amount: number)` и `withdraw(amount: number)`.
// Реализуйте классы `SavingsAccount` и `CheckingAccount`, которые наследуют `Account`.
// В классе `SavingsAccount` добавьте логику для начисления процентов на остаток.
// В классе `CheckingAccount` реализуйте снятие средств с учетом комиссии. 
// Проверьте работу методов на объектах обоих классов.

// Абстрактный класс Account
abstract class Account {
  protected balance: number;

  constructor(initialBalance: number) {
    this.balance = initialBalance;
  }

  abstract deposit(amount: number): void;
  abstract withdraw(amount: number): void;

  getBalance(): number {
    return this.balance;
  }
}


class SavingsAccount extends Account {
  private interestRate: number; 

  constructor(initialBalance: number, interestRate: number) {
    super(initialBalance);
    this.interestRate = interestRate;
  }

  override deposit(amount: number): void {
    this.balance += amount;
    console.log(`💰 Savings: Deposited ${amount}, new balance: ${this.balance}`);
  }

  override withdraw(amount: number): void {
    if (amount <= this.balance) {
      this.balance -= amount;
      console.log(` Savings: Withdrew ${amount}, new balance: ${this.balance}`);
    } else {
      console.log("Savings: Not enough funds");
    }
  }

  addInterest(): void {
    const interest = this.balance * (this.interestRate / 100);
    this.balance += interest;
    console.log(` Savings: Interest ${interest.toFixed(2)} added, new balance: ${this.balance.toFixed(2)}`);
  }
}


class CheckingAccount extends Account {
  private fee: number;

  constructor(initialBalance: number, fee: number) {
    super(initialBalance);
    this.fee = fee;
  }

  override deposit(amount: number): void {
    this.balance += amount;
    console.log(`Checking: Deposited ${amount}, new balance: ${this.balance}`);
  }

  override withdraw(amount: number): void {
    const total = amount + this.fee;
    if (total <= this.balance) {
      this.balance -= total;
      console.log(`Checking: Withdrew ${amount} + fee ${this.fee}, new balance: ${this.balance}`);
    } else {
      console.log("Checking: Not enough funds (including fee)");
    }
  }
}


const savings = new SavingsAccount(1000, 5); 
savings.deposit(500);
savings.withdraw(300);
savings.addInterest();

console.log("------------");

const checking = new CheckingAccount(1000, 10); 
checking.deposit(200);
checking.withdraw(500);
checking.withdraw(800); 


// Задание 5
//  Абстрактный класс Media
// Создайте абстрактный класс `Media` с абстрактным методом `play()`.
// Затем создайте классы `Audio` и `Video`, которые наследуют `Media` и реализуют метод `play()` по-своему (например, `Audio` выводит "Playing audio", а `Video` — "Playing video").
// Создайте массив типа `Media[]`, включающий объекты `Audio` и `Video`, и вызовите метод `play()` для каждого элемента массива.


abstract class Media {
  abstract play(): void;
}


class Audio2 extends Media {
  override play(): void {
    console.log(" Playing audio");
  }
}


class Video extends Media {
  override play(): void {
    console.log(" Playing video");
  }
}

// Массив объектов типа Media
const mediaLibrary: Media[] = [
  new Audio2(),
  new Video(),
  new Audio2(),
  new Video(),
];

// Вызов метода play() для каждого элемента
for (const item of mediaLibrary) {
  item.play();
}
