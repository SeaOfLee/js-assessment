exports = typeof window === 'undefined' ? global : window;

exports.functionsAnswers = {
  argsAsArray: function(fn, arr) {
    return fn(arr[0], arr[1], arr[2]);
  },

  speak: function(fn, obj) {},

  functionFunction: function(str) {
    return function(str2) {
      return str + ', ' + str2;
    };
  },

  makeClosures: function(arr, fn) {
    return arr.map(function(item, idx) {
      return function() {
        return fn(item);
      };
    });
  },

  partial: function(fn, str1, str2) {},

  useArguments: function() {},

  callIt: function(fn) {},

  partialUsingArguments: function(fn) {},

  curryIt: function(fn) {}
};
