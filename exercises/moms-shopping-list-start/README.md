clone this repo

In terminal, CD into the project folder.

In the directory where it's installed, do an `ls -a`

Look for a `.git`

If you find it, do an `rm -rf .git`

Use it as a springboard for your own Mom's shopping list app. The todos that are already in the HTML are there only to give an example of what the ones created in Part 1 should look like. Delete them from the HTML and make sure your code still works before moving on to Part 2.   

### **Parts**

Each part is it's own task. It would be beneficial to have someone look at your code before moving from one part to the next.

### **Part 1**

- A user will be able to add list items to the  `ul` using the pre-built form
- New list items should have the same format as the `li`'s 

### **Part 2**

- A user will be able to delete items using an items delete button

### **Extra Credit**

- A user will be able to click the "edit" button and see an input box appear
- When the user clicks the "edit" button, a "save" button replace the "edit" button
- The input box will automatically have the value of the list item
- The user can edit and "save" the input box's value
- On save, the input box will disappear, and the new value will appear

### **Passing criteria: Demo to an instructor**

An instructor or TA will sit with you for a demonstration of this project during your mid-level assessment. They will be assessing your proficiency in the following areas:

- Difference between web app and web site
- Build very basic web apps (site is functional and based on user interaction)
- Understand JSON

Passing off this project completes the Web Applications, Level 1 branch of the skills tree.

### **Tips for when you are stumped.**

Take a minute to practice the problem solving process without these notes.

Come to your Level 1 assessment with this assignment ready to show to the instructor.

Remember the note in the above requirements to delete the items from the HTML.

To break down creating a new list item:

- Write an event listener that listens for a "submit" on the form. Prevent the default refresh that happens on submits.
- Be able to log the string the user types into the input box to the console after the submit. Keep the console open and look often for JS errors there.
- Use the three steps of creating a new element.
    1. create the element
    2. edit properties like textContent or the style object
    3. append the element to the DOM

Most importantly, take this assignment to reach out to find a friend to keep pace with in V School. You can ask for help on this assignment or offer help on the other DOM assignments.
