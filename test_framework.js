var Describe = function(title, parent) {
  this.title = title;
  this.parent = parent;
};

Describe.prototype.fullTitle = function() {
  console.log(this);
  if (this.parent) {
    var full = this.parent.fullTitle();
    if (full) return full + ' ' + this.title;
  }
  return this.title;
};

var It = function(title, parent) {
  this.title = title;
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
    var describe = new Describe(title);
    this.nodes.unshift(describe);
    fn.call(describe);
    this.nodes.shift();
  },
  
  /**
   * Calls the function passed to it, containing a single
   * assertion, which is the body of the test, and returns
   * true or false specifying the result of the assertion
   * @param {string} title - title of this example
   * @param {Function} fn - function for the example
   */
  it: function(title, fn) {
    var parent = this.nodes[0];
    var it = new It(title, parent);
    try {
      console.assert(fn.call(), parent.fullTitle + ' ' + it.title);
      console.log('*');
    } catch (ex) {
      console.error(ex);
    } 
  }
  
};
