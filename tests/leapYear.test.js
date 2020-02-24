const leapYear = require('../modules/leapYear.js')

test('divisble by 400', () => {
    expect(leapYear(800)).toBe(true)
})

test('divisble by 100', () => {
    expect(leapYear(200)).toBe(false)
})

test('divisble by 4', () => {
    expect(leapYear(8)).toBe(true)
})