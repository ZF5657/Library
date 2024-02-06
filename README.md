This is the Library project from the Odin Project. The goal of this project is to create a library of books that dislays an array of books with the following criteria:


* Must have a “NEW BOOK” button that brings up a form allowing users to input the details for the new book: author, title, number of pages, whether it’s been read and anything else you might want. How you decide to display this form is up to you.

* Must have a button on each book’s display to remove the book from the library.

* Must have a button on each book’s display to change its read status.



***My Project:***


* **Design**

This project was pretty straight-forward. I added minimal styling just so it wasn't a plain black and white color scheme. I decided to imbed the form into the page so there wasn't any kind of interruption. In my opinion, it makes the page look a little cleaner than a form pop-up. I also modeled my constructor with the contemporary method of creating a class of Book followed by a defined constructor. I initially learned making classes/prototypes this way and I prefer this because it makes everything more defined and readable.

* **Challenges**

* Of the challenges I encountered, the biggest was modifying the array through the DOM elements. I had to get used to and figure out where to call what within the *addBookToLibrary* function and the loop within it. I initially was having trouble tracking the array through the console because I was not going about it in the correct way. Once I got the array to add everything correctly, using the console was easy and I simply created DOM elements to display each array object.

* Another challenge with the array was deleting items. I have not spliced any array elements in a while, so I had to refresh myself with how to remove specific objects in an array. Once I figured out how to write it, I added it into the loop and it worked perfectly.

* The last main challenge was simply DOM manipulation and styling. This was more time-consuming than anything but still takes a lot to create, remove, and style all the elements.