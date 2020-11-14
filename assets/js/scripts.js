//TRACKING AND TARGETING VARIABLES -------------------------------------------------------------------------------------------------------------------------------

var mode = 0;
//this does nothing at the moment

var foodList = document.querySelector(".foodSection");
var drinkList = document.querySelector(".drinkSection");
//these variables target each list for event listeners

var dropDownItem = document.querySelector(".dropdown-item");
//this does NOTHING at the moment

// var foodListTop = document.querySelector("#foodListTop");
// var drinkListTop = document.querySelector("#drinkListTop");
//these variables are targets for the top of the menu, basically what is showing when the menu isn't clicked

var modalMain = document.querySelector(".modal");
var modalClose = document.querySelector(".modal-close");
var modalImage = document.querySelector(".matchImage");

var listOfFood = ["Steak", "Wings", "Burrito", "Sushi", "Cheese"];
var listOfDrinks = ["Canadian (Beer)", "Whisky", "Corona", "Sapporo", "Wine"];
//these are the lists of food and drink so far, we will most likely just use these for testing until we can start pulling from multiple food/drink apis

var foodMenu = {
    "Burritos" : 6.90,
    "Pizza" : 12.40,
    "Wings" : 9.10
}

var drinkMenu = {
    "Beer" : 2.70,
    "Wine" : 12.00,
    "Cider" : 3.10
}

//PRIMARY FUNCTIONS -------------------------------------------------------------------------------------------------------------------------------

//this function is called when a user selects an item from the dropdown, the choice is passed in and then this function matches the perfect drink
function drinkMatch(food) {
    var foodPrice = foodMenu[food];
    var matchingDrink;
    var drinkPrice;
    if (food === "Burritos") {
        matchingDrink = "Beer";
        drinkPrice = drinkMenu[matchingDrink];
    }
    if (food === "Pizza") {
        matchingDrink = "Wine";
        drinkPrice = drinkMenu[matchingDrink];
    }
    if (food === "Wings") {
        matchingDrink = "Cider";
        drinkPrice = drinkMenu[matchingDrink];
    }
    console.log("Your food choice is " + food + " which pairs perfectly with " + matchingDrink + " and will cost " + Math.round((foodPrice + drinkPrice) * 100) / 100  + "0");
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
    console.log("Your drink choice is " + drink + " which pairs perfectly with " + matchingFood + " and will cost " + Math.round((foodPrice + drinkPrice) * 100) / 100  + "0");
}
//FETCH CALLS--------------------------------------------------------------------------------------------------------------------------------------
function renderGifs(){ 

    // var searchTerm = document.querySelector("#search").value;
    //var search = "";
    
    //--fetch API key
    fetch("https://api.giphy.com/v1/gifs/search?q='+" + "CAT" + "&api_key=fhyjxSw2icjRND3sWkVDSIduWRwkEPsI&limit=1")
    .then(function(response){
    //--response and return  
        return response.json()
    })
    //-- generate the image for the gif
    .then(function(response){
        var gifContainer = document.querySelector("#gifContainer")
        gifContainer.innerHTML=""
        var gif = document.createElement('img')
        gif.setAttribute('src', response.data[0].images.fixed_height.url) 
        gifContainer.appendChild(gif) 
    })
}

//EVENT LISTENERS -------------------------------------------------------------------------------------------------------------------------------

foodList.addEventListener("click", function (event) {
    var element = event.target;
    if (element.matches("img")) {
        console.log(element.alt);
        drinkMatch(element.alt);
    }
    modalMain.classList.add("is-active");
})

drinkList.addEventListener("click", function (event) {
    var element = event.target;
    if (element.matches("img")) {
        console.log(element.alt);
        foodMatch(element.alt);

    }
    modalMain.classList.add("is-active");
})

//this listener is used to close the modal once its opened, the button is currently in the top right corner but that can be moved somewhere else
modalClose.addEventListener("click", function (event) {
    var element = event.target;
    if (element.matches("button")) {
        modalMain.classList.remove("is-active");
    }
} )

//Spoonacular API 
var apiKey = "9106359dad954cc8820fb65a7927d657";
var foodChoice = "tbd";
var wineUrl = "https://api.spoonacular.com/food/wine/pairing?food=" + foodChoice + "&apiKey=" + apiKey;

// QueryURL to get Wine Pairing 
console.log("Food Choice is: ", foodChoice);  

    //this function is called when a user selects a food type, the function matches the perfect wine pair
    function drinkMatch() {
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
                        +  "<ul>" + foodChoice + " pairs well with: " +  data.pairedWines[0] + " OR" + "</ul>"
                        +  "<ul>" + data.pairedWines[1] + " OR" + "</ul>"
                        +  "<ul>" + data.pairedWines[2] + "</ul>"
                        +  "<ul>" + data.pairingText + ":" + "</ul>"
                        + "</div>"
                    ); // End of append
                }
                if (foodChoice === "Wings") {
                    $("#winepair").empty();
                    $("#winepair").append(
                        "<div class='tbd'>"
                        +  "<h1>" + foodChoice + " pairs well with: " +  data.pairedWines[0] + " OR" + "</h1>"
                        +  "<ul>" + data.pairedWines[1] + " OR" + "</ul>"
                        +  "<ul>" + data.pairedWines[2] + "</ul>"
                        + "</div>"
                    ); // End of append
                    
                }
                if (foodChoice === "Burrito") {
                    $("#winepair").empty();
                    $("#winepair").append(
                        "<div class='tbd'>"
                        +  "<ul>" + foodChoice + " pairs well with: " +  data.pairedWines[0] + " OR" + "</ul>"
                        +  "<ul>" + data.pairedWines[1] + " OR" + "</ul>"
                        +  "<ul>" + data.pairedWines[2] + "</ul>"
                        + "</div>"
                    ); // End of append
                   
                }
                if (foodChoice === "Sushi") {
                    $("#winepair").empty();
                    $("#winepair").append(
                        "<div class='tbd'>"
                        +  "<ul>" + foodChoice + " pairs well with: " +  data.pairedWines[0] + " OR" + "</ul>"
                        +  "<ul>" + data.pairedWines[1] + " OR" + "</ul>"
                        +  "<ul>" + data.pairedWines[2] + "</ul>"
                        + "</div>"
                    ); // End of append
                    
                }
                if (foodChoice === "Cheese") {
                    $("#winepair").empty();
                    $("#winepair").append(
                        "<div class='tbd'>"
                        +  "<ul>" + foodChoice + " pairs well with: " +  data.pairedWines[0] + " OR" + "</ul>"
                        +  "<ul>" + data.pairedWines[1] + " OR" + "</ul>"
                        +  "<ul>" + data.pairedWines[2] + "</ul>"
                        + "</div>"
                    ); // End of append
                    
                }
            });
    }
    