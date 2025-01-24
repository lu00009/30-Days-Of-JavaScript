let timeFormat = new Date()
let yearFormat = timeFormat.getFullYear()
let monthFormat = String(timeFormat.getMonth() + 1).padStart(2, '0')
let dateFormat = String(timeFormat.getDate() + 1).padStart(2, '0')
let hoursFormat = String(timeFormat.getHours() + 1).padStart(2, '0')
let minutesFormat = String(timeFormat.getMinutes() + 1).padStart(2, '0')

console.log(`${yearFormat}-${monthFormat}-${dateFormat} ${hoursFormat}:${minutesFormat}`)
