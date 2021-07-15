//DOMContentLoaded will make sure the HTML finishes downloading first before any of my JavaScript is run


document.addEventListener('DOMContentLoaded', (event) => {
    const search = document.querySelector('form')
    search.addEventListener('submit', (event) => {
        event.preventDefault();
        search.reset()
        document.getElementById('submit').addEventListener('click', getDrinks)
//preventDefault() is to prevent the page from automatically reloading when the submit button is hit
//search.reset() emptys the text field after submitting
        })
});


function getDrinks(){
    let searchValue = document.getElementById("searchValue").value
    let drinkList = document.getElementById("recipes")
    // console.log(searchValue)
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${searchValue}`)
    .then(res => res.json())
    .then(results => 
        {for(i = 0; i < results.drinks.length; i++){
            drinkList.innerHTML += `
                <li>
                    <a href=#>${results.drinks[i].strDrink}</a>
                </li> `
        
    }})}

