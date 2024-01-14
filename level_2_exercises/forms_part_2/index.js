// form 2 lesson menoko og, 1-14-24
const form =document.myForm

form.addEventListener("submit", (event) =>{
    event.preventDefault() 

    // raadio inputs
    console.log(form.gender.value)


    // checkbos inputs
    const checkedInputs = []

    for (let i = 0; i < form.entertainment.length; i++){
        if(form.entertainment[i].checked){
            checkedInputs.push(form.entertainment[i].value)
            
        }
        
    }
    console.log(checkedInputs)

    // Select option inputs
    console.log(form.placeLive.value)

})
