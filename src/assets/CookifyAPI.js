// CookifyAPI.js

// Methods used to Cookify JSON data

// @param str {string} get the string data
function _stringSplitReturnArray(str) {
    return str.split("minutes");
}

// @param Arr {Array} array that gets cleaned up
function _beautifyString(Arr) {
    var arr = Arr;
    var punctuation = ['. ', ', ', '; ']
    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < punctuation.length; j++) {
            if (arr[i][0] === punctuation[j][0] && arr[i][1] === punctuation[j][1]) {
                arr[i] = arr[i].replace(punctuation[j], '');
            }
        }
    }
    return arr;
}

// @param str {string} cookify the string for data to use
// @return array to use
// export for module use
exports.cookifyString = function(str) {
    return _beautifyString(_stringSplitReturnArray(str));
}

// @param str {string} get the timers from string
// @return timer array
// export for module use
exports.getTimer = function(str) {
    var timerArr = [];
    var strArr = _beautifyString(_stringSplitReturnArray(str));
    for (var i = 0; i < strArr.length - 1; i++) {
        var timerForInstruction = strArr[i][strArr[i].length - 2];
        if (timerForInstruction === '0') {
            timerArr.push('1' + timerForInstruction)
        } else {
            timerArr.push(timerForInstruction);
        }
    }
    return timerArr;
}
