let car = {
    color: "red",
    model: "bmw",
    year: "1992",
    VIN: 34343434,
}

console.log(car)

// 6. for loops

// starting point // condition // increment
for(let i = 1; i < 11; i++){
    console.log(i);
}

// 7. array

let myBigBox = ["hesham", 22232, false, {name: "layla"}]

console.log(myBigBox.length); //

console.log(myBigBox[0]);

console.log(myBigBox[3].name);

// getting last item of array

const lastItemIndex = myBigBox.length - 2

console.log("lastItemIndex:", lastItemIndex);

console.log(myBigBox[lastItemIndex]);

// 8. looping over an array

for(let i = 0; i < myBigBox.length; i++){
    console.log(myBigBox[i])
}


// concatenation

let name = "Anniken";
let secondName = "Hesh";
let thirdName = "Patrick";

// "" ''
let myParagraph = "Hello " + name + " my name is " + secondName + " you guys are noobs I am " + thirdName;

console.log(myParagraph)

myParagraph = `Hello ${name} my name is ${secondName} you are noob i am ${thirdName}`;

console.log(myParagraph)

// 10. funkiones

function logWord (name){
    if(name !== undefined){
        console.log(`Hello ${name} sir`)
    } else { console.log("Sorry;(");

    }
}

logWord("Joe"); // one time, reusable
logWord(); // one time, reusable
