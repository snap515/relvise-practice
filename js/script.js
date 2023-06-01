// ---------------------------------------------- CODEWARS JS FOR BEGINNERS  2 --------------------------------------------------------
// не моё решение

// function findOutlier(integers) {
//   const [p0, p1, p2] = integers.slice(0, 3).map(n => n & 1);
//   return p0 === p1
//     ? integers.find(n => (n & 1) !== p0)
//     : integers[+(p0 === p2)];
// }

// через сумму четных и нечетных чисел и сравнения их

// function findOutlier(integers) {
//   let even = 0;
//   let notEven = 0;
//   integers.forEach(integer =>
//     integer % 2 === 0 ? (even += 1) : (notEven += 1)
//   );
//   return even > notEven
//     ? integers.filter(integer => integer % 2 !== 0).join('')
//     : integers.filter(integer => integer % 2 === 0).join('');
// }

// REDUCE через сумму четных и нечетных чисел и сравнения их (не доделал)

// function findOutlier(integers) {
//   let evenTotal = integers.reduce(integer);
//   return evenTotal > notEvenTotal
//     ? integers.filter(integer => integer % 2 !== 0).join('')
//     : integers.filter(integer => integer % 2 === 0).join('');
// }

// через длину массива четных и нечетных чисел

// function findOutlier(integers) {
//   let even = integers.filter(integer => integer % 2 === 0);
//   let notEven = integers.filter(integer => integer % 2 !== 0);
//   // console.log(even);
//   // console.log(notEven);
//   return even.length < notEven.length ? even.join('') : notEven.join('');
// }

// через длину массива четных и нечетных чисел и тернатрный оператор

// function findOutlier(integers) {
//   return integers.filter(integer => integer % 2 === 0).length === 1
//     ? integers.filter(integer => integer % 2 === 0).join('')
//     : integers.filter(integer => integer % 2 !== 0).join('');
// }

// console.log(findOutlier([1, 0, 1]));
// console.log(findOutlier([1, 2, 3]));
// console.log(findOutlier([2, 6, 8, 10, 3]));
// console.log(findOutlier([0, 0, 3, 0, 0]));
// console.log(findOutlier([1, 1, 0, 1, 1]));
// console.log(findOutlier([3, 4, 2]));

// Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

//The output should be two capital letters with a dot separating them.

//It should look like this:

//Sam Harris => S.H

//patrick feeney => P.F

// function abbrevName(name) {
//   let fullName = name.split('');
//   let firstLetter = fullName[0] + '.';
//   let secondLetter;
//   for (let i = 0; i < fullName.length; i += 1) {
//     if (fullName[i] === ' ') {
//       secondLetter = fullName[i + 1];
//     }
//   }
//   let abbrev = firstLetter + secondLetter;
//   console.log(name, ':', abbrev);
//   return abbrev;
// }

// function abbrevName(name) {
//   console.log(
//     name.split('')[0].toUpperCase() +
//       '.' +
//       name.split('')[name.indexOf(' ') + 1].toUpperCase()
//   );
//   return (
//     name.split('')[0].toUpperCase() +
//     '.' +
//     name.split('')[name.indexOf(' ') + 1].toUpperCase()
//   );
// }

// abbrevName('Tom holand');
// abbrevName('sam harris');
// abbrevName('Patrick Feenan');
// abbrevName('Evan Cole');
// abbrevName('P Favuzzi');

//Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

//Note: input will never be an empty string

// function fakeBin(x) {
//   let array = x.split('');
//   console.log(array);
//   let newArray = array.map(number => {
//     if (number < 5) {
//       return 0;
//     }
//     return 1;
//   });
//   console.log(newArray.join(''));
//   return newArray.join('');
// }

// function fakeBin(x) {
//   console.log(
//     x
//       .split('')
//       .map(number => (number < 5 ? 0 : 1))
//       .join('')
//   );
//   return x
//     .split('')
//     .map(number => (number > 5 ? 0 : 1))
//     .join('');
// }

// fakeBin('45385593107843568');
// fakeBin('6162636261626362');

//You were camping with your friends far away from home, but when it's time to go back, you realize that your fuel is running out and the nearest pump is 50 miles away! You know that on average, your car runs on about 25 miles per gallon. There are 2 gallons left.

//Considering these factors, write a function that tells you if it is possible to get to the pump or not.

//Function should return true if it is possible and false if not.

// const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
//   console.log(distanceToPump <= mpg * fuelLeft);
//   return distanceToPump <= mpg * fuelLeft ? true : false;
// };

// zeroFuel(50, 25, 2);

//Build a function that returns an array of integers from n to 1 where n>0.

//Example : n=5 --> [5,4,3,2,1]

// const reverseSeq = n => {
//   const array = [];
//   for (let i = 1; i <= n; i += 1) {
//     array.push(i);
//   }
//   return array.reverse();
// };

// reverseSeq(7);

//Our team's match results are recorded in a collection of strings. Each match is represented by a string in the format "x:y", where x is our team's score and y is our opponents score.

//For example: ["3:1", "2:2", "0:1", ...]

//Points are awarded for each match as follows:

//if x > y: 3 points (win)
//if x < y: 0 points (loss)
//if x = y: 1 point (tie)
//We need to write a function that takes this collection and returns the number of points our team (x) got in the championship by the rules given above.

//Notes:

//our team always plays 10 matches in the championship
//0 <= x <= 4
//0 <= y <= 4

// function points(games) {
//   let ourTeam = 0;
//   games.forEach(game => {
//     if (game[0] > game[2]) {
//       ourTeam += 3;
//     } else if (game[0] === game[2]) {
//       ourTeam += 1;
//     }
//   });
//   console.log(ourTeam);
//   return ourTeam;
// }

// points(['1:0', '2:0', '3:0', '4:0', '2:1', '3:1', '4:1', '3:2', '4:2', '4:3']);

// class Car {
//   // Change code below this line
//   constructor({ brand, model, price }) {
//     this.brand = brand;
//     this.model = model;
//     this.price = price;
//   }
//   // Change code above this line
// }

// const Audi = new Car({ brand: 'audi', model: 'q8', price: 123456 });

// console.log(Audi);

// 5 модуль 10 задача
// class Storage {
//   constructor(items = {}) {
//     this.items = items;
//   }
//   getItems() {
//     return this.items;
//   }
//   addItem(newItem) {
//     return this.items.push(newItem);
//   }
//   removeItem(itemToRemove) {
//     this.items.splice(this.items.indexOf(itemToRemove), 1);
//   }
// }

// // Change code above this line
// const storage = new Storage(['Nanitoids', 'Prolonger', 'Antigravitator']);
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]
// storage.addItem('Droid');
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
// storage.removeItem('Prolonger');
// console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]

// 5 модуль 11 задача

// class StringBuilder {
//   constructor(initialValue = {}) {
//     this.value = initialValue;
//   }
//   getValue() {
//     return this.value;
//   }

//   padStart(str) {
//     this.value = str + this.value;
//   }

//   padEnd(str) {
//     this.value += str;
//   }
//   padBoth(str) {
//     this.value = str + this.value + str;
//   }
// }

