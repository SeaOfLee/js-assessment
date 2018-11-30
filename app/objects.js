exports = typeof window === 'undefined' ? global : window;

exports.objectsAnswers = {
  alterContext: function(fn, obj) {
    // eslint-disable-next-line prefer-reflect
    return fn.call(obj);
  },

  alterObjects: function(constructor, greeting) {
    constructor.prototype.greeting = greeting;
  },

  iterate: function(obj) {
    var arr = [];
    for (var prop in obj) {
      var vals = prop + ': ' + obj[prop];
      if (obj.hasOwnProperty(prop)) {
        arr.push(vals);
      }
    }
    return arr;
  }
};
