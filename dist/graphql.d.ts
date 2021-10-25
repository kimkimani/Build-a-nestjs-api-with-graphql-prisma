export declare class NewPost {
    title: string;
    content: string;
}
export declare class UpdatePost {
    id: string;
    published?: Nullable<boolean>;
    title?: Nullable<string>;
    content?: Nullable<string>;
}
export declare class Post {
    id: string;
    title: string;
    content: string;
    published: boolean;
    createdAt: string;
}
export declare abstract class IQuery {
    abstract posts(): Post[] | Promise<Post[]>;
    abstract post(id: string): Nullable<Post> | Promise<Nullable<Post>>;
}
export declare abstract class IMutation {
    abstract createPost(input?: Nullable<NewPost>): Post | Promise<Post>;
    abstract updatePost(input?: Nullable<UpdatePost>): Nullable<Post> | Promise<Nullable<Post>>;
    abstract deletePost(id: string): Nullable<Post> | Promise<Nullable<Post>>;
}
declare type Nullable<T> = T | null;
export {};
