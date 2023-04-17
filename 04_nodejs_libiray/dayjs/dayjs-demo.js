const dayjs = require('dayjs')
const lastMonth=dayjs().add(-1, 'month').startOf('month').format('YYYY年MM月')
console.log(lastMonth)