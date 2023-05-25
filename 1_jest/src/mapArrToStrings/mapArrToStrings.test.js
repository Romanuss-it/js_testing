const mapArrToStrings = require('./mapArrToStrings')

describe('mapArrToStrings', () => {
  test('Коректне значення', () => {
    expect(mapArrToStrings([1, 2, 3])).toEqual(['1', '2', '3'])
  })
  test('Різне', () => {
    expect(mapArrToStrings([1, 2, 3, null, undefined, 'asfasf'])).toEqual(['1', '2', '3'])
  })
  test('Пустий масив', () => {
    expect(mapArrToStrings([])).toEqual([])
  })
  test('Заперечення', () => {
    expect(mapArrToStrings([1, 2, 3])).not.toEqual([1, 2, 3, 4])
  })
})
