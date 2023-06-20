/* M02 W05 PAIR PROGRAMMING CHALLENGE: WORD SEARCH
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



// EXPORTS
module.exports = wordSearch;