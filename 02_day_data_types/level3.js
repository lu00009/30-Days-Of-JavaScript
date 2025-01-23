let string = 'Love is the best thing in this world. Some found their love and some are still looking for their love.';
let love = string.match(/love/gi);
console.log(love);

let sentence1 = 'You cannot end a sentence with because because because is a conjunction';
let because = sentence1.match(/because/gi);
console.log(because);

const sentence2 = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching'
const cleanedSentence = sentence2.replace(/[^a-zA-Z0-9\s]/g, '');
console.log(cleanedSentence);

let words = cleanedSentence.split(' ').map(word => word.toLowerCase());
let wordFrequency = {};
for (const word of words) {
  wordFrequency[word] = (wordFrequency[word] || 0) + 1;
}

let count = 0;
let freqword = '';

for (const word in wordFrequency) {
  if (wordFrequency[word] > count) {
    count = wordFrequency[word];
    freqword = word;
  }
}
console.log(`Most frequent word is "${freqword}" and it appears ${count} times.`);

let text = 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.';
let numbers = text.match(/\d+/g).map(Number);
let total = numbers.reduce((acc, curr) => acc + curr, 0);
console.log(total);
