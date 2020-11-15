//TRACKING AND TARGETING VARIABLES -------------------------------------------------------------------------------------------------------------------------------

var mode = 0;
//this does nothing at the moment

var foodList = document.querySelector(".foodSection");
var drinkList = document.querySelector(".drinkSection");
//these variables target each list for event listeners

var dropDownItem = document.querySelector(".dropdown-item");
//this does NOTHING at the moment

var modalItem = document.querySelector("#item");
var modalPrice = document.querySelector("#price");
var modalCalories = document.querySelector("#calories")
//these variables are targets for the top of the menu, basically what is showing when the menu isn't clicked

var modalThirsty = document.querySelector(".thirstyButton");
var modalHungry = document.querySelector(".hungryButton");

var modalMain = document.querySelector(".modal");
var modalClose = document.querySelector(".modal-close");
var modalDelete = document.querySelector(".delete");
var modalImage = document.querySelector(".matchImage");

var modalGif = document.querySelector(".modalGif")
var gifModalButton = document.querySelector(".is-success");
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

//PRIMARY FUNCTIONS -------------------------------------------------------------------------------------------------------------------------------

//this function is called when a user selects an item from the dropdown, the choice is passed in and then this function matches the perfect drink
function drinkMatch(food) {
    var foodPrice = foodMenu[food];
    var matchingDrink;
    var drinkPrice;
    if (food === "Pasta") {
        matchingDrinkCategory = "Wine";
        drinkPrice = drinkMenu[matchingDrink];
    }
    if (food === "Pizza") {
        matchingDrink = "Wine";
        drinkPrice = drinkMenu[matchingDrink];
    }
    if (food === "Rice Noodles") {
        matchingDrink = "Cocktails";
        drinkPrice = drinkMenu[matchingDrink];
    }
    if (food === "Breakfast") {
        matchingDrinkCategory = "Wine";
        drinkPrice = drinkMenu[matchingDrink];
    }
    if (food === "Spicy Curry") {
        matchingDrinkCategory = "Wine";
        drinkPrice = drinkMenu[matchingDrink];
    }
    modalThirsty.setAttribute("style", "display: ");
    modalHungry.setAttribute("style", "display: none");
    modalItem.textContent = food + " recommendation: " + "[related item from api]";
    modalPrice.textContent = food + " Price: " + "[related item PRICE from api]";
    modalCalories.textContent = food + " Calories: " + "[related item calories from api]";
   
}

//this is the same as drinkMatch, but does the opposite for when someone selects their drink of choice
function foodMatch (drink) {
    var drinkPrice = drinkMenu[drink];
    var matchingFood;
    var foodPrice;
    if (drink === "Beer") {
        matchingFood = "Burritos";
        foodPrice = foodMenu[matchingFood];
    }
    if (drink === "Wine") {
        matchingFood = "Pizza";
        foodPrice = foodMenu[matchingFood];
    }
    if (drink === "Cider") {
        matchingFood = "Wings";
        foodPrice = foodMenu[matchingFood];
    }
    modalThirsty.setAttribute("style", "display: none ");
    modalHungry.setAttribute("style", "display: ");
    console.log("Your drink choice is " + drink + " which pairs perfectly with " + matchingFood + " and will cost " + Math.round((foodPrice + drinkPrice) * 100) / 100  + "0");
}
//FETCH CALLS--------------------------------------------------------------------------------------------------------------------------------------
function renderGifs(item){ 

    // var searchTerm = document.querySelector("#search").value;
    //var search = "";
    
    //--fetch API key
    fetch("https://api.giphy.com/v1/gifs/search?q='+" + item + "&api_key=fhyjxSw2icjRND3sWkVDSIduWRwkEPsI&limit=1")
    .then(function(response){
    //--response and return  
        return response.json()
    })
    //-- generate the image for the gif
    .then(function(response){
        var gifContainer = document.querySelector(".matchImage")
        gifContainer.innerHTML=""
        // var gif = document.createElement('img')
        gifContainer.setAttribute('src', response.data[0].images.fixed_height.url) 
        // gifContainer.appendChild(gif) 
    })
}
//Spoonacular API 
var apiKey = "9106359dad954cc8820fb65a7927d657";
var foodChoice = "Sushi";
var wineUrl = "https://api.spoonacular.com/food/wine/pairing?food=" + foodChoice + "&apiKey=" + apiKey;

// QueryURL to get Wine Pairing 
console.log("Food Choice is: ", foodChoice);  
  
//this function is called when a user selects a food type, the function matches the perfect wine pair

