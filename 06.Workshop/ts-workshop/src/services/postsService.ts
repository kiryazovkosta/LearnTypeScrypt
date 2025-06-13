import { BASE_URL } from "../constants";
import type { Post } from "../interfaces/Post";
import { ApiService } from "./api";

export class PostsService extends ApiService<Post> {
    constructor() {
        super(`${BASE_URL}/posts`);
    }
}