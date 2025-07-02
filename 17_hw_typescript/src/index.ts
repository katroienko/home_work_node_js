// Задание 1
// Типизация функции с несколькими параметрами
// Напишите функцию `calculateTotal`, которая принимает три параметра:  
// `price` (число)  
// `quantity` (число)  
// `discount` (число, по умолчанию равен 0)



function calculateTotal(price: number, quantity: number, discount: number = 0): number {
  const subtotal = price * quantity;
  const total = subtotal - discount;
  return total;
}

const result = calculateTotal(100, 2); 
console.log(result); 

const resultWithDiscount = calculateTotal(100, 2, 30);
console.log(resultWithDiscount);


// Задание 2
// Использование Union типов
// Создайте переменную `id`, которая может быть либо строкой, либо числом.  
// Напишите функцию `displayId`, которая принимает эту переменную и выводит сообщение, содержащее значение ID. Если `id` — строка, выведите её в верхнем регистре. Если `id` — число, умножьте его на 10 перед выводом.

let id: string | number;


function displayId(id: string | number): void {
  if (typeof id === "string") {
    console.log("ID:", id.toUpperCase());
  } else {
    console.log("ID:", id * 10);
  }
}


displayId("abc123"); 
displayId(42);      


// Задание 3
// Объявление и типизация массивов объектов
// Создайте массив объектов `orders`, где каждый объект описывает заказ и содержит следующие свойства:  
// `orderId` (строка)  
// `amount` (число)  
// `status` (строка, может принимать значения "pending", "shipped" или "delivered")
// Напишите функцию `filterOrdersByStatus`, которая принимает этот массив и строку `status`, и возвращает массив заказов, соответствующих указанному статусу.

type OrderStatus = "pending" | "shipped" | "delivered";


interface Order {
  orderId: string;
  amount: number;
  status: OrderStatus;
}


const orders: Order[] = [
  { orderId: "A001", amount: 120, status: "pending" },
  { orderId: "A002", amount: 250, status: "shipped" },
  { orderId: "A003", amount: 90, status: "delivered" },
  { orderId: "A004", amount: 150, status: "pending" }
];

function filterOrdersByStatus(orders: Order[], status: OrderStatus): Order[] {
  return orders.filter(order => order.status === status);
}


const pendingOrders = filterOrdersByStatus(orders, "pending");
console.log(pendingOrders);


// Задание 4
// Работа с кортежами и объектами
// Создайте кортеж `productInfo`, который содержит:  
// название товара (строка)  
// его цену (число)  
// количество на складе (число)
// Напишите функцию `updateStock`, которая принимает объект `inventory` (где ключ — это название товара, а значение — количество на складе) и кортеж `productInfo`, обновляет количество товара в объекте `inventory` и возвращает обновленный объект.

type ProductInfo = [string, number, number];


type Inventory = {
  [key: string]: number;
}

function updateStock(inventory: Inventory, productInfo: ProductInfo): Inventory {
  const [productName, , quantity] = productInfo;

  inventory[productName] = (inventory[productName] || 0) + quantity;

  return inventory;
}

const inventory: Inventory = {
  "Apple": 10,
  "Banana": 5
};

const productInfo: ProductInfo = ["Apple", 1.5, 3];

const updatedInventory = updateStock(inventory, productInfo);
console.log(updatedInventory);
