

const numbers = [1, 2, 3, 18]
const valueToSearchFor = 18;


function find(arr, value) {
    for (let i = 0; i < arr.length; i++) {
        if(arr[i] === value){
            return i;
        }
    }
    return -1;
}

let isNumber = find(numbers,valueToSearchFor);

console.log(isNumber);


