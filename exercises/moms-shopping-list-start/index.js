// Shopping list project for V school, Lawrence Menoko OG Jeffeson II, 1-6-24
// turned into npm project to be able to access local storage properly and make app function as intended 1-6-24
// BUG NOTES: line 79 or 80 depending  editItem for some reason returns not defined in console
document.addEventListener("DOMContentLoaded", () => {
      let submitButton = document.getElementById('submit-el')
      let list = document.getElementById('list')
      let textBox = document.getElementById('title')
      let form = document.getElementById('add-todo')

    submitButton.addEventListener("click", createItem)

    form.addEventListener("submit", (event) => {
        event.preventDefault()
        createItem()
    })

    function createItem() {
        const listItem = document.createElement('li')
        const itemName = document.createElement('div')
        const edit = document.createElement('button')
        const remove = document.createElement('button')

        edit.textContent = "edit"
        remove.textContent = "X"
        itemName.innerHTML = textBox.value

        edit.addEventListener("click", editItem)
        remove.addEventListener("click", removeItem)

        listItem.appendChild(itemName)
        listItem.appendChild(edit)
        listItem.appendChild(remove)
        list.appendChild(listItem)

        updateLocalStorage()
        textBox.value = "" 
    }

    function editItem(event) {
          let newText = prompt("Please enter new Item name:", event.target.parentNode.childNodes[0].innerHTML) || event.target.parentNode.childNodes[0].innerHTML;
        event.target.parentNode.childNodes[0].innerHTML = newText
        updateLocalStorage()
    }

    function removeItem(event) {
        event.target.parentNode.remove()
        updateLocalStorage()
    }

    function updateLocalStorage() {
          let itemList = [];
        list.childNodes.forEach(item => {
            itemList.push(item.childNodes[0].innerHTML)
        });

        localStorage.setItem("shoppingList", JSON.stringify(itemList))
    }

   
    loadItems()
});

function loadItems() {
      let itemList = JSON.parse(localStorage.getItem("shoppingList")) || []
      let list = document.getElementById('list')

    // Clear existing list items
    list.innerHTML = ""

    itemList.forEach(item => {
        const listItem = document.createElement("li")
        const itemName = document.createElement("div")
        const edit = document.createElement("button")
        const remove = document.createElement("button")

        itemName.innerHTML = item
        edit.textContent = "edit"
        remove.textContent = "X"

        edit.addEventListener("click", editItem);
        remove.addEventListener("click", removeItem)

        listItem.appendChild(itemName)
        listItem.appendChild(edit)
        listItem.appendChild(remove)
        list.appendChild(listItem)
    });
}

// Load items from local storage after DOMContentLoaded event
document.addEventListener("DOMContentLoaded", loadItems)
