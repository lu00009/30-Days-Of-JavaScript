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
  console.log(`When x = ${x}, y = ${y}`);
}


