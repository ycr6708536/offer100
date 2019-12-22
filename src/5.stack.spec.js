const {push, pop} = require('./5.stack')

test('stack test case', () => {
    push(1)
    push(2)
    push(4)
    expect(pop()).toBe(1)
    expect(pop()).toBe(2)
    expect(pop()).toBe(4)
})
