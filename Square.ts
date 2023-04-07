import {Rectangle} from "./Rectangle";

export class Square extends Rectangle {
    constructor(side: number, color: string, filled: boolean) {
        super(color, filled, side, side);
    }

    getSide(): number {
        return this.getWidth();
    }

    setSide(side: number) {
        this.setWidth(side);
        this.setLength(side);
    }

    toString(): string {
        return "A Square with side = "
            + this.getSide()
            + ", which is a subclass of "
            + super.toString();
    }
}