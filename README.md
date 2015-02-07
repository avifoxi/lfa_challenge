Once again, thank you for taking the time to interview with me the other day.  As I discussed we are having a quick tech challenge to create a basic gauge of your ability to understand a problem, think for your self and create something that looks awesome.

So three quick points:
		Please feel free to use frameworks if you feel it will speed up your development time.  I do not want you coding in vanilla and spending hours if you can pull a framework that does this for you!
		Do not worry too much about formal testing - please make sure it works before you send me a link :)  I might ask you in a follow up to send through some document or email about how you would test the functions you created.  I might also ask it in the in person interview.
		I sent through a picture of a Android application as this is what we have currently made - please note I do not want you to build and Android app! A webpage is the plan here unless you really really really want to send me an apk!
		Let me know if you have any questions!

Attached to this email is a zipped folder that contains a sample catalog (catalog.txt).  The format for this catalog is as follows:

"1272":   - book ID / use this to get the thumbnail from the thumbnails directory
	{
		"doc":   - this contains catalog data only worry about what i list below
		{
			blurb - this is the book summary / it can be blank
			editor - book editor
			authors - book author (can be multiple)
			name - book name
			tags - these are metadata tags we assign to a book for searching purposes
			subjects - these are metadata tags we assign for filtering level
			languages - this is the language(s) the book is in
		},
		"bookdata": - you can ignore everything below here
	}

From this catalog we have our current display as shown in Catalog View.png. 

Currently it is simply a long list that shows the thumbnail, name and author of the book.  It is sorted from easiest to hardest based on the subjects tag. 

When you click on any book it shows a summary of the book containing:
Thumbnail
Name
Author
Blurb
and buttons to say read book or return to library
Do not worry about the reading of the book - you can make this a dead button, return to library as well, remove it completely or whatever you like.

What we want to see:

Take the current catalog display and improve it!  You must decide how to present it:
Long list, but give the user a selection of how to sort
Add filters to sort quicker
Organize the books into sections that expand to a shorter list when selecting 
Completely re-do how the books are displayed and sorted
add extra data from the catalog or remove some data from the display
really what ever you want to do
Feel free to put your own twist on it! if you feel that it is better to only show thumbnails and no text go for it.  We want to see what you do and how you think.  
Keep in mind the target audience is school children from PreK to Grade 12.
For viewing purposes, send me a link for the webpage you create using what you feel most comfortable with.  However, please bare in mind we are mainly looking for JS, HTML and CSS on this challenge - if you go in a completely different route, make sure it looks AMAZING!
If you have time and want to score some extra points give me the ability to upload thumbnails and a different catalog file.

We understand that you might have a busy schedule so please reach out to me if there is an issue, but ideally we would like to see what you have created by Monday, Feb 9th.  

Good luck and remember to have fun!!