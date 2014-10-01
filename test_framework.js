var Describe = function(title) {
};

var It = function(title, parent) {
};

exports.framework = {
  nodes: [],

  /**
   * Calls the function passed to it, containing nested it examples
   * @param {string} title - title of this describe
   * @param {Function} fn - function for nested it examples
   */
  describe: function(title, fn) {
  },
  
  /**
   * Calls the function passed to it, containing a single
   * assertion, which is the body of the test, and returns
   * true or false specifying the result of the assertion
   * @param {string} title - title of this example
   * @param {Function} fn - function for the example
   */
  it: function(title, fn) {
  }
  
};
