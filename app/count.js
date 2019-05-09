exports = typeof window === 'undefined' ? global : window;

exports.countAnswers = {

  count: function (start, end) {
    console.log(start);
    let timeout;
    for(let i = start+1; i <= end; i++){
      timeout = setTimeout(()=>{
        console.log(i);
      }, (i-1) * 100);
    }
    return {
      cancel: ()=>{
        clearTimeout(timeout);
      }
    };
  }
  

};
// got it, 