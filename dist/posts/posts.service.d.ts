import { PrismaService } from 'src/prisma.service';
import { Post } from '@prisma/client';
import { NewPost, UpdatePost } from 'src/graphql';
export declare class PostService {
    private prisma;
    constructor(prisma: PrismaService);
    post(id: string): Promise<Post | null>;
    posts(): Promise<Post[]>;
    createPost(input: NewPost): Promise<Post>;
    updatePost(params: UpdatePost): Promise<Post>;
    deletePost(id: string): Promise<Post>;
}
