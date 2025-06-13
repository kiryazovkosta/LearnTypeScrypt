import { BASE_URL } from "../constants";
import type { User } from "../interfaces/User";
import { ApiService } from "./api";

export class UsersService extends ApiService<User> {
    constructor() {
        super(`${BASE_URL}/users`);
    }
}