
// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

let button = document.querySelector("#submitSearch");
let pFeedback = document.querySelector("#paragraph");
const img = document.querySelector("#giphyImage");
let searchInput = document.querySelector("#searchWord");


const api_key = "6L2YcIKyFVkSMkUPOzrbzL1CeSsZK9bW";



function gifFetch(){
    fetch(`https://api.giphy.com/v1/gifs/translate?api_key=${api_key}&s=${searchInput.value}`)
    .then((response)=> {
        const result = response.json();
        console.log(result);
        return result;
    })

    .then((objectReturned)=> {
        console.log(objectReturned);
        img.src = objectReturned.data.images.original.url;
        searchInput.value = "";
    })

    .catch((err)=>{
        console.log(err.message);
        pFeedback.textContent = err.message;
    })
}

button.addEventListener("click", gifFetch);