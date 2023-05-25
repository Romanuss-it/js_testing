const square = require('./square')

describe('square', () => {
  let mockValue

  beforeEach(() => {
    //наприклад додади юзера
  })

  beforeAll(() => {})
  test('Правильне значення', () => {
    const spyMathPow = jest.spyOn(Math, 'pow')
    square(2)
    expect(spyMathPow).toBeCalledTimes(1)
  })

  test('Правильне значення', () => {
    const spyMathPow = jest.spyOn(Math, 'pow')
    square(1)
    expect(spyMathPow).toBeCalledTimes(0)
  })

  afterEach(() => {
    //видалити
    jest.clearAllMocks()
  })
  afterAll(() => {})
})
