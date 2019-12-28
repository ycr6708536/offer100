const {jumpFloor} = require('./8.jumpFloor')

test('jumpFloor test case', () => {
    expect(jumpFloor(1)).toBe(1)
    expect(jumpFloor(2)).toBe(2)
    expect(jumpFloor(3)).toBe(3)
    expect(jumpFloor(4)).toBe(5)
})
