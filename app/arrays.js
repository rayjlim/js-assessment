exports = typeof window === 'undefined' ? global : window;

exports.arraysAnswers = {
  indexOf: function(arr, item) {
    for(let i = 0; i < arr.length; i++){
      if (arr[i] == item)
        return i;
    }
    return -1;
  },

  sum: function(arr) {
    return arr.reduce((acc, x)=> acc +=x);
  },

  remove: function(arr, item) {
    for(let i = arr.length-1; i >= 0; i--){
      if(arr[i] == item){
        arr.splice(i, 1);
      }
    }
    return arr;
  },

  removeWithoutCopy: function(arr, item) {
    for(let i = arr.length-1; i >= 0; i--){
      if(arr[i] == item){
        arr.splice(i, 1);
      }
    }
    return arr;
  },

  append: function(arr, item) {
    arr.push(item)
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
    let newArr = arr1.concat(arr2);
    return newArr;
  },

  insert: function(arr, item, index) {
    arr.splice(index, 0, item);
    return arr;
  },

  count: function(arr, item) {
    let countAns = arr.filter(x=> x==item);
    return countAns.length;
  },

  duplicates: function(arr) {
    let result={};
    for(let i = arr.length-1; i >= 0; i--){
      let val = arr[i];
      if(result.hasOwnProperty(arr[i])){
        result[val] = true;
      } else {
        result[val] = false;
      }
    }

    return Object.entries(result)
      .filter(x=>x[1])
      .map(x=>parseInt(x[0]));
      // took some debugging but finally got it
  },

  square: function(arr) {
    return arr.map(x=>x*x);
  },

  findAllOccurrences: function(arr, target) {
    let result=[];
    for(let i = arr.length-1; i >= 0; i--){
      if(arr[i] == target){
        result.push(i);
      }
    }
    return result;
  }
};
//done