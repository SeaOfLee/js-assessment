exports = typeof window === 'undefined' ? global : window;

exports.stringsAnswers = {
  reduceString: function(str, amount) {
    var result = '';
    var dic = {};
    for (var char of str) {
      console.log(char);
      if (dic[char]) {
        dic[char]++;
      } else {
        dic[char] = 1;
      }
    }
    console.log(dic);
  },

  wordWrap: function(str, cols) {},

  reverseString: function(str) {}
};