// // Change code above this line
// const builder = new StringBuilder('.');
// console.log(builder.getValue()); // "."
// builder.padStart('^');
// console.log(builder.getValue()); // "^."
// builder.padEnd('^');
// console.log(builder.getValue()); // "^.^"
// builder.padBoth('=');
// console.log(builder.getValue()); // "=^.^="

// const toJadenCase = function (message) {
//   let words = message.split(' ');
//   let newArray = [];
//   console.log(words);
//   for (let word of words) {
//     newArray.push(word[0].toUpperCase);
//   }
//   console.log(newArray);
//   return newArray;
// };
// let mess = 'hello this is me mario';
// toJadenCase(mess);

// function getLength(arr) {
//   //return length of arr
//   console.log(arr.length);
//   return arr.length;
// }
// function getFirst(arr) {
//   //return the first element of arr
//   console.log(arr[0]);
//   return arr[0];
// }
// function getLast(arr) {
//   //return the last element of arr
//   console.log(arr[arr.length - 1]);
//   return arr[arr.length - 1];
// }

// function pushElement(arr) {
//   const el = 1;
//   arr.push(el);
//   console.log(arr);
//   return arr;
// }
// function popElement(arr) {
//   //pop an element from arr
//   console.log(arr.pop());
//   return arr.pop();
// }

// pushElement([1, 2, 3]);

// function animal(obj) {
//   const { name, legs, color } = obj;
//   return `This ${color} ${name} has ${legs} legs.`;
// }

// console.log(animal({ name: 'dog', legs: 4, color: 'white' }));
// animal({ name: 'dog', legs: 4, color: 'white' });

//Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.
// function createPhoneNumber(numbers) {
//   let numbStr = numbers.join('');
//   return (
//     '(' +
//     numbStr[0] +
//     numbStr[1] +
//     numbStr[2] +
//     ')' +
//     ' ' +
//     numbStr[3] +
//     numbStr[4] +
//     numbStr[5] +
//     '-' +
//     numbStr[6] +
//     numbStr[7] +
//     numbStr[8] +
//     numbStr[9]
//   );
// }

// createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]);

// Given an array (arr) as an argument complete the function countSmileys that should return the total number of smiling faces.

// Rules for a smiling face:

// Each smiley face must contain a valid pair of eyes. Eyes can be marked as : or ;
// A smiley face can have a nose but it does not have to. Valid characters for a nose are - or ~
// Every smiling face must have a smiling mouth that should be marked with either ) or D
// No additional characters are allowed except for those mentioned.

// Valid smiley face examples: :) :D ;-D :~)
// Invalid smiley faces: ;( :> :} :]

// function countSmileys(arr) {
//   let counter = 0;
//   arr.forEach(element => {
//     if (
//       (element.includes(':') || element.includes(';')) &&
//       (element.includes('D') || element.includes(')'))
//     ) {
//       counter += 1;
//     }
//   });

//   console.log(counter);
// }

// countSmileys([';)', ':D', ';(', ';D']);

// function pickIt(arr) {
//   var odd = [],
//     even = [];
//   //coding here
//   for (let i = 0; i < arr.length; i += 1) {
//     if (arr[i] % 2 === 0) {
//       even.push(arr[i]);
//     } else {
//       odd.push(arr[i]);
//     }
//   }

//   console.log(even);
//   console.log(odd);
//   return [odd, even];
// }

// pickIt([1, 2, 3, 4, 5]);

// function grabDoll(dolls) {
//   const bag = [];
//   //coding here
//   for (let doll of dolls) {
//     if (bag.length >= 3) {
//       break;
//     }
//     if (doll !== 'Hello Kitty' && doll !== 'Barbie doll') {
//       continue;
//     }
//     bag.push(doll);
//   }
//   console.log(bag);
//   return bag;
// }

// grabDoll(['Mickey Mouse', 'Hello Kitty', 'Barbie doll', 'Krasavica']);
// grabDoll([
//   'Mickey Mouse',
//   'Barbie doll',
//   'Hello Kitty',
//   'Hello Kitty',
//   'Hello Kitty',
//   'Snow white',
// ]);

// Callbakc functions

// const productList = [
//   {
//     name: 'Banana',
//     amount: 5,
//     price: 10,
//   },
//   {
//     name: 'Apple',
//     amount: 10,
//     price: 8,
//   },
//   {
//     name: 'Cherry',
//     amount: 15,
//     price: 13,
//   },
// ];

// function createProduct(obj, callback) {
//   //1. принимает обЪект и принимает колбек
//   //2. создание нового объекта и добавление свойства айди
//   //3. вызов колбек функции с передачей туда созданного объекта
//   const newObj = { ...obj, id: Date.now() };
//   callback(newObj);
// }

// function logProduct(product) {
//   console.log(product);
// }

// function logTotalPrice(product) {
//   console.log(product.amount * product.price);
// }

// createProduct(productList[2], logProduct);
// createProduct(productList[2], logTotalPrice);

// const TRANSACTION_LIMIT = 1000;

// const account = {
//   username: 'Alex',
//   balance: 2000,
//   withdraw(amount, onSuccess, onError) {
//     if (amount > this.balance) {
//       onError('На жаль на вашому балансі недостатньо коштів!');
//     } else if (amount > TRANSACTION_LIMIT) {
//       onError(
//         `На жаль ви перевищили ліміт! Поточний ліміт: ${TRANSACTION_LIMIT}`
//       );
//     } else {
//       this.balance -= amount;
//       onSuccess(`Ви зняли ${amount} грн. Залишок: ${this.balance - amount}`);
//     }
//   },

//   deposit(amount, onSuccess, onError) {
//     if (amount <= 0) {
//       onError('Сума транзакції повинна бути вище 0!');
//     } else if (amount > TRANSACTION_LIMIT) {
//       onError(
//         `На жаль ви перевищили ліміт! Поточний ліміт: ${TRANSACTION_LIMIT}`
//       );
//     } else {
//       this.balance += amount;
//       onSuccess(
//         `Ви поклали на рахунок ${amount} грн, ваш баланс: ${this.balance}грн`
//       );
//     }
//   },
// };

// function onSuccess(message) {
//   console.log(`Успішна операція! ${message}`);
// }

// function onError(message) {
//   console.log(`Помилка! ${message}`);
// }

// account.withdraw(5000, onSuccess, onError);
// account.withdraw(1000, onSuccess, onError);
// account.deposit(500, onSuccess, onError);
// account.deposit(1500, onSuccess, onError);
// account.deposit(-5, onSuccess, onError);

// *напишіть функцію each(array, callback), яка першим параметром очікує масив,
// *а другим - функцію, яка застосоється для кожного елемента масиву.
// *Функція each повинна повернути новий масив, елемнатми якого будуть результати виклику коллбека.

// function each(array, callback) {
//   //1. Створимо новий масив
//   //2. перебрати масив array за допомогою циклу
//   //3. виклик колбек функції на кожному елементі масиву array
//   //4. додаємо видозмінений елемент у новий масив
//   //5. повернути новий масив
//   const modifiedArr = [];
//   for (const el of array) {
//     modifiedArr.push(callback(el));
//   }
//   return modifiedArr;
// }

