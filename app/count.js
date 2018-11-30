exports = typeof window === 'undefined' ? global : window;

exports.countAnswers = {
  count: function(start, end) {
    (function() {
      var current = start;
      setInterval(function() {
        console.log(current);
        if (current < end) {
          console.log('nope');
          current += 1;
        }
      }, 100);
    });
    //
  }
};
