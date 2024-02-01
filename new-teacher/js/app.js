// function doSomething(someParam){
//     console.log("I just do something -> Void");
//
//     someParam()
//
//     console.log("I just do something -> Void");
//
// }
//
// doSomething(function(){console.log("I am callback")})

// HOF

// let todo1Name = "Learn JS functions"
// let todo1Done = true
// let todo1Date = "Tuesday"
// let todo2Name = "Learn JS Arrays"
// let todo2Done = false
// let todo2Date = "Wednesday"
let todos = []

let todo = fetch("https://jsonplaceholder.typicode.com/users")
.then( (httpResponse) => {
    return httpResponse.json();
})
.then(function (todoResult){
    todos = todoResult;
});


