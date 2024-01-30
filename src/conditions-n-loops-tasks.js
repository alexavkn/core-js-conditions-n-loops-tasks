/* *******************************************************************************************
 *                                                                                           *
 * Please read the following tutorial before implementing tasks:                             *
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Looping_code    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration         *
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/conditionals    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch       *
 *                                                                                           *
 ******************************************************************************************* */

/**
 * Determines whether a given number is positive. Zero is considered positive.
 * This function does not use Number or Math class methods.
 *
 * @param {number} number - The number to check.
 * @return {boolean} True if the number is positive or zero, false otherwise.
 *
 * @example:
 *  10 => true
 *  0  => true
 *  -5 => false
 */
function isPositive(number) {
  if (number >= 0) return true;
  return false;
}

/**
 * Returns the maximum of three numbers without using Array and Math classes methods.
 *
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @param {number} c - The third number.
 * @return {number} The maximum of the three numbers.
 *
 * @example:
 *  1, 2, 3       => 3
 *  -5, 0, 5      => 5
 *  -0.1, 0, 0.2  => 0.2
 */
function getMaxNumber(a, b, c) {
  const maxValue = a > b ? a : b;
  return maxValue > c ? maxValue : c;
}

/**
 * Checks if a queen can capture a king in the next move on an 8x8 chessboard.
 * See more details at https://en.wikipedia.org/wiki/Queen_(chess)
 *
 * @typedef {{
 *  x: number,
 *  y: number
 * }} Position
 * @param {Object} queen - The position of the queen.
 * @param {Object} king - The position of the king.
 * @return {boolean} True if the queen can capture the king, false otherwise.
 *
 * @example
 * {x: 1, y: 1}, {x: 5, y: 5} => true
 * {x: 2, y: 1}, {x: 2, y: 8} => true
 * {x: 1, y: 1}, {x: 2, y: 8} => false
 * {x: 1, y: 1}, {x: 2, y: 8} => false
 */
function canQueenCaptureKing(queen, king) {
  if (
    queen.x === king.x ||
    queen.y === king.y ||
    (queen.x - king.x < 0 ? -(queen.x - king.x) : queen.x - king.x) ===
      (queen.y - king.y < 0 ? -(queen.y - king.y) : queen.y - king.y)
  ) {
    return true;
  }
  return false;
}

/**
 * Determines whether a triangle is isosceles based on its side lengths.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} a - The length of the first side.
 * @param {number} b - The length of the second side.
 * @param {number} c - The length of the third side.
 * @return {boolean} True if the triangle is isosceles, false otherwise.
 *
 * @example:
 *  1, 2, 3   => false
 *  3, 1, 2   => false
 *  2, 3, 2   => true
 *  3, 2, 2   => true
 *  2, 2, 3   => true
 *  2, 2, 5   => false
 *  3, 0, 3   => false
 */
function isIsoscelesTriangle(a, b, c) {
  return (
    (a === b && a + b > c && c > 0) ||
    (a === c && a + c > b && b > 0) ||
    (b === c && b + c > a && a > 0)
  );
}

function concatPartRomanNumLetters(romanLetter, num) {
  let romanNum = '';
  for (let i = 0; i < num; i += 1) {
    romanNum += romanLetter;
  }
  return romanNum;
}

/**
 * Converts a number to Roman numerals. The number will be between 1 and 39.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} num - The number to convert.
 * @return {string} The Roman numeral representation of the number.
 *
 * @example:
 *  1   => I
 *  2   => II
 *  5   => V
 *  10  => X
 *  26  => XXVI
 */
