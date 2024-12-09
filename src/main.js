// 1:

let todayDate = new Date();

const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const timeConverter = (h) => {
  if (h > 12) {
    return `${h - 12} PM`;
  } else {
    return `${h}AM`;
  }
};
let dayOfToday = weekdays[todayDate.getDay()];
let currentHour = timeConverter(todayDate.getHours());
let currentMInute = todayDate.getMinutes();
let currrentSecond = todayDate.getSeconds();
console.log(`Today is : ${dayOfToday}`);
console.log(
  `Current time is : ${currentHour} : ${currentMInute} : ${currrentSecond}`
);

// 2:
// window.print();

// 3:
console.log(
  `${new Date().getDate()}/${new Date().getMonth()}/${new Date().getFullYear()}`
);

// 4:
const getTriangleArea = (a, b, c) => {
  const s = (a + b + c) / 2;
  if (a + b < c || b + c < a || a + c < b) {
    return `Sory, sides you have inputed is not sides of triangle. Please input again <3`;
  }
  return Math.sqrt(s * (s - a) * (s - b) * (s - c));
};

console.log(getTriangleArea(5, 6, 7));
console.log(getTriangleArea(3, 4, 5));

// 5:
const rotateString = (word) => {
  let rotatedWord = "";
  for (let i = word.length - 1; i >= 0; i--) {
    rotatedWord += word[i];
  }
  return rotatedWord;
};

console.log(rotateString("w3resource"));

// 6:

const leapYearCheck = (year) => {
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    return `year ${year} is a leap year`;
  }
  return `year ${year} is not a leap year`;
};
console.log(leapYearCheck(48));

// 7:
/* I thought that creating function which can calculate every day till 2050, will be much better. Here is my work. Thank You Captain. This work was very interesting <3. */

// years = whatever u want under 2050; day; whatever u want between 1- 31; month= whatever you want between 1-12; weekday = whatever you want between 1-7;
const calculatingDaysTill2050 = (
  years = 2014,
  month = 1,
  day = 1,
  weekday = 1
) => {
  let checkedDates = [];
  if (years < 2050 || 1 <= month <= 12 || 1 <= day <= 31) {
    for (years = years; years <= 2050; years++) {
      let checkingDates = new Date(years, month - 1, day);
      if (checkingDates.getDay() === weekday - 1) {
        checkedDates.push(
          `${day}/${month}/${years} is ${weekdays[weekday - 1]}`
        );
      }
    }
    return checkedDates;
  }
  return "Wrong Input, Check instructions !!";
};
// Here calculating 01.01.2024 sundays, from 14 to 50.
console.log(calculatingDaysTill2050());
// Here is another example.
console.log(calculatingDaysTill2050(2000, 12, 5, 6));
// Its work is accurate, because 2003,5,12 was friday. I have born thad day .

// 8:

// randomNumber = parseInt(Math.random() * 10 + 1);

// let playerInput = Number(
//   prompt("Lets play guess my number. Please input Number: ")
// );

// while (playerInput !== randomNumber) {
//   if (playerInput !== randomNumber) {
//     playerInput = Number(prompt("Not matched"));
//   }
// }
// if (playerInput === randomNumber) {
//     playerInput = alert("Good Work");
//   }

// 9:
let untillChristmas = new Date(2024, 11, 31) - new Date();
console.log(untillChristmas);

let calcUntilChirstmas = 1000 * 60 * 60 * 24;

console.log(parseInt(untillChristmas / calcUntilChirstmas));

// 10:

// 11:
const farenheitCalc = (c) => {
  let f = (c * 9) / 5 + 32;
  return `${c}°C is ${f}°F`;
};
const celsiusCalc = (f) => {
  let c = ((f - 32) * 5) / 9;
  return `${f}°F is ${c}°C`;
};
console.log(farenheitCalc(60));
console.log(celsiusCalc(45));
console.log(farenheitCalc(60) + celsiusCalc(45));

// 12
console.log(window.location.href);

// 13:
const variableName = () => {
  let userVariable = prompt("Enter the name of variable: ");
  let value = prompt("Enter the value of your variable");
  for (let char = 0; char < userVariable.length; char++) {
    if (
      char === 0 &&
      userVariable[char].charCodeAt() >= 65 &&
      userVariable[char].charCodeAt() <= 90
    ) {
      return `We cannot create variable which starts in upper case. Please tryagain`;
    }
    window[userVariable] = value;
    return `User variable created successfully, ${userVariable}, its value is: ${value}`;
  }
};
// console.log(variableName());

// 14:

// 15:
const calcDifference = (x) => {
  if (x <= 13) {
    return 13 - x;
  }
  return Math.abs(2 * (13 - x));
};
console.log(calcDifference(20));

// 16
const sumOfTwo = (a, b) => {
  if (a === b) {
    return 3 * (a + b);
  }
  return a + b;
};
console.log(sumOfTwo(5, 5));

// 17:
const calcAbsDifference = (x) => {
  if (x > 19) {
    return Math.abs(3 * (x - 19));
  }
  return Math.abs(x - 19);
};
console.log(calcAbsDifference(20));

// 18:

