const calculator = require('./calculator');

test('adding 2 numbers', () => {
    expect(calculator.add(4, 6)).toBe(10);
});

test('substract 2 numbers', () => {
    expect(calculator.subtract(10, 6)).toBe(4);
});

test('multiplies two numbers', () => {
    expect(calculator.multiply(5, 5)).toBe(25);
})

test('divides two numbers', () => {
    expect(calculator.divide(10, 2)).toBe(5);
})