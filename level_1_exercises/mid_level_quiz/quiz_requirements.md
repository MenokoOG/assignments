Create a constructor function called Book that takes in parameters for title, author, and year. The constructor function should have a method called getDetails that returns a string with the book's title, author, and year.  Instantiate two new Books using the below code to test your solution.  

const book1 = new Book("The Great Gatsby", "F. Scott Fitzgerald", 1925);
console.log(book1.getDetails()); // Expected output: Title: The Great Gatsby, Author: F. Scott Fitzgerald, Year: 1925

const book2 = new Book("To Kill a Mockingbird", "Harper Lee", 1960);
console.log(book2.getDetails()); // Expected output: Title: To Kill a Mockingbird, Author: Harper Lee, Year: 1960