exports = typeof window === 'undefined' ? global : window;

exports.asyncAnswers = {
  async: function(value) {
    return new Promise(resolve=>{
      resolve(value);
    });
  },

  manipulateRemoteData: function(url) {
    return new Promise(resolve=>{
      $.getJSON(url).then((data) =>{
        // console.log(data);
        var names = data.people.map(person=> person.name);
        resolve(names.sort());
      });
    });
  }
};
//done