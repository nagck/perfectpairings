//TRACKING AND TARGETING VARIABLES -------------------------------------------------------------------------------------------------------------------------------
var currentFood;
var currentDrink;

var startingPulls = 3;
var guestPulls;
var adminPulls = 99999;

var centerSecret = document.querySelector("#centerSecret");

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

var modalItemImage = document.querySelector(".itemImage");
var modalDrinkImage = document.querySelectorAll(".drinkImage");

var modalItemDrink = document.querySelector("#itemDrink");
var modalCaloriesDrink = document.querySelector("#caloriesDrink")
var modalAbvDrink = document.querySelector("#abvDrink");
//these variables are targets for the top of the menu, basically what is showing when the menu isn't clicked

var modalYellow = document.querySelector("#yellowTitle");
var modalGreen = document.querySelector("#greenTitle");

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

var secretText = document.querySelector(".secret");

var foodTitle;
var foodCalories;

//PRIMARY FUNCTIONS -------------------------------------------------------------------------------------------------------------------------------
function init () {
    guestPulls = localStorage.getItem("Api calls");
    //whenever the site initializes it grabs whatever is in local storage

    // if (localStorage.getItem("Api calls") == 0) {
    //     console.log("You are out of api calls")
    //     document.getElementById("userName").style.display="none";
    //     document.getElementById("userPassword").style.display="none";
    //     document.getElementById("loginButton").style.display="none";
    //     document.getElementById("trialOver").style.display="block";
    //     document.getElementById("trialOver").style.color="black";
    //}
    document.getElementById('id01').style.display='block'; style="width:auto;"
    
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
    modalItem.textContent = "";
    modalIngredients.textContent = "";
    modalCalories.textContent = "";
    // fetchDrink(drink);

    //update textcontent of main modal to reflect drink recommendation
    if (currentDrink === "Soda") {
        var randNumberDrink = Math.floor((Math.random() * popOptions.length));
        modalItem.textContent = " " + popOptions[randNumberDrink].text;
        modalCalories.textContent = " " + popOptions[randNumberDrink].Calories;
        modalIngredients.textContent = " " + popOptions[randNumberDrink].ABV;
        if (randNumberDrink == 0) {
            document.getElementById("mainImage").src = "assets/images/Coke.jpg";
        } else if (randNumberDrink == 1) {
            document.getElementById("mainImage").src = "assets/images/Diet Coke.png";
        } else if (randNumberDrink == 2) {
            document.getElementById("mainImage").src = "assets/images/Dr. Pepper.jpg";
        } else if (randNumberDrink == 3) {
            document.getElementById("mainImage").src = "assets/images/Fanta.jpg";
        } else if (randNumberDrink == 4) {
            document.getElementById("mainImage").src = "assets/images/Pepsi.jpg";
        } else if (randNumberDrink == 5) {
            document.getElementById("mainImage").src = "assets/images/Sprite.jpg";
        } else if (randNumberDrink == 6) {
            document.getElementById("mainImage").src = "assets/images/Ginger Ale.jpg";
        }   
    } else if (currentDrink === "Cocktails") {
        var randNumberDrink = Math.floor((Math.random() * cocktailOptions.length));
        modalItem.textContent = " " + cocktailOptions[randNumberDrink].text;
        modalCalories.textContent = " " + cocktailOptions[randNumberDrink].Calories;
        modalIngredients.textContent = " " + cocktailOptions[randNumberDrink].ABV;
        if (randNumberDrink == 0) {
            document.getElementById("mainImage").src = "assets/images/Mojito.jpg";
        } else if (randNumberDrink == 1) {
            document.getElementById("mainImage").src = "assets/images/Sangria.jpg";
        } else if (randNumberDrink == 2) {
            document.getElementById("mainImage").src = "assets/images/Pina Colada.jpg";
        } else if (randNumberDrink == 3) {
            document.getElementById("mainImage").src = "assets/images/Cosmopolitan.jpg";
        } else if (randNumberDrink == 4) {
            document.getElementById("mainImage").src = "assets/images/Martini.jpg";
        } else if (randNumberDrink == 5) {
            document.getElementById("mainImage").src = "assets/images/Manhattan.jpg";
        } else if (randNumberDrink == 6) {
            document.getElementById("mainImage").src = "assets/images/Margarita.jpg";
        }
    }  else if (currentDrink === "Hard Liquor") {
        var randNumberDrink = Math.floor((Math.random() * liquorOptions.length));
        modalItem.textContent = " " + liquorOptions[randNumberDrink].text;
        modalCalories.textContent = " " + liquorOptions[randNumberDrink].Calories;
        modalIngredients.textContent = " " + liquorOptions[randNumberDrink].ABV;
        if (randNumberDrink == 0) {
            document.getElementById("mainImage").src = "assets/images/champange.jpg";
        } else if (randNumberDrink == 1) {
            document.getElementById("mainImage").src = "assets/images/Vodka.jpg";
        } else if (randNumberDrink == 2) {
            document.getElementById("mainImage").src = "assets/images/Gin.png";
        } else if (randNumberDrink == 3) {
            document.getElementById("mainImage").src = "assets/images/Rum.jpg";
        } else if (randNumberDrink == 4) {
            document.getElementById("mainImage").src = "assets/images/Whiskey.jpg";
        } else if (randNumberDrink == 5) {
            document.getElementById("mainImage").src = "assets/images/Scotch.jpg";
        } else if (randNumberDrink == 6) {
            document.getElementById("mainImage").src = "assets/images/Brandy.jpg";
        }
    }   else if (currentDrink === "Beer") {
        var randNumberDrink = Math.floor((Math.random() * beerOptions.length));
        modalItem.textContent = " " + beerOptions[randNumberDrink].text;
        modalCalories.textContent = " " + beerOptions[randNumberDrink].Calories;
        modalIngredients.textContent = " " + beerOptions[randNumberDrink].ABV;
        if (randNumberDrink == 0) {
            document.getElementById("mainImage").src = "assets/images/Budlight.jpg";
        } else if (randNumberDrink == 1) {
            document.getElementById("mainImage").src = "assets/images/corona beer.jpg";
        } else if (randNumberDrink == 2) {
            document.getElementById("mainImage").src = "assets/images/Miller lite.jpg";
        } else if (randNumberDrink == 3) {
            document.getElementById("mainImage").src = "assets/images/modelo.jpg";
        } else if (randNumberDrink == 4) {
            document.getElementById("mainImage").src = "assets/images/heineken.jpg";
        } else if (randNumberDrink == 5) {
            document.getElementById("mainImage").src = "assets/images/Stella.jpg";
        } else if (randNumberDrink == 6) {
            document.getElementById("mainImage").src = "assets/images/dos equis.jpg";
        }
    }   else if (currentDrink === "Smoothies") {
        var randNumberDrink = Math.floor((Math.random() * smoothieOptions.length));
        modalItem.textContent = " " + smoothieOptions[randNumberDrink].text;
        modalCalories.textContent = " " + smoothieOptions[randNumberDrink].Calories;
        modalIngredients.textContent = " " + smoothieOptions[randNumberDrink].ABV;
        if (randNumberDrink == 0) {
            document.getElementById("mainImage").src = "assets/images/Strawberry banana.jpg";
        } else if (randNumberDrink == 1) {
            document.getElementById("mainImage").src = "assets/images/blueberry smoothie.jpg";
        } else if (randNumberDrink == 2) {
            document.getElementById("mainImage").src = "assets/images/pineapplesmoothie.jpg";
        } else if (randNumberDrink == 3) {
            document.getElementById("mainImage").src = "assets/images/Peanut smoothie.jpg";
        } else if (randNumberDrink == 4) {
            document.getElementById("mainImage").src = "assets/images/green smoothie.jpg";
        } else if (randNumberDrink == 5) {
            document.getElementById("mainImage").src = "assets/images/chocolate smoothie.jpg";
        } else if (randNumberDrink == 6) {
            document.getElementById("mainImage").src = "assets/images/berry smoothie.jpg";
        }
    }
    
    modalThirsty.setAttribute("style", "display: none ");
    modalHungry.setAttribute("style", "display: ");
}

