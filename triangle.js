class Triangle {

    constructor (pointA, pointB, pointC) {
        this.pointA = pointA;
        this.pointB = pointB;
        this.pointC = pointC;
    };

    static createNewTriangle (xA, yA, xB, yB, xC, yC) {
        const pointA = new Point (xA, yA);
        const pointB = new Point (xB, yB);
        const pointC = new Point (xC, yC);
        return new Triangle (pointA, pointB, pointC);
    };

    get perimeter () {
        const segment1 = new Segment(this.pointA, this.pointB);
        const segment2 = new Segment(this.pointB, this.pointC);
        const segment3 = new Segment(this.pointC, this.pointA);
        const perimeter = segment1.length + segment2.length + segment3.length;
        return perimeter;
    };

    get area () {
        const segment1 = new Segment(this.pointA, this.pointB);
        const segment2 = new Segment(this.pointB, this.pointC);
        const segment3 = new Segment(this.pointC, this.pointA);
        const perimeter = segment1.length + segment2.length + segment3.length;
        const semiPerimeter = perimeter / 2;
        const subSide1 = semiPerimeter - segment1.length;
        const subSide2 = semiPerimeter - segment2.length;
        const subSide3 = semiPerimeter - segment3.length;
        const area = Math.sqrt(semiPerimeter*subSide1*subSide2*subSide3);
        return area;
    };

};