// auto update webpage menoko og ,1-23-24
// GET's THE TODO's FROM THE DATABASE
function getData(){
    axios.get("https://api.vschool.io/johnsmith2/todo")
        .then(res => listData(res.data))
        .catch(err => console.log(err))
}


// LISTS THE TODO TITLES TO THE DOM
function listData(data){
    for(let i = 0; i < data.length; i++){
        const h1 = document.createElement('h1')
        h1.textContent = data[i].title
        document.getElementById('todo-list').appendChild(h1)
    }
}

getData()


// FORM FOR THE POST REQUEST
const todoForm = document["todo-form"]

todoForm.addEventListener("submit", function(e){
    e.preventDefault()
    
    const newTodo = {
        title: todoForm.title.value
    }
    
    todoForm.title.value = ""
    
    axios.post("https://api.vschool.io/natej/todo", newTodo)
        .then(res => getData())
        .catch(err => console.log(err))
})