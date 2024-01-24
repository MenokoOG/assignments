// with edit option functions version, very buggy, for extra credit....

// Axios todo project, menoko og, 1-24-24 start version 2.0

// use es5 syntax with es6 callback for main function getters for browser parsing compatibilty 


// Define the base URL for the API and references to HTML elements
const baseURL = "https://api.vschool.io/lawrencejefferson/todo/";
const form = document.querySelector('form');
const submit = document.getElementById('submitBtn');
const listWrapper = document.getElementById('list-wrapper');

// Fetch todos when the page loads
getTodos();

// Function to add a new todo
function postTodo() {
    if (form.title.value) {
        // Create a new Package object with form data
        let newPackage = new Package();
        // Send a POST request to the API
        axios.post(baseURL, newPackage).then(response => renderResponse(response.data));
        // Reset the form and focus on the title input
        form.reset();
        form.title.focus();
    } else {
        // Display an alert if title is not provided
        alert("A title is required to submit this todo.");
        form.title.focus();
    }
}

// Function to get all todos
function getTodos() {
    axios.get(baseURL).then(loopandRenderTodos);
}

// Function to loop through todos and render them
function loopandRenderTodos(response) {
    response.data.forEach(todoObject => renderResponse(todoObject));
}

// Constructor function to create a Package object
function Package() {
    this.title = form.title.value;
    this.description = form.desc.value;
    this.price = form.price.value;
    this.imgUrl = form.imgUrl.value;
    this.completed = form.completed.checked;
}

// Function to render a todo item
function renderResponse(response) {
    let rendered = new RenderObject(response);
    let itemWrapper = document.createElement('div');
    itemWrapper.classList = "item-wrapper";
    itemWrapper.id = rendered.id;

    let number = document.createElement('p');
    number.classList = "number";
    number.textContent = String(listWrapper.children.length + 1) + ".";

    let deleteX = document.createElement('p');
    deleteX.classList = "deleteX";
    deleteX.textContent = "X";
    deleteX.addEventListener("click", deleteTodo);

    itemWrapper.appendChild(number);
    itemWrapper.appendChild(deleteX);

    for (key in rendered) {
        let item = document.createElement(rendered[key].elementType);

        if (rendered[key].elementType === "img") {
            item.classList = rendered[key].class;
            item.src = rendered[key].value;
        } else {
            item.classList = rendered[key].class;
            item.textContent = rendered[key].value;

            if (rendered[key].holder !== undefined) {
                item.value = rendered[key].holder;
                item.addEventListener("click", updateTodo);
            }
        }

        itemWrapper.appendChild(item);
    }

    // Add an "Edit" button
    let editBtn = document.createElement('button');
    editBtn.textContent = "Edit";
    editBtn.addEventListener("click", editTodo);
    itemWrapper.appendChild(editBtn);

    listWrapper.appendChild(itemWrapper);
}

// Constructor function to create a RenderObject
function RenderObject(obj) {
    this.title = {
        elementType: "h3",
        value: obj.title,
        class: "todo-title"
    };
    this.description = {
        elementType: "p",
        value: obj.description,
        class: "todo-desc"
    };
    this.price = {
        elementType: "p",
        value: obj.price,
        class: "todo-price"
    };
    this.imgUrl = {
        elementType: "img",
        value: obj.imgUrl,
        class: "todo-image"
    };
    this.completed = {
        elementType: "p",
        value: obj.completed ? "✓ Completed" : "X Not Complete",
        class: (obj.completed ? "green" : "red") + " complete-check",
        holder: obj.completed ? true : false,
    };
    this.id = obj._id;
}

// Event listener for the submit button
submit.addEventListener("click", postTodo);

// Function to delete a todo
function deleteTodo(e) {
    const id = e.target.parentNode.id;
    e.target.parentNode.remove();
    axios.delete(baseURL + id).then(changeItemIndex, () => alert("There was a problem deleting your todo :("));
}

// Function to update a todo
function updateTodo(e) {
    let id = e.target.parentNode.id;
    let update = {
        completed: !e.target.value
    };
    axios.put(baseURL + id, update).then(response => {
        if (response.data.completed) {
            e.target.classList = "green complete-check";
            e.target.value = true;
            e.target.textContent = "✓ Completed";
        } else {
            e.target.classList = "red complete-check";
            e.target.value = false;
            e.target.textContent = "X Not Complete";
        }
        (response.data.completed ? "green" : "red") + " complete-check";
    });
}

// Function to handle editing a todo
function editTodo(e) {
    let id = e.target.parentNode.id;
    let todoWrapper = document.getElementById(id);

    // Change the info to input boxes
    todoWrapper.querySelector('.todo-title').innerHTML = '<input type="text" value="' + todoWrapper.querySelector('.todo-title').textContent + '">';
    todoWrapper.querySelector('.todo-desc').innerHTML = '<textarea>' + todoWrapper.querySelector('.todo-desc').textContent + '</textarea>';
    todoWrapper.querySelector('.todo-price').innerHTML = '<input type="text" value="' + todoWrapper.querySelector('.todo-price').textContent + '">';
    // Add other input fields as needed

    // Change the "Edit" button to a "Save" button
    let saveBtn = document.createElement('button');
    saveBtn.textContent = "Save";
    saveBtn.addEventListener("click", saveTodo);
    todoWrapper.appendChild(saveBtn);
}

// Function to update the index of todo items after deletion, start one otherwise function will not work properly.
function changeItemIndex() {
    for (let i = 0; i < listWrapper.children.length + 1; i++) {
        if (listWrapper.childNodes[i].childNodes[0]) {
            listWrapper.childNodes[i].childNodes[0].textContent = i + ".";
        }
    }
}