function winePair() {
    console.log(wineUrl);
    //Fetch for paired Wine
    fetch (wineUrl, {
        method: 'GET',  
        })      
        .then(function(response) {
        return response.json();
        })  
        .then(function (data) {
        console.log(data);
            if (foodChoice === "Steak") {
                $("#winepair").empty();
                $("#winepair").append(
                    "<div class='tbd'>"
                    +  "<h2>" + "<b>" + foodChoice + " pairs well with: " + "</h2>" + "</b>" 
                    +  "<ul>" + data.pairedWines[0] + " OR" + "</ul>"
                    +  "<ul>" + data.pairedWines[1] + " OR" + "</ul>"
                    +  "<ul>" + data.pairedWines[2] + "</ul>" + "<br>"
                    +  "<p>" + "<b>" + "Brief Description: " + "</b>" + data.pairingText + "</p>" + "<br>"
                    +  "<p>" + "<b>" + "Average Price in USD: " + "</b>" + data.productMatches[0].price + "</p>"
                    + "</div>"
                ); // End of append
            }
            if (foodChoice === "Wings") {
                $("#winepair").empty();
                $("#winepair").append(
                    "<div class='tbd'>"
                        +  "<h2>" + "<b>" + foodChoice + " pairs well with: " + "</h2>" + "</b>" 
                        +  "<ul>" + data.pairedWines[0] + " OR" + "</ul>"
                        +  "<ul>" + data.pairedWines[1] + " OR" + "</ul>"
                        +  "<ul>" + data.pairedWines[2] + "</ul>" + "<br>"
                        +  "<p>" + "<b>" + "Brief Description: " + "</b>" + data.pairingText + "</p>" + "<br>"
                        +  "<p>" + "<b>" + "Average Price in USD: " + "</b>" + data.productMatches[0].price + "</p>"
                        + "</div>"
                ); // End of append
                
            }
            if (foodChoice === "Burrito") {
                $("#winepair").empty();
                $("#winepair").append(
                    "<div class='tbd'>"
                        +  "<h2>" + "<b>" + foodChoice + " pairs well with: " + "</h2>" + "</b>" 
                        +  "<ul>" + data.pairedWines[0] + " OR" + "</ul>"
                        +  "<ul>" + data.pairedWines[1] + " OR" + "</ul>"
                        +  "<ul>" + data.pairedWines[2] + "</ul>" + "<br>"
                        +  "<p>" + "<b>" + "Brief Description: " + "</b>" + data.pairingText + "</p>" + "<br>"
                        +  "<p>" + "<b>" + "Average Price in USD: " + "</b>" + data.productMatches[0].price + "</p>"
                        + "</div>"
                ); // End of append
                
            }
            if (foodChoice === "Sushi") {
                $("#winepair").empty();
                $("#winepair").append(
                    "<div class='tbd'>"
                    +  "<h2>" + "<b>" + foodChoice + " pairs well with: " + "</h2>" + "</b>" 
                    +  "<ul>" + data.pairedWines[0] + " OR" + "</ul>"
                    +  "<ul>" + data.pairedWines[1] + " OR" + "</ul>"
                    +  "<ul>" + data.pairedWines[2] + "</ul>" + "<br>"
                    +  "<p>" + "<b>" + "Brief Description: " + "</b>" + data.pairingText + "</p>" + "<br>"
                    +  "<p>" + "<b>" + "Average Price in USD: " + "</b>" + data.productMatches[0].price + "</p>"
                    + "</div>"
                ); // End of append
                
            }
            if (foodChoice === "Cheese") {
                $("#winepair").empty();
                $("#winepair").append(
                    "<div class='tbd'>"
                    +  "<h2>" + "<b>" + foodChoice + " pairs well with: " + "</h2>" + "</b>" 
                    +  "<ul>" + data.pairedWines[0] + " OR" + "</ul>"
                    +  "<ul>" + data.pairedWines[1] + " OR" + "</ul>"
                    +  "<ul>" + data.pairedWines[2] + "</ul>" + "<br>"
                    +  "<p>" + "<b>" + "Brief Description: " + "</b>" + data.pairingText + "</p>" + "<br>"
                    +  "<p>" + "<b>" + "Average Price in USD: " + "</b>" + data.productMatches[0].price + "</p>"
                    + "</div>"
                ); // End of append
                
            }
        });
}

