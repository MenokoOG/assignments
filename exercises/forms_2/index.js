// form lesson for v school 1-5-24
const form = document.myForm

form.addEventListener("submit", (event) => {
    event.preventDefault()


//     //radio inputs
//     // console.log(form.gender.value)

//     //checkbox inputs
//     // console.log(form.entertainment)

//     const checkedInputs = []

//     for(let i = 0; i < form.entertainment.length; i++){
//         if(form.entertainment[i].checked){
//             checkedInputs.push(form.entertainment[i].value)
//         }
    
//     }

//     console.log(checkedInputs)

    //select option inputs

    console.log(form.city.value)
})