// Shopping list project for V school, Lawrence Menoko OG Jeffeson II, 1-6-24
// BUG NOTES: need to work on when hit enter and being able to persist through page loads.
document.addEventListener("DOMContentLoaded", () => {
    const submitButton = document.getElementById('submit-el');
    const list = document.getElementById('list');
    const textBox = document.getElementById('title');
    const form = document.getElementById('add-todo');

    submitButton.addEventListener("click", createItem);

    form.addEventListener("submit", (event) => {
        event.preventDefault();
        createItem();
    });

    function createItem() {
        const listItem = document.createElement('li');
        const itemName = document.createElement('div');
        const edit = document.createElement('button');
        const remove = document.createElement('button');

        edit.textContent = "edit";
        remove.textContent = "X";
        itemName.innerHTML = textBox.value;

        edit.addEventListener("click", editItem);
        remove.addEventListener("click", removeItem);

        listItem.appendChild(itemName);
        listItem.appendChild(edit);
        listItem.appendChild(remove);
        list.appendChild(listItem);

        updateLocalStorage();
        textBox.value = ""; // Clear input after adding item
    }

    function editItem(event) {
        const newText = prompt("Please enter new Item name:", event.target.parentNode.childNodes[0].innerHTML) || event.target.parentNode.childNodes[0].innerHTML;
        event.target.parentNode.childNodes[0].innerHTML = newText;
        updateLocalStorage();
    }

    function removeItem(event) {
        event.target.parentNode.remove();
        updateLocalStorage();
    }

    function updateLocalStorage() {
        const itemList = [];
        list.childNodes.forEach(item => {
            itemList.push(item.childNodes[0].innerHTML);
        });

        localStorage.setItem("shoppingList", JSON.stringify(itemList));
    }

    // Load items from local storage on page load
    loadItems();
});

function loadItems() {
    const itemList = JSON.parse(localStorage.getItem("shoppingList")) || [];
    const list = document.getElementById('list');

    // Clear existing list items
    // list.innerHTML = "";

    itemList.forEach(item => {
        const listItem = document.createElement("li");
        const itemName = document.createElement("div");
        const edit = document.createElement("button");
        const remove = document.createElement("button");

        itemName.innerHTML = item;
        edit.textContent = "edit";
        remove.textContent = "X";

        edit.addEventListener("click", editItem);
        remove.addEventListener("click", removeItem);

        listItem.appendChild(itemName);
        listItem.appendChild(edit);
        listItem.appendChild(remove);
        list.appendChild(listItem);
    });
}

// Load items from local storage after DOMContentLoaded event
document.addEventListener("DOMContentLoaded", loadItems);



