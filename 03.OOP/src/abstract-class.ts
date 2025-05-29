abstract class Shape {
    public color: string;
    
    public constructor(color: string) {
        this.color = color;
    }

    abstract getArea(): number;
}

export class Circle extends Shape {
    private readius: number;
    public constructor(color: string, radius: number) {
        super(color);
        this.readius = radius;
    }

    public getArea(): number {
        return Math.PI * this.readius * this.readius;
    }
}

export class Rectangle extends Shape {
    private width: number;
    private height: number;

    public constructor(color: string, width: number, height: number) {
        super(color);
        this.width = width;
        this.height = height;
    }

    public getArea(): number {
        return this.width * this.height;
    }
}    