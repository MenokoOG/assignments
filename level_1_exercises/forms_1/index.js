const form = document["my-form"] 
// use brackets for name becuase of the - can not use dot notation.

//submit event
form.addEventListener("submit", function(event){
    event.preventDefault()
    
    const firstName = form.firstName.value
    form.firstName.value = ""

    const lastName = form.lastName.value
    form.lastName.value = ""

    // console.log(firstName + " " + lastName)
    // 1 . <h1></h1>
    const h1 = document.createElement("h1")
    // 2. <h1>Joe Smoe</h1> or whatever else you want to put in
    h1.textContent = firstName + " " + lastName
    // 3. Append
    document.getElementsByTagName("body")[0].append(h1)
})

document.words.addEventListener("submit", function(e){
    e.preventDefault()
  
    var noun = document.words.noun.value
    var adverb = document.words.adverb.value
    var verb = document.words.verb.value
  
    alert("The " + noun + " did " + adverb + " " + verb + " in it's home")
  })