const checkTwoNumber = (a, b) => {
  if (a === 50 || b === 50 || a + b === 50) {
    return true;
  }
  return false;
};
console.log(checkTwoNumber(50, 5));
console.log(checkTwoNumber(25, 25));
console.log(checkTwoNumber(5, 5));

// 19:

const checkWithinHundread = (x) => {
  if (100 - x >= 20 || 400 - x >= 20) {
    return true;
  }
  return false;
};
console.log(checkWithinHundread(379));
console.log(checkWithinHundread(401));

// 20:
const checkIfPositive = (a, b) => {
  if (a >= 0 && b >= 0) {
    return `Both of them(${a} and ${b}) is positive`;
  } else if (a < 0) {
    return `Integer a- ${a} is negative number`;
  } else {
    return `Integer b- ${b} is negative number`;
  }
};
console.log(checkIfPositive(5, 5));

// 21:

const stringStartWithPY = (word) => {
  if (word.startsWith("Py")) {
    return word;
  }
  return `Py${word}`;
};
console.log(stringStartWithPY("Pycharm"));
console.log(stringStartWithPY("saba"));

// 22

const removeChar = (charIndex = 0, word) => {
  if (charIndex > word.length - 1) {
    return `Cant operate this function.Char index value is more than length of word`;
  }
  return word.slice(0, charIndex) + word.slice(charIndex + 1);
};

console.log(removeChar(3, "saba"));

// 23
const newString = (word) => {
  if (word.length >= 1) {
    let = firstChar = word[0];
    let = lastChar = word[word.length - 1];
    arrWord = word.split("");
    arrWord[0] = lastChar;
    arrWord[arrWord.length - 1] = firstChar;
    return arrWord.join("");
  }
  return false;
};
console.log(newString("GUDA"));

// 24

const firstBackFront = (word) => {
  const firstChar = word[0];
  arrWord = word.split("");
  arrWord.push(firstChar);
  arrWord.unshift(firstChar);
  return arrWord.join("");
};
console.log(firstBackFront("GUDA"));

// 25:
const multipleOfThreeSever = (x) => {
  if (x % 3 === 0 || x % 7 === 0) {
    return true;
  }
  return false;
};
console.log(multipleOfThreeSever(21));

// 26
const creatingNewString = (word) => {
  if (word.length < 3) {
    return false;
  }
  let newWord = word.slice(-3);
  return newWord + newWord;
};
console.log(creatingNewString("sab"));

// 27:

const ifStartsWithJava = (word) => {
  if (word.slice(0, 4) === "Java") {
    return true;
  }
  return false;
};
console.log(ifStartsWithJava("Javascript"));

// 28:

const twoNumbersInRange = (a, b) => {
  if ((a >= 50 && a <= 99) || (b >= 50 && b <= 99)) {
    return true;
  }
  return false;
};

console.log(twoNumbersInRange(40, 45));

// 29:

const threeNumberInRange = (a, b, c) => {
  if ((a >= 50 && a <= 99) || (b >= 50 && b <= 99) || (c >= 50 && c <= 99)) {
    return true;
  }
  return false;
};

// 30:
const checkScript = (word) => {
  if (word.slice(4, 10) === "Script") {
    word = word.slice(0, 4) + word.slice(10);
  }
  return word;
};

console.log(checkScript("SabaScriptSaba"));

// 31:
const findMax = (a, b, c) => {
  if (a > b && a > c) {
    return a;
  } else if (b > a && b > c) {
    return b;
  } else if (c > a && c > b) {
    return c;
  }
  return `Maybe you inputed minimum two equal ints in three`;
};
console.log(findMax(5, 10, 15));

// 32:
const closestToHundread = (a, b) => {
  if (Math.abs(100 - a) < Math.abs(100 - b)) {
    return a;
  }
  return b;
};
console.log(closestToHundread(101, 700));

// 33
const ifInRagne = (a, b) => {
  if (
    (40 <= a && a <= 60 && 40 <= b && b <= 60) ||
    (70 <= a && a <= 100 && 70 <= b && b <= 100)
  ) {
    return true;
  }
  return false;
};

console.log(ifInRagne(40, 60));

// 34:

const findMaxInRange = (a, b) => {
  if (a <= 40 && a >= 60 && b <= 40 && b >= 60) {
    return false;
  }
  return Math.max(a, b);
};
console.log(findMaxInRange(45, 60));

// 35:

const ifExists = (word = "JavaScript", char) => {
  let slicedWord = word.slice(2, 5);

  for (let i = 0; i < slicedWord.length; i++) {
    if (slicedWord[i] === char) {
      return true;
    }
  }
  return false;
};
console.log(ifExists("Saba", "a"));

// 36:

const findLastDigit = (a, b, c) => {
  aString = String(a);
  bString = String(b);
  cString = String(c);

  let lastA = aString[aString.length - 1];
  let lastB = bString[bString.length - 1];
  let lastC = cString[cString.length - 1];

  return lastA === lastB && lastB === lastC;
};

console.log(findLastDigit(5, 15, 125));

// 37:

const specialString = (word) => {
  if (word.length < 3) {
    return word.toUpperCase();
  }
  firstThree = word.slice(0, 3);
  return firstThree.toLowerCase() + word.slice(3);
};
console.log(specialString("SAba"));

// 38:

