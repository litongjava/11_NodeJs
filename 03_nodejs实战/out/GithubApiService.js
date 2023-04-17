"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GithubApiService = void 0;
var request = __importStar(require("request"));
var Repo_1 = require("./Repo");
var User_1 = require("./User");
var options = {
    headers: {
        'User-Agent': "request"
    },
    json: true
};
var GithubApiService = /** @class */ (function () {
    function GithubApiService() {
    }
    GithubApiService.prototype.getUserInfo = function (userName, cb) {
        request.get("https://api.github.com/users/" + userName, options, function (error, response, body) {
            var user = new User_1.User(body);
            cb(user);
        });
    };
    GithubApiService.prototype.getReposInfo = function (userName, cb) {
        request.get("https://api.github.com/users/" + userName + "/repos", options, function (error, response, body) {
            var repo = body.map(function (repo) { return new Repo_1.Repo(repo); });
            cb(repo);
        });
    };
    return GithubApiService;
}());
exports.GithubApiService = GithubApiService;
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
