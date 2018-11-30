exports = typeof window === 'undefined' ? global : window;

exports.functionsAnswers = {
  argsAsArray: function(fn, arr) {
    return fn(arr[0], arr[1], arr[2]);
  },

  speak: function(fn, obj) {
    return fn.apply(obj, [obj.greeting, obj.name]);
  },

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

  partial: function(fn, str1, str2) {
    return function(str3) {
      return fn(str1, str2, str3);
    };
  },

  useArguments: function() {
    var sum = 0;
    for (var i = 0; i < arguments.length; i++) {
      sum += arguments[i];
    }
    return sum;
  },

  callIt: function(fn) {
    console.log(arguments);
    var args = Array.prototype.slice.call(arguments);
    console.log(args);
    return fn.apply(this, args.pop());
  },

  partialUsingArguments: function(fn) {},

  curryIt: function(fn) {}
};
