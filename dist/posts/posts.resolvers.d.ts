import { PostService } from './posts.service';
import { NewPost, UpdatePost } from 'src/graphql';
export declare class PostResolvers {
    private readonly postService;
    constructor(postService: PostService);
    posts(): Promise<import(".prisma/client").Post[]>;
    post(args: string): Promise<import(".prisma/client").Post>;
    create(args: NewPost): Promise<import(".prisma/client").Post>;
    update(args: UpdatePost): Promise<import(".prisma/client").Post>;
    delete(args: string): Promise<import(".prisma/client").Post>;
}
