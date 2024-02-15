// Mid-Level_Level 1_code challange, Lawrence Jefferson II, Menoko OG, 1-8-24
// to run script enter node midquiz.js into terminal inside working directory.
// Constructor function for Book
class Book {
    constructor(title, author, year) {
        this.title = title;
        this.author = author;
        this.year = year;
    }
}

// Method for getting book details using dot notation and template string
Book.prototype.getDetails = function () {
    return `${this.title} by ${this.author}, published in ${this.year}`
}

// Two use case objects
const book1 = new Book("The Great Gatsby", "F. Scott Fitzgerald", 1925)
console.log(book1.getDetails())

const book2 = new Book("To Kill a Mockingbird", "Harper Lee", 1960)
console.log(book2.getDetails())
