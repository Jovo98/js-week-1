import products from "./data/products.js";
console.log("products: ", products);
// 1. Select product-container
const productContainer = document.querySelector(".products-container");

const savedFavouritesProducts = JSON.parse(window.localStorage.getItem("favourites"));
console.log("savedFavouritesProducts", savedFavouritesProducts);


// 2. Fill container with products

for (let i = 0; i < products.length; i++ ) {
    let cssClass = "";

    const doesObjectExist = savedFavouritesProducts.find(function(fav){
        return parseInt(fav.id) === products[i].id

    });
    if(doesObjectExist){
        cssClass = "active.heart";
    }

    console.log("Object exist: ", doesObjectExist)

    productContainer.innerHTML += `
            <div class="product">
                <img src="https://picsum.photos/200" alt="placeholder image">
                <h3>${products[i].name}</h3>
                <h4>${products[i].price}</h4>
                <span class="heart-container">
                    <svg class="heart active-heart"
                    data-name="${products[i].name}"
                    data-id="${products[i].id}"
                    data-price="${products[i].price}"
                            xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" 
                            fill="none"
                            stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                </svg>  
                </span>
            </div>
    `;
}

// 3. Check if any of the fav btns clicked
// 4. I want to make this heart to be red
const favourites = document.querySelectorAll(".heart");
console.log("favourites: ", favourites)

let favsToSave = [];
for (let x = 0; x < hearts.length; x++) {
        hearts[x].addEventListener("click", function () {
            this.classList.toggle("active-heart");
            let productILiketoSave = {
                id: this.dataset.id,
                name: this.dataset.name,
                price: this.dataset.price

            }

            favsToSave.push(productILikeToSave);
            saveFavs(favsToSave);
        })
}

//TODO I Want to move MY clicking EvEnT of the Fav buttOn
// to its own funCtion instead of the anOnYmouS funCtIoN

function saveFavs(favouriteProducts) {
    window.localStorage.setItem("favourites", JSON.stringify(favouriteProducts));
}