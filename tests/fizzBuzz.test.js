const fizzBuzz = require('../modules/fizzBuzz.js')

test('30 is FizzBuzz', () => {
    expect(fizzBuzz(15)).toBe('FizzBuzz')
})

test('10 is Buzz', () => {
    expect(fizzBuzz(5)).toBe('Buzz')
})

test('9 is Fizz', () => {
    expect(fizzBuzz(3)).toBe('Fizz')
})