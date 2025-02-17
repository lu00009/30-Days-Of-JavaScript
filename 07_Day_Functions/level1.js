const PI = 3.14;
//1
function fullName(){
  
}
console.log(fullName())

//2
function fullName(firstName, lastName){
  const space = ' '
  return firstName + space + lastName
}
console.log(fullName('Lelo', 'Mohamed'))

//3
function addNumbers(a,b){
const sum = a + b
return sum
}
console.log(addNumbers(1,2))

//4

function areaOfRectangle(length, width){
  const area = length * width
  return area
}
console.log(areaOfRectangle(2,4))

//5
function perimeterOfRectangle(length, width){
  const perimeter = 2 * (length + width)
  return perimeter
}
console.log(perimeterOfRectangle(3,4))

//6
function volumeOfRectPrism(l, h, w){
  const volume = l * h * w
  return volume
}
console.log(volumeOfRectPrism(2,3,4))

//7
function areaOfCircle(r){
  area = PI * r * r
  return area
}
console.log(areaOfCircle(2))

//8

const circumOfCircle = (r) =>{
  const circumference = 2 * PI * r
  return circumference
}
console.log(circumOfCircle(2))
//9

const density = (m, v) => {
  const d = m / v
  return d
}
console.log(density(10,10))

//10
const calculateSpeed = (distance, time) =>{
  return distance / time
  
}
console.log((calculateSpeed(100, 10)))

//11
const calculateWeight = (m, g) => {
  const weight = m * g
  return weight
}
console.log(calculateWeight(1,3))

//12
const convertCelsiusToFahrenheit = (oC) =>{
  const oF = (oC * 9/5) + 32
  return oF
}
console.log(convertCelsiusToFahrenheit(100))

//13
const calculateBMI = (weight,height) => {
  const bmi = weight / (height * height)
  if(bmi < 18.5){
    return 'Underweight'
  }
  else if(bmi >= 18.5 && bmi <= 24.9){
    return 'Normalweight'
  }
  else if (bmi >= 25 && bmi <= 29.9){
    return 'Overweight'
  }
  else{
    return 'Obese'
  }
}
console.log(calculateBMI(50,1.6))

//14
const checkSeason = (month) => {
  switch (month) {
    case 1:
    case 2:
      return 'Winter';
    case 3:
    case 4:
    case 5:
      return 'Spring';
    case 6:
    case 7:
    case 8:
      return 'Summer';
    case 9:
    case 10:
    case 11:
      return 'Autumn';
    default:
      return 'Invalid month';
  }
};
console.log(checkSeason(4))

//15
const findMax = (num1, num2, num3) => {
  if(num1 >= num2 && num1 >= num3) return num1
  if(num2 >= num1 && num2 >= num3) return num2
  return num3
}
console.log(findMax(2,3,4))
