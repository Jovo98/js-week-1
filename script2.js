// let news = [
//     {
//         headline: "watch Hesh Landing on the moon",
//         summary: "He Landed with his super jet"
//     },
//     {
//         headline: "Watch Joeseph jump over mount everest",
//         summary: "He died while reaching the top"
//     },
//     {
//         headline: "watch Kevin swim across the black sea",
//         summary: "He took over the black pearl"
//     },
// ];
//
// console.log(news);
//
// // Present the new on the page
//
// // 1. Select the div with news class
//
// let newsContainer = document.querySelector(".news");
//
// console.log("newsContainer", newsContainer);
// const totalNumberOfNews = news.length;
//
// function createNews(newsArray){
//     let newsItems = "";
//
//     for (let i = 0; i < totalNumberOfNews; i++) {
//         console.log(newsArray[i].headline);
//         console.log(newsArray[i].headline);
//         //0
//         newsItems = newsItems + `
//         <div>
//             <h2>${newsArray[i].headline}</h2>
//             <p>${newsArray[i].summary}</p>
//         </div>
//     `
//     }
//     return newsItems;
//
// }
//
//
// newsContainer.innerHTML = createNews(news);
//


// 2. make a for loop on the news array

// 3. add stuff to the news container in HTML

// 4. Add some styles

const cats = [
    {
        name: "Mocho",
        age: 2
    },
    {
        name: "Titty",
        age: 3
    },
    {
        name: "Dodo",
        age: 9
    }
];

function getName(list) {
    for (let i = 0; i <list.length; i++){
        console.log(list[i].name)
    }

}

for(let i = 0; i < cats.length; i++){
    console.log(cats[i].name);
    console.log(cats[i].age);

}

getName(cats);

const dogs = [
    {
        name: "Jackson",
        age: 2
    },
    {
        name: "Polo",
        age: 3
    },
    {
        name: "Mailo",
        age: 9
    }
];

getName(dogs);

// function createShoppingList(shoppingList){
//     let myShoppingListItems = "";
//
//     for (let i = 0; i < shoppingList.length; i++){
//         myShoppingListItems += `
//         <div>
//         <h2>${shoppingList[i].name}</h2>
//             <h3>${shoppingList[i].price}</h3>
//         <div> `
//     }
//     return myShoppingListItems
// }
//
// let lineShoppingList = [
//     {
//         name: "orange juice",
//         price: 200
//     },
//     {
//         name: "choco",
//         price: 100
//     }
//
// ]
//
// const lineShoppingListContainer = document.querySelector(".line-shopping-list");
//
// lineShoppingListContainer.innerHTML = createShoppingList



