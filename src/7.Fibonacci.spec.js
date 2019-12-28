const {Fibonacci} = require('./7.Fibonacci')

test('Fibonacci test case', () => {
    expect(Fibonacci(1)).toBe(1)
    expect(Fibonacci(2)).toBe(1)
    expect(Fibonacci(3)).toBe(2)
    expect(Fibonacci(4)).toBe(3)
    expect(Fibonacci(5)).toBe(5)
    expect(Fibonacci(6)).toBe(8)
})
