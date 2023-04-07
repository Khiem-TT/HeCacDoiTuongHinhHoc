import {Shape} from "./Shape";

export class Circle extends Shape {
    private _radius: number = 1;

    constructor(color: string, filled: boolean, radius: number) {
        super(color, filled);
        this._radius = radius;
    }

    getRadius(): number {
        return this._radius;
    }

    setRadius(value: number) {
        this._radius = value;
    }
    getArea(): number {
        return Math.PI * this._radius * this._radius;
    }
    getPerimeter(): number {
        return 2 * Math.PI * this._radius;
    }
    toString(): string {
        return "A Circle with radius = "
            + this.getRadius()
            + ", which is a subclass of "
            + super.toString();
    }
}
