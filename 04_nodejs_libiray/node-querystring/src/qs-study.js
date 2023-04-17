import qs from 'qs';

const params = {
  pageNo: 1,
  pageSize: 10,
  createTime: ['2023-04-01 00:00:00', '2023-05-01 23:59:59']
};

console.log("params:",params);
const stringify = qs.stringify(params, { skipNulls: true, encode: false, indices: false });
console.log("stringify;",stringify);