// const arr = [1, 2, 3, 4, 51];

// function pow(num) {
//   return num ** 2;
// }

// function addOne(num) {
//   return num + 1;
// }
// console.log(arr);
// console.log(each(arr, pow));
// console.log(each(arr, addOne));
// console.log(each(arr, num => num / 2));

// const productList = [
//   {
//     name: 'Banana',
//     amount: 5,
//     price: 10,
//   },
//   {
//     name: 'Apple',
//     amount: 10,
//     price: 8,
//   },
//   {
//     name: 'Cherry',
//     amount: 15,
//     price: 13,
//   },
// ];
// const createProduct = (obj, callback) => callback({ ...obj, id: Date.now() });
// const logProduct = product => console.log(product);
// const onSuccess = message => console.log(`Успішна операція! ${message}`);
// const onError = message => console.log(`Помилка! ${message}`);
// const logTotalPrice = product => console.log(product.amount * product.price);

// createProduct(productList[2], logProduct);
// createProduct(productList[2], logTotalPrice);

// const TRANSACTION_LIMIT = 1000;

// const account = {
//   username: 'Alex',
//   balance: 2000,
//   withdraw(amount, onSuccess, onError) {
//     if (amount > this.balance) {
//       onError('На жаль на вашому балансі недостатньо коштів!');
//     } else if (amount > TRANSACTION_LIMIT) {
//       onError(
//         `На жаль ви перевищили ліміт! Поточний ліміт: ${TRANSACTION_LIMIT}`
//       );
//     } else {
//       this.balance -= amount;
//       onSuccess(`Ви зняли ${amount} грн. Залишок: ${this.balance - amount}`);
//     }
//   },

//   deposit(amount, onSuccess, onError) {
//     if (amount <= 0) {
//       onError('Сума транзакції повинна бути вище 0!');
//     } else if (amount > TRANSACTION_LIMIT) {
//       onError(
//         `На жаль ви перевищили ліміт! Поточний ліміт: ${TRANSACTION_LIMIT}`
//       );
//     } else {
//       this.balance += amount;
//       onSuccess(
//         `Ви поклали на рахунок ${amount} грн, ваш баланс: ${this.balance}грн`
//       );
//     }
//   },
// };

// account.withdraw(5000, onSuccess, onError);
// account.withdraw(1000, onSuccess, onError);
// account.deposit(500, onSuccess, onError);
// account.deposit(1500, onSuccess, onError);
// account.deposit(-5, onSuccess, onError);

// *Exmaple 9 Metod forEach
// виконайте рефакториг коду за доопомгою методу forEach та стрілочні функції

// function calculateAverage(...args) {
//   let total = 0;
//   args.forEach(el => (total += el));
//   return total / args.length;
// }

// console.log(calculateAverage(1, 2, 3, 4));

//* Task
//* The function giveMeFive accepts 1 parameter, obj, which is an object.
//*
//* Create an array (which you will eventually return). Then, traverse obj, checking each key and value. If the length of the key is equal to 5, then push the key to your array. Separately, if the length of the value is equal to 5, then push the value to your array.
//*
//* At the end, return your array.
//*
//* You should //* use for..in in your code, otherwise your solution may not pass this kata.

// function giveMeFive(obj) {
//   //coding here
//   const resultArray = [];

//   for (let key in obj) {
//     if (key.length === 5) {
//       resultArray.push(key);
//     }
//     if (obj[key].length === 5) {
//       resultArray.push(obj[key]);
//     }
//   }
//   return resultArray;
// }

// console.log(giveMeFive({ Our: 'earth', is: 'a', beautyful: 'world' }));
// console.log(
//   giveMeFive({ Ihave: 'enough', money: 'to', buy: 'a', car: 'model' })
// );
//* Write a function toWeirdCase (weirdcase in Ruby) that accepts a string, and returns the same string with all even indexed characters in each word upper cased, and all odd indexed characters in each word lower cased. The indexing just explained is zero based, so the zero-ith index is even, therefore that character should be upper cased and you need to start over for each word.

//* The passed in string will only consist of alphabetical characters and spaces(' '). Spaces will only be present if there are multiple words. Words will be separated by a single space(' ').

// function toWeirdCase(string) {
//   const arr = string.toUpperCase().split(' ');
//   const arrWeird = [];
//   arr.forEach(word => {
//     let weirdWord = '';
//     for (let i = 0; i < word.length; i += 1) {
//       i % 2 === 0
//         ? (weirdWord += word[i])
//         : (weirdWord += word[i].toLowerCase());
//     }
//     arrWeird.push(weirdWord);
//   });
//   return arrWeird.join(' ');
// }
// toWeirdCase('you should learn JAVA SCRIPT MORE TO become a programmer');

//*You get an array of numbers, return the sum of all of the positives ones.
//*Example [1,-4,7,12] => 1 + 7 + 12 = 20
//*Note: if there is nothing to sum, the sum is default to 0.
// function positiveSum(arr) {
//   const total = arr.reduce((previousValue, number) => {
//     if (number >= 0) {
//       return previousValue + number;
//     } else {
//       return previousValue;
//     }
//   }, 0);
//   return total;
// }

// второе решение через тернарный оператор-------------------------------------

// function positiveSum(arr) {
//   const total = arr.reduce(
//     (previousValue, number) =>
//       number >= 0 ? previousValue + number : previousValue,
//     0
//   );
//   return total;
// }

// console.log(positiveSum([1, 2, 3, 4, 5]));
// console.log(positiveSum([1, -2, 3, 4, 5]));

//*Write a function which calculates the average of the numbers in a given list.

//*Note: Empty arrays should return 0.

// function findAverage(array) {
//   // your code here
//   let sum = 0;
//   if (array.length === 0) {
//     return 0;
//   } else {
//     sum = array.reduce((acc, num) => {
//       return acc + num;
//     }, 0);
//   }
//   return sum / array.length;
// }

//через тернарный оператор
// function findAverage(array) {
//   // your code here
//   let sum = 0;
//   array.length === 0
//     ? 0
//     : (sum = array.reduce((acc, num) => {
//         return acc + num;
//       }, 0));
//   return sum / array.length;
// }

// console.log(findAverage([1, 1, 1]));
// console.log(findAverage([1, 2, 3]));
// console.log(findAverage([]));

//*Task:
//*Given a list of integers, determine whether the sum of its elements is odd or even.

//*Give your answer as a string matching "odd" or "even".

//*If the input array is empty consider it as: [0] (array with a zero).
// function oddOrEven(array) {
//   //enter code here
//   if (array.length === 0) {
//     return 'even';
//   }
//   const sum = array.reduce((acc, num) => {
//     return acc + num;
//   }, 0);
//   return sum % 2 === 0 ? 'even' : 'odd';
// }
// console.log(oddOrEven([1]));
// console.log(oddOrEven([0]));
// console.log(oddOrEven([]));
// console.log(oddOrEven([0, 1, 5]));
// console.log(oddOrEven([0, 1, 2]));

//* Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).
// function solution(str, ending) {
//   // TODO: complete
//   const endLength = ending.length;
//   const revStr = str.split('').reverse().join('');
//   const revEnd = ending.split('').reverse().join('');
//   for (let i = 0; i < endLength; i += 1) {
//     if (revStr[i] !== revEnd[i]) {
//       return false;
//     }
//   }
//   return true;
// }

// // 2 способ
// function solution(str, ending) {
//   return str.endsWith(ending);
// }
// solution('abcde', 'cde');
// solution('abcde', 'abc');

//* Write a function that takes an array of strings as an argument and returns a sorted array containing the same strings, ordered from shortest to longest.
//* All of the strings in the array passed to your function will be different lengths, so you will not have to decide how to order multiple strings of the same length.

// function sortByLength(array) {
//   // Return an array containing the same strings, ordered from shortest to longest
//   const sortedArray = [...array].sort((a, b) => a.length - b.length);
//   return sortedArray;
// }

// console.log(sortByLength(['Telescopes', 'Glasses', 'Eyes', 'Monocles']));

//*An array is defined to be odd-heavy if it contains at least one odd element and every element whose value is odd is greater than every even-valued element.
//*
//*eg.
//*
//*Array [11,4,9,2,8] is odd-heavy,
//*because its odd elements [11,9] are greater than all the even elements [4,2,8]
//*
//*Array [11,4,9,2,3,10] is not odd-heavy,
//*because one of its even elements (10 from [4,2,10]) is greater than two of
//*its odd elements (9 and 3 from [11,9,3])
//*
//*Array [] is not odd-heavy,
//*because it does not contain any odd numbers
//*
//*Array [3] is odd-heavy,
//*because it does not contain any even numbers.
//*write a function called isOddHeavy or is_odd_heavy that accepts an integer array and returns true if the array is odd-heavy else return false.
// odd true - есть нечетный элемент, и все нечетные элементы по отдельности больше чем все четные
// function isOddHeavy(n) {
//   if (n.join() === '') {
//     return false;
//   }

//   const even = [];
//   const odd = [];
//   let evenWinnerCounter = 0;
//   n.forEach(element => {
//     element % 2 === 0 ? even.push(element) : odd.push(element);
//   });

//   odd.forEach(oddEl => {
//     even.forEach(evenEl => {
//       oddEl > evenEl ? (evenWinnerCounter += 0) : (evenWinnerCounter += 1);
//     });
//   });
//   return evenWinnerCounter > 0 ? false : true;
// }
// console.log(isOddHeavy([])); //false
// console.log(isOddHeavy([0, 2, 19, 5, 4])); //true
// console.log(isOddHeavy([0, 6, 19, 5, 4])); //false
// console.log(isOddHeavy([1, -2, -1, 2])); //false
// console.log(isOddHeavy([0, 0, 0, 0]));

//*Set Reducer
// Intro
// These arrays are too long! Let's reduce them!

// Description
// Write a function that takes in an array of integers from 0-9, and returns a new array:

// Numbers with no identical numbers preceding or following it returns a 1: 2, 4, 9  => 1, 1, 1
// Sequential groups of identical numbers return their count: 6, 6, 6, 6 => 4
// Example

// [0, 4, 6, 8, 8, 8, 5, 5, 7] => [1, 1, 1, 3, 2, 1]

// Your function should then repeat the process on the resulting array, and on the resulting array of that, until it returns a single integer:

// [0, 4, 6, 8, 8, 8, 5, 5, 7] =>  [1, 1, 1, 3, 2, 1] => [3, 1, 1, 1] => [1, 3] => [1, 1] => [2]

// When your function has reduced the array to a single integer following these rules, it should return that integer.

// [2] => 2

//алгоритм
// создаём новый массив и счетчик
//1. проверяем длину массива, если равна или меньше 1 ? то возвращаем цифру из массива и приводим её к числу
//2. перебираем массив, сравниваем текущий элемент со следующим, если они равны, то к счетчику прибавляем 1.

// function setReducer(input) {
//   let counter = 0;
//   const newArray = [];
//   if (input.length <= 1) {
//     return Number(input);
//   }
//   for (let i = 0; i < input.length; i += 1) {
//     if (i === input.length - 1 && input[i - 1] !== input[i]) {
//       newArray.push(1);
//     } else if (input[i] === input[i + 1]) {
//       counter += 1;
//     } else if (input[i] !== input[i + 1] && counter > 0) {
//       newArray.push(counter + 1);
//       newArray.push(1);
//       counter = 0;
//     } else {
//       newArray.push[1];
//     }
//   }
//   return newArray;
// }

// // console.log(setReducer([4]));
// console.log(setReducer([2, 2, 2, 3, 4]));
// console.log(setReducer([1, 7, 0, 6, 1, 9, 0, 7, 1, 6, 0, 9, 0]));

// //* делаем калькулятор

// const add = (a, b) => a + b;
// const sub = (a, b) => a - b;
// const mult = (a, b) => a * b;
// const div = (a, b) => a / b;

// function calculator(x, y, callback) {
//   return callback(x, y);
// }

// console.log(calculator(2, 3, add));
// console.log(calculator(2, 3, div));

// const arr = [1, 2, 3, 4];

// arr.forEach((item, index, arr) => {
//   arr[index] = item * 2;
// });

// console.log(arr);

//* arguments в обычных функциях
// function foo() {
//   console.log(arguments);
// }

// foo(1, 2, 3, 4, 2, 2);
//* arguments в стрелочных функциях
// const boo = (...rest) => {
//   console.log(rest);
// };

// boo(1, 2, 3, 2, 2, 3, 2);
//* example1 - колбек функции
//написать след. функции
//createProduct(obj, callback) - приймає обїект товару без id, а також колбек. Функція створює об'єкто товар, додаючи йому унікальний
//ідентифікатор у властивість id та викликає колбек передаючи йому створений об'єкт.
// logProduct(product) - колбек приймаючий об'єкт продукту і логуючий його в консоль
// logTotalPrice(product) - колбек що приймає об'єкт продукту і логіює загальну вартиість товару в консоль.

// function createProduct(obj, callback) {
//   const product = {
//     id: Date.now(),
//     ...obj,
//   };
//   callback(product);
// }

// function logProduct(obj) {
//   console.log(`Product ${obj.name}`);
// }

// function logTotalPrice({ price, quantity }) {
//   console.log(`total price is: ${price * quantity}`);
// }

// createProduct({ name: 'apple', price: 30, quantity: 3 }, logProduct);
// createProduct({ name: 'lemon', price: 20, quantity: 5 }, logTotalPrice);

//* Example 2
//Добавьте в объект account методы withdraw(amount, onSuccess, onError) и deposit(amount, onSuccess, onError),
// где первый аргумент это сумма операции, а второй и третий - колбеки.
//метод withdraw вызывает onError если amount больше чем TRANSACTION_LIMIT или this.balance,  и onSuccess в обратном случае.
//метод deposit вызывает onError если amount больше TRANSACTION_LIMIT или меньше или равняется 0, и onSuccess в другом случае.

//решение

// const TRANSACTION_LIMIT = 1000;

// const account = {
//   username: 'Jacob',
//   balance: 400,

