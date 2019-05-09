exports = typeof window === 'undefined' ? global : window;

exports.functionsAnswers = {
  argsAsArray: function(fn, arr) {
    return fn(arr[0], arr[1], arr[2]);
  },

  speak: function(fn, obj) {
    return fn.call(obj)
  },

  functionFunction: function(str) {
    return function(param){ return str+", "+param};
  },

  makeClosures: function(arr, fn) {
    //didn't get it
    return arr.map(x=> fn);
  },

  partial: function(fn, str1, str2) {
    return (x)=>{return fn(str1, str2, x)};
  },

  useArguments: function() {
    let sum = 0;
    for(let i = 0; i < arguments.length; i++){
      sum+=arguments[i];
    }
    return sum;
  },

  callIt: function(fn) {
    //didn't get it
  },

  partialUsingArguments: function(fn) {
    //didn't get it
  },

  curryIt: function(fn) {
    // stuck
  }
};
