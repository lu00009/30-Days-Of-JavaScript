//1
const age = prompt('Enter your age:')
if(age >= 18 ){
  console.log('You are old enough to drive.')
}
else{
  console.log(`You are left with ${18 - age} years to drive.`)
}
//2 
const yourAge = prompt('Enter your age:')
const myAge = 22
if(yourAge >= myAge ){
  console.log(`You are ${yourAge - myAge} years older than me.`)}
else{
  console.log(`You are ${myAge - yourAge} years younger than me.`)
}
//3
let a = 4
let b = 3
if(a > b){
  console.log(`${a} is greater than ${b}`)
}
else{
  console.log(`${a} is less than ${b}`)
}
//4
let number = prompt('Enter a number:')
if(number % 2 === 0){
  console.log(`${number} is an even number.`)
}
else{
  console.log(`${number} is an odd number.`)
}


