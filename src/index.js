document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('search').addEventListener('submit', (event) => {
        event.preventDefault();
        
        getBreweries()
        search.reset();
    })})


        
function getBreweries(){
    let searchValue = document.getElementById("searchValue").value
    let brewList = document.getElementById("Breweries")
    let chart = document.getElementById("chart")
    chart.innerHTML = ""
    brewList.innerHTML = ''
    fetch(`https://api.openbrewerydb.org/breweries/search?query=${searchValue}`)
        .then(res => res.json())
        .then(results => 
        {for(i = 0; i < results.length; i++){
            brewList.innerHTML += `
                <li>
                <p><a href=# data-id=${results[i].id}>${results[i].name}</a></p>
                </li> `
        
        }clicksToLinks()})
}

function clicksToLinks(){
    const brewerySelector = document.querySelectorAll('li a')
    brewerySelector.forEach(brewery => {
        brewery.addEventListener('click', breweryInfo)})
}

function breweryInfo(e){
    let a = e.target;
    let chart = document.getElementById("chart");
    let brewList = document.getElementById("Breweries")
    brewList.innerHTML = "";
    fetch(`https://api.openbrewerydb.org/breweries/${e.target.dataset.id}`)
    .then(res => res.json())
    .then(results => {
        chart.innerHTML += `
        <h2>${results.name}</h2>
        <p><span style ="font-weight: bolder;">Street: </span><span>${results.street}</span></p>
        <p><span style ="font-weight: bolder;">City: </span><span>${results.city}</span></p>
        <p><span style ="font-weight: bolder;">State: </span><span>${results.state}</span></p>
        <p><a href=${results.website_url}>Website</a></p>` 
    })
}