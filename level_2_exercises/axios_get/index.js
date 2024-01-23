// axios get, menoko og, 1-22-24

// Get requests with axios
// url: https://api.vschool.io/lawrencejefferson/todo

// Get All
axios.get("https://api.vschool.io/lawrencejefferson/todo")
    .then(response =>{
        for(let i =0; i < response.data.length; i++){
            const h1 = document.createElement("h1")
            h1.textContent = response.data[i].title
            document.body.appendChild(h1)
        }
    })
    .catch(error => console.log(error))


// Get One
axios.get("https://api.vschool.io/lawrencejefferson/todo/65aea9f978fe452c114b0604")
    .then(response => console.log(response.data))
    .catch(error => console.log(error))