"use strict";
// import { GithubApiService } from "./GithubApiService"
// import { Repo } from "./Repo";
// import { User } from "./User";
// import * as Lodash from "lodash"
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
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
var GithubApiService_1 = require("./GithubApiService");
var Lodash = __importStar(require("lodash"));
var express_1 = __importDefault(require("express"));
var url_1 = __importDefault(require("url"));
var app = (0, express_1.default)();
var api = new GithubApiService_1.GithubApiService();
app.get("/github", function (req, res) {
    var username = url_1.default.parse(req.url, true).query.username;
    api.getUserInfo(username, function (user) {
        api.getReposInfo(user.login, function (repos) {
            // 数学
            var sortRepos = Lodash.sortBy(repos, [function (repo) { return repo.size * -1; }]);
            user.repos = sortRepos;
            res.send(user);
        });
    });
});
var port = 3000;
app.listen(port, function () {
    console.log("serve running port ".concat(port));
});
