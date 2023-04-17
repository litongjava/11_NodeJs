import * as request from "request"
import { Repo } from "./Repo";
import { User } from "./User"

const options = {
  headers: {
    'User-Agent': "request"
  },
  json:true
}

export class GithubApiService {
  getUserInfo(userName: string,cb:any) {
    request.get("https://api.github.com/users/" + userName, options, (error: any, response: any, body: any) => {
      let user:User=new User(body);      
      cb(user);
    })
  }

    getReposInfo(userName: string, cb: any) {
    request.get("https://api.github.com/users/" + userName + "/repos", options, (error: any, response: any, body: any) => {
      let repo: Repo[] = body.map((repo: any) => new Repo(repo));
      cb(repo)
    })
  }
}

// import * as request from "request"
// import { User } from "./User"
// import { Repo } from "./Repo"

// const options = {
//   headers: {
//     'User-Agent': "request"
//   },
//   json: true
// }

// export class GithubApiService {
//   getUserInfo(userName: string, cb: any) {
//     request.get("https://api.github.com/users/" + userName, options, (error: any, response: any, body: any) => {
//       // let user:User = new User(JSON.parse(body));
//       let user: User = new User(body);
//       cb(user)
//     })
//   }


//   getRepos(userName: string, cb: any) {
//     request.get("https://api.github.com/users/" + userName + "/repos", options, (error: any, response: any, body: any) => {
//       let repo: Repo[] = body.map((repo: any) => new Repo(repo));
//       cb(repo)
//     })
//   }
// }