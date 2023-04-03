const point1 = new Point(1, 1);
const point2 = new Point(4, 5);
const point3 = new Point(4, 1);

// console.log(point1);
// console.log(point2);

// const segment1 = new Segment (point1, point2);

// console.log(segment1);

// const segment2 = Segment.fromPointsCoordinates (0, 1, 3, 5); // qua usiamo la funzione statica

// console.log(segment2);


const triangle1 = new Triangle(point1, point2, point3);


console.log(triangle1);
console.log(triangle1.perimeter);
console.log(triangle1.area);


let parola = "This is an example!";

function solution (str) {

    let newArray = [];
    let strArray = str.split("");
    for (let i = 0; i < strArray.length; i++) {
        newArray.unshift(strArray[i]);
    };
    let newArrayToString = newArray.join("");
    let newArray2 = newArrayToString.split(" ");
    let newArray3 = [];
    for (let i = 0; i < newArray2.length; i++) {
        newArray3.unshift(newArray2[i]);
    };
    return newArray3.join(" ");

};

console.log(solution(parola));


let numbers = [5, 8, 12, 19, 22];

function sumOfThe2LowestPositiveNumbers(array) {

    let newArray = [];
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        if(array[i] > 0) {
            newArray.push(array[i]);
        };
    };
    if(newArray.length >= 4) {
        let lowNumber = newArray[0];
        for (let i = 1; i < newArray.length; i++) {
            if(lowNumber > newArray[i] && newArray[i].isInteger()) {
                lowNumber = newArray[i];
            };
        };
        console.log(lowNumber);
        let lowNumber2 = newArray[1];
        for (let i = 0; i < newArray.length; i++) {
            if(lowNumber2 > newArray[i] && newArray[i] !== lowNumber && newArray[i].isInteger()) {
                lowNumber2 = newArray[i];
            };
        };
        console.log(lowNumber2)
        sum = lowNumber + lowNumber2;
        return sum;
    };
    
};

console.log(sumOfThe2LowestPositiveNumbers(numbers));

// let sum = 0;
//     let lowNumber = array[0];
//     let lowNumber2 = array[1];
//     for (let i = 0; i < array.length; i++) {
//         if((array[i] > 0) >= 4) {
//             for (let i = 1; i < array.length; i++) {
//                 if(lowNumber > array[i]) {
//                     lowNumber = array[i];
//                     array.shift(array[i]);
//                     newArray.push(lowNumber);
//                 };
//             };
//             for (let i = 2; i < array.length; i++) {
//                 if(lowNumber2 > array[i]) {
//                     lowNumber2 = array[i];
//                     array.shift(array[i]);
//                     newArray.push(lowNumber2);
//                 };
//             };
//         };
//     };
//     for (let i = 0; i < newArray.length; i++) {
//         sum += newArray[i];
//     };
//     return sum;