function convertToRomanNumerals(num) {
  let partDecimalNum = parseInt(num, 10);
  let romanNum = '';

  if (partDecimalNum >= 1000) {
    const thousands = Math.floor(partDecimalNum / 1000);
    romanNum = concatPartRomanNumLetters('M', thousands);
    partDecimalNum -= thousands * 1000;
  }

  if (partDecimalNum >= 900) {
    romanNum += 'CM';
    partDecimalNum -= 900;
  }

  if (partDecimalNum >= 500) {
    romanNum += 'D';
    partDecimalNum -= 500;
  }

  if (partDecimalNum >= 400) {
    romanNum += 'CD';
    partDecimalNum -= 400;
  }

  if (partDecimalNum >= 100) {
    const hundreds = Math.floor(partDecimalNum / 100);
    romanNum += concatPartRomanNumLetters('C', hundreds);
    partDecimalNum -= hundreds * 100;
  }

  if (partDecimalNum >= 90) {
    romanNum += 'XC';
    partDecimalNum -= 90;
  }

  if (partDecimalNum >= 50) {
    romanNum += 'L';
    partDecimalNum -= 50;
  }

  if (partDecimalNum >= 40) {
    romanNum += 'XL';
    partDecimalNum -= 40;
  }

  if (partDecimalNum >= 10) {
    const tens = Math.floor(partDecimalNum / 10);
    romanNum += concatPartRomanNumLetters('X', tens);
    partDecimalNum -= tens * 10;
  }

  if (partDecimalNum >= 9) {
    romanNum += 'IX';
    partDecimalNum -= 9;
  }

  if (partDecimalNum >= 5) {
    romanNum += 'V';
    partDecimalNum -= 5;
  }

  if (partDecimalNum >= 4) {
    romanNum += 'IV';
    partDecimalNum -= 4;
  }

  if (partDecimalNum >= 1) {
    romanNum += concatPartRomanNumLetters('I', partDecimalNum);
  }

  return romanNum;
}

/**
 * Converts a number to a string, replacing digits with words.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} numberStr - The number as a string.
 * @return {string} The number with digits replaced by words.
 *
 * @example:
 *  '1'       => 'one'
 *  '10'      => 'one zero'
 *  '-10'     => 'minus one zero'
 *  '10.5'    => 'one zero point five'
 *  '10,5'    => 'one zero point five'
 *  '1950.2'  => 'one nine five zero point two'
 */
function convertNumberToString(numberStr) {
  let textNumber = '';
  let sign = '';
  let postfix = true;
  for (let i = 0; i < numberStr.length; i += 1) {
    sign = numberStr[i];
    if (i === numberStr.length - 1) {
      postfix = false;
    }
    switch (sign) {
      case '1':
        textNumber += postfix ? 'one ' : 'one';
        break;
      case '2':
        textNumber += postfix ? 'two ' : 'two';
        break;
      case '3':
        textNumber += postfix ? 'three ' : 'three';
        break;
      case '4':
        textNumber += postfix ? 'four ' : 'four';
        break;
      case '5':
        textNumber += postfix ? 'five ' : 'five';
        break;
      case '6':
        textNumber += postfix ? 'six ' : 'six';
        break;
      case '7':
        textNumber += postfix ? 'seven ' : 'seven';
        break;
      case '8':
        textNumber += postfix ? 'eight ' : 'eight';
        break;
      case '9':
        textNumber += postfix ? 'nine ' : 'nine';
        break;
      case '0':
        textNumber += postfix ? 'zero ' : 'zero';
        break;
      case '-':
        textNumber += postfix ? 'minus ' : 'minus';
        break;
      case '.':
        textNumber += postfix ? 'point ' : 'point';
        break;
      case ',':
        textNumber += postfix ? 'point ' : 'point';
        break;
      default:
        break;
    }
  }
  return textNumber;
}

/**
 * Determines whether a string is a palindrome.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} str - The string to check.
 * @return {boolean} True if the string is a palindrome, false otherwise.
 *
 * @example:
 *  'abcba'     => true
 *  '0123210'   => true
 *  'qweqwe'    => false
 */
function isPalindrome(str) {
  let textLeft = '';
  let textRight = '';
  for (let i = 0; i < str.length; i += 1) {
    textLeft += str[i];
    textRight += str[str.length - 1 - i];
  }
  return textLeft === textRight;
}

/**
 * Finds the first occurrence of a letter in a string.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} str - The string to search.
 * @param {string} letter - The letter to find.
 * @return {number} The index of the first occurrence of the letter, or -1 if not found.
 *
 * @example:
 *  'qwerty', 'q'     => 0
 *  'qwerty', 'е'     => 2
 *  'qwerty', 'Q'     => -1
 *  'qwerty', 'p'     => -1
 */
function getIndexOf(str, letter) {
  for (let i = 0; i < str.length; i += 1) {
    if (str[i] === letter) return i;
  }
  return -1;
}

/**
 * Checks if a number contains a specific digit.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} num - The number to check.
 * @param {number} digit - The digit to search for.
 * @return {boolean} True if the number contains the digit, false otherwise.
 *
 * @example:
 *  123450, 5   => true
 *  123450, 1   => true
 *  123450, 0   => true
 *  12345, 0    => false
 *  12345, 6    => false
 */
