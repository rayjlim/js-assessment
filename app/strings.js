exports = typeof window === 'undefined' ? global : window;

exports.stringsAnswers = {
  reduceString: function(str, amount) {
    let count = 1;
    let prev = "";
    let result = "";
    for(let i = 0; i < str.length; i++){
      let curr = str.charAt(i);

      if(curr == prev){
        count++;
      }else{
        count = 1;
      }
      if (count <= amount ){
        result+=str.charAt(i);
      }
      prev = curr;
    }
    return result;
  },

  wordWrap: function(str, cols) {

  },

  reverseString: function(str) {
    let result = "";
    for(let i = str.length - 1; i >= 0;i--){
      result+=str.charAt(i);
    }
    return result;
  }
};
