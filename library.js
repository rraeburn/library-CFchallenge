//arrays to hold books and shelf objects
var libraryBooks = [];
var libraryShelves = [];


function library(books, shelves){
	this.books = libraryBooks;
	this.shelves = libraryShelves;
	//method to list total shelves in library
	this.totalShelves = function(){
		alert("There are " + libraryShelves.length + " shelves in the library!");
	}
	//method to list all library books
	this.totalBooks = function(){
		var list = "";
			for(var i=0; i<libraryBooks.length; i++){
				list = list + libraryBooks[i].title + "\n";
			}
		alert("The library has the following books:\n" + list);
	}
}

function shelf(){
	//shelf row contains book objects
	this.row = [];
	libraryShelves.push(this);

	//function to list books on specified shelf
	this.bookList = function(){
		var list = "";
			for(var i=0; i<this.row.length; i++){
				list = list + this.row[i].title + "\n";
			}
	alert("This shelf contains the following books:\n" + list);
	}
}

function book(title, author){
	this.title = title;
	this.author = author;
	libraryBooks.push(this);

	//will add book to a specified shelf
	//call function with specified shelf
	this.enshelf = function(shelfName){
		shelfName.row.push(this);
	}

	//will remove book from specified shelf
	//call function with specified shelf
	this.unshelf = function(shelfName){
		var i = shelfName.row.indexOf(this);
		shelfName.row.splice(i, 1);
	}
}


//library example
var publicLibrary = new library();

//shelf examples
var shelf1 = new shelf();
var shelf2 = new shelf();

//book examples
var book1 = new book("Harry Potter", "JK Rowling");
var book2 = new book("The Hobbit", "J.R.R. Tolkien");
var book3 = new book("Into Thin Air", "John Krakauer");
var book4 = new book("Into the Wild", "John Krakauer");



