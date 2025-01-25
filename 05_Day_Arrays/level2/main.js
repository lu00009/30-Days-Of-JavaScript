import {countries} from './countries.js';
import {webTechs} from './web_techs.js';

//1
for (let i = 0; i < countries.length; i++) {
  console.log(countries[i]);
}
for (let i = 0; i < webTechs.length; i++) {
  console.log(webTechs[i]);
}

//2
let text =
'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
let cleanText = text.replace(/[.,]/g, '');
let words = cleanText.split(' ');
console.log(words)
console.log(words.length)

//3
const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
if(!shoppingCart.includes('Meat')){
  shoppingCart.unshift('Meat');
  console.log(shoppingCart);
}

if(!shoppingCart.includes('Sugar')){
  shoppingCart.push('Sugar');
  console.log(shoppingCart);
}

if(shoppingCart.includes('Honey')){
  shoppingCart.splice(shoppingCart.indexOf('Honey'), 1);
  console.log(shoppingCart);
}

shoppingCart[shoppingCart.indexOf('Tea')] = 'Green Tea';
console.log(shoppingCart);

//4
if(countries.includes('Ethiopia')){
  console.log('ETHIOPIA');
}
else{
  countries.push('Ethiopia');
  console.log(countries);
}

//5
if(webTechs.includes('Sass')){
  console.log('Sass is a CSS preprocess');
}
else{
  webTechs.push('Sass');
  console.log(webTechs);
}

//6
const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node','Express', 'MongoDB']
const fullStack = frontEnd.concat(backEnd);
console.log(fullStack)
