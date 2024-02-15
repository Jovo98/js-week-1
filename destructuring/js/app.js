let numbers = [1, 6, 6, 6, 2, 6, 3, 7, 3, 7]

function sum(...numbers){
    let total = 0;

    for (const number of numbers) {
        total += number;
    }
    return total;
}

console.log(sum (...numbers))
let newNumbers = [...numbers,5,9,5]

let duck = {
    id: 1,
    name: "tim",
    habitat: "swamp",
    height: 25,
    diet: "Green stuff",
};

    let newDuck= {
        ...duck,
        dangerous:false
    }