function isContainNumber(num, digit) {
  const numStr = String(num);
  const digitStr = String(digit);
  for (let i = 0; i < numStr.length; i += 1) {
    if (numStr[i] === digitStr) return true;
  }
  return false;
}

/**
 * Finds the index of an element in an array where the sum of elements to the left equals the sum of elements to the right.
 * If such an index does not return -1.
 * In this task, the use of methods of the Array and String classes is not allowed.
 *
 * @param {number[]} arr - The array to check.
 * @return {number} The index of the balance point, or -1 if none exists.
 *
 * @example:
 *  [1, 2, 5, 3, 0] => 2    => 1 + 2 === 3 + 0 then balance element is 5 and its index = 2
 *  [2, 3, 9, 5] => 2       => 2 + 3 === 5 then balance element is 9 and its index = 2
 *  [1, 2, 3, 4, 5] => -1   => no balance element
 */
function getBalanceIndex(arr) {
  for (let i = 0; i < arr.length; i += 1) {
    let left = 0;
    let right = 0;
    for (let j = 0; j < i; j += 1) {
      left += arr[j];
    }
    for (let j = i + 1; j < arr.length; j += 1) {
      right += arr[j];
    }
    if (left === right) return i;
  }
  return -1;
}

/**
 * Generates a spiral matrix of a given size, filled with numbers in ascending order starting from one.
 * The direction of filling with numbers is clockwise.
 * Usage of String and Array classes methods is not allowed in this task.
 *
 * @param {number} size - The size of the matrix.
 * @return {number[][]} The spiral matrix.
 *
 * @example:
 *        [
 *          [1, 2, 3],
 *  3  =>   [8, 9, 4],
 *          [7, 6, 5]
 *        ]
 *        [
 *          [1,  2,  3,  4],
 *  4  =>   [12, 13, 14, 5],
 *          [11, 16, 15, 6],
 *          [10, 9,  8,  7]
 *        ]
 */
function getSpiralMatrix(size) {
  let lower = 0;
  let upper = size - 1;
  let left = 0;
  let right = size - 1;
  let i = 0;
  let j = 0;
  let value = 1;

  const result = [];

  for (let k = 0; k < size; k += 1) {
    const items = new Array(size);
    result[k] = items;
  }

  while (lower <= upper && left <= right) {
    lower += 1;

    for (; j < right; j += 1) {
      result[i][j] = value;
      value += 1;
    }

    right -= 1;

    for (; i < upper; i += 1) {
      result[i][j] = value;
      value += 1;
    }

    upper -= 1;

    for (; j > left; j -= 1) {
      result[i][j] = value;
      value += 1;
    }

    left += 1;

    for (; i > lower; i -= 1) {
      result[i][j] = value;
      value += 1;
    }
  }

  result[i][j] = value;
  return result;
}

/**
 * Rotates a matrix by 90 degrees clockwise in place.
 * Take into account that the matrix size can be very large. Consider how you can optimize your solution.
 * Usage of String and Array class methods is not allowed in this task.
 *
 * @param {number[][]} matrix - The matrix to rotate.
 * @return {number[][]} The rotated matrix.
 *
 * @example:
 *  [                 [
 *    [1, 2, 3],        [7, 4, 1],
 *    [4, 5, 6],  =>    [8, 5, 2],
 *    [7, 8, 9]         [9, 6, 3]
 *  ]                 ]
 */
function rotateMatrix(matrix) {
  const result = matrix;
  const temp = [];
  const size = result.length;

  for (let k = 0; k < size; k += 1) {
    const items = new Array(size);
    temp[k] = items;
  }

  for (let i = 0; i < size; i += 1) {
    for (let j = 0; j < size; j += 1) {
      temp[j][size - i - 1] = result[i][j];
    }
  }

  for (let i = 0; i < size; i += 1) {
    for (let j = 0; j < size; j += 1) {
      result[i][j] = temp[i][j];
    }
  }

  return result;
}

/**
 * Sorts an array of numbers in ascending order in place.
 * Employ any sorting algorithm of your choice.
 * Take into account that the array can be very large. Consider how you can optimize your solution.
 * In this task, the use of methods of the Array and String classes is not allowed.
 *
 * @param {number[]} arr - The array to sort.
 * @return {number[]} The sorted array.
 *
 * @example:
 *  [2, 9, 5]       => [2, 5, 9]
 *  [2, 9, 5, 9]    => [2, 5, 9, 9]
 *  [-2, 9, 5, -3]  => [-3, -2, 5, 9]
 */
