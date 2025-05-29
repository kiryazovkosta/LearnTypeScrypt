abstract class Course {
    public title: string;
    public duration: number;

    constructor(title: string, duration: number) {
        this.title = title;
        this.duration = duration;
    }

    abstract getDescription(): string;
}

export class ProgrammingCourse extends Course {
    public language: string;

    constructor(title: string, duration: number, language: string) {
        super(title, duration);
        this.language = language;
    }

    public getDescription(): string {
        return `Programming Course: ${this.title} in ${this.language} - ${this.duration} hours`;
    }
}

export class DesignCourse extends Course {
    public tools: string[];

    constructor(title: string, duration: number, tools: string[]) {
        super(title, duration);
        this.tools = tools;
    }

    public getDescription(): string {
        return `Design Course: ${this.title} using ${this.tools.join(", ")} - ${this.duration} hours`;
    }
}

