# Homework: Build a trivial test framework 

When you write code for your future job, you'll more than likely start
by writing the tests for your code. 

Tonight, you'll write a very trivial test framework that may be used 
to run the test suite that is in this repo, under the filename 
`test_suite.js`.

In `test_suite.js`, you'll see that the things being tested are:
addition, subtraction, multiplication, and division of numbers - some of
the basic operations you may perform in JavaScript, by using the
built-in operators.

The same simplistic test framework that you will write tonight, may be
used to run other test suites, that follow the same patterns.

The framework takes inspiration from [mocha](http://visionmedia.github.io/mocha/) and [jasmine](http://jasmine.github.io/2.0/introduction.html) for the structure
of the functions that you need to define for the framework to do its
job.

The test suite shall be runnable via node, by typing in `node
test_suite.js` at your terminal. 

## Bonus

Figure out how to DRY up the duplication in `test_framework.js` where
essentially the `Describe` and `It` objects are basically the same, with
one exception. This will be especially useful in setting up for the
[Super Bonus](#super-bonus).

## Super Bonus

Figure out how to make nested `describe` blocks output concatenated test
descriptions properly, when their `it` examples fail.

### Hint: 
You'll have to figure out how to recursively keep track of `describe`
blocks and then how to recursively concatenate the titles up the tree
from the `it` that failed.
