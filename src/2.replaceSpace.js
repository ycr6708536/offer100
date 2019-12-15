/*
题目描述
请实现一个函数，将一个字符串中的每个空格替换成“%20”。例如，当字符串为We Are Happy.则经过替换之后的字符串为We%20Are%20Happy。
* */
/**
 * 思路：使用多一份内存来使用遍历1遍
 * @param { } str 
 */
function replaceSpace(str)
{
    var result = ''
    for (var i=0;i<str.length;i++) {
        if(str[i] === ' '){
            result+='%20'
        } else {
            result+=str[i]
        }
    }
    return result
}
module.exports = {
    replaceSpace : replaceSpace
};