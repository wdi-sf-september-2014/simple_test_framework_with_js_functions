var Describe = function(title) {
};

var It = function(title, parent) {
};


var count = 1;
var text1, text2

exports.framework = {
  nodes: [],

  /**
   * Calls the function passed to it, containing nested it examples
   * @param {string} title - title of this describe
   * @param {Function} fn - function for nested it examples
   */
  describe: function(title, fn) {
    if(count === 1) {
      // console.log("title = " + title + "; count = " + count);
      text1 = title + " ";
    } else {
      // console.log("title = " + title + "; count = " + count);
      text2 = title + " ";
    }

    count++;

    fn.call();
  },
  
  /**
   * Calls the function passed to it, containing a single
   * assertion, which is the body of the test, and returns
   * true or false specifying the result of the assertion
   * @param {string} title - title of this example
   * @param {Function} fn - function for the example
   */
  it: function(title, fn) {
    if(fn.call()) {
      console.log("*");
    }else {
      var finalText = text1 + text2 + title;
      // console.log("title = " + title + "; count = " + count);

      console.log(" ");
      console.log(finalText);
      console.log(" ");

    }
    count = 2;
  
  }
};





// var Describe = function(title) {
// };

// var It = function(title, parent) {
// };


// exports.framework = {
//   nodes: [],

//   /**
//    * Calls the function passed to it, containing nested it examples
//    * @param {string} title - title of this describe
//    * @param {Function} fn - function for nested it examples
//    */
//   describe: function(title, fn) {
//     console.log("hello");
//   },
  
//   /**
//    * Calls the function passed to it, containing a single
//    * assertion, which is the body of the test, and returns
//    * true or false specifying the result of the assertion
//    * @param {string} title - title of this example
//    * @param {Function} fn - function for the example
//    */
//   it: function(title, fn) {
  
//   }
// }

