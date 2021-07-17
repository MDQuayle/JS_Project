//DOMContentLoaded will make sure the HTML finishes downloading first before any of my JavaScript is run


document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM fully loaded and parsed')})

const search = document.querySelector('form')
search.addEventListener('submit', (event) => {
    event.preventDefault();
    search.reset()
    document.getElementById('submit').addEventListener('click', getBreweries)
//preventDefault() is to prevent the page from automatically reloading when the submit button is hit
//search.reset() emptys the text field after submitting
        
});


function getBreweries(){
    let searchValue = document.getElementById("searchValue").value
    let drinkList = document.getElementById("Breweries")
    // console.log(searchValue)
    fetch("https://api.openbrewerydb.org/breweries")
    .then(res => res.json())
    .then(results => 
        {for(i = 0; i < results.drinks.length; i++){
            drinkList.innerHTML += `
                <li>
                    <a href=# data-id>${results.drinks[i].strDrink}</a>
                </li> `
        
    }})}
//${dataset-id} to call the data-id in the a tag