exports = typeof window === 'undefined' ? global : window;

exports.stringsAnswers = {
  reduceString: function(str, amount) {
    var result = '';
    var activeChar = {
      value: '',
      count: 0
    };

    for (var char of str) {
      if (activeChar.value !== char) {
        activeChar.value = char;
        result += char;
        activeChar.count = 1;
      } else if (activeChar.count < amount) {
        result += char;
        activeChar.count++;
      }
    }
    return result;
  },

  wordWrap: function(str, cols) {
    var strArr = str.split('');
    var i = cols;
    function checkMore() {
      for (i; i < strArr.length; i++) {
        if (strArr[i] === ' ') {
          strArr[i] = '\n';
          i += cols;
          // console.log('checkMore', cols);
          return;
        }
      }
    }
    function checkLess() {
      for (i; i > 0; i--) {
        if (strArr[i] === ' ') {
          strArr[i] = '\n';
          i += cols;
          // console.log('checkLess', cols);
          return;
        }
      }
      checkMore();
    }
    while (i < strArr.length) {
      if (strArr.indexOf(' ') < 0) {
        return strArr.join('');
      }
      checkLess();
    }
    return strArr.join('');
  },

  reverseString: function(str) {
    const split = str.split('');
    const halfIdx = Math.floor(str.length / 2);

    for (var i = 0; i < halfIdx; i++) {
      var temp = split[i];
      split[i] = split[split.length - 1 - i];
      split[split.length - 1 - i] = temp;
    }
    return split.join('');
  }
};
