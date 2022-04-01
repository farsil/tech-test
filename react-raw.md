# Sky React Unattended Test

This will test your client-side JavaScript and front end skills.

Please initialise your project using facebook’s [Create React App](https://github.com/facebook/create-react-app)

It’s a React app. If you’ve not used React before, don’t be too alarmed: we’ve used it just enough to present a realistic challenge, and we will take your prior experience into account when assessing your submission. 
 
If you run into problems with this step, please get in touch with your Sky contact for assistance. We won’t penalise you, we’re far more interested in what you can do when it’s working! 

When working through this test, bear in mind: 

 1. We **don’t** expect you to finish everything. Don’t spend more than 2 hours on it in total. 
 2. While we'd like to see you demonstrate your front end capabilities, we don't expect a shiny, polished app.

# The Challenge

We run a search API for our help content. The API endpoint is here: 
https://help-search-api-prod.herokuapp.com/search 
You can search for Help articles by doing a GET request with the query parameter set to the search term. For example: 

https://help-search-api-prod.herokuapp.com/search?query=broadband 

You should make a query to this endpoint before going any further to check that you understand the query and data format. Again, if you run into problems at this step, please get in touch so we can help. 

Your challenge is this: 
* Add a search box and search button to the app we’ve given you. It should be visible when you visit http://localhost:3000/. 
* When a user puts a query into the search box and either hits Enter or clicks the Search button, the app should query our search API for the set of results. 
* The results should be rendered as a list on the same page, without a page refresh. The styling is up to you. 
* Paginate the results so that only 10 results per page are shown. 
* When the user hits the browser back button, they should be taken back to their previous query.
* You may utilise our open source style library, [Toolkit](https://github.com/sky-uk/toolkit), to style the app as you see fit.

When you’ve got as far as you can, publish your code to https://github.com with any additional instructions we might need to run your submission added to the README.md file. Don’t worry if you’ve not done this before: it’s free, and the instructions are excellent. 

There is no need to write tests in this part of the assessment.
