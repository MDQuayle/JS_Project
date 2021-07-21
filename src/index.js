//DOMContentLoaded will make sure the HTML finishes downloading first before any of my JavaScript is run


document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('search').addEventListener('submit', (event) => {
        event.preventDefault();
        search.reset();
        document.getElementById('submit').addEventListener('click', getBreweries)})})

//preventDefault() is to prevent the page from automatically reloading when the submit button is hit
//search.reset() emptys the text field after submitting
        
function getBreweries(){
    let searchValue = document.getElementById("searchValue").value
    let brewList = document.getElementById("Breweries")
    brewList.innerHTML = ''
    fetch(`https://api.openbrewerydb.org/breweries/search?query=${searchValue}`)
    .then(res => res.json())
    .then(results => 
        {for(i = 0; i < results.length; i++){
            brewList.innerHTML += `
                <li>
                <p><span style ="font-weight: bolder;">Name: </span><span>${results[i].name}</span></p>
                <p><span style ="font-weight: bolder;">Street: </span><span>${results[i].street}</span></p>
                <p><span style ="font-weight: bolder;">City: </span><span>${results[i].city}</span></p>
                <p><span style ="font-weight: bolder;">State: </span><span>${results[i].state}</span></p>
                <p style ="font-weight: bolder;"><a href=${results[i].website_url}>Website</a></p>
                </li> `
        
        }})
}

//document.getElementById("myDiv").style.border = "thick solid #0000FF";
//${dataset-id} to call the data-id in the a tag