const {minNumberInRotateArray} = require('./6.minNumberInRotateArray')

test('minNumberInRotateArray test case', () => {
    const array = [3,4,5,1,2]

    expect(minNumberInRotateArray(array)).toBe(1)

    const array2 = [3,4,5,1,2]
    expect(minNumberInRotateArray(array2)).toBe(1)
    const array3 = [4,5,1,2,3]
    expect(minNumberInRotateArray(array3)).toBe(1)

    expect(minNumberInRotateArray([])).toBe(0)
    expect(minNumberInRotateArray([1])).toBe(1)


    expect(minNumberInRotateArray([6,2,3,4,5])).toBe(2)
})
