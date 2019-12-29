const {jumpFloorII} = require('./9.jumpFloorII')

test('jumpFloorII test case', () => {
    expect(jumpFloorII(1)).toBe(1)
    expect(jumpFloorII(2)).toBe(2)
    expect(jumpFloorII(3)).toBe(4)
    expect(jumpFloorII(4)).toBe(8)
})
