import { IShape, Circle, Rectangle, Square } from './shape';

class MyCircle extends Circle {
    readonly pi: number; 
    private _angle: number;

    constructor(radius: number) {
        super(radius);
        this.pi = 3.14;
        this._angle = 0;
    }

    get angle(): number {
        return this._angle;
    }

    set angle(value: number) {
        if (value < 0 || value >= 360) {
            throw new Error("Angle must be between 0 and 360 degrees.");
        }
        this._angle = value;
    }
}

class ShapeFactory {
    static createCircle(radius: number): Circle {
        return new Circle(radius);
    }

    static createRectangle(width: number, height: number): Rectangle {
        return new Rectangle(width, height);
    }

    static createSquare(side: number): Square {
        return new Square(side);
    }
}

let shapes: IShape[] = [
    ShapeFactory.createCircle(5),
    ShapeFactory.createRectangle(10, 20),
    ShapeFactory.createSquare(15)
];

shapes.forEach(shape => {
    console.log(`Area: ${shape.area()}`);
    console.log(`Perimeter: ${shape.perimeter()}`);
});

let mc = new MyCircle(7);
console.log(`MyCircle Area: ${mc.area()}`); 
console.log(`MyCircle Perimeter: ${mc.perimeter()}`);


console.log(`MyCircle Angle: ${mc.angle}`);
mc.angle = 90; // Setting a new angle   
console.log(`MyCircle New Angle: ${mc.angle}`);