// axios post, menoko og, 1-23-24
// Post request
// Request Body

// const todoForm = document.todoform

// todoForm.addEventListener("submit", function (event) {
//     event.preventDefault()

//     const newTodo = {
//         title: todoForm.title.value,
//         description: todoForm.description.value,
//         imgUrl: todoForm.imgUrl.value
//     }
//     axios.post("https://api.vschool.io/lawrencejefferson/todo", newTodo)
//         .then(response => console.log(response.data))
//         .catch(error => console.log(error))
// })












// GET all todos
axios.get("https://api.vschool.io/lawrencejefferson/todo")
    .then(res => console.log(res))
    .catch(err => console.log(err))