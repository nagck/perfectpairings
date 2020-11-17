//TRACKING AND TARGETING VARIABLES -------------------------------------------------------------------------------------------------------------------------------
var currentFood;
var currentDrink;
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
var modalCalories = document.querySelector("#calories");

var modalItemDrink = document.querySelector("#itemDrink");
var modalCaloriesDrink = document.querySelector("#caloriesDrink")
var modalAbvDrink = document.querySelector("#abvDrink");
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

var drinkClose = document.querySelector("#drinkClose");

var foodTitle;
var foodCalories;

//PRIMARY FUNCTIONS -------------------------------------------------------------------------------------------------------------------------------
function init () {
    document.getElementById('id01').style.display='block'; style="width:auto;"
    localStorage.setItem("Username", "Admin");
    localStorage.setItem("Password", "qwerty123");
    
}

//this function is called when a user selects an item from the dropdown, the choice is passed in and then this function matches the perfect drink
function drinkMatch(food) {
    modalItem.textContent = "Recommendation: " + ""
    modalIngredients.textContent = "Ingredients: " + ""
    modalCalories.textContent = "Calories: " + "";

    currentFood = food;
    
    console.log(currentFood)
    console.log(food)
    fetchFood(food);
    //---------------API CALL FOR DETAILS ABOUT FOOD HERE;
    
    modalThirsty.setAttribute("style", "display: ");
    modalHungry.setAttribute("style", "display: none");
   
}

//this is the same as drinkMatch, but does the opposite for when someone selects their drink of choice
function foodMatch (drink) {
    currentDrink = drink;
    modalItem.textContent = "Recommendation: " + ""
    modalIngredients.textContent = "Calories: " + ""
    modalCalories.textContent = "Abv: " + "";
    // fetchDrink(drink);

    //update textcontent of main modal to reflect drink recommendation
    if (currentDrink === "Wine and Dine") {
        var randNumberDrink = Math.floor((Math.random() * wineOptions.length));
        modalItem.textContent = "Recommendation: " + "wine title"
        modalIngredients.textContent = "Calories: " + " wine calories"
        modalCalories.textContent = "Abv: " + "wine abv";
    } else if (currentDrink === "Soda") {
        var randNumberDrink = Math.floor((Math.random() * popOptions.length));
        modalItem.textContent = "Recommendation: " + popOptions[randNumberDrink].text;
        modalIngredients.textContent = "Calories: " + popOptions[randNumberDrink].Calories;
        modalCalories.textContent = "Abv: " + popOptions[randNumberDrink].ABV;
    } else if (currentDrink === "Cocktails") {
        var randNumberDrink = Math.floor((Math.random() * cocktailOptions.length));
        modalItem.textContent = "Recommendation: " + cocktailOptions[randNumberDrink].text;
        modalIngredients.textContent = "Calories: " + cocktailOptions[randNumberDrink].Calories;
        modalCalories.textContent = "Abv: " + cocktailOptions[randNumberDrink].ABV;
    }  else if (currentDrink === "Hard Liquor") {
        var randNumberDrink = Math.floor((Math.random() * liquorOptions.length));
        modalItem.textContent = "Recommendation: " + liquorOptions[randNumberDrink].text;
        modalIngredients.textContent = "Calories: " + liquorOptions[randNumberDrink].Calories;
        modalCalories.textContent = "Abv: " + liquorOptions[randNumberDrink].ABV;
    }   else if (currentDrink === "Beer") {
        var randNumberDrink = Math.floor((Math.random() * beerOptions.length));
        modalItem.textContent = "Recommendation: " + beerOptions[randNumberDrink].text;
        modalIngredients.textContent = "Calories: " + beerOptions[randNumberDrink].Calories;
        modalCalories.textContent = "Abv: " + beerOptions[randNumberDrink].ABV;
    }   else if (currentDrink === "Smoothies") {
        var randNumberDrink = Math.floor((Math.random() * smoothieOptions.length));
        modalItem.textContent = "Recommendation: " + smoothieOptions[randNumberDrink].text;
        modalIngredients.textContent = "Calories: " + smoothieOptions[randNumberDrink].Calories;
        modalCalories.textContent = "Abv: " + smoothieOptions[randNumberDrink].ABV;
    }
    
    modalThirsty.setAttribute("style", "display: none ");
    modalHungry.setAttribute("style", "display: ");
}

