import { ProgrammingCourse, DesignCourse } from '../src/online-course-management-system';

describe("9. Abstract Class", () => {
    it("should returns a valid area for cyrcle", () => {
        const jsCourse = new ProgrammingCourse("Intro to JavaScript", 40, "JavaScript");
        expect(jsCourse.getDescription()).toBe("Programming Course: Intro to JavaScript in JavaScript - 40 hours");
    });

    it("should returns a valid area for rectangle", () => {
        const uiCourse = new DesignCourse("UX Fundamentals", 30, ["Figma", "Sketch"]);
        expect(uiCourse.getDescription()).toBe("Design Course: UX Fundamentals using Figma, Sketch - 30 hours");
    });
});