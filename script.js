// ARRAYS

const fruits = ["Apple", "Blue Berry", "Watermelon", "Oranges"]

console.log(fruits.length);

fruits.push("Mango");

console.log(fruits);

fruits.unshift("Banana");
console.log(fruits);

fruits.pop();

console.log(fruits);

fruits.shift();
console.log(fruits)

const numbers = [3, 4, 100, 88, 54, 5];

numbers.sort();
console.log(numbers);

const cars = ["bmw", "volkswagen", "toyota"];

console.log("The index of volkswagen: is ", cars.indexOf("volkswagen"));


// .find

const user = {
    name : "Monde",
    age : 30,
    job : "Software Engineer",
    wealth: 4200202020220
}

console.log(user);

console.log(user.age + " " + user.name)
console.log(user.name, user.age)
console.log(user.wealth)


const someText = "Hello my name is " + user.name;

const someTextTwo = `Hello my name is ${user.name}`;
console.log("someTextTwo", someTextTwo)

const someTextThree = `Hello my name is ${user.name} and i am ${user.age} years old, I own ${user.wealth} in dollars and I work as a ${user.job}`;
console.log("someTextThree:", someTextThree)

const books = [
    {
        title: "the hobbit",
        author: "Hesham El Masry",
        pages: 300
    },
    {
        title: "lol",
        author: "Kevin Hart",
        pages: 1000
    },
    {
        title: "One Thousand and One Nights",
        author: "some guy",
        pages: 3000
    },
]

const searchBook = books.filter(function(book){
   return book.pages > 300;
})

console.log(searchBook)

console.log("my first book: ", books [0])

console.log("my second book: ", books [1])

function doorRing(withCamera) {
    console.log("i will go open the door")

}


function addTwoNumber(num1, num2) {
    return num1 + num2;
}

const sum = addTwoNumber(10, 20);
console.log("sum: ",sum)