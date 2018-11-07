exports = typeof window === 'undefined' ? global : window;

exports.countAnswers = {
  count: function(start, end) {
    console.log('yeeehaww');
    var current = start;
    setInterval(function() {
      console.log(current);
      if (current < end) {
        current += 1;
      }
    }, 100);
  }
};
