exports = typeof window === 'undefined' ? global : window;

exports.regexAnswers = {
  containsNumber: function(str) {
    var re = /\d/;
    return re.test(str);
  },

  containsRepeatingLetter: function(str) {
    var re = /([a-zA-Z]).*?\1/;
    return re.test(str);
  },

  endsWithVowel: function(str) {
    var re = /[aeiouAEIOU]$/;
    return re.test(str);
  },

  captureThreeNumbers: function(str) {
    var re = /(\d{3})/;
    var result = re.exec(str);
    if (result) {
      return result[0];
    }
    return false;
  },

  matchesPattern: function(str) {
    var re = /^(\d{3}-\d{3}-\d{4})$/;
    return re.test(str);
  },

  isUSD: function(str) {
    var re = /^(\$\d{1,3})(,\d{3})*(\.\d{2})?$/;
    return re.test(str);
  }
};
