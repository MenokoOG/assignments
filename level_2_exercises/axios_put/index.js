// axios put, menoko og, 1-23-24
// PUT request with axios


const updateDiscription = {
    title: "This is now changed from a variable from program",
    description: "Here i used a put to change from my js file, cool!!!"
}

axios.put("https://api.vschool.io/lawrencejefferson/todo/65b0192778fe452c114b0652", updateDiscription)
    .then(response => console.log(response.data))
    .catch(error => console.log(error))

// this is basically what put is doing in the background
// const menoko = {
//     name: "lawence",
//     age: 5000
// }

// const newMenoko = {
//     name: "Menoko OG",
//     age: 5000
// }

// const result = Object.assign(menoko, newMenoko)
// console.log(result)




// GET 
// axios.get("https://api.vschool.io/lawrencejefferson/todo")
//     .then(res => console.log(res))
//     .catch(err => console.log(err))