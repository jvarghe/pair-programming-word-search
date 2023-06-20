// IMPORTS
const chai = require('chai');
const assert = chai.assert;

const wordSearch = require('../wordsearch.js');


// MOCHA & CHAI TESTS

describe("#wordSearch()", function() {

  it("Test should return `Array is Empty` if matrix is empty", function() {
    const result = wordSearch([], 'RWANDA');
    const expectedResult1 = "Array is Empty!";
    assert.strictEqual(result, expectedResult1);
  });


  it("Test should return `word is NOT a String` if word is a Number", function() {
    const result = wordSearch([
      ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['S', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
      ['Y', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['H', 'M', 'J', 'T', 'E', 'V', 'R', 'G'],
      ['W', 'H', 'C', 'S', 'Y', 'E', 'R', 'L'],
      ['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
      ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
      ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
      ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
    ], 12345);
    const expectedResult2 = "Word is a Number. Enter a string!";
    assert.strictEqual(result, expectedResult2);
  });


  it("Test should return `false` if the word is NOT present", function() {
    const result = wordSearch([
      ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['S', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
      ['Y', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['H', 'M', 'J', 'T', 'E', 'V', 'R', 'G'],
      ['W', 'H', 'C', 'S', 'Y', 'E', 'R', 'L'],
      ['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
      ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
      ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
      ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
    ], 'FRANK');

    assert.isFalse(result);
  });


  it("Test should return `true` if the word IS present", function() {
    const result = wordSearch([
      ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['S', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
      ['Y', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['H', 'M', 'J', 'T', 'E', 'V', 'R', 'G'],
      ['W', 'H', 'C', 'S', 'Y', 'E', 'R', 'L'],
      ['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
      ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
      ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
      ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
    ], 'SEINFELD');

    assert.isTrue(result);
  });


  it("Test should return `true` if the word IS present VERTICALLY", function() {
    const result = wordSearch([
      ['A', 'W', 'C', 'F', 'U', 'U', 'A', 'L'],
      ['S', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
      ['Y', 'F', 'C', 'F', 'O', 'U', 'A', 'L'],
      ['H', 'M', 'J', 'T', 'L', 'V', 'R', 'G'],
      ['W', 'H', 'C', 'S', 'O', 'E', 'R', 'L'],
      ['B', 'F', 'R', 'E', 'G', 'E', 'Y', 'B'],
      ['U', 'B', 'T', 'W', 'I', 'P', 'A', 'I'],
      ['O', 'D', 'C', 'A', 'S', 'U', 'A', 'S'],
      ['E', 'Z', 'K', 'F', 'T', 'U', 'A', 'L'],
    ], 'UFOLOGIST');

    assert.isTrue(result);
  });

});
