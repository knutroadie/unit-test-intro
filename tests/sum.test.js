const addinator = require('../modules/addinator.js')

// test happy path
test('sum of 1 and 1 is 2', () => {
    expect(addinator(1,1)).toBe(2)
})

test('sum of -1 and 2 is 1', () => {
    expect(addinator(-1,2)).toBe(1)
})

test('sum of 1.5 and 1 is 2.5', () => {
    expect(addinator(1.5,1)).toBe(2.5)
})

test('sum of 1 is 1', () => {
    expect(addinator(1)).toBe()
})

test('sum of strings', () => {
    expect(addinator('1','1')).toBe(2)
})