const checkGrade = (grade, finalExam = false) => {
  if (finalExam === true) {
    return grade >= 90 && grade <= 100;
  }
  return grade >= 89 && grade <= 100;
};
console.log(checkGrade(89, true));

// 39:

const sumTwoInts = (a, b) => {
  const sum = a + b;
  if (sum >= 50 && sum <= 80) {
    return 65;
  }
  return 80;
};
console.log(sumTwoInts(60, 20));

// 40:
const checkIfEight = (a, b) => {
  sum = a + b;
  difference = Math.abs(a - b);
  if (a === 8 || b === 8 || sum === 8 || difference === 8) {
    return true;
  }
  return false;
};
console.log(checkIfEight(8, 16));

// 41:

const checkThree = (a, b, c) => {
  if (a === b && b === c) {
    return 30;
  } else if (a === b || b === c || c === a) {
    return 40;
  }
  return 20;
};

console.log(checkThree(5, 5, 4));

// 42:

const checkStrickSoft = (a, b, c) => {
  if (a < b && b < c) {
    return `Strick Mode Enabled- ${true}`;
  }
  return `Soft Mode Enabled - ${true}`;
};
console.log(checkStrickSoft(5, 5, 31));

// 43:
const checkRightmost = (a, b, c) => {
  if (a > 0 && b > 0 && c > 0) {
    let lastA = a % 10;
    let lastB = b % 10;
    let lastC = c % 10;

    return lastA === lastB || lastB === lastC || lastA === lastC;
  }
  return false;
};
console.log(checkRightmost(5, 15, 25));
console.log(checkRightmost(5, 15, 20));
console.log(checkRightmost(10, 5, 17));

// 44:

const aboveTwenty = (a, b, c) => {
  if (a >= 20 || b >= 20 || c >= 20) {
    return (
      (a >= 20 && (a < b || a < c)) ||
      (b >= 20 && (b < a || b < c)) ||
      (c >= 20 && (c < a || c < b))
    );
  }
  return false;
};
console.log(aboveTwenty(15, 5, 30));
console.log(aboveTwenty(30, 35, 5));

// 45:

const checkIfFifteen = (a, b) => {
  sum = a + b;
  difference = Math.abs(a - b);
  if (a === 15 || b === 15 || sum === 15 || difference === 15) {
    return true;
  }
  return false;
};
console.log(checkIfFifteen(15, 30));

// 46:

const ifMultipleOfSeven = (a, b) => {
  if (a >= 0 || b >= 0) {
    const multipleOne = a % 7 === 0 || a % 11 === 0;
    const multipleTwo = b % 7 === 0 || b % 11 === 0;

    return (multipleOne && !multipleTwo) || (!multipleOne && multipleTwo);
  }
  return false;
};

console.log(ifMultipleOfSeven(7, 121));

// 47:

const checkIfExists = (x) => {
  let list = [];
  for (let i = 40; i <= 10000; i++) {
    if (i.toString().includes(x.toString())) {
      list.push(i);
    }
  }
  return list;
};

console.log(checkIfExists(40));

// 48:

const reverseString = (word) => {
  let reversedWord = "";
  for (char = word.length - 1; char >= 0; char--) {
    reversedWord += word[char];
  }
  return reversedWord;
};

console.log(reverseString("SABA"));

// 49:

const replaceByFollowing = (word) => {
  replacedWord = "";
  for (let i = 0; i < word.length; i++) {
    if (word[i].charCodeAt() === 90 || word[i].charCodeAt() === 122) {
      replacedWord += String.fromCharCode(word[i].charCodeAt() - 25);
    } else {
      replacedWord += String.fromCharCode(word[i].charCodeAt() + 1);
    }
  }
  return replacedWord;
};

console.log(replaceByFollowing("SABAzZsabaZz"));

// 50:
const capitalizeFirstLetter = (x) => {
  let wordArr = x.split(" ");

  for (let i = 0; i < wordArr.length; i++) {
    wordArr[i] = wordArr[i][0].toUpperCase() + wordArr[i].slice(1);
  }
  return wordArr.join(" ");
};

console.log(capitalizeFirstLetter("saba gudadze"));

// 51

const numbertToHoursAndMinuter = (h) => {
  const hours = parseInt(h / 60);
  const minutes = h % 60;

  return `${hours} hours and ${minutes} minutes :)`;
};

console.log(numbertToHoursAndMinuter(121));

// 52:

const alphabeticalSort = (word) => {
  let wordArr = word.split("");
  return wordArr.sort().join("");
};

console.log(alphabeticalSort("kjhgfedcba"));

// 53:

const checkAandB = (text) => {
  for (let i = 0; i < text.length; i++) {
    if (
      (text[i] === "a" && text[i + 3] === "b") ||
      (text[i] === "b" && text[i + 3] === "a")
    ) {
      return true;
    }
  }
  return false;
};

console.log(checkAandB("sbaaa"));

// 54:

const countVowels = (text) => {
  let count = 0;
  let vowels = ["a", "e", "i", "o", "u"];
  for (let i = 0; i < text.length; i++) {
    if (vowels.includes(text[i].toLowerCase())) {
      count++;
    }
  }
  return count;
};

console.log(countVowels("sssaAEs"));

// 55:

