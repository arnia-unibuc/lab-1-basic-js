const { hello, lowercase, calc, sum, createStudent }  = require('./lab1');
describe('E1', () => {
    test('outputs "Hello, Florin!"', () => {
        expect(hello("Florin")).toBe("Hello, Florin!");
    });
})

describe('E2', () => {
    test('outputs "daniel"', () => {
        expect(lowercase("DANIEL")).toBe("daniel")
    });
})

describe('E3', () => {
    test('outputs the result of all mathematical operations', () => {
        x = 67;
        y = 69;
        expect(calc(x, y, '+')).toBe((x + y));
        expect(calc(x, y, '-')).toBe((x - y));
        expect(calc(x, y, '*')).toBe((x * y));
        expect(calc(x, y, '+')).toBe((x + y));
    });
})



describe('E4', () => {
    test('calculates the sum of an array of numeric items', () => {
        const arr = [4, 6, 2, 7, 3, 9, 3];
        expect(sum(arr)).toBe(34)
    
        const arr2 = [4, 6, 2, "🥵", 3, 9];
        expect(sum(arr2)).toBe(24);
    });
})

describe('E5', () => {
    test('creates a student object', () => {
        const student = createStudent('Florin', 'Stoian', 43);
        
        expect(student).toHaveProperty('firstName', 'Florin');
        expect(student).toHaveProperty('lastName', 'Stoian');
        expect(student).toHaveProperty('age', 43);
    
        const fullStudentName = student.getFullName();
    
        expect(fullStudentName).toBe('Florin Stoian');
    })
})
