import { getFirst, makeTuple, SmsMessage, Message, getId, StorageBox, MakeOptional } from "./demos";

console.log("Hello, TypeScript!");
console.log("This is a simple TypeScript project.");
console.log("You can run this code using 'ts-node' or compile it with 'tsc'.");

console.log(getFirst([1, 2, 3])); // Output: 1
console.log(getFirst(["apple", "banana", "cherry"])); // Output: apple

console.log(makeTuple(1, "apple")); // Output: [1, "apple"]
console.log(makeTuple(true, 42)); // Output: [true, 42]
console.log(makeTuple({ name: "Alice" }, [1, 2, 3])); // Output: [{ name: "Alice" }, [1, 2, 3]]

const message = new SmsMessage("Alice", "Bob", { text: "Hello, Bob!" });
console.log(message.getMessage()); // Output: From: Alice, To: Bob, Data: {"text":"Hello, Bob!"}

const otherMessage = new SmsMessage<number>("Charlie", "Dave", 42);
console.log(otherMessage.getMessage()); // Output: From: Charlie, To: Dave, Data: 42

const mess: Message<{ key: number, value: string }> = {
    sender: "Eve",
    receiver: "Frank",
    data: { key: 1, value: "Hello" }
};
console.log(mess.data); // Output: { key: 1, value: "Hello" }

const person: { id: number, name: string } = { id: 123, name: "John Doe" };
console.log(getId(person)); // Output: ID: 123

let box = new StorageBox<string>(3);
box.add("Item 1");
box.add("Item 2");
console.log(box.getAll()); // Output: 0      

type User = {
    id: number,
    name: string,
    age: number,
    birthday: Date
}

type OptionalUser = MakeOptional<User>;
let user: OptionalUser = {
    id: 1,
    name: undefined,
    age: 25,
    birthday: undefined
 };

 console.log(user); // Output: { id: 1, name: undefined, age: 25 }