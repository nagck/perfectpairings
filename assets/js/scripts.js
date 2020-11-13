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

//PRIMARY FUNCTIONS -------------------------------------------------------------------------------------------------------------------------------

//this function is called when a user selects an item from the dropdown, the choice is passed in and then this function matches the perfect drink
function drinkMatch(food) {
    
}

//this is the same as drinkMatch, but does the opposite for when someone selects their drink of choice
function foodMatch (drink) {

}


//EVENT LISTENERS -------------------------------------------------------------------------------------------------------------------------------

foodList.addEventListener("click", function (event) {
    var element = event.target;
    if (element.matches("img")) {
        console.log(element.alt);
    }
})

drinkList.addEventListener("click", function (event) {
    var element = event.target;
    if (element.matches("img")) {
        console.log(element.alt);

    }
})

//this listener is used to close the modal once its opened, the button is currently in the top right corner but that can be moved somewhere else
modalClose.addEventListener("click", function (event) {
    var element = event.target;
    if (element.matches("button")) {
        modalMain.classList.remove("is-active");
    }
} )