const reverseString = require('./reverseString');

test('capitalizes the first letter of a string', () => {
    expect(reverseString('hello')).toBe('olleh');
    expect(reverseString('world')).toBe('dlrow');
});