function drinkPair(currentDrink) {
    modalItem.textContent = "Recommendation: " + ""
    modalIngredients.textContent = "Ingredients: " + ""
    modalCalories.textContent = "Calories: " + "";

    if (currentDrink === "Wine") {
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


// var apiKeyNagesh = "9106359dad954cc8820fb65a7927d657";
// var apiKeyNagesh2 = "4f00ba5ccb8145a7abb0d9eeec8992f4";
var apiKeyChris = "2fe6c814325d4bf690bbef8390f08a9c";
var apiKeyKevin = "053c20d29c3d4bcba7deb8dbf8b40b1d";
var apiKeyPieter = "d0654c3acc06487db8a7962773177457";

var apiList = [apiKeyChris, apiKeyKevin, apiKeyPieter];

//Spoonacular API for food menu item - this function is called when a user selects a food type, the function finds food related to query
function fetchFood(food) {
    var randNum = Math.floor((Math.random() * apiList.length));
    //generates a random number from 0 to the length of the list - 1;
    console.log(randNum);
    //
    var randomApi = apiList[randNum];
    console.log(randomApi);
    var foodMenuChoice = food;
    var foodItemUrl = "https://api.spoonacular.com/recipes/complexSearch?query=" + foodMenuChoice + "&fillIngredients=true" + "&maxCalories=1500" + "&number=3" + "&apiKey=" + randomApi;
    
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
        modalItem.textContent = " " + data.results[num].title;
        modalIngredients.textContent = " " + ingredientsArray;
        modalCalories.textContent = " " + data.results[num].nutrition.nutrients[0].amount;
        modalItemImage.setAttribute("src", data.results[num].image);

    });
}

