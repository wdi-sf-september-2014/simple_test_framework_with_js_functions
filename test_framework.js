/**
 * A Node represents a describe or an it
 * @param {string} title - title of this test suite node
 * @param {Node} parent - parent of this node (null if root node)
 */
var Node = function(title, parent) {
  this.title = title;
  this.parent = parent;
};

Node.prototype.fullTitle = function() {
  if (this.parent) {
    var full = this.parent.fullTitle();
    if (full) return full + ' ' + this.title;
  }
  return this.title;
};

exports.framework = {
  nodes: [],

  /**
   * Calls the function passed to it, containing nested it examples
   * @param {string} title - title of this describe
   * @param {Function} fn - function for nested it examples
   */
  describe: function(title, fn) {
    var parent = this.nodes[0];
    var node = new Node(title, parent);
    this.nodes.unshift(node);
    fn.call();
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
    var node = new Node(title, parent);
    try {
      console.assert(fn.call(), node.fullTitle());
      console.log('*');
    } catch (ex) {
      console.error(ex);
    } 
  }
  
};