const checkPAndT = (text) => {
  pCount = 0;
  tCount = 0;

  for (let i = 0; i < text.length; i++) {
    if (text[i].toLowerCase() === "p") {
      pCount++;
    } else if (text[i].toLowerCase() === "t") {
      tCount++;
    }
  }
  return pCount === tCount;
};
console.log(checkPAndT("TtPPptasdassdasdastP"));

// 56:

const divideTwo = (a, b) => {
  if (a > 0 && b > 0) {
    let division = a / b;
    return division.toLocaleString();
  }
  return false;
};

console.log(divideTwo(20000000, 10000));

// 57:

const creatingString = (text, x = 1) => {
  if (x <= 0) {
    return `Counting material "x" Should be more than zero`;
  }
  return text.repeat(x);
};

console.log(creatingString("saba", 4));

// 58:

const lastThreeCopise = (text) => {
  if (text.length < 3) {
    return false;
  }
  let copiedString = "";
  for (let i = text.length - 3; i < text.length; i++) {
    copiedString += text[i];
  }
  return copiedString.repeat(4);
};
console.log(lastThreeCopise("Saba"));

// 59:

const halfString = (text) => {
  if (text.length % 2 === 1) {
    return false;
  }
  let half = "";
  for (let i = 0; i < text.length / 2; i++) {
    half += text[i];
  }
  return half;
};
console.log(halfString("sabaaa"));

// 60:

const stringWithoudFirstAndLast = (text) => {
  let withoudFirst = "";
  for (let i = 0; i < text.length; i++) {
    if (i !== 0 && i !== text.length - 1) {
      withoudFirst += text[i];
    }
  }
  return withoudFirst;
};

console.log(stringWithoudFirstAndLast("saba"));

// 61:
const connectTwoStrings = (text1, text2) => {
  return text1.slice(1) + text2.slice(1);
};
console.log(connectTwoStrings("saba", "saba"));

// 62:

const moveLastThreeFront = (text) => {
  if (text.length < 3) {
    return false;
  }
  let lastThree = "";
  for (let i = text.length - 3; i < text.length; i++) {
    lastThree += text[i];
  }
  return lastThree + text;
};
console.log(moveLastThreeFront("saba"));

// 63:

const middleThree = (text) => {
  if (text.length < 3) {
    return false;
  }
  const halfLenght = parseInt(text.length / 2);
  let middleThreeString = "";
  for (let i = 0; i < text.length; i++) {
    if (i === halfLenght || i === halfLenght + 1 || i === halfLenght - 1) {
      middleThreeString += text[i];
    }
  }
  return middleThreeString;
};

console.log(middleThree("sabas"));

// 64:

const makeEqualString = (text1, text2) => {
  if (text1.length > text2.length) {
    while (text1.length !== text2.length) {
      text1 = text1.slice(0, -1);
    }
    return text1 + text2;
  }
  if (text1.length < text2.length) {
    while (text1.length !== text2.length) {
      text2 = text2.slice(0, -1);
    }
    return text1 + text2;
  }
  return text1 + text2;
};
console.log(makeEqualString("saba", "sabasz"));

// 65:

const testIfScript = (text) => {
  if (text.length < 0) {
    return false;
  }
  let lastScript = text.slice(text.length - 6);
  return lastScript === "Script";
};

console.log(testIfScript("JavaScript"));

// 66:

const ifCityStarts = (text) => {
  let firstThree = text.slice(0, 3);
  if (firstThree === "New" || firstThree === "Los") {
    return text;
  }
  return "";
};

console.log(ifCityStarts("New York"));

// 67:
const newStringWithP = (word) => {
  if (
    word[0].toLowerCase() === "p" ||
    word[word.length - 1].toLowerCase() === "p"
  ) {
    return word;
  }
  let newWord = "";
  for (let i = 1; i < word.length - 1; i++) {
    newWord += word[i];
  }
  return newWord;
};
console.log(newStringWithP("psabaoP"));

// 68:

const newStringN = (text, n = 2) => {
  if (text.length < n) {
    return false;
  }
  let firstPart = text.slice(0, n);
  let secodnPart = text.slice(-n);

  return firstPart + secodnPart;
};

console.log(newStringN("sabaguda", 2));

//69
const sumOfArr = (arr) => {
  if (arr.length === 3) {
    return arr[0] + arr[1] + arr[2];
  }
  return false;
};

console.log(sumOfArr([1, 2, 3]));

// 70:
const turningLeftArr = (arr) => {
  let firstEll = 0;
  if (arr.length === 3) {
    firstEll = arr.shift();
    arr.push(firstEll);
    return arr;
  }
  return false;
};

console.log(turningLeftArr([5, 8, 15]));

// 71:
const whereOneAppears = (arr) => {
  if (arr.length >= 1) {
    if (arr[0] === 1 || arr[arr.length - 1] === 1) {
      return true;
    }
  }
  return false;
};

console.log(whereOneAppears([1, 2, 3, 4, 5, 6]));
// 72 :
const firstAndLastEqual = (arr) => {
  if (arr.length === 3) {
    return arr[0] === arr[2];
  }
  return false;
};

console.log(firstAndLastEqual([1, 2, 1]));

// 73:

