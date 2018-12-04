exports = typeof window === 'undefined' ? global : window;

exports.recursionAnswers = {
  listFiles: function(data, dirName) {
    var files = [];

    function traverse(dir) {
      if (dir.files) {
        dir.files.forEach(function(file) {
          if (file.dir) {
            traverse(file);
          } else {
            files.push(file);
          }
        });
      }
    }
    traverse(data);

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