//   withdraw(amount, onSuccess, onError) {
//     console.log(`Текущий баланс: ${this.balance}`);
//     if (amount > TRANSACTION_LIMIT) {
//       onError(`ЛИМИТ ТРАНЗАКЦИИ: ${TRANSACTION_LIMIT}`);
//       return;
//     } else if (amount > this.balance) {
//       onError(`Недостаточно средств на счету. Ваш баланс: ${this.balance}`);
//       return;
//     } else {
//       this.balance -= amount;
//       onSuccess(
//         `Ваш баланс обновлён. Вы сняли со счета: ${amount} евро. На счету: ${this.balance}`
//       );
//     }
//   },

//   deposit(amount, onSuccess, onError) {
//     console.log(`Текущий баланс: ${this.balance}`);
//     if (amount <= 0) {
//       onError(`Вы не можете снимать сумму меньше 0`);
//       return;
//     } else if (amount > TRANSACTION_LIMIT) {
//       onError(`ЛИМИТ ТРАНЗАКЦИИ: ${TRANSACTION_LIMIT}`);
//       return;
//     } else {
//       this.balance += amount;
//       onSuccess(
//         `Ваш баланс обновлён. Вы положили на счет: ${amount} евро. На счету: ${this.balance}`
//       );
//     }
//   },
// };

// function handleSuccess(message) {
//   console.log(`Success! ${message}`);
// }

// function handleError(message) {
//   console.log(`Error! ${message}`);
// }

// account.withdraw(2000, handleSuccess, handleError);
// account.withdraw(1000, handleSuccess, handleError);
// account.withdraw(200, handleSuccess, handleError);

// account.deposit(1200, handleSuccess, handleError);
// account.deposit(0, handleSuccess, handleError);
// account.deposit(600, handleSuccess, handleError);

// const cars = [
//   {
//     brand: 'audi', //фирма производитель
//     type: 'sedan',
//     model: 'a4', //модель
//     volume_engine: '1.8', //объём двигателя
//     hp: '120', //кол-во лошадиных сил
//     awd: 'нет', //полный привод [да/нет]
//     automat: 'да', //автомат [да/нет]
//     onSale: true,
//     price: 12000,
//     amount: 4,
//   },
//   {
//     brand: 'audi', //фирма производитель
//     type: 'crossover',
//     model: 'a4 allroad', //модель
//     volume_engine: '2', //объём двигателя
//     hp: '211', //кол-во лошадиных сил
//     awd: 'да', //полный привод [да/нет]
//     automat: 'да', //автомат [да/нет]
//     onSale: false,
//     price: 20000,
//     amount: 6,
//   },
//   {
//     brand: 'audi', //фирма производитель
//     type: 'sedan',
//     model: 'a6', //модель
//     volume_engine: '2', //объём двигателя
//     hp: '180', //кол-во лошадиных сил
//     awd: 'нет', //полный привод [да/нет]
//     automat: 'да', //автомат [да/нет]
//     onSale: true,
//     price: 15000,
//     amount: 12,
//   },
//   {
//     brand: 'bmw', //фирма производитель
//     type: 'roadster',
//     model: '3 Series', //модель
//     volume_engine: '1.6', //объём двигателя
//     hp: '135', //кол-во лошадиных сил
//     awd: 'нет', //полный привод [да/нет]
//     automat: 'нет', //автомат [да/нет]
//     onSale: true,
//     price: 13500,
//     amount: 2,
//   },
//   {
//     brand: 'bmw', //фирма производитель
//     type: 'sedan',
//     model: '5 Series', //модель
//     volume_engine: '3', //объём двигателя
//     hp: '258', //кол-во лошадиных сил
//     awd: 'нет', //полный привод [да/нет]
//     automat: 'да', //автомат [да/нет]
//     onSale: false,
//     price: 15600,
//     amount: 13,
//   },
//   {
//     brand: 'volkswagen', //фирма производитель
//     type: 'crossover',
//     model: 'passat', //модель
//     volume_engine: '1.8', //объём двигателя
//     hp: '152', //кол-во лошадиных сил
//     awd: 'нет', //полный привод [да/нет]
//     automat: 'да', //автомат [да/нет]
//     onSale: true,
//     price: 11400,
//     amount: 6,
//   },
// ];

//* нужно вернуть массив моделей автомобилей

// const getModels = cars => {
//   return cars.map(car => car.model);
// };

// console.table(getModels(cars));

//* makeCarsWithDiscount вернёт новый массив с объектами с измененным значением свойства price в зависимости от переданной скидки и в зависимости учавствует ли модель в скидках(onSale: true)

// const makeCarsWithDiscount = (cars, discount) => {
//   return cars.map(car => {
//     return car.onSale
//       ? {
//           ...car,
//           price: (car.price *= 1 - discount),
//         }
//       : {
//           ...car,
//         };
//   });
// };

// makeCarsWithDiscount(cars, 0.1);

// console.log(makeCarsWithDiscount(cars, 0.1));

//*функция filterByPrice возвращает массив автомобилей цена которых меньше чем значечние параметра
//* БУДЕТ ВОЗВРАЩЕН КАЖДЫЙ ЭЛЕМЕНТ ИТЕРАЦИИ ЕСЛИ УСЛОВИЕ БУДЕТ TRUE В НЕ ЗАВИСИМОСТИ ОТ ТОГО ЧТО В RETURN.
// const filterByPrice = (cars, threshold) =>
//   cars.filter(({ price }) => price <= threshold);

// console.dir(cars);
// console.log(filterByPrice(cars, 15000));

// //* Метод filter. Пусть функция getCarsWithDiscount возвращает массив автомобилей у которых свойство onSale является true

// console.table(cars);

// const getCarsWithDiscount = cars => cars.filter(car => car.onSale);

// console.table(getCarsWithDiscount(cars));

//* пусть функция getCarsWithType возвращает массив автомобилей, тип которых хранится с значением параметра type.

// const getCarsWithType = (cars, type) => cars.filter(car => car.type === type);

//если после использования деструктуризации совпадают названия переменной и ключа --->
// const getCarsWithType = (cars, type) =>
//   cars.filter(({ type: carType }) => carType === type);
// console.table(getCarsWithType(cars, 'sedan'));

// //* Метод find.
// const getCarByModel = (cars, model) =>
//   cars.find(({ model: carModel }) => carModel === model);
// console.log(getCarByModel(cars, 'a4'));
//* Метод sort. Пусть функция sortByAscendingAmount возвращает новый массив автомобилей, отсортированный по увеличению значения свойства amount
//Метод sort мутирует текущий массив/объект
// const sortByAscendingAmount = cars =>
//   [...cars].sort((a, b) => a.amount - b.amount);
//с деструктуризацией ------------>
// const sortByAscendingAmount = cars =>
//   [...cars].sort(({ amount: a }, { amount: b }) => a - b);
// console.table(sortByAscendingAmount(cars));

//* Sort. Пусть функция sortByModel возвращает новым массив автомобилей отсортированный по названию модели в алфавитном
//* и обратно алфавитному порядке, в зависимости от значения параметра order.
//'asc' - по алфавиту
//'desc' - обратно алфавиту

