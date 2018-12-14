exports = typeof window === 'undefined' ? global : window;

exports.recursionAnswers = {
  listFiles: function(data, dirName) {
    var files = [];
    var dic = {};
    // var depth = 0;

    function traverse(dir, level) {
      if (dir.files) {
        dir.files.forEach(function(file) {
          if (file.dir) {
            // console.log('is parent', dir.dir);
            // console.log(level);
            traverse(file, level + 1);
          } else {
            // console.log('is not parent', dir.dir);
            files.push(file);
          }
        });
      }
    }
    traverse(data, 0);
    // console.log(depth);

    return files;
  },

  permute: function(arr) {},

  fibonacci: function(n) {
    if (n <= 2) {
      return 1;
    }

    return this.fibonacci(n - 1) + this.fibonacci(n - 2);
  },

  validParentheses: function(n) {}
};
