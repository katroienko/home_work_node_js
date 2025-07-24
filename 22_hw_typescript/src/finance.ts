// Задание 2
// Пространства имен для финансовых операций
// Создайте файл `finance.ts`, в котором определите пространство имен `Finance`. 
// Внутри него создайте классы:
// `LoanCalculator`, который рассчитывает ежемесячные платежи по кредиту по формуле аннуитета.
// `TaxCalculator`, который рассчитывает налог на доход.
// Используйте эти классы в файле `main.ts` для расчета платежей по кредиту и налога на примерных данных.

export namespace Finance {

    /**
     * Калькулятор аннуитетных платежей по кредиту.
     */
    export class LoanCalculator {
        /**
         * Рассчитывает ежемесячный платёж по формуле аннуитета.
         * @param principal - сумма кредита
         * @param annualRate - годовая процентная ставка (в %, например, 12)
         * @param months - срок кредита в месяцах
         * @returns ежемесячный платёж
         */
        static calculateMonthlyPayment(principal: number, annualRate: number, months: number): number {
            const monthlyRate = annualRate / 100 / 12;
            return principal * monthlyRate / (1 - Math.pow(1 + monthlyRate, -months));
        }
    }

    /**
     * Калькулятор налога на доход.
     */
    export class TaxCalculator {
        /**
         * Рассчитывает налог на доход по простой ставке.
         * @param income - сумма дохода
         * @param rate - налоговая ставка (в %, например, 18)
         * @returns сумма налога
         */
        static calculateTax(income: number, rate: number): number {
            return income * rate / 100;
        }
    }
}


// Пример 1: Расчёт ежемесячного платежа по кредиту
const loanAmount = 100000;      // сумма кредита
const interestRate = 12;        // годовая ставка %
const loanTerm = 24;            // срок в месяцах

const monthlyPayment = Finance.LoanCalculator.calculateMonthlyPayment(loanAmount, interestRate, loanTerm);
console.log(`Ежемесячный платёж: ${monthlyPayment.toFixed(2)}₴`);

// Пример 2: Расчёт налога на доход
const income = 50000;
const taxRate = 18;

const tax = Finance.TaxCalculator.calculateTax(income, taxRate);
console.log(`Налог на доход: ${tax.toFixed(2)}₴`);