// const sortByModel = (cars, order) =>
//   [...cars].sort(({ model: a }, { model: b }) =>
//     order === 'asc' ? a.localeCompare(b) : b.localeCompare(a)
//   );
// console.table(cars);
// console.table(sortByModel(cars, 'asc'));
// console.table(sortByModel(cars, 'desc'));

//* пусть функция getTOtalAmount возвращает общее кол-во автомобилей( значение свойства amount)

// const getTotalAmount = cars.reduce((acc, { amount }) => acc + amount, 0);

// console.log(getTotalAmount);

//* Пусть функция getAvailiableCarNames возвращает массивмоделей автомобилей, но только тех, которые сейчас на распродаже.
// const getAvaliableCarNames = cars
//   .filter(({ onSale }) => onSale)
//   .map(({ brand, model }) => `${brand} ${model}`);

// console.log(getAvaliableCarNames);

//* ланцюжки методів
//* Пусть функция getSortedCarsOnSale возвращает массив автомобилей на распродаже(onSale = true), отсортированных по увеличению цены.
// здесь не нужно копировать массив, т.к. после метода filter появится новый массив, и деструктивный(мутирующий) метод массив
// вызывается на копии и не изменит оригинальный массив
/**
//  * @param {array} cars - array with object
//  * @returns {array} - sorted array on sale
//  */
// const getSortedCarsOnSale = cars
//   .filter(car => car.onSale)
//   .sort((a, b) => a.price - b.price);

// console.table(cars);
// console.table(getSortedCarsOnSale);

//* Для собеседования. Функция получает строку и ей нужно вернуть объект, у которого в ключе каждая буква,
//*  а в свойстве ключа - кол - во повторений этой буквы в строке
// const str = 'asdffasdgasfasdg';

// 1 способ
// const result = str.split('').reduce((acc, item) => {
//   acc.hasOwnProperty(item) ? (acc[item] += 1) : (acc[item] = 1);
//   return acc;
// }, {});
// console.log(result);

// 2 способ
// const result = str.split('').reduce((acc, item) => {
//   item in acc ? (acc[item] += 1) : (acc[item] = 1);
//   return acc;
// }, {});
// console.log(result);

// 3 способ
// const result = str.split('').reduce((acc, item) => {
//   const keys = Object.keys(acc);
//   keys.includes(item) ? (acc[item] += 1) : (acc[item] = 1);
//   return acc;
// }, {});
// console.log(result);

//* задача на reduce
//* Общее колво авто 6:
//* 1. Honda
//* 2. Audi

//* 6.Renault

// const arr = ['Honda', 'Ford', 'Audi', 'BMW', 'Renault', 'Skoda'];

// function logCars(arr) {
//   const result = arr.reduce(
//     (acc, car, idx) => {
//       return acc + `\n${idx + 1} - ${car}`;
//     },
//     arr.length
//       ? `Загальная кількість авто ${arr.length}`
//       : 'Вибачте, авто немає'
//   );
//   return result;
// }

// console.log(logCars(arr));
// console.log(logCars([]));

//* --------------------------ВСЁ о THIS----------------------------------------------------------

// const objA = {
//   age: 22,
//   myAge() {
//     console.log(this);// objA
//   },
// };
// objA.myAge();

// const objA = {
//   age: 22,
//   myAge: () => {
//     console.log(this);//window or undefined
//   },
// };
// objA.myAge();

// const objA = {
//   age: 22,
//   myAge: () => {
//     const test = () => {
//       console.log(this); //window or undefined
//       test();
//     };
//   },
// };
// objA.myAge();

// const objA = {
//   age: 22,
//   myAge() {
//     const test = () => {
//       console.log(this); //objA
//       test();
//     };
//   },
// };
// objA.myAge();

// const objA = {
//   age: 22,
//   myAge() {
//     function test() {
//       console.log(this); //window or undefined
//     }
//     test();
//   },
// };
// objA.myAge();

// const objA = {
//   age: 22,
//   skills: {
//     skill: ['html', 'css'],
//     foo() {
//       const boo = () => {
//         console.log(this); //skills
//       };
//       boo();
//     },
//   },
// };

// objA.skills.foo();

//* CALL APPLY BIND
// //пример BIND: делает копию метода

// const objA = {
//   name: 'A',
//   myAge(a, b, c, d) {
//     console.log(arguments);
//     console.log(this, a, b, c, d);
//     return 'Some value';
//   },
// };

// const objB = {
//   name: 'B',
// };

// const result = objA.myAge.bind(objB, 1, 2, 3, 4);
// // если нужно изменять параметры, которые принимает метод, то мы не используем bind,он навсегда к ним привяжется. При вызове метода нельзя поменять параметры.
// //не правильно: const result = objA.myAge.bind(objB, 1, 2, 3, 4); result();
// // правильно const result = objA.myAge.bind(objB); result(55, 6, 7, 8);
// result(55, 6, 7, 8);
// result();
//* -------------------------- Прототипы и наследование класса---------------------------------------

// const obj1 = {
//   x: 1,
// };

// const obj2 = Object.create(obj1);
// const obj3 = Object.create(obj2);
// console.log(obj3.x);
// console.log(obj2.x);

// console.log(obj3 === obj2);

//* ПРИМЕР 1
// Написать метод calcTotalPrice(stoneName), который принимает название камня и рассчитывает и возвращает общую цену камней
// с таким имеем, ценой и количеством со свойства stones.

// const chopShop = {
//   stones: [
//     { name: 'Emerald', price: 1300, quantity: 4 },
//     { name: 'Diamond', price: 2700, quantity: 3 },
//     { name: 'Saphire', price: 1400, quantity: 7 },
//     { name: 'Ruby', price: 800, quantity: 2 },
//   ],
//   calcTotalPrice(stoneName) {
//     const { price, quantity } = this.stones.find(
//       ({ name }) => name === stoneName
//     );
//     return price * quantity;
//   },
// };

// console.log(chopShop.calcTotalPrice('Emerald')); //5200

// //масштабируем, открываем другой магазин с камнями

// const chopShop2 = {
//   stones: [
//     { name: 'Ametist', price: 1100, quantity: 6 },
//     { name: 'Izumrud', price: 2500, quantity: 2 },
//   ],
// };

// console.log(chopShop.calcTotalPrice.call(chopShop2, 'Ametist')); //6600

// console.log(chopShop.calcTotalPrice.apply(chopShop2, ['Ametist'])); //6600

//* Пример 2

//Выполните рефакторинг кметодов объекта phonebook чтоб код заработал

// const phonebook = {
//   contacts: [],
//   add(contact) {
//     const newContact = {
//       list: 'default',
//       ...contact,
//       id: this.generateId(),
//       cratedAt: this.getDate(),
//     };
//     this.contacts.push(newContact);
//     return this.contacts;
//   },
//   generateId() {
//     return '_' + Math.random().toString(36).substr(2, 9);
//   },
//   getDate() {
//     return Date.now();
//   },
// };

// console.log(
//   phonebook.add({
//     name: 'Mango',
//     email: 'mango@mail.com',
//     list: 'friends',
//   })
// );

// console.log(
//   phonebook.add({
//     name: 'Vitalya',
//     email: 'vitalya@mail.com',
//   })
// );

