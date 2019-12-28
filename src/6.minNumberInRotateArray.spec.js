const {minNumberInRotateArray} = require('./6.minNumberInRotateArray')

test('minNumberInRotateArray test case', () => {
    const array = [3,4,5,1,2]
    expect(minNumberInRotateArray(array)).toBe(1)

    const array2 = [3,6,4,5,1,2]
    expect(minNumberInRotateArray(array2)).toBe(1)
})
