const validateValue = require('./validateValue')

test('Валідація значення', () => {
  expect(validateValue(50)).toBe(true)
})

describe('validateValue', () => {
  test('Коректне значення', () => {
    expect(validateValue(50)).toBe(true)
  })
  test('Менше коректного', () => {
    expect(validateValue(-1)).toBe(false)
  })
  test('Більше коректного', () => {
    expect(validateValue(101)).toBe(false)
  })
  test('Межа значення знизу', () => {
    expect(validateValue(0)).toBe(true)
  })
  test('Межа значення зверху', () => {
    expect(validateValue(100)).toBe(true)
  })
})
