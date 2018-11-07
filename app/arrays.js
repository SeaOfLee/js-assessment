exports = typeof window === 'undefined' ? global : window;

exports.arraysAnswers = {
  indexOf: function(arr, item) {
    return arr.findIndex(function(thing) {
      return item === thing;
    });
  },

  sum: function(arr) {
    return arr.reduce(function(item, total) {
      return item + total;
    });
  },

  remove: function(arr, item) {
    return arr.filter(function(thing) {
      return thing !== item;
    });
  },

  removeWithoutCopy: function(arr, item) {
    arr.map(function(thing, index) {
      if (thing === item) {
        arr.splice(index, 1);
      }
    });
    return arr;
  },

  append: function(arr, item) {
    arr.push(item);
    return arr;
  },

  truncate: function(arr) {
    arr.pop();
    return arr;
  },

  prepend: function(arr, item) {
    arr.unshift(item);
    return arr;
  },

  curtail: function(arr) {
    arr.shift();
    return arr;
  },

  concat: function(arr1, arr2) {
    return arr1.concat(arr2);
  },

  insert: function(arr, item, index) {
    arr.splice(index, 0, item);
    return arr;
  },

  count: function(arr, item) {
    return arr.filter(function(thing) {
      return thing === item;
    }).length;
  },

  duplicates: function(arr) {
    let nums = [];
    let dupes = [];
    while (nums.length < arr.length) {
      nums.push('');
    }
    arr.map(function(item) {
      if (nums[item] === '') {
        nums[item] = 1;
      } else {
        nums[item]++;
      }
    });
    nums.forEach(function(item, index) {
      if (item > 1) {
        dupes.push(index);
      }
    });
    return dupes;
  },

  square: function(arr) {
    return arr.map(function(item) {
      return item * item;
    });
  },

  findAllOccurrences: function(arr, target) {
    let nums = [];
    arr.map(function(item, index) {
      if (item === target) {
        nums.push(index);
      }
    });
    return nums;
  }
};
