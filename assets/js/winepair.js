var fetchButton = document.getElementById('fetch-button');
var apiKey = "9106359dad954cc8820fb65a7927d657";
var foodChoice = "Steak";
var wineUrl = "https://api.spoonacular.com/food/wine/pairing?food=" + foodChoice + "&apiKey=" + apiKey;

// QueryURL to get Wine Pairing 
console.log("Food Choice is: ", foodChoice);  
  
$(document).ready(function() {
console.log("ready!");
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
    fetchButton.addEventListener('click', drinkMatch);
});