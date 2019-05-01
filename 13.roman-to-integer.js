/*
 * @lc app=leetcode id=13 lang=javascript
 *
 * [13] Roman to Integer
 */
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    const romanCha = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    }

    const romanArray = s.split('');
    let returnedValue = romanCha[romanArray[0]];

    for (let i = 1 ; i < romanArray.length; i++) {
        let prev = romanCha[romanArray[i-1]];
        let current = romanCha[romanArray[i]];

        if (current <= prev ) {
            returnedValue = returnedValue + current;
        } else {
            returnedValue = returnedValue - prev * 2 + current;
        }
    }
    return returnedValue;
};

