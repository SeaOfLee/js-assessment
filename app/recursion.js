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
            console.log('pushing ', file);
            files.push(file);
          }
        });
      }
    }
    traverse(data);
    console.log(files);
    return files;
  },

  permute: function(arr) {},

  fibonacci: function(n) {},

  validParentheses: function(n) {}
};
