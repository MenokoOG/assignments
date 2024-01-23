// axios delete menoko og, 1-23-24
// DELETE request with axios

// axios.delete("https://api.vschool.io/lawrencejefferson/todo/65b016b678fe452c114b064f")
//     .then(response => console.log(response))
//     .catch(error => console.log(error))






//Note: it is good to use postman to get the ids and then import them in here to speed up workflow.



// GET one
axios.get("https://api.vschool.io/lawrencejefferson/todo")
    .then(res => console.log(res))
    .catch(err => console.log(err))