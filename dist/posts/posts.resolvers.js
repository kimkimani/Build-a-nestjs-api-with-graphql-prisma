"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostResolvers = void 0;
const graphql_1 = require("@nestjs/graphql");
const posts_service_1 = require("./posts.service");
const graphql_2 = require("../graphql");
let PostResolvers = class PostResolvers {
    constructor(postService) {
        this.postService = postService;
    }
    async posts() {
        return this.postService.posts();
    }
    async post(args) {
        return this.postService.post(args);
    }
    async create(args) {
        return this.postService.createPost(args);
    }
    async update(args) {
        return this.postService.updatePost(args);
    }
    async delete(args) {
        return this.postService.deletePost(args);
    }
};
__decorate([
    graphql_1.Query('posts'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], PostResolvers.prototype, "posts", null);
__decorate([
    graphql_1.Query('post'),
    __param(0, graphql_1.Args('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], PostResolvers.prototype, "post", null);
__decorate([
    graphql_1.Mutation('createPost'),
    __param(0, graphql_1.Args('input')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [graphql_2.NewPost]),
    __metadata("design:returntype", Promise)
], PostResolvers.prototype, "create", null);
__decorate([
    graphql_1.Mutation('updatePost'),
    __param(0, graphql_1.Args('input')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [graphql_2.UpdatePost]),
    __metadata("design:returntype", Promise)
], PostResolvers.prototype, "update", null);
__decorate([
    graphql_1.Mutation('deletePost'),
    __param(0, graphql_1.Args('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], PostResolvers.prototype, "delete", null);
PostResolvers = __decorate([
    graphql_1.Resolver('Post'),
    __metadata("design:paramtypes", [posts_service_1.PostService])
], PostResolvers);
exports.PostResolvers = PostResolvers;
//# sourceMappingURL=posts.resolvers.js.map