// This function is called when user selects wine recommendation
    function wineRec() {
        var randomNum = Math.floor((Math.random() * apiList.length));
    //generates a random number from 0 to the length of the list - 1;
        console.log(randomNum);
    //
        var randomApi = apiList[randomNum];
        var wineChoice = ["Merlot", "Chardonnay", "Riesling", "Zinfandel", "Malbec"];
        var randNum = Math.floor((Math.random() * wineChoice.length));
        //generates a random number from 0 to the length of the list - 1;
        console.log(randNum);
        //
        var randomWine = wineChoice[randNum];
        console.log(randomWine);
        var wineUrl = "https://api.spoonacular.com/food/wine/recommendation?wine=" + randomWine + "&number=3" + "&apiKey=" + randomApi;
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
            var num = Math.floor((Math.random() * 3));

            modalItem.textContent = " " + data.recommendedWines[num].title;
            modalIngredients.textContent = " " + data.recommendedWines[num].description;
            modalCalories.textContent = " " + data.recommendedWines[num].price;
            modalItemImage.setAttribute("src", data.recommendedWines[num].imageUrl);

            });
    }


//EVENT LISTENERS -------------------------------------------------------------------------------------------------------------------------------

foodList.addEventListener("click", function (event) {
    var element = event.target;
    console.log(element.textContent)
    modalYellow.textContent  = "Ingredients: ";
    modalGreen.textContent = "Calories: ";
    if (guestPulls == 0) {
        document.getElementById("loginName").textContent = "Your free trial has ended, thanks for using Perfect Pairings!";
        return;
    }
    if (element.matches("img")) {
        console.log(element.alt);
        drinkMatch(element.alt);
        modalMain.classList.add("is-active");
        renderGifs(element.alt);
    }
    if (element.classList.contains("foodCat")) {
        drinkMatch(element.textContent)
        modalMain.classList.add("is-active");
        renderGifs(element.textContent);
    }
    //if you have signed in as a guest, we subtract one from total pulls everytime you get a food pairing
    if (localStorage.getItem("Username") === "Guest") {
        console.log("You are logged in as guest")
        guestPulls--;
        console.log(guestPulls)
    //then update the local storage
        localStorage.setItem("Api calls", guestPulls)
    }
    
})


