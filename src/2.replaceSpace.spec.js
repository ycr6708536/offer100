const {replaceSpace} = require('./2.replaceSpace')

test('We Are Happy', () => {
    expect(replaceSpace('We Are Happy')).toBe('We%20Are%20Happy')
})
