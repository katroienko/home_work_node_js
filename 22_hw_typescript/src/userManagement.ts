// Задание 3

// Вложенные пространства имен для управления пользователями

// Создайте файл `userManagement.ts`, в котором определите пространство имен `UserManagement`.

// Внутри него создайте вложенное пространство имен `Admin`. Внутри `Admin` создайте класс `AdminUser`, который будет иметь свойства для имени, email и прав доступа (например, `isSuperAdmin`).

// Также создайте методы для изменения прав доступа.

// Используйте этот класс в файле `main.ts` для создания администратора и изменения его прав.

// userManagement.ts

export namespace UserManagement {
    
    export namespace Admin {

        /**
         * Класс, представляющий администратора.
         */
        export class AdminUser {
            name: string;
            email: string;
            isSuperAdmin: boolean;

            constructor(name: string, email: string, isSuperAdmin: boolean = false) {
                this.name = name;
                this.email = email;
                this.isSuperAdmin = isSuperAdmin;
            }

            /**
             * Назначить супер-администратора.
             */
            grantSuperAdmin(): void {
                this.isSuperAdmin = true;
            }

            /**
             * Лишить прав супер-администратора.
             */
            revokeSuperAdmin(): void {
                this.isSuperAdmin = false;
            }

            /**
             * Показать информацию об администраторе.
             */
            printInfo(): void {
                console.log(`Имя: ${this.name}`);
                console.log(`Email: ${this.email}`);
                console.log(`Супер-админ: ${this.isSuperAdmin ? 'Да' : 'Нет'}`);
            }
        }
    }
}

// Создание администратора
const admin = new UserManagement.Admin.AdminUser('Анна Иваненко', 'anna@example.com');

console.log('До изменения прав:');
admin.printInfo();

// Назначаем супер-админа
admin.grantSuperAdmin();

console.log('\nПосле назначения супер-админа:');
admin.printInfo();

// Отменяем права супер-админа
admin.revokeSuperAdmin();

console.log('\nПосле отзыва прав супер-админа:');
admin.printInfo();