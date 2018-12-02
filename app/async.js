exports = typeof window === 'undefined' ? global : window;

exports.asyncAnswers = {
  async: function(value) {
    return new Promise(function(res, rej) {
      res(value);
    });
  },

  manipulateRemoteData: function(url) {
    var names = fetch(url)
      .then(function(response) {
        var clone = response.clone();
        return clone.json();
      })
      .then(function(apiRes) {
        names = apiRes.people
          .map(function(person) {
            return person.name;
          })
          .sort();
        return names;
      });

    return names;
  }
};
