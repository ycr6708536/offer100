const {rectCover} = require('./10.rectCover')

test('rectCover test case', () => {
    expect(rectCover(0)).toBe(0)
    expect(rectCover(1)).toBe(1)
    expect(rectCover(2)).toBe(2)
    expect(rectCover(3)).toBe(3)
    expect(rectCover(4)).toBe(5)
})
