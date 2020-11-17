//TRACKING AND TARGETING VARIABLES -------------------------------------------------------------------------------------------------------------------------------

var mode = 0;
//this does nothing at the moment

var foodList = document.querySelector(".foodSection");
var drinkList = document.querySelector(".drinkSection");
//these variables target each list for event listeners

var loginSection = document.querySelector(".inputGroup");
var loginUser = document.querySelector("#userName");
var loginPassword = document.querySelector("#userPassword");
var userError = document.querySelector("#userError");
var passwordError = document.querySelector("#passwordError")
var loginButton = document.querySelector("#loginButton");
//these are targets for login section

var modalItem = document.querySelector("#item");
var modalIngredients = document.querySelector("#ingredients");
var modalCalories = document.querySelector("#calories")
//these variables are targets for the top of the menu, basically what is showing when the menu isn't clicked

var modalThirsty = document.querySelector(".thirstyButton");
var modalHungry = document.querySelector(".hungryButton");

var modalMain = document.querySelector(".modalMain");
var modalDrinkPair = document.querySelector("#modalDrink");
var modalFoodPair = document.querySelector("#modalFood");
var modalClose = document.querySelector(".modal-close");
var modalDelete = document.querySelector(".delete");
var modalImage = document.querySelector(".matchImage");

var modalGif = document.querySelector(".modalGif")
var gifModalButton = document.querySelector(".gifButton");
var gifCloseButton = modalGif.querySelector(".gifDelete");

var listOfFood = ["Pasta", "Rice Noodles", "Pizza", "Breakfast", "Spicy Curry", "Bread", "Salads", "Desserts"];
var listOfDrinks = ["Wine", "Pop", "Cocktails", "Liquor", "Beer", "Smoothies"];
//these are the lists of food and drink so far, we will most likely just use these for testing until we can start pulling from multiple food/drink apis

var foodMenu = {
    "Pasta" : 6.90,
    "Pizza" : 12.40,
    "Rice Noodles" : 9.10
}

var drinkMenu = {
    "Beer" : 2.70,
    "Wine" : 12.00,
    "Cocktails" : 8.10
}

var foodTitle;
var foodCalories;

//PRIMARY FUNCTIONS -------------------------------------------------------------------------------------------------------------------------------
function init () {
    document.getElementById('id01').style.display='block'; style="width:auto;"
    
}

//this function is called when a user selects an item from the dropdown, the choice is passed in and then this function matches the perfect drink
function drinkMatch(food) {
    var foodPrice = foodMenu[food];
    // fetchFood(food);
    //---------------API CALL FOR DETAILS ABOUT FOOD HERE;
    var matchingDrink;
    var drinkPrice;
    
    modalThirsty.setAttribute("style", "display: ");
    modalHungry.setAttribute("style", "display: none");
   
}

//this is the same as drinkMatch, but does the opposite for when someone selects their drink of choice
function foodMatch (drink) {
    var drinkPrice = drinkMenu[drink];
    // fetchDrink(drink);
    var matchingFood;
    if (drink === "Wine") {
        matchingFood = "Pasta";
    }
    if (drink === "Pop") {
        matchingFood = "Pizza";
    }
    if (drink === "Cocktails") {
        matchingFood = "Rice Noodles";
    }
    if (drink === "Liquor") {
        matchingFood = "Salads";
    }
    if (drink === "Beer") {
        matchingFood = "Spicy Curry";
    }
    if (drink === "Smoothies") {
        matchingFood = "Salads";
    }
    modalThirsty.setAttribute("style", "display: none ");
    modalHungry.setAttribute("style", "display: ");

    // modalItem.textContent = drink + " recommendation: " + data.results[num].title;
    // modalPrice.textContent = drink + " Price: " + "-------------";
    // modalCalories.textContent = drink + " Calories: " + data.results[num].nutrition.nutrients[0].amount;
}
//FETCH CALLS--------------------------------------------------------------------------------------------------------------------------------------
function renderGifs(item){ 
    
    //--fetch API key
    fetch("https://api.giphy.com/v1/gifs/search?q='+" + item + "&api_key=fhyjxSw2icjRND3sWkVDSIduWRwkEPsI&limit=1")
    .then(function(response){
    //--response and return  
        return response.json()
    })
    //-- generate the image for the gif
    .then(function(response){
        var gifContainer = document.querySelector(".matchImage");
        var gifButtonContainer = document.querySelector(".gifImage");
        gifContainer.innerHTML=""
        // var gif = document.createElement('img')
        gifContainer.setAttribute('src', response.data[0].images.fixed_height.url)
        gifButtonContainer.setAttribute('src', response.data[0].images.fixed_height.url) 
        // gifContainer.appendChild(gif) 
    })
}
//Spoonacular API 
var apiKeyNagesh = "9106359dad954cc8820fb65a7927d657";
var foodChoice = "Sushi";
var wineUrl = "https://api.spoonacular.com/food/wine/pairing?food=" + foodChoice + "&apiKey=" + apiKeyNagesh;

// QueryURL to get Wine Pairing 
console.log("Food Choice is: ", foodChoice);  
  
