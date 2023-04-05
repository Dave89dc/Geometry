class Triangle {

    constructor(pointA, pointB, pointC) {
        this.pointA = pointA;
        this.pointB = pointB;
        this.pointC = pointC;
        this.segment1 = new Segment(this.pointA, this.pointB);
        this.segment2 = new Segment(this.pointB, this.pointC);
        this.segment3 = new Segment(this.pointC, this.pointA);
    };

    static createNewTriangle(xA, yA, xB, yB, xC, yC) {
        const pointA = new Point(xA, yA);
        const pointB = new Point(xB, yB);
        const pointC = new Point(xC, yC);
        return new Triangle(pointA, pointB, pointC);
    };

    get perimeter() {
        const perimeter = this.segment1.length + this.segment2.length + this.segment3.length;
        return perimeter;
    };

    get area() {
        // Formula di Erone:
        const semiPerimeter = (this.perimeter) / 2;
        const subSide1 = semiPerimeter - this.segment1.length;
        const subSide2 = semiPerimeter - this.segment2.length;
        const subSide3 = semiPerimeter - this.segment3.length;
        const area = Math.sqrt(semiPerimeter*subSide1*subSide2*subSide3);
        return area;
    };

};