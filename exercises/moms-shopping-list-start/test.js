// Wait for the DOM content to be fully loaded before executing the script
document.addEventListener("DOMContentLoaded", function () {
    // DOM elements
    const addItemForm = document.forms.addItem; // Form for adding items
    const titleInput = document.getElementById("title"); // Input field for item name
    const submitButton = document.getElementById("submit-el"); // Submit button
    const listContainer = document.getElementById("list"); // Container for the list of items
  
    // Event listener for the submit button and form submission
    submitButton.addEventListener("click", createItem);
    addItemForm.addEventListener("submit", function (event) {
      event.preventDefault(); // Prevent the default form submission behavior
      createItem();
    });
  
    // Function to create a new item
    function createItem() {
      // Get the value from the input and trim any leading or trailing whitespaces
      const newItem = titleInput.value.trim();
  
      // Check if the input is not empty
      if (newItem !== "") {
        // Create HTML elements for the new item
        const listItem = document.createElement("li");
        const itemName = document.createElement("div");
        const edit = document.createElement("button");
        const remove = document.createElement("button");
  
        // Set text content for buttons
        edit.textContent = "edit";
        remove.textContent = "X";
  
        // Set the innerHTML of the item name div with the new item value
        itemName.innerHTML = newItem;
  
        // Add event listeners for edit and remove buttons
        edit.addEventListener("click", editItem);
        remove.addEventListener("click", removeItem);
  
        // Append elements to the list container
        listItem.appendChild(itemName);
        listItem.appendChild(edit);
        listItem.appendChild(remove);
        listContainer.appendChild(listItem);
  
        // Clear the input field
        titleInput.value = "";
      }
    }
  
    // Function to edit an item
    function editItem(event) {
      // Prompt the user for a new item name, using the current name as default
      const newText =
        prompt(
          "Please enter new Item name:",
          event.target.parentNode.childNodes[0].textContent
        ) || event.target.parentNode.childNodes[0].innerHTML;
  
      // Update the text content of the item name with the new text
      event.target.parentNode.childNodes[0].textContent = newText;
    }
  
    // Function to remove an item
    function removeItem(event) {
      // Remove the parent node (the entire list item) from the list container
      event.target.parentNode.remove();
    }
  });
  