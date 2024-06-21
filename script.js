const logItems = function (array) {
    for (let i = 0; i < array.length; i++){
    console.log(`${i + 1} - ${array[i]}`);
    }
}

logItems(['Mango', 'Poly', 'Ajax', 'Lux', 'Jay', 'Kong']);
logItems([5, 10, 15, 25, 30, 35, 40, 45, 50]);

//2
const calculateEngravingPrice = function (message, pricePerWord){
    const words = message.split(' ');
    const numberOfWords =  words.length;
    const totalPrice = numberOfWords * pricePerWord;
    return totalPrice;
}

// 3 
const findLongestWord = function (string) {
const words = string.split(' ');
let longestWord = words[0];

for ( let i = 0; i < words.length; i++){
    if(words[i].length > longestWord.length){
        longestWord = words[1];
    }
  }
  return longestWord;
}

console.log(findLongestWord('The quick brown fox jumped over the lazy dog'));

// 4 
const formatString = function (string) {
    if (string.length <= 40){
        return string;
    } else {
        return string.slice(0, 40) + '...'
    }
}
console.log(formatString);
// 5
const checkforSpam = function (message) {
    const lowerCase = message.toLowerCase();
    return lowerCase.includes('span') || lowerCase.includes('sale');
}

