let base = prompt('Enter base')
console.log(base)
let height = prompt('Enter height')
console.log(height)
const area = 0.5 * base * height
console.log(`The area of the triangle is ${area}`)

let sideA = prompt('Enter side a')
console.log(sideA)
let sideB = prompt('Enter side b')
console.log(sideB)
let sideC = prompt('Enter side c')
console.log(sideC)
const perimeter = sideA + sideB + sideC
console.log(`The perimeter of the triangle is ${perimeter}`)

let length = prompt('Enter length of a rectangle')
console.log(length)
let width = prompt('Enter width of a rectangle')
console.log(width)
const areaRectangle = length * width
console.log(`The area of the rectangle is ${areaRectangle}`)
const perimeterRectangle = 2 * (length + width)
console.log(`The perimeter of the rectangle is ${perimeterRectangle}`)

let radius = prompt('Enter the radius of a circle')
console.log(radius)
const areaCircle = Math.PI * radius * radius
console.log(`The area of the circle is ${areaCircle}`)
const circumference = 2 * Math.PI * radius
console.log(`The circumference of the circle is ${circumference}`)

let slope = 2;
let yIntercept = -2
let xIntercept = -yIntercept / slope
console.log('slope is: ' + slope)
console.log('y-intercept is: ' + yIntercept)
console.log('x-intercept is: ' + xIntercept)

let x1 = 2
let y1 = 2
let x2 = 6
let y2 = 10
let m = (y2 - y1) / (x2 - x1)
console.log(`The slope of the line is ${m}`)

let slopeCompare = slope > m ? 'The line with slope 2 is steeper than the line with slope 1' : 'The line with slope 1 is steeper than the line with slope 2'
console.log(slopeCompare)

let xValues = [-5, -4, -3, -2, -1, 0, 1, 2, 3];
for (let i = 0; i < xValues.length; i++) {
  let x = xValues[i];
  let y = x ** 2 + 6 * x + 9; 
  if(y==0){
    console.log(`When x = ${x}, y = ${y}`);
  }
  
}

let hours = prompt('Enter hours')
console.log(hours)
let rate = prompt('Enter rate per hour')
console.log(rate)
let weeklyEarning = hours * rate
console.log(`Your weekly earning is ${weeklyEarning}`)

const name = 'lelo'
if(name.length > 7){
  console.log('Your name is long')
}else{
  console.log('Your name is short')
}
let firstName = 'Lelo'
let lastName = 'Mohamed'
let firstNamelength = firstName.length
let lastNamelength = lastName.length
if(firstNamelength > lastNamelength){
  console.log(`Your first name, ${firstName} is longer than your family name, ${lastName}`)
}
else{
  console.log(`Your first name, ${firstName} is shorter than your family name, ${lastName}`)
}

let myAge = 250
let yourAge = 25
if(myAge > yourAge){
  console.log(`I am ${myAge - yourAge} years older than you`)
}else{
  console.log(`You are ${yourAge - myAge} years older than me`)
}

let birthYear = prompt('Enter your birth year')
console.log(birthYear)
let currentYear = 2025
if (currentYear-birthYear >= 18){
  console.log('You are old enough to drive')
}else{
  console.log(`You will be allowed to drive after ${18 - (currentYear-birthYear)} years`)
}

let yearsYouLive = prompt('Enter the number of years you live')
let secondsYouLive = yearsYouLive * 365 * 24 * 60 * 60
console.log(`You lived ${secondsYouLive} seconds`)

let timeFormat = new Date()
let yearFormat = timeFormat.getFullYear()
let monthFormat = timeFormat.getMonth()
let dateFormat = timeFormat.getDate()
let hoursFormat = timeFormat.getHours()
let minutesFormat = timeFormat.getMinutes()
console.log(`${yearFormat}-${monthFormat}-${dateFormat} ${hoursFormat}:${minutesFormat}`)
console.log(`${dateFormat}-${monthFormat}-${yearFormat} ${hoursFormat}:${minutesFormat}`)
console.log(`${dateFormat}/${monthFormat}/${yearFormat} ${hoursFormat}:${minutesFormat}`)