//* Пример 3
// Создайте объект calculator с трем методами
// read(a,b) - принимает два значения и сохраняет их как свойства объекта
// add() - сумма значений
//mult - умножение значений

// const calculator = {
//   read(a, b) {
//     this.a = a;
//     this.b = b;
//   },
//   add() {
//     return (this.a ?? 0) + (this.b ?? 0);
//   }, // оператор ??. Если значение перед "??" null or undefined, то выдаёт то значение после "??"
//   mult() {
//     return (this.a ?? 1) * (this.b ?? 1);
//   },
// };

// calculator.read(3, 2);
// console.log(calculator.add());
// console.log(calculator.mult());

//* КЛАССЫ

//*Example 1 - блогер
//Напиши класс Blogger для создания объекта блогера со следующими свойствами: email(str), age(Num), numberOfPosts(Num), topics[]
//Класс ждёт один параметр - объект настроек со свойствами.
//Добавь метод getInfo(), который, возвращает строку: User ${почта} is ${возраст} years old and has ${кол-во постов} posts.
//Добавь метод updatePostCount(value), который в параметр value принимает кол-во постов, ,которое нужно добавить пользователю.

// class Blogger {
//   constructor({ email, age = 18, numberOfPosts = 0, topics = [] }) {
//     this.email = email;
//     this.age = age;
//     this.numberOfPosts = numberOfPosts;
//     this.topics = topics;
//   }

//   getInfo() {
//     return `User ${this.email} is ${this.age} years old and has ${this.numberOfPosts} posts`;
//   }

//   updatePostCount(value) {
//     this.numberOfPosts += value;
//   }
// }

// const mango = new Blogger({
//   email: 'mango@mail.com',
//   age: 24,
//   numberOfPosts: 20,
//   topics: ['tech', 'cooking'],
// });

// console.log(mango.getInfo());
// mango.updatePostCount(5);
// console.log(mango.getInfo());

//* Example 2
//Напиши класс Storage который создает объекты для управления складом товаров. ПРи вызове будет получать один аргумент -
//начальный массив товаров и будет записывать его свойство items.

// Добавь методы класса:
//getItems() - возвращает массив товаров
//addItem(item) - получает новый товар и добавляет его к текущим.
//removeItem(item) - получает товар и, если он есть, удаляет его из текущих

// class Storage {
//   constructor(items) {
//     this.items = items;
//   }

//   getItems() {
//     return this.items;
//   }
//   addItem(item) {
//     this.items.includes(item)
//       ? console.log('такой товар уже есть в корзине')
//       : this.items.push(item);
//   }

//   removeItem(item) {
//     const idx = this.items.indexOf(item);
//     this.items.includes(item) //(!)~idx восклицательный знак без скобок. ! - приведение к булю.
//       ? this.items.splice(idx, 1)
//       : console.log('такого товара нет в корзине');
//   }
// }

// const storage = new Storage(['apple', 'lemon', 'banana', 'blueberry']);
// const items = storage.getItems();
// // console.log(items); //['apple', 'lemon', 'banana', 'blueberry']

// storage.addItem('kivi');
// console.log(items); //['apple', 'lemon', 'banana', 'blueberry', 'kivi']
// storage.addItem('banana');
// console.log(items); //['apple', 'lemon', 'banana', 'blueberry', 'kivi']
// storage.removeItem('banana');
// console.log(items);
// storage.removeItem('pineapple');
// console.log(items);

//* Example 3
//напиши клас User, который создаёт объект со свойствами login и email.
// Объяви приватные свойства #login и #email, доступ сделай через get и set.

// class User {
//   #login;
//   #email;
//   constructor({ login, email }) {
//     this.#login = login;
//     this.#email = email;
//   }

//   get login() {
//     return this.#login;
//   }

//   set login(newLogin) {
//     if (this.#login === newLogin) {
//       console.log('это ваш текущий логин, изменение не требуется');
//     }
//     this.#login = newLogin;
//   }

//   get email() {
//     return this.#email;
//   }

//   set email(newEmail) {
//     if (this.#email !== newEmail) {
//       this.#email = newEmail;
//     }
//   }
// }

// const mango = new User({
//   login: 'Mango',
//   email: 'mango@dog.woof',
// });

// console.log(mango.email);
// mango.email = 'woofwoof@dogge.com';
// console.log(mango.email);

// mango.login = 'Mango'; //это ваш текущий логин, изменение не требуется

//* Example 4
// напиши клас Notes, который управляет коллекцией заметок в свойстве items. Заметка это объект со свойствами text и priority.
// Добавь классу статичное свойство Priority, в котором будут храниться объекты с приоритетами.
// {
//   LOW: 'low',
//   NORMAL: 'normal',
//   HIGH: 'high'
// }
// Добавь методы addNote(note), removeNote(text) и updatePriority(text, newPriority)
// class Notes {
//   static Priority = {
//     LOW: 'low',
//     NORMAL: 'normal',
//     HIGH: 'high',
//   };
//   constructor(note) {
//     this.items = note;
//   }

//   addNote(note) {
//     const inArr = this.items.some(({ text }) => text === note);
//     if (!inArr) {
//       this.items.push(note);
//     }
//   }

//   removeNote(text) {
//     const idx = this.items.findIndex(({ text: noteText }) => noteText === text);
//     if (!!~idx) {
//       //idx !== -1
//       this.items.splice(idx, 1);
//     }
//   }

//   updateNote(text, newPriority) {
//     const idx = this.items.findIndex(({ text: noteText }) => noteText === text);
//     if (!!~idx)
//       //idx !== -1 or idx > 1
//       this.items[idx].priority = newPriority;
//   }
// }

// const myNotes = new Notes([]);

// myNotes.addNote({
//   text: 'моя першая замітка',
//   Priority: Notes.Priority.LOW,
// });

// myNotes.addNote({
//   text: 'моя друга замітка',
//   Priority: Notes.Priority.LOW,
// });

// console.log(myNotes.items);

// myNotes.updateNote('моя друга замітка', Notes.Priority.HIGH);

// console.log(myNotes.items);

//*Example 5. Самостоятельное решение
//Напишите класс Toggle который принимает объект настроек {isOpen: boolean} и объявляет одно свойство on - состояние вкл/выкл(true/false)
//По умолчанию значение свойства on должно быть false.

// class Toggle {
//   constructor({ on }) {
//     this.on = false;
//   }

//   toggle() {
//     this.on === false ? (this.on = true) : (this.on = false);
//   }
// }
// const firstToggle = new Toggle({});

// console.log(firstToggle);
// firstToggle.toggle();
// console.log(firstToggle);

//* CLASS PRACTICE

// class User {
//   static counter = 0;
//   static #takenEmails = [];
//   static isEmailTaken(email) {
//     return User.#takenEmails.includes(email);
//   }
//   #name;
//   #email;
//   constructor({ name = '', age = 18, married = false, email = '' } = {}) {
//     User.counter += 1;
//     this.#name = name;
//     this.age = age;
//     this.married = married;
//     this.#email = email;
//     User.#takenEmails.push(email);
//   }

//   get namer() {
//     return this.#name;
//   }

