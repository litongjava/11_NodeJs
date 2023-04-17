// import { GithubApiService } from "./GithubApiService"
// import { Repo } from "./Repo";
// import { User } from "./User";
// import * as Lodash from "lodash"

// let api: GithubApiService = new GithubApiService();
// api.getUserInfo("litongjava",(user:User)=>{
//   api.getReposInfo(user.login,(repos:Repo[])=>{
//     //按照size进行升序排序
//     //let sortRepos=Lodash.sortBy(repos,[(repo:Repo)=>repo.size]);
//     //按照size进行降序排序
//     let sortRepos=Lodash.sortBy(repos,[(repo:Repo)=>repo.size*-1]);
//     user.repos=sortRepos;
//     console.log(user);
//   });
// });

import { GithubApiService } from "./GithubApiService"
import { User } from './User';
import { Repo } from './Repo';
import * as Lodash from "lodash"
import express from "express"
import url from "url"

const app = express();

let api: GithubApiService = new GithubApiService();
app.get("/github", (req: any, res: any) => {
  let username: any = url.parse(req.url, true).query.username;
  api.getUserInfo(username, (user: User) => {
    api.getReposInfo(user.login, (repos: Repo[]) => {
      // 数学
      let sortRepos = Lodash.sortBy(repos, [(repo: Repo) => repo.size * -1]);
      user.repos = sortRepos;
      res.send(user)
    })
  });
})

let port:number=3000;
app.listen(port, () => {
  console.log(`serve running port ${port}`);
})
