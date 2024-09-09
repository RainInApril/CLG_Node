// Import the calculate module
const mathOperations = require('./calculate');

// Test cases for sum function
test('Adding 2 numbers should return the correct sum', () => {
    expect(mathOperations.sum(2, 3)).toBe(5);
    expect(mathOperations.sum(-1, 1)).toBe(0);
    expect(mathOperations.sum(0, 0)).toBe(0);
});

// Failing test case for sum function
test('Failing test for sum', () => {
    expect(mathOperations.sum(2, 3)).toBe(6); // This test will fail intentionally
});

// Test cases for subtract function
test('Subtracting 2 numbers should return the correct difference', () => {
    expect(mathOperations.subtract(5, 3)).toBe(2);
    expect(mathOperations.subtract(10, 5)).toBe(5);
    expect(mathOperations.subtract(0, 5)).toBe(-5);
});

// Test cases for multiply function
test('Multiplying 2 numbers should return the correct product', () => {
    expect(mathOperations.multiply(2, 3)).toBe(6);
    expect(mathOperations.multiply(-1, 5)).toBe(-5);
    expect(mathOperations.multiply(0, 10)).toBe(0);
});