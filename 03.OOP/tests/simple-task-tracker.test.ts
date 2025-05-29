import { Task } from '../src/simple-task-tracker';

describe("12. Simple Task Tracker with Access Control", () => {
    it("should create a task with the correct details", () => {
        const task1 = new Task("Complete homework", "Finish math exercises", "Charlie");
        task1.toggleStatus();
        expect(task1.getDetails()).toBe("Task: Complete homework - Finish math exercises - Completed");
    });

    it("should create a task with the correct details", () => {
        const task2 = new Task("Clean room", "Clean the room", "Mary");
        expect(task2.getDetails()).toBe("Task: Clean room - Clean the room - Pending");
    });

    it("should toggle task status correctly", () => {
        const tasks = Task.createSampleTasks();
        expect(tasks.length).toBe(3);
        expect(tasks[0].getDetails()).toBe("Task: Task 1 - Description for task 1 - Pending");
        expect(tasks[1].getDetails()).toBe("Task: Task 2 - Description for task 2 - Pending");
        expect(tasks[2].getDetails()).toBe("Task: Task 3 - Description for task 3 - Pending");
    });
});