const point1 = new Point (1, 1);
const point2 = new Point (4, 5);
const point3 = new Point (4, 1);

// console.log(point1);
// console.log(point2);

// const segment1 = new Segment (point1, point2);

// console.log(segment1);

// const segment2 = Segment.fromPointsCoordinates (0, 1, 3, 5); // qua usiamo la funzione statica

// console.log(segment2);


const triangle1 = new Triangle (point1, point2, point3);

console.log(triangle1.perimeter);
console.log(triangle1.area);