//   set namer(newName) {
//     return (this.#name = newName);
//   }

//   get emailer() {
//     return this.#email;
//   }

//   set emailer(newEmail) {
//     return (this.#email = newEmail);
//   }

//   nameChanger(newName) {
//     this.#name = newName;
//   }
// }

// const user1 = new User({
//   name: 'Anton',
//   age: 32,
//   married: true,
//   email: 'antonchegg@gmail.com',
// });

// const enigmatik = {
//   name: 'Danil',
//   age: 33,
//   married: false,
//   email: 'enigmatik@gmail.com',
// };

// console.log(user1.emailer);
// console.log(User.isEmailTaken('123@gmail.com'));
// console.log(User.isEmailTaken('antonchegg@gmail.com'));

// class Gamer extends User {
//   constructor({
//     name = '',
//     age = 18,
//     married = false,
//     email = '',
//     gameTime = 0,
//     win = 0,
//     lose = 0,
//   }) {
//     super({ name, age, married, email });
//     this.gameTime = gameTime;
//     this.win = win;
//     this.lose = lose;
//   }
// }

// const userGamer1 = new Gamer({
//   name: 'gamer',
//   married: false,
//   email: 'gamer@gmail.com',
//   gameTime: 10,
//   win: 0,
//   lose: 0,
// });

// console.log(userGamer1.nameChanger('hello'));

// console.log(userGamer1);
// console.log(userGamer1.emailer);
// userGamer1.emailer = 'gamer123@gmail.com';

// console.log(userGamer1.emailer);

//* DOM, навигация по DOM, объектная модель документа

//*example 1
//Сделать список технологий, который учатся на курсе фулстак с помощью JS.

// const technologies = ['HTML', 'CSS', 'Javascript', 'React', 'Node'];
//показать как это делается через map и reduce
// решение
/*
1. создание списка ul
2. создание цикла для перебора массива
3. создание li
4. записать текст с массива в елемент li
5. поместить элементы li в элементы ul
6. поместить ul на страницу
*/

// //1 спсособ, самый не оптимальный
// const container = document.getElementById('container');

// console.log(container);

// const listEl = document.createElement('ul');

// for (let technology of technologies) {
//   const elementEL = document.createElement('li');
//   elementEL.textContent = technology;
//   listEl.appendChild(elementEL);
// }

// container.appendChild(listEl);

// //2 способ через map
// const listEl = document.createElement('ul');
// const container = document.getElementById('container');

// const listContent = technologies
//   .map(technology => `<li>${technology}</li>`)
//   .join('');

// listEl.insertAdjacentHTML('beforeEnd', listContent);
// container.appendChild(listEl);

// //3 способ через reduce
// const container = document.getElementById('container');
// const listContent = technologies.reduce(
//   (acc, technology) => (acc += `<li>${technology}</li>`),
//   ''
// );

// container.insertAdjacentHTML('beforeend', `<ul>${listContent}</ul>`);

//*example2
//сделать несколько кнопок на основе массива с объектами используя createElement

// const colors = [
//   {
//     label: 'red',
//     color: '#FF0000',
//   },
//   {
//     label: 'green',
//     color: '#00FF00',
//   },
//   {
//     label: 'blue',
//     color: '#0000FF',
//   },
//   {
//     label: 'yellow',
//     color: '#FFFF00',
//   },
// ];

/*1.перебрать массив colors
  2.создать кнопку
  3. добавить кнопке текст и цвет кнопки
  4. добавить кнопки на страницу
*/

// //1 способ через appendChild
// const container = document.getElementById('container');

// colors.forEach(({ label, color }) => {
//   const buttonEL = document.createElement('button');
//   buttonEL.textContent = label;
//   buttonEL.style.backgroundColor = color;
//   container.appendChild(buttonEL);
// });

//2 способ через insertAdjacentHTML

// const container = document.getElementById('container');
// const contentList = colors.reduce((acc, { label, color }) => {
//   return (acc += `<button style="background-color: ${color}">${label}</button>`);
// }, '');

// container.insertAdjacentHTML('beforeend', contentList);

const cars = [
  {
    id: 1,
    car: "honda",
    type: "civic",
    price: 12000,
    img: "https://images.prismic.io/carwow/3149ba8c-1b2d-4748-a395-271995aeb87f_LHD+Honda+Civic+eHEV+2022+exterior+%288%29.jpg?fit=clip&q=60&w=750&cs=tinysrgb&auto=format",
  },
  {
    id: 2,
    car: "audi",
    type: "q7",
    price: 40000,
    img: "https://images.prismic.io/carwow/356d8b13-a35f-4e3d-99cf-5911edc63a39_LHD+Audi+Q7+2021+exterior+%2812%29.jpg?fit=clip&q=60&w=750&cs=tinysrgb&auto=format",
  },
  {
    id: 33,
    car: "bmw",
    type: "5 series",
    price: 9000,
    img: "https://www.bmw.de/content/dam/bmw/common/all-models/5-series/sedan/2023/5-series-sedan-silver.png/jcr:content/renditions/cq5dam.resized.img.585.low.time1684927323013.png",
  },
  {
    id: 3,
    car: "honda",
    type: "accord",
    price: 20000,
    number: "+3800000000",
    img: "https://springerfachmedien.azureedge.net/sfm-trucker/thumb_750x422/media/5172/Honda-Accord.14556058.jpg",
  },
];

//* Example3
// // вывести на экран список изображений каждой машины по типу ul>li>img
// const containerEl = document.querySelector('#container');
// const listEl = document.createElement('ul');
// const carPhotos = cars.map(car => `<li><img src=${car.img}></li>`).join('');
// // console.log(carPhotos);
// listEl.insertAdjacentHTML('afterbegin', carPhotos);
// console.log(listEl);
// containerEl.appendChild(listEl);

//* Example4
// //сделать фильтр автомобилей с помощью формы(инпута, селекта, и кнопки)  по марке и модели авто.
// const listEl = document.querySelector('.js-list');
// const formEl = document.querySelector('.js-search-form');
// console.log(formEl);
// formEl.addEventListener('submit', onSearch);

// function makeMarkup(arr) {
//   return arr
//     .map(
//       ({ id, car, type, price, img }) => `<li data-id="${id}">
//           <img src="${img}" alt="${car}" width ="640"/>
//           <h2>${car}</h2>
//           <h3>${type}</h3>
//           <p>${price}</p>
//         </li>`
//     )
//     .join('');
// }

// listEl.insertAdjacentHTML('beforeend', makeMarkup(cars));

// function onSearch(evt) {
//   evt.preventDefault();
//   const form = evt.currentTarget;
//   console.dir(form);
//   const { query, select } = form.elements;
//   // console.log('query.value:', query.value);
//   // console.dir('select.value: ', select.value);
//   const searchCars = cars.filter(
//     item =>
//       item[select.value].toLowerCase() === query.value.trim().toLowerCase()
//   );
//   listEl.innerHTML = makeMarkup(searchCars);
//   console.log(searchCars);
// }

//*Example5
//Написать код, для открытия модального окна с оверлеем.
/*

*/

const modalWindow = document.querySelector("#modalWindow");
console.log(modalWindow);
