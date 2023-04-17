"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Repo = void 0;
var Repo = /** @class */ (function () {
    function Repo(repo) {
        this.name = repo.name;
        this.size = repo.size;
        this.language = repo.language;
        this.description = repo.description;
    }
    return Repo;
}());
exports.Repo = Repo;
