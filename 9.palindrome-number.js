/*
 * @lc app=leetcode id=9 lang=javascript
 *
 * [9] Palindrome Number
 */
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if (x < 0 || x % 10 === 0 && x !== 0) {
        return false
    }

    let revertNum = 0;
    let number = x;
    while(number > revertNum) {
        revertNum = number % 10 + revertNum * 10;
        number = parseInt(number / 10);
    }

    return number === revertNum || number === parseInt(revertNum / 10)
};