function sortByAsc(arr) {
  const result = arr;
  const n = result.length;
  for (let i = 1; i < n; i += 1) {
    const current = result[i];
    let j = i - 1;
    while (j > -1 && current < result[j]) {
      result[j + 1] = result[j];
      j -= 1;
    }
    result[j + 1] = current;
  }
  return result;
}

/**
 * Shuffles characters in a string so that the characters with an odd index are moved to the end of the string at each iteration.
 * Take into account that the string can be very long and the number of iterations is large. Consider how you can optimize your solution.
 * Usage of Array class methods is not allowed in this task.
 *
 * @param {string} str - The string to shuffle.
 * @param {number} iterations - The number of iterations to perform the shuffle.
 * @return {string} The shuffled string.
 *
 * @example:
 *  '012345', 1 => '024135'
 *  'qwerty', 1 => 'qetwry'
 *  '012345', 2 => '024135' => '043215'
 *  'qwerty', 2 => 'qetwry' => 'qtrewy'
 *  '012345', 3 => '024135' => '043215' => '031425'
 *  'qwerty', 3 => 'qetwry' => 'qtrewy' => 'qrwtey'
 */
function shuffleChar(str, iterations) {
  let newStr = str;
  let iter = iterations;
  let iterCount = 0;
  while (iter > 0) {
    let newStrRight = '';
    let newStrLeft = '';
    for (let i = 0; i < newStr.length; i += 1) {
      if (i % 2 === 1) {
        newStrRight += newStr[i];
      } else {
        newStrLeft += newStr[i];
      }
    }
    newStr = newStrLeft + newStrRight;
    iterCount += 1;
    iter -= 1;
    if (newStr === str) {
      if (iter === 0) {
        return newStr;
      }
      break;
    }
  }
  newStr = str;
  iter = iterations;
  if (iter > iterCount) {
    iter %= iterCount;
  }
  while (iter > 0) {
    let newStrRight = '';
    let newStrLeft = '';
    for (let i = 0; i < newStr.length; i += 1) {
      if (i % 2 === 1) {
        newStrRight += newStr[i];
      } else {
        newStrLeft += newStr[i];
      }
    }
    newStr = newStrLeft + newStrRight;
    iter -= 1;
  }
  return newStr;
}

/**
 * Returns the nearest largest integer consisting of the digits of the given positive integer.
 * If there is no such number, it returns the original number.
 * Usage of String class methods is not allowed in this task.
 *
 * @example:
 * 12345    => 12354
 * 123450   => 123504
 * 12344    => 12434
 * 123440   => 124034
 * 1203450  => 1203504
 * 90822    => 92028
 * 321321   => 322113
 *
 * @param {number} number The source number
 * @returns {number} The nearest larger number, or original number if none exists.
 */
function getNearestBigger(number) {
  const numberStr = String(number);
  let letter = '';
  let previousLetter = '';
  let textRight = '';
  let textRightNew = '';
  let middleLetter = '';
  let textLeft = '';
  let markLetter = false;
  for (let i = 0; i < numberStr.length; i += 1) {
    letter = numberStr[numberStr.length - i - 1];
    if (!markLetter && Number(previousLetter) > Number(letter)) {
      middleLetter = letter;
      markLetter = true;
    } else {
      if (markLetter) {
        textLeft = letter + textLeft;
      } else {
        textRight = letter + textRight;
      }
      previousLetter = letter;
    }
  }
  if (middleLetter === '') return number;
  markLetter = false;
  for (let i = 0; i < textRight.length; i += 1) {
    letter = textRight[textRight.length - i - 1];
    if (!markLetter && Number(letter) > Number(middleLetter)) {
      textRightNew += middleLetter;
      middleLetter = letter;
      markLetter = true;
    } else {
      textRightNew += letter;
    }
  }
  return Number(textLeft + middleLetter + textRightNew);
}

module.exports = {
  isPositive,
  getMaxNumber,
  canQueenCaptureKing,
  isIsoscelesTriangle,
  convertToRomanNumerals,
  convertNumberToString,
  isPalindrome,
  getIndexOf,
  isContainNumber,
  getBalanceIndex,
  getSpiralMatrix,
  rotateMatrix,
  sortByAsc,
  shuffleChar,
  getNearestBigger,
};
