import { User2 } from "./decorators-02.js";

const user = new User2("John Doe", 30, "kosta@example.com");
user.email = "kosta@example.com";
console.log(user.getInfo(false));