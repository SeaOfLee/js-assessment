exports = typeof window === 'undefined' ? global : window;

exports.countAnswers = {
  count: function(start, end) {
    var current = start;
    function updateCurrent(current) {
      return current++;
    }
    setInterval(function() {
      updateCurrent(current);
    }, 100);
  }
};
