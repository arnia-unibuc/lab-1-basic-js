const hello = require('./lab1');

test('outputs the correct string', () => {
    expect(hello()).toBe("Hello world!");
});