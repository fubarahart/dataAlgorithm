function myFunction(a, b) {
    c = a + b;
    f = c + 10;
    console.log(f);
    console.log(a - b);
}

myFunction(5, 3);

const d = 5;
console.log(d + c);


var outerWear = "T-Shirt";

function myOutfit() {
    var outerWear = "sweater";
    return outerWear;
}

console.log(myOutfit());
console.log(outerWear);

function fubi(g) {
    var a = 5 * g
    console.log (a)
}

fubi(3)

function nextInline(arr, item) {
    arr.push(item);
    return arr.shift();    
}

var testArr = [1, 2, 3, 4, 5];
console.log("Before: " + JSON.stringify(testArr));
console.log(nextInline(testArr, 6));
console.log("After: " + JSON.stringify(testArr));
console.log(testArr)