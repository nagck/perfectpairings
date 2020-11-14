function renderGifs(){ 

    var searchTerm = document.querySelector("#search").value
    
    //--fethc API key
    fetch('https://api.giphy.com/v1/gifs/search?q='+"Cat"+"&api_key=fhyjxSw2icjRND3sWkVDSIduWRwkEPsI&limit=1")
    .then(function(response){
    //--response and return  
        return response.json()
    })
    //-- generate the image for the gif
    .then(function(response){
        var gifContainer = document.querySelector("gifContainer")
        gifContainer.innerHTML="cat"
        var gif = document.createElement('img')
        gif.setAttribute('src', response.data[0].images.fixed_height.url) 
        gifContainer.appendChild(gif) 
    })
    }