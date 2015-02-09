# Avi's Library For All Coding Jr Dev Challenge

Thanks for reviewing! 
[Here's the live link](https://lfa-challenge-app.herokuapp.com) and [here's the link to my github repo](https://github.com/avifoxi/lfa_challenge).

### Stack

Front End: 
- Angular w/ ui-router
- Underscore
- Bootstrap

Server: 
- Sinatra 

Deployment:
- Heroku

### Structure  

Louis' challenge description emphasized front end functionality.
I started with a Sinatra app on the backend to serve the static files -- and wanted to build something using Angular on the front because that seems like a necessary framework for the Jr Dev position. 

The backend is very simple - there is no database, though the models emulate db models. The provided lfa catalog is served similarly to a nosql query returned with an ajax call, as are category_searchables. The student models that contain grade info emulate relational models. 

The frontend is my first attempt at an Angular app. 
As there is no database on the back, all changes to models are not persisted. But functionality could be extended pretty easily to persist the data. 

### Process

I began by building out a Search UI for any user to filter the book list. 
The server provides category_searchables -- each category is a filter parameter specified in the challenge description. And the searchables are a list of valid options collected from the data on the backend. Ala, 'authors' points to a list of all valid authors. This could be done as easily on the front - but I chose to do this before moving to the client. 

The search ui only filters inclusively.
So you choose an author - and you see all books by that author.
And if you additionally select a subject, you will also see all books with that subject - along with books by that author... even books with subjects not specified in the search.
Obviously -- the user option for exclusive filtering would be a good next step.
As would user input of text to filter the search. 

Once basic filtering was accomplished I thought about how young learners might get excited about books, and how they might access shorter + more navigable lists of books. So I made some student models on the back end, divided students by grade levels (as divided up in the book tags), and gave students ability to select their favorite books, and build a favorites list. I thought that this would be a great way to get learners excited by certain titles, to see which books their friends favorite. This would also let LFA gauge which titles are most successful in different environments. 

In a production app -- students would have private accounts and log in to access their favorites list, and navigate to their friends' favorites. Right now - there is no security! So we can navigate to students, select a student view, and add to their faves. 

Also - teachers would have some admin functionality and the ability to assign challenges or homework about readings through the app. Next iteration.

### Reflections

A good portion of my time on this challenge was spent studying, learning Angular's DSL (what's a directive? what's a service? what is dependency injection?) and wrapping my head around Angular's methodology (why is my model so thin when in rails they're so fat? why is my controller so loaded with functions? why is everything so modular?).

After spending a few days immersed in Angular -- I'm pretty excited by the power of the framework, and by the modular approach. 

As a critique - I find Angular's error stack trace to be pretty opaque. 
One thing I really like about ruby and rails is how detailed the stack traces are - and how they point to the line that breaks the app. 
Angular has great documentation -- but the console often doesn't point directly to the line that breaks. And that is very frustrating!

### What would I test if I were testing?

One major benefit of Angular's modularity is how testable every module is. 

Testing: 
- does the filter filter ? 
- do students <=> books associations behave reliably?
- does the router route ? 
- once data is persisted --- does data persist? do front and back sync well ?