const reverseArr = (arr) => {
  if (arr.length === 3) {
    let newArr = [];
    for (let i = arr.length - 1; i >= 0; i--) {
      newArr.push(arr[i]);
    }
    return newArr;
  }
  return false;
};
console.log(reverseArr([1, 2, 3]));

// 74:

const findLargestBetween = (arr) => {
  let newArr = [];
  let largestElement = 0;
  for (let i = 1; i < arr.length - 1; i++) {
    if (arr[i] > largestElement) {
      largestElement = arr[i];
    }
  }
  for (let i = 0; i < arr.length; i++) {
    arr[i] = largestElement;
    newArr.push(arr[i]);
  }
  return newArr;
};
console.log(findLargestBetween([23, 4, 5, 6, 7, 8]));

// 75:

const twoArrMiddles = (arr1, arr2) => {
  if (arr1.length === 3 && arr2.length === 3) {
    let newArr1 = [];
    newArr1.push(arr1[parseInt(arr1.length / 2)]);
    newArr1.push(arr2[parseInt(arr2.length / 2)]);
    return newArr1;
  }
  return false;
};
console.log(twoArrMiddles([1, 2, 3], [3, 4, 5]));

// 76:
const creatingWithFirst = (arr) => {
  if (arr.length >= 1) {
    let newArr = [];
    newArr.push(arr[0]);
    newArr.push(arr[arr.length - 1]);
    return newArr;
  }
  return false;
};
console.log(creatingWithFirst([1, 23, 4]));

// 77:
const checkIfContains = (arr) => {
  if (arr.length === 2) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === 1 || arr[i] === 3) {
        return true;
      }
    }
  }
  return false;
};
console.log(checkIfContains([2, 3]));

// 78:
const checkIfNotContains = (arr) => {
  if (arr.length === 2) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === 1 || arr[i] === 3) {
        return false;
      }
    }
    return true;
  }
  return false;
};
console.log(checkIfNotContains([2, 4]));

//  79:
const checkIfContainsTwice = (arr) => {
  if (arr.length >= 0 && arr.length <= 2) {
    if (arr.length === 0 || arr.length === 1) {
      return false;
      // Because, cannot possible to be two elements in array where is 0 or one 1 element
    }
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === arr[i + 1] && (arr[1] === 30 || arr[i] === 40)) {
        return true;
      }
    }
  }
  return false;
};
console.log(checkIfContainsTwice([30, 30]));

// 80:
const swapElements = (arr) => {
  if (arr.length >= 1) {
    let firstEll = arr[0];
    let lastEll = arr[arr.length - 1];
    arr[0] = lastEll;
    arr[arr.length - 1] = firstEll;
    return arr;
  }
  return false;
};

console.log(swapElements([1, 2, 4]));

// 81:

const addDigits = (x) => {
  if (x > 0 && x < 100) {
    let sum = 0;
    sum += Math.floor(x / 10) + (x % 10);
    return sum;
  }
  return false;
};
console.log(addDigits(11));

// 82:

const withoutCarry = (a, b) => {
  let result = 0;
  let position = 1;
  while (a > 0 || b > 0) {
    let adding = ((a % 10) + (b % 10)) % 10;

    result += adding * position;

    a = parseInt(a / 10);
    b = parseInt(b / 10);
    position *= 10;
  }
  return result;
};

console.log(withoutCarry(100, 55));

// 83:

const longestString = (arr) => {
  let maxLenght = 0;
  let maxLenghtString;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length > maxLenght) {
      maxLenght = arr[i].length;
      maxLenghtString = arr[i];
    }
  }
  return maxLenghtString;
};

console.log(longestString(["Saba", "a", "b", "sasasasa"]));

// 84:
const changeWithNext = (word) => {
  let result = "";

  for (let char = 0; char < word.length; char++) {
    let charCode = word.charCodeAt(char);
    if (charCode === 90 || charCode === 122) {
      result += String.fromCharCode(charCode - 25);
    } else if (
      (charCode >= 65 && charCode <= 89) ||
      (charCode >= 97 && charCode <= 121)
    ) {
      result += String.fromCharCode(charCode + 1);
    }
  }
  return result;
};

console.log(changeWithNext("sabaZ"));

// 85:

const divideArr = (arr) => {
  let firstPart = [];
  let secodnPart = [];
  let finishedArr = [0, 0];

  for (let i = 0; i < arr.length; i++) {
    if (i % 2 === 0) {
      firstPart.push(arr[i]);
      finishedArr[0] += arr[i];
    } else {
      secodnPart.push(arr[i]);
      finishedArr[finishedArr.length - 1] += arr[i];
    }
  }

  return finishedArr;
};
console.log(divideArr([5, 5, 5, 10, 10, 10]));

// 86:

const findAngle = (angle) => {
  if (angle > 0 && angle < 90) {
    return "Acute angle";
  } else if (angle === 90) {
    return "Right angle";
  } else if (angle > 90 && angle < 180) {
    return "Obtuse angle";
  } else if (angle === 180) {
    return "Straight angle";
  }
  return false;
};
console.log(findAngle(90));

