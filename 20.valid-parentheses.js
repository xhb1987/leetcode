/*
 * @lc app=leetcode id=20 lang=javascript
 *
 * [20] Valid Parentheses
 */
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    if (s.length % 2 !== 0) {
        return false;
    }

    const isPair = (sym1, sym2) => {
        if ((sym1 === '(' && sym2 === ')') || (sym1 === '[' && sym2 === ']') || (sym1 === '{' && sym2 === '}')) {
            return true
        } 

        return false;
    }

    const stack = [];
    const sArray = s.split('');

    sArray.map(str => {
        const popup = stack[stack.length-1] || '';
        if (!isPair(popup, str)) {
            stack.push(str)
        } else {
            stack.pop();
        }
    })

    return stack.length === 0;
};

