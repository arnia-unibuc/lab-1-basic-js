const { hello, lowercase, calc, sum, createStudent }  = require('./lab1');

test('outputs "Hello, Florin!"', () => {
    expect(hello("Florin")).toBe("Hello, Florin!");
});

test('outputs "daniel"', () => {
    expect(lowercase("DANIEL")).toBe("daniel")
});

test('outputs the result of all mathematical operations', () => {
    x = 18;
    y = 69;
    expect(calc(x, y, '+')).toBe((x + y));
    expect(calc(x, y, '-')).toBe((x - y));
    expect(calc(x, y, '*')).toBe((x * y));
    expect(calc(x, y, '+')).toBe((x + y));
});

test('calculates the sum of an array of numeric items', () => {
    const arr = [4, 6, 2, 7, 3, 9, 3];
    expect(sum(arr)).toBe(34)

    const arr2 = [4, 6, 2, "🥵", 3, 9];
    expect(sum(arr2)).toBe(24);
})

test('creates a student object', () => {
    const student = createStudent('Florin', 'Stoian', 43);
    
    expect(student).toHaveProperty('firstName', 'Florin');
    expect(student).toHaveProperty('lastName', 'Stoian');
    expect(student).toHaveProperty('age', 43);

    const fullStudentName = student.getFullName();

    expect(fullStudentName).toBe('Florin Stoian');
})