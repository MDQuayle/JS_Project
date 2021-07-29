# JS_Project
Find Breweries App

App takes a search request, inputs the request into a fetch, and returns a list of breweries that fit the search. 
These breweries are populated as links that are clickable and when clicked return further details of the brewery.
With the further details is a comment section that allows multiple comments to me added to the page

#HTML
The HTML is a form for searching and dividers to store JavaScript results. 

ID = 'Breweries' stores the brewery search results

ID = 'chart' stores the further information of each brewery

ID = 'newCommentSection' stores a comment form and a list of the comments once submitted 

#CSS
The CSS centers the app for readability

#JavaScript
Starts with DOMContentLoaded and a prevent default to prevent refreshing when search is submitted. 

findBreweries() This executes intial fetch and populates a list of the results

clicksToLinks() Makes the links clickable and executes the breweryInfo function

breweryInfo() Second fetch call this time with a specific brewery in mind to populate a list of brewery details and a comment section
