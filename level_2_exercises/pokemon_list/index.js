// pokemon list assignment, menoko og, 1-23-24

// Step One - Get the data
function getPokemonData() {
    axios.get('https://api.vschool.io/pokemon')
        .then(response => {
            // Assuming your data structure is response.data.objects
            const pokemonArray = response.data.objects[0].pokemon

            // Step Two - Display the data
            displayPokemonNames(pokemonArray)
        })
        .catch(error => {
            console.error('Error fetching Pokémon data:', error)
        });
}

// Step Two - Display the data
function displayPokemonNames(pokemonArray) {
    const body = document.body

    // Create a new <ul> element
    const pokemonList = document.createElement('ul')

    //  each item in pokemonArray is an object with a name property
    for (const pokemonObj of pokemonArray) {
        // Access the name property
        const pokemonName = pokemonObj.name

        // Create a new <li> element for each Pokémon's name
        const listItem = document.createElement('li')
        listItem.textContent = pokemonName

        // Append the <li> element to the <ul>
        pokemonList.appendChild(listItem)
    }

    // Append the <ul> element to the body of the document
    body.appendChild(pokemonList)
}

// Call the function to get Pokémon data
getPokemonData()





