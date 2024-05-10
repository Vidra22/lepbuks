function greet(name: string): string {
    return `Hello, ${name}!`;
}

const greetingMessage = greet("Alice"); // Виклик функції
console.log(greetingMessage); // Вивід: "Hello, Alice!"

function multiply(x: number, y: number): number {
    return x * y;
}

const product = multiply(5, 3); // Виклик функції
console.log(product); // Вивід: 15

function power(base: number, exponent: number = 2): number {
    return Math.pow(base, exponent);
}

const squared = power(3); // Виклик функції з одним аргументом
console.log(squared); // Вивід: 9

const cubed = power(3, 3); // Виклик функції з двома аргументами
console.log(cubed); // Вивід: 27

function sum(firstNumber: number, ...restNumbers: number[]): number {
    let total = firstNumber;
    for (const num of restNumbers) {
        total += num;
    }
    return total;
}

const totalSum = sum(1, 2, 3, 4, 5); // Виклик функції з декількома аргументами
console.log(totalSum); // Вивід: 15
