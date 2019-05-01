/*
 * @lc app=leetcode id=14 lang=javascript
 *
 * [14] Longest Common Prefix
 */
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if (strs.length === 0) {
        return ''
    }

    let commonPrefix = strs[0];

    for (let i=1; i<strs.length; i++) {
        while(strs[i].indexOf(commonPrefix) != 0) {
            commonPrefix = commonPrefix.substring(0, commonPrefix.length - 1);
            if (commonPrefix === '') return '';
        }
    }
    return commonPrefix;
};

