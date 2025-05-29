interface IShape {
    area(): number;
    perimeter(): number;
}

abstract class Shape implements IShape {
    abstract area(): number;
    abstract perimeter(): number;
}

class Circle extends Shape {
    private radius: number;

    constructor(radius: number) {
        super();
        this.radius = radius;
    }

    area(): number {
        return Math.PI * this.radius * this.radius;
    }

    perimeter(): number {
        return 2 * Math.PI * this.radius;
    }
}

class Rectangle extends Shape {
    private width: number;
    private height: number;

    constructor(width: number, height: number) {
        super();
        this.width = width;
        this.height = height;
    }

    area(): number {
        return this.width * this.height;
    }

    perimeter(): number {
        return 2 * (this.width + this.height);
    }
}

class Square extends Rectangle {
    constructor(side: number) {
        super(side, side);
    }
}

export { IShape, Circle, Rectangle, Square };