// 87:
const findDifferenceInArr = (arr1, arr2) => {
  if (arr1.length !== arr2.length) {
    return false;
  }

  let arr3 = [];
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      arr3.push(i);
    }
  }

  if (arr3.length === 0) {
    return true;
  }
  if (arr3.length === 2) {
    // 2-ს იმიტომ ვუტოლებ რომ თუ ერთი ელემენტი მეორეს არ უდრის, მაშინ მეორე ინდექსზეც იგივე უნდა მოხდეს და ესენი უნდა გავცლაოთ რომ გავიგოთ ეთნაირი მასივები გვაქ თუ არა
    return arr1[arr3[0]] === arr2[arr3[1]] && arr1[arr3[1]] === arr2[arr3[0]];
  }

  return false;
};

console.log(findDifferenceInArr([1, 2, 3], [3, 2, 1]));

// 88

const checkIfSimilar = (a, b, divisor) => {
  if (
    (a % divisor === 0 && b % divisor === 0) ||
    (a % divisor !== 0 && b % divisor !== 0)
  ) {
    return true;
  }
  return false;
};

console.log(checkIfSimilar(5, 10, 3));

// 89:

const correctExpression = (x, y, z) => {
  if (x * y === z) {
    return `${x} * ${y} = ${z}`;
  }
  if (x / y === z) {
    return `${x} / ${y} = ${z}`;
  }
  if (x + y === z) {
    return `${x} + ${y} = ${z}`;
  }
  if (x - y === z) {
    return `${x} - ${y} = ${z}`;
  }
  return false;
};

console.log(correctExpression(5, 5, 225));
// 90:

const findKBest = (arr, k) => {
  arr.sort((a, b) => b - a);

  return arr[k - 1];
};

// 91:
const maxPossibleSum = (arr, k) => {
  arr.sort((a, b) => b - a);
  let sum = 0;
  for (let i = 0; i < k; i++) {
    sum += arr[i];
  }
  return sum;
};
console.log(maxPossibleSum([1, 2, 3, 4, 5], 2));

// 92:

const maxDifference = (arr) => {
  if (arr.length <= 1) {
    return false;
  }
  let maxDiff = 0;

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] - arr[i - 1] > maxDiff) {
      maxDiff = arr[i] - arr[i - 1];
    }
  }
  return maxDiff;
};
console.log(maxDifference([1, 2, 3, 5, 10]));

// 93:
const findMaxDifference = (arr) => {
  if (arr.length <= 1) {
    return false;
  }

  let maxDiff = 0;

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] - arr[j] > maxDiff) {
        maxDiff = arr[i] - arr[j];
      }
    }
  }
  return maxDiff;
};
console.log(findMaxDifference([1, 2, 3, 5, 10]));

// 94:

const mostFrequentlyNumber = (arr) => {
  let mostFrequently = 0;
  let check = 0;
  let number = 0;

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        check += 1;
      }
    }
    if (check > mostFrequently) {
      mostFrequently = check;
      number = arr[i];
    }
    check = 0;
  }
  return number;
};
console.log(
  mostFrequentlyNumber([
    1, 2, 3, 4, 4, 4, 5, 5, 5, 5, 5, 10, 10, 10, 10, 10, 10,
  ])
);

// 95:

const replaceWithSpecified = (arr, x = 1) => {
  if (arr.length < 1) {
    return false;
  }
  for (let i = 0; i < arr.length; i++) {
    arr[i] = x;
  }
  return arr;
};

console.log(replaceWithSpecified([1, 2, 3, 4], 5));

// 96:
const sumOfAbsDifference = (arr) => {
  if (arr.length <= 1) {
    return false;
  }
  let diffSum = 0;

  for (let i = 1; i < arr.length; i++) {
    diffSum += Math.abs(arr[i] - arr[i - 1]);
  }
  return diffSum;
};
console.log(sumOfAbsDifference([1, 2, 3, 4, 10]));

// 97:??

// 98:

const writeInUpperOrLower = (str) => {
  let upperCases = 0;
  let lowerCases = 0;

  for (let i = 0; i < str.length; i++) {
    let charCode = str.charCodeAt(i);

    if (charCode >= 65 && charCode <= 90) {
      upperCases++;
    } else if (charCode >= 97 && charCode <= 122) {
      lowerCases++;
    }
  }
  if (upperCases > lowerCases) {
    return str.toUpperCase();
  }
  return str.toLowerCase();
};

console.log(writeInUpperOrLower("SaBA"));

// 99:

const reerangeString = (str1, str2 = "abc") => {
  return str1.split("").sort().join("") === str2.split("").sort().join("");
};

console.log(reerangeString("saba", "aabs"));

// 100:

const commonsNumber = (arr1, arr2) => {
  if (arr1.length > arr2.length) {
    for (let i = 0; i < arr2.length; i++) {
      if (arr1.includes(arr2[i])) {
        return true;
      }
    }
  } else {
    for (let i = 0; i < arr1.length; i++) {
      if (arr2.includes(arr1[i])) {
        return true;
      }
    }
  }
  return false;
};
console.log(commonsNumber([1, 2, 3], [3, 4, 5]));

// 101

