export class Task{
    public title: string;
    public description: string;
    public completed: boolean;
    private _createdBy: string;
    constructor(title: string, description: string, createdBy: string) {
        this.title = title;
        this.description = description;
        this.completed = false;
        this._createdBy = createdBy;
    }

    public get createdBy(): string {
        return this._createdBy;
    }

    public toggleStatus(): void {
        this.completed = !this.completed;
    }

    public getDetails(): string { 
        return `Task: ${this.title} - ${this.description} - ${this.completed ? "Completed" : "Pending"}`
    }

    public static createSampleTasks(): Task[] {
        return [
            new Task("Task 1", "Description for task 1", "User A"),
            new Task("Task 2", "Description for task 2", "User B"),
            new Task("Task 3", "Description for task 3", "User C")
        ];
    }
}