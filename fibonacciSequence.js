// function fibonacci(n) {
//     const fib = [0, 1]
//     for (let i = 2; i < n; i++){
//         fib[i] = fib[i - 1] + fib[i - 2]
//         console.log(i)
//     }
//     return fib
// }

// console.log(fibonacci(2))
// console.log(fibonacci(3))
// console.log(fibonacci(4))
// console.log(fibonacci(7))
// console.log(fibonacci(1))

// let a = 5
// let b = 2
// let c = a % b
// let d = Math.trunc(a / b)

// console.log(c)
// console.log(d)
// console.log(d + ' remainder ' + c)


// e = 7
// f = 6

// f /= 3
// e += 2
// e *= 2
// e -= 6

// console.log(e)
// console.log(f)

// var myStr = 'I am a "double quoted" string inside a "double quotes".'

// console.log(myStr)

// var ouerSname = "Hart"
// var ourFname = "Fubi "
// ourFname += ouerSname
// console.log(ourFname)
// console.log(ourFname[3])
// console.log(ourFname[ourFname.length - 2])
// console.log(ourFname.length)
// console.log(ourFname.length - 1)


// function worldBlanks (myNoun, myAdjective, myVerb, myAdverb) {
//     var result = "";
//     result += "The " + myAdjective + " " + myNoun + " " + myVerb + " to the store " + myAdverb + ".";
//     return result;
// }

// console.log(worldBlanks("dog", "big", "ran", "quickly"));

var myArray = [["John", 23], ["cat", 2]];

var myArray = [70, 50, 40];
var myData = myArray[1]

console.log(myData)

myArray[1] = 45;

console.log(myArray)

var myArray1 = [[4,2,6], [3,5,1], [7,8,9]];

var myData1 = myArray1[1][1]

console.log(myData1)

var myArray2 = [["John", 23], ["cat", 2], ["bird", 5], ["Alice", 30]];
myArray2.push(["Duriel", 4]);

console.log(myArray2)

myArray2.pop();

console.log(myArray2)

myArray2.shift();

console.log(myArray2)
myArray2.unshift(["Diamond", 35]);
console.log(myArray2)