function drinkPair(currentDrink) {
    modalItem.textContent = "Recommendation: " + ""
    modalIngredients.textContent = "Ingredients: " + ""
    modalCalories.textContent = "Calories: " + "";

    if (currentDrink === "Wine and Dine") {
        fetchFood("Cheese");
    } else if (currentDrink === "Soda") {
        fetchFood("Pizza");
    } else if (currentDrink === "Cocktails") {
        fetchFood("Burgers");
    } else if (currentDrink === "Hard Liquor") {
        fetchFood("Chinese food")
    } else if (currentDrink === "Beer") {
        fetchFood("Mexican Food")
    } else if (currentDrink === "Smoothies") {
        fetchFood("Desserts");
    }
    modalMain.classList.add("is-active");
    
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

// function fetchDrink(drink) {
//     var randNum = Math.floor((Math.random() * apiList.length));
//     console.log(randNum);
//     //
//     var randomApi = apiList[randNum]
//     console.log(randomApi);
//     var drinkMenuChoice = drink;
//     // var foodMenuUrl = "https://api.spoonacular.com/food/menuItems/search?query=" + foodMenuChoice + "&number=3" + "&apiKey=" + apiKeyChris;
//     var foodItemUrl = "https://api.spoonacular.com/recipes/complexSearch?query=" + drinkMenuChoice + "&maxCalories=1500" + "&type=beverage" + "&number=3" + "&apiKey=" + randomApi;
//     // var foodItemUrl = "https://api.spoonacular.com/recipes/complexSearch?query=pasta&maxFat=25&number=2" + "&apiKey=" + apiKeyChris;
    
//     console.log(foodItemUrl);
//     //Fetch for Food Menu
//     fetch (foodItemUrl, {
//     method: 'GET',  
//     })      
//     .then(function(response) {
//     return response.json();
//     })  
//     .then(function (data) {
//         var num = Math.floor((Math.random() * 3));
//         //generates a random number from 0 - 2;
//         console.log(data);
//         console.log(num)

//     });
// }

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
        currentDrink = element.alt;
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
    // if (loginUser.value.trim() === "Admin" && loginPassword.value.trim() === "Admin") {
    //     document.getElementById('id01').style.display='none';
    if (loginUser.value.trim() === localStorage.getItem("Username") && loginPassword.value.trim() === localStorage.getItem("Password")) {
        document.getElementById('id01').style.display='none';
    } else {
        passwordError.setAttribute("style", "display: ");
    }
})

drinkClose.addEventListener("click", function(event) {
    modalMain.classList.remove("is-active");
    modalDrinkPair.classList.remove("is-active");
})
//TAKES CURRENT FOOD CHOICE AND RECOMMENDS A DRINK
modalThirsty.addEventListener("click", function (event) {
    // modalMain.classList.remove("is-active");
    var element = event.target;
    modalDrinkPair.classList.add("is-active");
    if (currentFood === "Mexican food") {
        //pull multiple drink options later to randomize
        modalItemDrink.textContent = beerOptions[1].text;
        modalCaloriesDrink.textContent = beerOptions[1].Calories;
        modalAbvDrink.textContent = beerOptions[1].ABV;
    } else if (currentFood == "Sushi") {
        modalItemDrink.textContent = beerOptions[4].text;
        modalCaloriesDrink.textContent = beerOptions[4].Calories;
        modalAbvDrink.textContent = beerOptions[4].ABV;
    } else if (currentFood == "Pizza") {
        modalItemDrink.textContent = popOptions[1].text;
        modalCaloriesDrink.textContent = popOptions[1].Calories;
        modalAbvDrink.textContent = popOptions[1].ABV;
    } else if (currentFood == "Burgers") {
        modalItemDrink.textContent = wineOptions[4].text;
        modalCaloriesDrink.textContent = wineOptions[4].Calories;
        modalAbvDrink.textContent = wineOptions[4].ABV;
    } else if (currentFood == "Chinese food") {
        modalItemDrink.textContent = liquorOptions[4].text;
        modalCaloriesDrink.textContent = liquorOptions[4].Calories;
        modalAbvDrink.textContent = liquorOptions[4].ABV;
    } else if (currentFood == "Dessert") {
        modalItemDrink.textContent = smoothieOptions[0].text;
        modalCaloriesDrink.textContent = smoothieOptions[0].Calories;
        modalAbvDrink.textContent = smoothieOptions[0].ABV;
    }
})

modalHungry.addEventListener("click", function (event) {
    drinkPair(currentDrink);
    console.log(currentDrink);
    console.log(currentFood);
})

    
init();