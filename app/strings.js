exports = typeof window === "undefined" ? global : window;

exports.stringsAnswers = {
  reduceString: function(str, amount) {
    var result = "";
    var activeChar = {
      value: "",
      count: 0
    };

    for (var char of str) {
      if (activeChar.value !== char) {
        activeChar.value = char;
        result += char;
        activeChar.count = 1;
      } else if (activeChar.count < amount) {
        result += char;
        activeChar.count++;
      }
    }
    return result;
  },

  wordWrap: function(str, cols) {
    let words = str.split(" ");
    let arr = [];
    var temp = "";

    words.forEach(function(word) {
      let charsLeft = cols - currentLength;
      if (charsLeft <= word.length) {
        arr.push(word);
      } else if (charsLeft >= word.length) {
        console.log("in if");
        temp += word;
      }
    });
    // let result = "";
    // let currentLength = 0;

    // function addNewline(arr, index) {
    //   if (index === arr.length - 1) {
    //     return;
    //   } else {
    //     currentLength = 0;
    //     result += "\n";
    //   }
    // }

    // words.forEach(function(word, index) {
    //   let charsLeft = cols - currentLength;
    //   console.log({ charsLeft });
    //   if (charsLeft <= word.length) {
    //     console.log("if");
    //     result += word;
    //     addNewline(words, index);
    //   } else if (charsLeft >= word.length) {
    //     console.log("else if");
    //     currentLength += word.length;
    //     result += word;
    //   } else {
    //     console.log("else");
    //     addNewline(words, index);
    //   }
    //   console.log({ currentLength, result });
    // });
    // console.log(result);
    // return result;
  },

  reverseString: function(str) {
    const split = str.split("");
    const halfIdx = Math.floor(str.length / 2);

    for (var i = 0; i < halfIdx; i++) {
      var temp = split[i];
      split[i] = split[split.length - 1 - i];
      split[split.length - 1 - i] = temp;
    }
    return split.join("");
  }
};