//this function is called when a user selects a food type, the function matches the perfect wine pair

//Spoonacular API for food menu item - this function is called when a user selects a food type, the function finds menu items from over 800 fast food and chain restaurants
var apiKeyNagesh = "9106359dad954cc8820fb65a7927d657";
var apiKeyNagesh2 = "4f00ba5ccb8145a7abb0d9eeec8992f4";
var apiKeyChris = "2fe6c814325d4bf690bbef8390f08a9c";
var apiKeyKevin = "053c20d29c3d4bcba7deb8dbf8b40b1d";
var apiKeyPieter = "d0654c3acc06487db8a7962773177457";

var apiList = [apiKeyChris, apiKeyKevin, apiKeyNagesh, apiKeyNagesh2, apiKeyPieter];


function fetchFood(food) {
    var randNum = Math.floor((Math.random() * apiList.length));
    //generates a random number from 0 to the length of the list - 1;
    console.log(randNum);
    //
    var randomApi = apiList[randNum];
    console.log(randomApi);
    var foodMenuChoice = food;
    // var foodMenuUrl = "https://api.spoonacular.com/food/menuItems/search?query=" + foodMenuChoice + "&number=3" + "&apiKey=" + apiKeyChris;
    var foodItemUrl = "https://api.spoonacular.com/recipes/complexSearch?query=" + foodMenuChoice + "&fillIngredients=true" + "&maxCalories=1500" + "&number=3" + "&apiKey=" + randomApi;
    // var foodItemUrl = "https://api.spoonacular.com/recipes/complexSearch?query=pasta&maxFat=25&number=2" + "&apiKey=" + apiKeyChris;
    
    console.log(foodItemUrl);
    //Fetch for Food Menu
    fetch (foodItemUrl, {
    method: 'GET',  
    })      
    .then(function(response) {
    return response.json();
    })  
    .then(function (data) {
        var num = Math.floor((Math.random() * 3));
        //generates a random number from 0 - 2;
        console.log(data);
        console.log(num);
        var listIngredients = data.results[num].missedIngredients;
        var ingredientsArray = [];
        
        for (let i = 0;  i < listIngredients.length; i++) {
            ingredientsArray.push(listIngredients[i].name);
        }
        modalItem.textContent = "Recommendation: " + data.results[num].title;
        modalIngredients.textContent = "Ingredients: " + ingredientsArray;
        modalCalories.textContent = "Calories: " + data.results[num].nutrition.nutrients[0].amount;

    });
}

function fetchDrink(drink) {
    var randNum = Math.floor((Math.random() * apiList.length));
    console.log(randNum);
    //
    var randomApi = apiList[randNum]
    console.log(randomApi);
    var drinkMenuChoice = drink;
    // var foodMenuUrl = "https://api.spoonacular.com/food/menuItems/search?query=" + foodMenuChoice + "&number=3" + "&apiKey=" + apiKeyChris;
    var foodItemUrl = "https://api.spoonacular.com/recipes/complexSearch?query=" + drinkMenuChoice + "&maxCalories=1500" + "&type=beverage" + "&number=3" + "&apiKey=" + randomApi;
    // var foodItemUrl = "https://api.spoonacular.com/recipes/complexSearch?query=pasta&maxFat=25&number=2" + "&apiKey=" + apiKeyChris;
    
    console.log(foodItemUrl);
    //Fetch for Food Menu
    fetch (foodItemUrl, {
    method: 'GET',  
    })      
    .then(function(response) {
    return response.json();
    })  
    .then(function (data) {
        var num = Math.floor((Math.random() * 3));
        //generates a random number from 0 - 2;
        console.log(data);
        console.log(num)

    });
}

// function winePair() {
//     console.log(wineUrl);
//     //Fetch for paired Wine
//     fetch (wineUrl, {
//         method: 'GET',  
//         })      
//         .then(function(response) {
//         return response.json();
//         })  
//         .then(function (data) {
//         console.log(data);
//             if (foodChoice === "Steak") {
//                 $("#winepair").empty();
//                 $("#winepair").append(
//                     "<div class='tbd'>"
//                     +  "<h2>" + "<b>" + foodChoice + " pairs well with: " + "</h2>" + "</b>" 
//                     +  "<ul>" + data.pairedWines[0] + " OR" + "</ul>"
//                     +  "<ul>" + data.pairedWines[1] + " OR" + "</ul>"
//                     +  "<ul>" + data.pairedWines[2] + "</ul>" + "<br>"
//                     +  "<p>" + "<b>" + "Brief Description: " + "</b>" + data.pairingText + "</p>" + "<br>"
//                     +  "<p>" + "<b>" + "Average Price in USD: " + "</b>" + data.productMatches[0].price + "</p>"
//                     + "</div>"
//                 ); // End of append
//             }
//             if (foodChoice === "Wings") {
//                 $("#winepair").empty();
//                 $("#winepair").append(
//                     "<div class='tbd'>"
//                         +  "<h2>" + "<b>" + foodChoice + " pairs well with: " + "</h2>" + "</b>" 
//                         +  "<ul>" + data.pairedWines[0] + " OR" + "</ul>"
//                         +  "<ul>" + data.pairedWines[1] + " OR" + "</ul>"
//                         +  "<ul>" + data.pairedWines[2] + "</ul>" + "<br>"
//                         +  "<p>" + "<b>" + "Brief Description: " + "</b>" + data.pairingText + "</p>" + "<br>"
//                         +  "<p>" + "<b>" + "Average Price in USD: " + "</b>" + data.productMatches[0].price + "</p>"
//                         + "</div>"
//                 ); // End of append
                
