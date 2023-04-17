import axios from 'axios';
import qs from 'qs';

const queryParams = {
  pageNo: 1,
  pageSize: 10,
  createTime: ['2023-04-01 00:00:00', '2023-05-24 23:59:59'],
};

const paramsSerializer = params => {
  return qs.stringify(params, {skipNulls: true, indices: false});
};

let url = 'http://localhost:8021/cf/alarm-weather/page';

axios.defaults.headers.common['token'] = `eyJhbGciOiJIUzI1NiIsInppcCI6IkRFRiJ9.eNokjEsOwyAMRO_iNUgxCZ9ymcpgL6gSGhUiRap699J0N_Pm84YulWq_F4Y4KWhHggjEW6mg4GjyuhLA4Vp-7jL0RqVeqyy6ZVolsqzSZVTk3CGiCxjQB2MVFOp_4GdcfuDRy7hgk2dEJ_rmxekFvdXkzKLZemQxKeFk4fMFAAD__w.YRSAkXd2wV46CL-2ggNLIBCgyTIRNC1iof6ZOIQ40sc`;

let request = {
  url: url,
  method: 'get',
  params: queryParams,
  paramsSerializer
};
axios(request).then(response => {
  console.log(response);
});
