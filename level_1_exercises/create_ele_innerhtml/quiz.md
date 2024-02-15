## Tasks:

1. Search Google to learn a little more about the difference between the `.append()` method and the `.appendChild()` method
append and appendChild are two popular methods used to add elements into the Document Object Model(DOM). They are often used interchangeably without much troubles, but if they are the same, then why not scrape one....Well they are only similar, but different. Here's how:

.append()
This method is used to add an element in form of a Node object or a DOMString (basically means text). Here's how that would work.
// Inserting a Node object
const parent = document.createElement('div');
const child = document.createElement('p');
parent.append(child);
// This appends the child element to the div element
// The div would then look like this <div><p></p></div>
// Inserting a DOMString
const parent = document.createElement('div');
parent.append('Appending Text');
// The div would then look like this <div>Appending Text</div>
.appendChild()
Similar to the .append method, this method is used to elements in the DOM, but in this case, only accepts a Node object.
// Inserting a Node object
const parent = document.createElement('div');
const child = document.createElement('p');
parent.appendChild(child);
// This appends the child element to the div element
// The div would then look like this <div><p></p></div>
// Inserting a DOMString
const parent = document.createElement('div');
parent.appendChild('Appending Text');
// Uncaught TypeError: Failed to execute 'appendChild' on 'Node': parameter 1 is not of type 'Node'
Differences
.append accepts Node objects and DOMStrings while .appendChild accepts only Node objects
const parent = document.createElement('div');
const child = document.createElement('p');
// Appending Node Objects
parent.append(child) // Works fine
parent.appendChild(child) // Works fine
// Appending DOMStrings
parent.append('Hello world') // Works fine
parent.appendChild('Hello world') // Throws error
.append does not have a return value while .appendChild returns the appended Node object
const parent = document.createElement('div');
const child = document.createElement('p');
const appendValue = parent.append(child);
console.log(appendValue) // undefined
const appendChildValue = parent.appendChild(child);
console.log(appendChildValue) // <p><p>
.append allows you to add multiple items while appendChild allows only a single item
const parent = document.createElement('div');
const child = document.createElement('p');
const childTwo = document.createElement('p');
parent.append(child, childTwo, 'Hello world'); // Works fine
parent.appendChild(child, childTwo, 'Hello world');
// Works fine, but adds the first element and ignores the rest
Conclusion
In cases where you can use .appendChild, you can use .append but not vice versa.

2. What do you see as pros/cons of using `.createElement()` and `append()` vs. `.innerHTML`?

-createElement is faster, as browsers are not required to parse the HTML string and then build a node tree out of it; it also doesn't have to attach event listeners as innerHTML does. Using innerHTML will cause browsers to reparse and recreate all DOM nodes inside the element whose innerHTML is modified

-innerHTML is easy to use and the code with innerHTML is maximally concise. el. innerHTML='<div title="Some title">Some text</div>'; In contrast, appendChild() does not accept HTML and needs extra code for generating the Node objects.

3. What happens if I create an element using `.createElement()` but don't use `.append()`?

-it does not become part of the DOM tree and can not be removed.

4. How might you use a for loop in conjunction with the DOM methods for create elements?