drinkList.addEventListener("click", function (event) {
    var element = event.target;
    modalYellow.textContent  = "ABV: ";
    modalGreen.textContent = "Calories: ";
    if (guestPulls == 0) {
        document.getElementById("loginName").textContent = "Your free trial has ended, thanks for using Perfect Pairings!";
        return;
    }
    if (element.matches("img")) {
        console.log(element.alt);
        currentDrink = element.alt;
        foodMatch(element.alt);
        modalMain.classList.add("is-active");
        renderGifs(element.alt);
        if (element.alt == "Wine and Dine") {
            modalYellow.textContent  = "Description: "
            modalGreen.textContent = "Price: "
            wineRec();
        } 
    }
    if (element.classList.contains("foodCat")) {
        console.log(element.textContent)
        currentDrink = element.textContent;
        foodMatch(element.textContent)
        modalMain.classList.add("is-active");
        renderGifs(element.textContent);
        if (element.textContent == "Wine") {
            console.log("YUP")
            modalYellow.textContent  = "Description: "
            modalGreen.textContent = "Price: "
            wineRec();
        }
    }
    if (localStorage.getItem("Username") === "Guest") {
        console.log("You are logged in as guest")
        guestPulls--;
        console.log(guestPulls)
        localStorage.setItem("Api calls", guestPulls)
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
    
    if (loginUser.value.trim() === "Admin" && loginPassword.value.trim() === "Apostol99") {
        document.getElementById('id01').style.display='none';
        localStorage.setItem("Username", "Admin");
        localStorage.setItem("Api calls", 1000);
        document.getElementById("loginName").textContent = "You are logged in as Admin";

    } else if (loginUser.value.trim() === "Guest" && loginPassword.value.trim() === "123456") {
        document.getElementById('id01').style.display='none';
        localStorage.setItem("Username", "Guest");
        if (localStorage.getItem("Api calls") == null) {
            //checks if its null, which it will be if its your first time logging in
            localStorage.setItem("Api calls", 3);
            //then gives the guest their 3 free api fetches
        } else {
            //otherwise it means you have logged in before so we just set your pulls to whatever you were at before
            localStorage.setItem("Api calls", guestPulls);
        }
        
        guestPulls = localStorage.getItem("Api calls");
        //again updating our tracking variable
        document.getElementById("loginName").textContent = "You are logged in as Guest";
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
    if (currentFood === "Tacos") {
        //pull multiple drink options later to randomize
        modalItemDrink.textContent = beerOptions[1].text;
        modalCaloriesDrink.textContent = beerOptions[1].Calories;
        modalAbvDrink.textContent = beerOptions[1].ABV;
        document.getElementById("myImage").src = "assets/images/corona beer.jpg";
    } else if (currentFood == "Mediterranean") {
        modalItemDrink.textContent = beerOptions[4].text;
        modalCaloriesDrink.textContent = beerOptions[4].Calories;
        modalAbvDrink.textContent = beerOptions[4].ABV;
        document.getElementById("myImage").src = "assets/images/heineken.png";
    } else if (currentFood == "Pizza") {
        modalItemDrink.textContent = popOptions[1].text;
        modalCaloriesDrink.textContent = popOptions[1].Calories;
        modalAbvDrink.textContent = popOptions[1].ABV;
        document.getElementById("myImage").src = "assets/images/Coke.jpg";
    } else if (currentFood == "Burgers") {
        modalItemDrink.textContent = cocktailOptions[0].text;
        modalCaloriesDrink.textContent = cocktailOptions[0].Calories;
        modalAbvDrink.textContent = cocktailOptions[0].ABV;
        document.getElementById("myImage").src = "assets/images/Mojito.jpg";
    } else if (currentFood == "Chinese food") {
        modalItemDrink.textContent = liquorOptions[4].text;
        modalCaloriesDrink.textContent = liquorOptions[4].Calories;
        modalAbvDrink.textContent = liquorOptions[4].ABV;
        document.getElementById("myImage").src = "assets/images/Whiskey.jpg";
    } else if (currentFood == "Dessert") {
        modalItemDrink.textContent = smoothieOptions[0].text;
        modalCaloriesDrink.textContent = smoothieOptions[0].Calories;
        modalAbvDrink.textContent = smoothieOptions[0].ABV;
        document.getElementById("myImage").src = "assets/images/Strawberry banana.jpg";
    }
})

modalHungry.addEventListener("click", function (event) {
    modalYellow.textContent  = "Ingredients: "
    modalGreen.textContent = "Calories: "
    drinkPair(currentDrink);
    console.log(currentDrink);
    console.log(currentFood);
})

document.getElementById("doneButton").addEventListener("click", function (event) {
    modalMain.classList.remove("is-active");
    modalDrinkPair.classList.remove("is-active");
})
    
init();