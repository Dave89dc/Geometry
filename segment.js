class Segment {

// In questo modo creiamo i segmenti inserendo i punti come parametri, e questi
// ultimi vengono creati a parte tramite la class Point:

    constructor (pointA, pointB) {
        this.pointA = pointA;
        this.pointB = pointB;
    };

// Qua sotto creiamo una "factory", cioè una funzione (in questo caso statica) che
// crea essa stessa i segmenti in base ai parametri inseriti.
// In questo modi si può ottenere i segmenti senza ogni volta dover
// scrivere i punti nel file a parte:    

    static fromPointsCoodinates (xA, yA, xB, yB) {
        const pointA = new Point (xA, yA);
        const pointB = new Point (xB, yB);
        return new Segment (pointA, pointB);
    };

// Lunghezza = radice quadrata di: (x1-x2)**2 + (y1-y2)**2! teorema di Pitagora

    calculateLength (params) {
        const deltaX = this.pointA.x - this.pointB.x;
        const deltaY = this.pointA.y - this.pointB.y;
        const squareDX = deltaX ** 2;
        const squareDY = deltaY ** 2;
        const squareSum = squareDX + squareDY;
        const length = Math.sqrt(squareSum);
        return length;
    };

};