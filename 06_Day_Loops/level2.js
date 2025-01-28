//1
let string = '';
const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'; // Pool of possible characters
for (let z = 0; z < 12; z++) {
  string += characters.charAt(Math.floor(Math.random() * characters.length));
}
console.log(string);
//2
const hex = '#' + Math.floor(Math.random() * 0xffffff).toString(16).padStart(6, '0');
console.log(hex);
//3
let string1 = '';
random100d = Math.floor(Math.random() * 1000);
if(random100d !== 255){
  console.log(`rgb(${random100d},${random100d},${random100d})`);
}
//4
const countries = [
  'Albania',
  'Bolivia',
  'Canada',
  'Denmark',
  'Ethiopia',
  'Finland',
  'Germany',
  'Hungary',
  'Ireland',
  'Japan',
  'Kenya'
];
let arr = [];
for(let i of countries){
  arr.push(i.toUpperCase())
}
console.log(arr);

//5
let arr1 = [];
for(let i of countries){
  arr1.push(i.length);
}
console.log(arr1);

//6
const arrCountries = countries.map(country => [country, country.slice(0, 3).toUpperCase(), country.length]);
console.log(arrCountries);
//7
let arr2 = [];
for (let i of countries){
  if(i.includes('land')){
    arr2.push(i);
    console.log(i);
  }
}

//8
const countriesEndingWithIA = countries.filter(country => country.endsWith('ia'));
if (countriesEndingWithIA.length > 0) {
  console.log(countriesEndingWithIA); 
} else {
  console.log('These are countries ends without ia');
}

//9
const countryWithLongestName = countries.reduce((longest, current) => {
  return current.length > longest.length ? current : longest;
}, "");
console.log(countryWithLongestName);

//10
const fivecharacters = countries.filter(country => country.length === 5);
console.log(fivecharacters);

//12
const webTechs = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Redux',
  'Node',
  'MongoDB'
]
const arrayofArray = webTechs.map(tech => [tech, tech.length]);
console.log(arrayofArray);

//13
const mernStack = ['MongoDB', 'Express', 'React', 'Node'];
const accronym = mernStack.map(tech => tech[0]).join('');
console.log(accronym);

//14
for (let i = 0; i <= webTechs.length; i++) {
  console.log(webTechs[i]);
}

//15
let fruits = ['banana', 'orange', 'mango', 'lemon'];
let fruits1 = [];
for (let i = fruits.length - 1; i >= 0; i--) {
  fruits1.push(fruits[i]);
}
console.log(fruits1);

