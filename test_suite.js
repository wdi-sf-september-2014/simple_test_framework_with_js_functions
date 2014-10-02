var T = require('./test_framework').framework; 

T.describe("Basic js operators", function() {
  T.describe("Addition", function() {
    T.it("2 + 2 should be 4", function() {
      return 2 + 2 === 4;
    });  
  });

  T.describe("Subtraction", function() {
    T.it("4 - 2 should be 2", function() {
      return 4 - 2 === 0;
    });  
  });
  
  T.describe("Multiplication", function() {
    T.it("4 * 2 should be 8", function() {
      return 4 * 2 === 18;
    });  
  });

  T.describe("Division", function() {
    T.it("8 / 2 should be 4", function() {
      return 8 / 2 === 4;
    });  
  });
});