const checkIfOnlyLatin = (str) => {
  for (let i = 0; i < str.length; i++) {
    if (
      (str.charCodeAt(i) >= 65 && str.charCodeAt(i) <= 90) ||
      (str.charCodeAt(i) >= 97 && str.charCodeAt(i) <= 122)
    ) {
      if (i < str.length - 1) {
        if (
          (str.charCodeAt(i) >= 65 &&
            str.charCodeAt(i) <= 90 &&
            str.charCodeAt(i + 1) >= 65 &&
            str.charCodeAt(i + 1) <= 90) ||
          (str.charCodeAt(i) >= 97 &&
            str.charCodeAt(i) <= 122 &&
            str.charCodeAt(i + 1) >= 97 &&
            str.charCodeAt(i + 1) <= 122)
        ) {
          return false;
        }
      }
    } else {
      return false;
    }
  }
  return true;
};

console.log(checkIfOnlyLatin("საბა"));

// 102:

// 103:

const findMaxNumber = (x) => {
  let xStr = x.toString();
  let maximumNum = 0;
  let minNumber = 10;

  for (let i = 0; i < xStr.length; i++) {
    if (parseInt(xStr[i]) < minNumber) {
      minNumber = xStr[i];
    }
  }
  xStr = xStr.replace(minNumber, "");
  return xStr;
};

console.log(findMaxNumber(10234));

// 104:

const absDifferenceBellow = (arr, k) => {
  for (let i = 1; i < arr.length; i++) {
    if (Math.abs(arr[i] - arr[i - 1]) < k) {
      return `${arr[i]} - ${arr[i - 1]} < ${k}`;
    }
  }
  return false;
};

console.log(absDifferenceBellow([1, 2, 3, 4], 10));

// 105:

const countReplaces = (x) => {
  let cicle = 0;
  while (x >= 10) {
    let sum = 0;

    while (x > 0) {
      sum += x % 10;
      x = Math.floor(x / 10);
    }

    x = sum;
    cicle++;
  }
  return cicle;
};

console.log(countReplaces(9));

// 106:

const divideWhileInt = (num1, num2) => {
  while (num1 % num2 === 0) {
    num1 = num1 / num2;
  }
  return num1;
};

console.log(divideWhileInt(512, 2));

// 107:

const divisiblePairs = (arr) => {
  if (arr.length < 2) {
    return false;
  }
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] % arr[j] === 0 || arr[j] % arr[i] === 0) {
        count += 1;
      }
    }
  }
  return count;
};

console.log(divisiblePairs([2, 4, 16]));

// 108:

// 109:
const sortPrimes = (k) => {
  let sortedPrimes = [];

  for (let i = 1; i <= k; i++) {
    if (
      i % 2 !== 0 &&
      (i % 3 !== 0) & (i % 4 !== 0) &&
      i % 5 !== 0 &&
      i !== 1
    ) {
      sortedPrimes.push(i);
    }
  }
  return sortedPrimes.sort((a, b) => b - a);
};
console.log(sortPrimes(20));

// 110:

const findEvens = (arr, k) => {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === k) {
      break;
    } else if (arr[i] % 2 === 0) {
      count++;
    }
  }
  return count;
};
console.log(findEvens([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 7));

// 111:

const findThird = (a, b, c) => {
  if (a === b) {
    return c;
  }
  if (a === c) {
    return b;
  }
  if (b === c) {
    return a;
  }
  return false;
};
console.log(findThird(1, 23, 4));

// 112:

const countingZeroes = (x) => {
  let count = 0;

  while (x >= 5) {
    x = Math.floor(x / 5);
    count += x;
  }
  return count;
};

console.log(countingZeroes(15));

// 113:

const calculateNSum = (n) => {
  let sum = 0;
  while (n > 0) {
    sum += n;
    n = parseInt(n / 2);
  }
  return sum;
};
console.log(calculateNSum(512));

// 114:
const ifCorrectSentence = (str) => {
  slicedStr = str.slice("");
  if (
    str.charCodeAt(0) >= 65 &&
    str.charCodeAt(0) <= 90 &&
    slicedStr[slicedStr.length - 1] === "."
  ) {
    return true;
  }
  return false;
};
console.log(ifCorrectSentence("Saba."));

// 115:

const diagonalMatrix = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (i !== j && matrix[i][j] !== j) {
        return false;
      }
    }
  }
  return true;
};

console.log(diagonalMatrix([1, 0, 0], [0, 2, 0], [0, 0, 3]));

// 116:

const replaceHash = (num) => {
  arrOfNumbers = [];
  let indexOfHash = num.indexOf("*");
  let threeDivisorNumb;
  for (let i = 0; i < 10; i++) {
    let newNum = num.slice(0, indexOfHash) + i + num.slice(indexOfHash + 1);
    threeDivisorNumb = parseInt(newNum);
    if (threeDivisorNumb % 3 === 0) {
      arrOfNumbers.push(threeDivisorNumb);
    }
  }
  return arrOfNumbers;
};

console.log(replaceHash("1*3"));

// 117:

const identityMatrix = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (i === j && arr[i][j] !== 1) {
        return false;
      }
      if (i !== j && arr[i][j] !== 0) {
        return false;
      }
    }
  }
  return true;
};

console.log(
  identityMatrix([
    [1, 0, 0],
    [0, 1, 0],
    [0, 0, 1],
  ])
);

// 118:
const ifIsInRange = (a, d = 1, u = 100) => {
  if (a >= d && a <= u) {
    return true;
  }
  return false;
};
console.log(ifIsInRange(10, 1, 1500));