//             }
//             if (foodChoice === "Burrito") {
//                 $("#winepair").empty();
//                 $("#winepair").append(
//                     "<div class='tbd'>"
//                         +  "<h2>" + "<b>" + foodChoice + " pairs well with: " + "</h2>" + "</b>" 
//                         +  "<ul>" + data.pairedWines[0] + " OR" + "</ul>"
//                         +  "<ul>" + data.pairedWines[1] + " OR" + "</ul>"
//                         +  "<ul>" + data.pairedWines[2] + "</ul>" + "<br>"
//                         +  "<p>" + "<b>" + "Brief Description: " + "</b>" + data.pairingText + "</p>" + "<br>"
//                         +  "<p>" + "<b>" + "Average Price in USD: " + "</b>" + data.productMatches[0].price + "</p>"
//                         + "</div>"
//                 ); // End of append
                
//             }
//             if (foodChoice === "Sushi") {
//                 $("#winepair").empty();
//                 $("#winepair").append(
//                     "<div class='tbd'>"
//                     +  "<h2>" + "<b>" + foodChoice + " pairs well with: " + "</h2>" + "</b>" 
//                     +  "<ul>" + data.pairedWines[0] + " OR" + "</ul>"
//                     +  "<ul>" + data.pairedWines[1] + " OR" + "</ul>"
//                     +  "<ul>" + data.pairedWines[2] + "</ul>" + "<br>"
//                     +  "<p>" + "<b>" + "Brief Description: " + "</b>" + data.pairingText + "</p>" + "<br>"
//                     +  "<p>" + "<b>" + "Average Price in USD: " + "</b>" + data.productMatches[0].price + "</p>"
//                     + "</div>"
//                 ); // End of append
                
//             }
//             if (foodChoice === "Cheese") {
//                 $("#winepair").empty();
//                 $("#winepair").append(
//                     "<div class='tbd'>"
//                     +  "<h2>" + "<b>" + foodChoice + " pairs well with: " + "</h2>" + "</b>" 
//                     +  "<ul>" + data.pairedWines[0] + " OR" + "</ul>"
//                     +  "<ul>" + data.pairedWines[1] + " OR" + "</ul>"
//                     +  "<ul>" + data.pairedWines[2] + "</ul>" + "<br>"
//                     +  "<p>" + "<b>" + "Brief Description: " + "</b>" + data.pairingText + "</p>" + "<br>"
//                     +  "<p>" + "<b>" + "Average Price in USD: " + "</b>" + data.productMatches[0].price + "</p>"
//                     + "</div>"
//                 ); // End of append
                
//             }
//         });


//EVENT LISTENERS -------------------------------------------------------------------------------------------------------------------------------

foodList.addEventListener("click", function (event) {
    var element = event.target;
    if (element.matches("img")) {
        console.log(element.alt);
        drinkMatch(element.alt);
        modalMain.classList.add("is-active");
        renderGifs(element.alt);
    }   
    
})

drinkList.addEventListener("click", function (event) {
    var element = event.target;
    if (element.matches("img")) {
        console.log(element.alt);
        foodMatch(element.alt);
        modalMain.classList.add("is-active");
        renderGifs(element.alt);
    }
    
})

//this listener is used to close the modal once its opened, the button is currently in the top right corner but that can be moved somewhere else
modalClose.addEventListener("click", function (event) {
    var element = event.target;
    if (element.matches("button")) {
        modalMain.classList.remove("is-active");
    }
} )

modalDelete.addEventListener("click", function (event) {
    var element = event.target;
    if (element.matches("button")) {
        modalMain.classList.remove("is-active");
        modalGif.classList.remove("is-active");
    }
} )

gifModalButton.addEventListener("click", function(event) {
    var element = event.target;
    if(element.matches("button") || element.matches("span")) {
        modalGif.classList.add("is-active");
        renderGifs("cat");
    }
})

gifCloseButton.addEventListener("click", function (event) {
    modalGif.classList.remove("is-active");
})

loginButton.addEventListener("click", function (event) {
    event.preventDefault();
    
    console.log(loginUser.value.trim());
    console.log(loginPassword.value.trim());
    if (loginUser.value.trim() === "Admin" && loginPassword.value.trim() === "Admin") {
        document.getElementById('id01').style.display='none';
    } else {
        passwordError.setAttribute("style", "display: ");
    }
})

modalThirsty.addEventListener("click", function (event) {
    // modalMain.classList.remove("is-active");
    modalDrinkPair.classList.add("is-active");
})

modalHungry.addEventListener("click", function (event) {
    modalFoodPair.classList.add("is-active");
})

    
init();