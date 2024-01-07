const today = new Date()
const month = (today.getMonth() + 1).toString().padStart(2, '0')
const day = today.getDate().toString().padStart(2, '0')

const sevenDaysAgo = new Date(today.getTime() - 7 * 24 * 60 * 60 * 1000)
const savenDaysAgoMonth = (sevenDaysAgo.getMonth() + 1).toString().padStart(2, '0')
const savenDaysAgoDay = sevenDaysAgo.getDate().toString().padStart(2, '0')

console.log(month + '-' + day)
console.log(savenDaysAgoMonth + '-' + savenDaysAgoDay)