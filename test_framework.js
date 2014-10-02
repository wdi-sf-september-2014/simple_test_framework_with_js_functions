var Describe = function(title) {
  this.title= title;
};

var It = function(title, parent) {
  this.title =title;
  this.parent = parent;
};

exports.framework = {
  nodes: [],

  /**
   * Calls the function passed to it, containing nested it examples
   * @param {string} title - title of this describe
   * @param {Function} fn - function for nested it examples
   */

  describe: function(title, fn) {
    console.log(title);
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
    if (fn.call()) {
      console.log("*");
    } else {
      console.log(title + " failed");
    }
  }
  
};
