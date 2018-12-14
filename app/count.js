exports = typeof window === 'undefined' ? global : window;

exports.countAnswers = {
  count: function(start, end) {
    var nums = [];
    var current = start;
    // nums.push(start)
    console.log(current);
    var interval = setInterval(function() {
      current++;
      if (current <= end) {
        console.log(current);
      } else {
        clearInterval(interval);
      }
    }, 100);

    return {
      cancel: function() {
        clearInterval(interval);
      }
    };
  }
};
