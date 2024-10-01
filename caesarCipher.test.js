const caesarCipher = require('./caesarCipher');

test(' test wrapping from xyz to next 3', () => {
    expect(caesarCipher('xyz', 3)).toBe('abc');
});

test(' test wrapping from xyz to next 3', () => {
    expect(caesarCipher('xyz', 3)).toBe('abc');
});

test(' test wrapping from Hello, World! to next 3', () => {
    expect(caesarCipher('Hello, World!', 3)).toBe('Khoor, Zruog!');
});