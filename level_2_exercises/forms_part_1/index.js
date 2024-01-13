const form = document["my-form"]

//submit event
form.addEventListener("submit", function(event){
    event.preventDefault()
    // alert("It is working")

    const firstNameInput = form.firstName.value
    const lastNameInput = form.lastName.value
    form.firstName.value = ""
    form.lastName.value = ""

    // console.log(`${firstNameInput} ${lastNameInput}`)

    const h1 = document.createElement("h1")
    h1.textContent = `${firstNameInput} ${lastNameInput}`
    document.getElementsByTagName("body")[0].append(h1)


} )