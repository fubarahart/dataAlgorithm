var val = 12;

function testEqual(val) {
    if (val == 12) {

        return "Equal"
    }
    return "Not Equal"
}
var val = 12
console.log(testEqual(val));
console.log(testEqual());
console.log(testEqual(10));

function testNotEqual(val) {
    if (val != 12) {
        //Changes the data type to number, if number type as string
        return "Not Equal"
    }
    return "Equal"
}
var val = 12
console.log(testNotEqual(val));
console.log(testNotEqual());
console.log(testNotEqual(10));


function testGreaterOrEqual(val) {
    if (val >= 20) {
        return "20 or Over"
    }
    if (val >= 10) {
        return "10 or Over"
    }
    return "Less than 10"
}
var val = 12
console.log(testGreaterOrEqual(val));
console.log(testGreaterOrEqual());
console.log(testGreaterOrEqual(10));

function testlogicalAnd(val) {
    if (val <= 50 && val >= 25) {
        return "Between 25 and 50"
    } return "Outside of range"
}
console.log(testlogicalAnd(val));

function testlogicalOr(val) {
    if (val < 25 || val > 50) {
        return "Outside of range"
    }
    return "Between 25 and 50"
}
console.log(testlogicalOr(30));


function testElse(val) {
    if (val <= 50 && val >= 25) {
        return "Between 25 and 50"
    } else {
        return "Outside of range"
    }
}
console.log(testElse(30));

function testElseIf(val) {
    if (val>10) {
        return "Greater than 10";
    } else if (val < 5) {
        return "Smaller than 5";
    } else {
        return "Between 5 and 10";
    }
}

    console.log(testElseIf(7));

function testSize(num) {
    if (num < 5) {
        return "Tiny";
    } else if (num < 10) {
        return "Small";
    } else if (num < 15) {
        return "Medium";
    } else if (num < 20) {
        return "Large";
    } else {
        return "Huge";
    }
}
console.log(testSize(7));

//Golf Code
var names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];

function golfScore(par, strokes) {
    if (strokes == 1) {
        return names[0];
    } else if (strokes <= par - 2) {
        return names[1];
    } else if (strokes == par - 1) {
        return names[2];
    } else if (strokes == par) {
        return names[3];
    } else if (strokes == par + 1) {
        return names[4];
    } else if (strokes == par + 2) {
        return names[5];
    } else {
        return names[6];
    }
}
console.log(golfScore(5, 4));
console.log(golfScore(4, 3));

function caseInSwitch(val) {
    var answer = "";
    switch (val) {
        case 1:
            answer = "alpha";
            break;
        case 2:
            answer = "beta";
            break;
        case 3:
            answer = "gamma";
            break;
        case 4:
            answer = "delta";
            break;
    }
    return answer;
    }