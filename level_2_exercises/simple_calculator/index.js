// Lesson for V School, Lawrence "Menoko OG" Jefferson II, Date: 1-12-24
const addForm = document["add-form"]
const subForm = document["sub-form"]
const multiForm = document["multi-form"]

addForm.addEventListener("submit",(event) =>{
    event.preventDefault()

    const firstNumInput = parseInt(addForm["first-add"].value)
    const secondNumInput = parseInt(addForm["second-add"].value)
    addForm["first-add"].value = ""
    addForm["second-add"].value = ""

    const addResult = firstNumInput + secondNumInput
    const displayAdd = document.getElementById("add-total")
    displayAdd.textContent = `The total of ${firstNumInput} and ${secondNumInput} is ${addResult}`
     
    
} )

subForm.addEventListener("submit",(event) =>{
    event.preventDefault()

    const firstNumInput = parseInt(subForm["first-sub"].value)
    const secondNumInput = parseInt(subForm["second-sub"].value)
    subForm["first-sub"].value = ""
    subForm["second-sub"].value = ""

    const subResult = firstNumInput - secondNumInput
    const displayAdd = document.getElementById("sub-total")
    displayAdd.textContent = `The result of ${firstNumInput} minus ${secondNumInput} is ${subResult}`
     
    
} )

multiForm.addEventListener("submit",(event) =>{
    event.preventDefault()

    const firstNumInput = parseInt(multiForm["first-multi"].value)
    const secondNumInput = parseInt(multiForm["second-multi"].value)
    multiForm["first-multi"].value = ""
    multiForm["second-multi"].value = ""

    const multiResult = firstNumInput * secondNumInput
    const displayAdd = document.getElementById("multi-total")
    displayAdd.textContent = `The product of ${firstNumInput} times ${secondNumInput} is ${multiResult}`
     
    
} )