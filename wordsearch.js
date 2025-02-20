/* M02 W05 PAIR PROGRAMMING CHALLENGE: WORD SEARCH
 *
 * PARTNERS:
 *
 *   * Jerryl Varghese (Github: jvarghe)
 *   * Khaildyn Chan (Github: makhaildynchan)
 *
 *
 * DIRECTIONS:
 *
 *   * Fork and clone this directory:
 *     https://github.com/lighthouse-labs/pair-programming-word-search
 *
 *   * Run these commands: `npm install` & `npm test`.
 *     Note: There should be 1 passing and 1 failing test.
 *
 * CHALLENGE
 *
 * For this challenge, you'll be implementing a word search solver, as a
 * function that receives a 2D array of letters and a word. The function must:
 *
 *   * Check to find the word horizontally and vertically.
 *   * Return `true` if the word is found, and return `false` if the word is
 *     not found, BUT NOT backwards or diagonally.
 *
 * This challenge comes with some initial (buggy!) code. We suggest approaching
 * this problem with a TDD mindset, meaning "write tests, make the tests pass,
 * repeat!".
 *
 * There are already some tests in `./test/test_wordsearch.js`, and you can run
 * the tests with `npm test`. You'll find that one of the tests doesn't pass
 * yet, so you'll want to start by editing the code in `wordsearch.js` to allow
 * the tests to pass.
 *
 * When the present tests are successful, ask yourself, "Do the current tests
 * cover all the possible cases?" What if the word is written vertically, not
 * horizontally? What about the case where the word `matrix` is an empty array?
 * You'll have to write tests for these cases (and any others that you think of),
 * and you might also have to modify the `wordSearch.js` function to make those
 * new tests pass.
 *
 * Complete the function named `wordSearch()` and ensure that all tests pass.
 * Add any tests that you find necessary.
 */



// THE `wordSearch()` FUNCTION
//
// This function takes in two variables: `letters` and `word`. `letters` is a
// multi-dimensional array. `word` is just a string, for which you will be
// searching `letters`. The word can appear either horizontally or vertically,
// but not diagonally or in reverse order. If the word is found, `wordSearch`
// will return `true`, or else it will return `false`.
const wordSearch = (letters, word) => {

  // GUARD CLAUSES
  if (letters.length === 0) {
    return "Array is Empty!";
  }

  if (typeof word === "number") {
    return "Word is a Number. Enter a string!";
  }


  // CONCATENATING CHARACTERS TO CREATE "WORDS"

  // HORIZONTAL CONCATENATION
  // Iterates over the multi-dimensional array, line-by-line (sub-array by
  // sub-array) and joins together all the characters on that line into a single
  // word. It returns an multi-dimensional array of words, each word being the
  // result of characters joined together horizontally.
  const horizontallyJoinedWords = letters.map(letter => letter.join(''));
  // console.log(horizontallyJoinedWords);

  // Reverse the words in the matrix by calling `map()` and passing in words to
  // a local reversing function.s
  const horizontalWordsReversed = horizontallyJoinedWords
    .map(word => reverseString(word));
  // console.log(horizontalWordsReversed);



  // VERTICAL CONCATENATION
  // Tranpose the matrix so that its rows become columns:
  const transposedMatrix = transpose(letters);
  // console.log(transposedMatrix);

  // Do a join again, this time on the transposed matrix, creating words from
  // what were columns in the original matrix.
  const verticallyJoinedWords = transposedMatrix.map(letter => letter.join(''));
  // console.log(verticallyJoinedWords);

  // Reverse the words in the matrix by calling `map()` and passing in words to
  // a local reversing function.s
  const verticalWordsReversed = verticallyJoinedWords
    .map(word => reverseString(word));
  // console.log(verticalWordsReversed);



  // SEARCH THE "JOINED ARRAYS" FOR WORDS
  // `horizontallyJoinedWords` and `verticallyJoinedWords` should be
  // multi-dimensional arrays, each one containing sub-arrays which consists of
  // strings—which are the now-joined together characters from before. Let's
  // search them to see if the `word` exists in one of the sub-arrays.


  // SEARCH THE HORIZONTAL "WORDS"
  for (const element of horizontallyJoinedWords) {

    if (element.includes(word)) {
      return true;
    }

  }

  // SEARCH THE VERTICAL "WORDS"
  for (const element of verticallyJoinedWords) {
    if (element.includes(word)) {
      return true;
    }
  }


  // SEARCH THE MATRIX FOR REVERSED WORDS
  // Search the matrix horizontally for backwards words:
  for (const element of horizontalWordsReversed) {

    if (element.includes(word)) {
      return true;
    }

  }

  // Search the matrix vertically for backwards words:
  for (const element of verticalWordsReversed) {

    if (element.includes(word)) {
      return true;
    }

  }


  // If the search of all the lists did not return any positive values, the
  // word was NOT found. Return `false`.
  return false;
};



// This function transposes matrices, making columns into rows and vice versa.
const transpose = function(matrix) {

  const transposedMatrix = [];


  for (let column = 0; column < matrix[0].length; column++) {
    const transposedRow = [];


    for (let row = 0; row < matrix.length; row++) {
      transposedRow.push(matrix[row][column]);
    }

    transposedMatrix.push(transposedRow);
  }


  return transposedMatrix;
};


// This function will reverse a string.
const reverseString = function(word) {

  // There is no direct way of reversing strings in JavaScript, but you can
  // split a string into an array of characters, reverse the array and join
  // them back together into the reversed word.
  let reversedString = word.split("").reverse().join("");
  return reversedString;
};



// EXPORTS
module.exports = wordSearch;