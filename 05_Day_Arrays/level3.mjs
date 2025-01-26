import { countries } from './05_level2/countries.js';
//1
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
console.log(ages.sort());
let min = Math.min(...ages);
let max = Math.max(...ages);
console.log(min);
console.log(max);

let median;
if (ages.length % 2 === 0) {
  median = (ages[ages.length / 2 - 1] + ages[ages.length / 2]) / 2;
}
else {
  median = ages[Math.floor(ages.length / 2)];
}
console.log(median);

let average = ages.reduce((acc, curr) => acc + curr) / ages.length;
console.log(average);

let range = Math.max(...ages) - Math.min(...ages);
console.log(range);

const diffmin = Math.abs(min - average);
const diffmax = Math.abs(max - average);
console.log(diffmin);
console.log(diffmax);

console.log(countries.slice(0,10))


//2

let median2;
if (countries.length % 2 === 0) {
  median2 = (countries[countries.length / 2 - 1] + countries[countries.length / 2]) / 2;
}
else {
  median2 = countries[Math.floor(countries.length / 2)];
}
console.log(median2);

//3
let middle = Math.floor(countries.length/2);
if(countries.length % 2 ==0){
  let firstHalf = countries.slice(0,middle);
  let secondHalf = countries.slice(middle);
  console.log(`the first half: ${firstHalf}`);
  console.log(`the second half: ${secondHalf}`); 

}
else{
  let firstHalf = countries.slice(0,middle+1);
  let secondHalf = countries.slice(middle+1);
  console.log(`the first half: ${firstHalf}`);
  console.log(`the second half: ${secondHalf}`);
}

