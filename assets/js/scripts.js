//TRACKING AND TARGETING VARIABLES -------------------------------------------------------------------------------------------------------------------------------

var mode = 0;
//this does nothing at the moment

var foodList = document.querySelector(".foodList");
var drinkList = document.querySelector(".drinkList");
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


//EVENT LISTENERS -------------------------------------------------------------------------------------------------------------------------------

foodList.addEventListener("click", function (event) {
    var element = event.target;
    if (element.matches("img")) {
        console.log(element.alt);
        drinkMatch(element.alt);
    }
})

drinkList.addEventListener("click", function (event) {
    var element = event.target;
    if (element.matches("img")) {
        console.log(element.alt);
        foodMatch(element.alt);

    }
})

//this listener is used to close the modal once its opened, the button is currently in the top right corner but that can be moved somewhere else
modalClose.addEventListener("click", function (event) {
    var element = event.target;
    if (element.matches("button")) {
        modalMain.classList.remove("is-active");
    }
} )