//Spoonacular API for food menu item - this function is called when a user selects a food type, the function finds menu items from over 800 fast food and chain restaurants
function foodMenu(food) {
    var apiKey = "9106359dad954cc8820fb65a7927d657";
    var foodMenuChoice = food;
    var foodMenuUrl = "https://api.spoonacular.com/food/menuItems/search?query=" + foodMenuChoice + "&number=3" + "&apiKey=" + apiKey;
    console.log(foodMenuUrl);
    //Fetch for Food Menu
    fetch (foodMenuUrl, {
    method: 'GET',  
    })      
    .then(function(response) {
    return response.json();
    })  
    .then(function (data) {
    console.log(data);
        
        if (foodMenuChoice === "Pasta") {
            $("#foodmenu").empty();
            $("#foodmenu").append(
                "<div class='tbd'>"
                +  "<h2 style='color:Blue;'>" + "<b>" + " Suggested Food Menu Item 1: " + "</h2>" + "</b>" 
                +  "<ul>" + data.menuItems[0].title + "</ul>" 
                +  "<p>" + "<b>" + "Restaurant Chain: " + "</b>" + data.menuItems[0].restaurantChain + "</p>" 
                +  "<div class='card-text'>" + "<img src='" + data.menuItems[0].image + "'>" + "<br>" + "<hr>" +"</div>"
                + "</div>"
                + "<div class='tbd'>"
                +  "<h2 style='color:Green;'>" + "<b>" + " Suggested Food Menu Item 2: " + "</h2>" + "</b>"   
                +  "<ul>" + data.menuItems[1].title + "</ul>"
                +  "<p>" + "<b>" + "Restaurant Chain: " + "</b>" + data.menuItems[1].restaurantChain + "</p>" 
                +  "<div class='card-text'>" + "<img src='" + data.menuItems[1].image + "'>" + "<br>" + "<hr>" +"</div>"
                + "</div>"
                + "<div class='tbd'>"
                +  "<h2 style='color:purple;'>" + "<b>" + " Suggested Food Menu Item 3: " + "</h2>" + "</b>"   
                +  "<ul>" + data.menuItems[2].title + "</ul>"
                +  "<p>" + "<b>" + "Restaurant Chain: " + "</b>" + data.menuItems[2].restaurantChain + "</p>" 
                +  "<div class='card-text'>" + "<img src='" + data.menuItems[2].image + "'>" + "<br>" + "<hr>" +"</div>"
                + "</div>"
            ); // End of append
        }

        if (foodMenuChoice === "Rice Noodles") {
            $("#foodmenu").empty();
            $("#foodmenu").append(
                "<div class='tbd'>"
                +  "<h2 style='color:Blue;'>" + "<b>" + " Suggested Food Menu Item 1: " + "</h2>" + "</b>" 
                +  "<ul>" + data.menuItems[0].title + "</ul>" 
                +  "<p>" + "<b>" + "Restaurant Chain: " + "</b>" + data.menuItems[0].restaurantChain + "</p>" 
                +  "<div class='card-text'>" + "<img src='" + data.menuItems[0].image + "'>" + "<br>" + "<hr>" +"</div>"
                + "</div>"
                + "<div class='tbd'>"
                +  "<h2 style='color:Green;'>" + "<b>" + " Suggested Food Menu Item 2: " + "</h2>" + "</b>"   
                +  "<ul>" + data.menuItems[1].title + "</ul>"
                +  "<p>" + "<b>" + "Restaurant Chain: " + "</b>" + data.menuItems[1].restaurantChain + "</p>" 
                +  "<div class='card-text'>" + "<img src='" + data.menuItems[1].image + "'>" + "<br>" + "<hr>" +"</div>"
                + "</div>"
                + "<div class='tbd'>"
                +  "<h2 style='color:purple;'>" + "<b>" + " Suggested Food Menu Item 3: " + "</h2>" + "</b>"   
                +  "<ul>" + data.menuItems[2].title + "</ul>"
                +  "<p>" + "<b>" + "Restaurant Chain: " + "</b>" + data.menuItems[2].restaurantChain + "</p>" 
                +  "<div class='card-text'>" + "<img src='" + data.menuItems[2].image + "'>" + "<br>" + "<hr>" +"</div>"
                + "</div>"
            ); // End of append
        }

        if (foodMenuChoice === "Pizza") {
            $("#foodmenu").empty();
            $("#foodmenu").append(
                "<div class='tbd'>"
                +  "<h2 style='color:Blue;'>" + "<b>" + " Suggested Food Menu Item 1: " + "</h2>" + "</b>" 
                +  "<ul>" + data.menuItems[0].title + "</ul>" 
                +  "<p>" + "<b>" + "Restaurant Chain: " + "</b>" + data.menuItems[0].restaurantChain + "</p>" 
                +  "<div class='card-text'>" + "<img src='" + data.menuItems[0].image + "'>" + "<br>" + "<hr>" +"</div>"
                + "</div>"
                + "<div class='tbd'>"
                +  "<h2 style='color:Green;'>" + "<b>" + " Suggested Food Menu Item 2: " + "</h2>" + "</b>"   
                +  "<ul>" + data.menuItems[1].title + "</ul>"
                +  "<p>" + "<b>" + "Restaurant Chain: " + "</b>" + data.menuItems[1].restaurantChain + "</p>" 
                +  "<div class='card-text'>" + "<img src='" + data.menuItems[1].image + "'>" + "<br>" + "<hr>" +"</div>"
                + "</div>"
                + "<div class='tbd'>"
                +  "<h2 style='color:purple;'>" + "<b>" + " Suggested Food Menu Item 3: " + "</h2>" + "</b>"   
                +  "<ul>" + data.menuItems[2].title + "</ul>"
                +  "<p>" + "<b>" + "Restaurant Chain: " + "</b>" + data.menuItems[2].restaurantChain + "</p>" 
                +  "<div class='card-text'>" + "<img src='" + data.menuItems[2].image + "'>" + "<br>" + "<hr>" +"</div>"
                + "</div>"
            ); // End of append
        }

        if (foodMenuChoice === "Breakfast") {
            $("#foodmenu").empty();
            $("#foodmenu").append(
                "<div class='tbd'>"
                +  "<h2 style='color:Blue;'>" + "<b>" + " Suggested Food Menu Item 1: " + "</h2>" + "</b>" 
                +  "<ul>" + data.menuItems[0].title + "</ul>" 
                +  "<p>" + "<b>" + "Restaurant Chain: " + "</b>" + data.menuItems[0].restaurantChain + "</p>" 
                +  "<div class='card-text'>" + "<img src='" + data.menuItems[0].image + "'>" + "<br>" + "<hr>" +"</div>"
                + "</div>"
                + "<div class='tbd'>"
                +  "<h2 style='color:Green;'>" + "<b>" + " Suggested Food Menu Item 2: " + "</h2>" + "</b>"   
                +  "<ul>" + data.menuItems[1].title + "</ul>"
                +  "<p>" + "<b>" + "Restaurant Chain: " + "</b>" + data.menuItems[1].restaurantChain + "</p>" 
                +  "<div class='card-text'>" + "<img src='" + data.menuItems[1].image + "'>" + "<br>" + "<hr>" +"</div>"
                + "</div>"
                + "<div class='tbd'>"
                +  "<h2 style='color:purple;'>" + "<b>" + " Suggested Food Menu Item 3: " + "</h2>" + "</b>"   
                +  "<ul>" + data.menuItems[2].title + "</ul>"
                +  "<p>" + "<b>" + "Restaurant Chain: " + "</b>" + data.menuItems[2].restaurantChain + "</p>" 
                +  "<div class='card-text'>" + "<img src='" + data.menuItems[2].image + "'>" + "<br>" + "<hr>" +"</div>"
                + "</div>"
            ); // End of append
        }
            
        if (foodMenuChoice === "Spicy Curry") {
            $("#foodmenu").empty();
            $("#foodmenu").append(
                "<div class='tbd'>"
                +  "<h2 style='color:Blue;'>" + "<b>" + " Suggested Food Menu Item 1: " + "</h2>" + "</b>" 
                +  "<ul>" + data.menuItems[0].title + "</ul>" 
                +  "<p>" + "<b>" + "Restaurant Chain: " + "</b>" + data.menuItems[0].restaurantChain + "</p>" 
                +  "<div class='card-text'>" + "<img src='" + data.menuItems[0].image + "'>" + "<br>" + "<hr>" +"</div>"
                + "</div>"
                + "<div class='tbd'>"
                +  "<h2 style='color:Green;'>" + "<b>" + " Suggested Food Menu Item 2: " + "</h2>" + "</b>"   
                +  "<ul>" + data.menuItems[1].title + "</ul>"
                +  "<p>" + "<b>" + "Restaurant Chain: " + "</b>" + data.menuItems[1].restaurantChain + "</p>" 
                +  "<div class='card-text'>" + "<img src='" + data.menuItems[1].image + "'>" + "<br>" + "<hr>" +"</div>"
                + "</div>"
                + "<div class='tbd'>"
                +  "<h2 style='color:purple;'>" + "<b>" + " Suggested Food Menu Item 3: " + "</h2>" + "</b>"   
                +  "<ul>" + data.menuItems[2].title + "</ul>"
                +  "<p>" + "<b>" + "Restaurant Chain: " + "</b>" + data.menuItems[2].restaurantChain + "</p>" 
                +  "<div class='card-text'>" + "<img src='" + data.menuItems[2].image + "'>" + "<br>" + "<hr>" +"</div>"
                + "</div>"
            ); // End of append
        }
    });
}

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
    if(element.matches("button")) {
        modalGif.classList.add("is-active");
        renderGifs("cat");
    }
})

gifCloseButton.addEventListener("click", function (event) {
    modalGif.classList.remove("is-active");
})

    