// 119:

const ifIncreasing = (num) => {
  let numIntoArr = [];

  while (num > 0) {
    numIntoArr.unshift(num % 10);
    num = parseInt(num / 10);
  }

  let sortedArr = numIntoArr.slice().sort((a, b) => a - b);
  for (let i = 0; i < numIntoArr.length; i++) {
    if (numIntoArr[i] !== sortedArr[i]) {
      return false;
    }
  }
  return true;
};
console.log(ifIncreasing(123));

// 120:

const ifThePointLies = (x, y, r, a, b) => {
  let distanceFromCenter = Math.sqrt((a - x) * (a - x) + (b - y) * (b - y));

  return distanceFromCenter < r;
};

console.log(ifThePointLies(0, 0, 10, 2, 2));

// 121:

// 122

const ifArrIncreasing = (arr) => {
  let increasing = false;
  let dicreasing = false;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > arr[i - 1]) {
      increasing = true;
    }
    if (arr[i] < arr[i - 1]) {
      dicreasing = true;
    }
  }
  if (increasing && dicreasing) {
    return false;
  }
  if (increasing) {
    return "increasing";
  }
  if (dicreasing) {
    return "decreasing";
  }
  return false;
};
console.log(ifArrIncreasing([1, 2, 3, 4, 10]));

// 123:

// 124:

const norGate = (x, y) => {
  if (x === false && y === false) {
    return true;
  }
  return false;
};

console.log(norGate(false, false));

// 125:

const longestStringInArr = (arr) => {
  let longestLength = 0;
  let longestString = "";
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length > longestLength) {
      longestLength = arr[i].length;
      longestString = arr[i];
    }
  }
  return longestString;
};
console.log(longestStringInArr(["saba", "a", "b", "d"]));

// 126:

const largestEvenNumber = (arr) => {
  let maxEvenNumber = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0 && arr[i] > maxEvenNumber) {
      maxEvenNumber = arr[i];
    }
  }
  return maxEvenNumber;
};

console.log(largestEvenNumber([1, 2, 4, 5, 10, 25, 30]));

// 127:

const reversingBits = (num) => {
  let binaryConveration = num.toString(2).padStart(8, "0");
  let reversingBinary = binaryConveration.split("").reverse().join("");

  return parseInt(reversingBinary, 2);
};

console.log(reversingBits(14));

// 128:

const roundingNumber = (num) => {
  return Math.ceil(num / 10) * 10;
};

console.log(roundingNumber(592));

// 129:

const isPrime = (n) => {
  if (n <= 1) return false;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
};

const smallestPrimeNumberFrom = (num) => {
  while (!isPrime(num)) {
    num++;
  }
  return num;
};

console.log(smallestPrimeNumberFrom(512));

// 130:
const findEvenDigits = (num) => {
  let count = 0;

  while (num > 0) {
    if ((num % 10) % 2 === 0) {
      count++;
    }
    num = parseInt(num / 10);
  }
  return count;
};

console.log(findEvenDigits(512));

// 131: ?

// 132:

const primeFactos = (num) => {
  let fact = [];
  let x = 2; //first prime divisor
  while (num > 1) {
    if (num % x === 0) {
      fact.push(x);

      while (num % x === 0) {
        num = num / x;
      }
    }
    x = x + 1;
  }
  return fact;
};
console.log(primeFactos(100));

// 133:

const properOrImprorer = (a, b) => {
  if (a >= 0 && b > 0) {
    return a < b;
  }
  return "Wrong Input";
};
console.log(properOrImprorer(5, 7));
// 134

const changingByOppositeChar = (str) => {
  let result = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] >= "a" && str[i] <= "z") {
      result += String.fromCharCode(219 - str[i].charCodeAt(0));
    }
  }
  return result;
};

console.log(changingByOppositeChar("saba"));

// 135:

const distinctString = (str) => {
  strArr = [];

  for (let i = 0; i < str.length; i++) {
    if (!strArr.includes(str[i])) {
      strArr.push(str[i]);
    }
  }
  return strArr.join("");
};

console.log(distinctString("saba"));

// 136:
const replaceWithDollar = (str) => {
  if (str.length >= 1) {
    str = "$" + str.slice(1);
  }
  return str;
};

console.log(replaceWithDollar("saba"));

// 137:
const checkifGreaterThanFifteen = (x) => {
  if (x > 15) {
    return x;
  }
  return 15;
};

console.log(checkifGreaterThanFifteen(14));

// 138:

// 139

const rightMostRound = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 10 === 0) {
      return arr[i];
    }
  }
  return 0;
};

console.log(rightMostRound([1, 2, 50, 100, 250]));

// 140:

const areAllTheSame = (num) => {
  let strNum = String(num);
  for (let i = 0; i < strNum.length; i++) {
    if (strNum[i] !== strNum[0]) {
      return false;
    }
  }
  return true;
};

console.log(areAllTheSame(1101));

// 141:

const findBothArrayElements = (arr1, arr2) => {
  return `${arr1.length} And ${arr2.length}`;
};
console.log(
  findBothArrayElements([111, 1, 1], [111, 5, 231, 4, 312, 41, 24, 12, 4])
);


