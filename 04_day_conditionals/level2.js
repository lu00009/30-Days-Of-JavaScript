//1
const grade = prompt('Enter your grade:')
switch(true){
  case grade >= 80:
    console.log('A')
    break
  case grade >= 70:
    console.log('B')
    break
  case grade >= 60:
    console.log('C')
    break
  case grade >= 50:
    console.log('D')
    break
  case grade >= 40:
    console.log('E')
    break
  default:
    console.log('F')
}
//2
const month = prompt('Enter the month:')
switch ((true)) {
  case month === 'September' || month === 'October' || month === 'November':
    console.log('Autumn')
    break;
  case month === 'December' || month === 'January' || month === 'February':
    console.log('Winter')
    break;
  case month === 'March' || month === 'April' || month === 'May':
    console.log('Spring')
    break;
  case month === 'June' || month === 'July' || month === 'August':
    console.log('Summer')
    break;
  default:
    break;
}
//3
const day = prompt('Enter the day:')
if(day === 'Saturday' || day === 'Sunday'){
  console.log(`${day} is a weekend.`)
}
else if(day === 'Monday' || day === 'Tuesday' || day === 'Wednesday' || day === 'Thursday' || day === 'Friday'){
  console.log(`${day} is a working day.`)
}
else{
  console.log('Not a valid day.')
}