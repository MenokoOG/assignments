const people = [
    {    
        name: "Alice Johnson",    
        age: 28,    
        height: 165,    
        gender: "Female", 
        sign: "Scorpio",   
        favoriteFood: "Sushi",    
        hobbies: ["Painting", "Hiking", "Reading"]
    },  
    {    
        name: "Bob Smith",    
        age: 35,    
        height: 180,    
        gender: "Male",    
        sign: "Gemini",   
        favoriteFood: "Pizza",    
        hobbies: ["Photography", "Cycling", "Cooking"]  
    },
    {
        name: "JJ",
        age: 32,
        height: 155,
        gender: null,
        sign: "Libra",   
        favoriteFood: "Nachos",
        hobbies: ["Live music", "Skating", "Writing"]
    },
    {
        name: "Chuck Norris",
        age: 80,
        height: 178,
        gender: "Male",
        sign: "Pisces",
        favoriteFood: "Steak",
        hobbies: ["Martial Arts", "Acting", "Writing Jokes"]
    },
    {
        name: "Wonder Woman",
        age: 3000,
        height: 183,
        gender: "Female",
        sign: "Taurus",
        favoriteFood: "Ambrosia",
        hobbies: ["Saving the world", "Flying", "Fashion"]
    },
    {
        name: "Batman",
        age: 35,
        height: 188,
        gender: "Male",
        sign: "Aquarius",
        favoriteFood: "Justice Burgers",
        hobbies: ["Crime fighting", "Gadget making", "Brooding"]
    },
    {
        name: "Ron Swanson",
        age: 50,
        height: 175,
        gender: "Male",
        sign: "Capricorn",
        favoriteFood: "Bacon",
        hobbies: ["Woodworking", "Eating meat", "Libertarianism"]
    },
    {
        name: "Leslie Knope",
        age: 42,
        height: 160,
        gender: "Female",
        sign: "Capricorn",
        favoriteFood: "Waffles",
        hobbies: ["Government", "Friendship", "Making binders"]
    },
    {
        name: "Homer Simpson",
        age: 39,
        height: 180,
        gender: "Male",
        sign: "Taurus",
        favoriteFood: "Donuts",
        hobbies: ["Eating", "Sleeping", "Duff Beer"]
    },
    {
        name: "Darth Vader",
        age: 45,
        height: 202,
        gender: "Male",
        sign: "Sagittarius",
        favoriteFood: "Dark Side Cookies",
        hobbies: ["Lightsaber duels", "Force choking", "Breathing heavily"]
    },
    {
        name: "Harry Potter",
        age: 30,
        height: 170,
        gender: "Male",
        sign: "Leo",
        favoriteFood: "Treacle Tart",
        hobbies: ["Magic", "Quidditch", "Defeating Dark Lords"]
    },
    {
        name: "Katniss Everdeen",
        age: 25,
        height: 175,
        gender: "Female",
        sign: "Aries",
        favoriteFood: "Lamb stew",
        hobbies: ["Archery", "Revolution", "Hunting"]
    },
    {
        name: "Gandalf",
        age: 2019,
        height: 185,
        gender: "Male",
        sign: "Aquarius",
        favoriteFood: "Mushrooms",
        hobbies: ["Wizardry", "Pipe smoking", "Fireworks"]
    },
    {
        name: "Sherlock Holmes",
        age: 40,
        height: 185,
        gender: "Male",
        sign: "Capricorn",
        favoriteFood: "Tea",
        hobbies: ["Solving mysteries", "Violin playing", "Smoking a pipe"]
    },
    {
        name: "Tony Stark",
        age: 45,
        height: 185,
        gender: "Male",
        sign: "Gemini",
        favoriteFood: "Shawarma",
        hobbies: ["Inventing", "Flying", "Partying"]
    },
    {
        name: "Daenerys Targaryen",
        age: 25,
        height: 170,
        gender: "Female",
        sign: "Cancer",
        favoriteFood: "Dragon eggs",
        hobbies: ["Ruling", "Dragon riding", "Breaking chains"]
    },
    {
        name: "Luke Skywalker",
        age: 53,
        height: 172,
        gender: "Male",
        sign: "Libra",
        favoriteFood: "Blue milk",
        hobbies: ["Jedi training", "Piloting", "Rescuing"]
    },
    {
        name: "Hermione Granger",
        age: 30,
        height: 165,
        gender: "Female",
        sign: "Virgo",
        favoriteFood: "Pumpkin pasties",
        hobbies: ["Reading", "Spell casting", "Time traveling"]
    },
    {
        name: "Thor",
        age: 1500,
        height: 198,
        gender: "Male",
        sign: "Capricorn",
        favoriteFood: "Pop-Tarts",
        hobbies: ["Hammer throwing", "Drinking", "Saving the universe"]
    },
    {
        name: "Captain America",
        age: 101,
        height: 188,
        gender: "Male",
        sign: "Cancer",
        favoriteFood: "Apple pie",
        hobbies: ["Shield throwing", "Leadership", "Standing up for what's right"]
    }
];

class SinglesFilter {
    constructor(people) {
        this.people = people;
    }

    filterByAgeRange(minAge, maxAge) {
        return this.people.filter(person => person.age >= minAge && person.age <= maxAge);
    }

    filterByFavoriteFood(favoriteFood) {
        return this.people.filter(person => person.favoriteFood === favoriteFood);
    }

    filterByZodiacSign(zodiacSign) {
        return this.people.filter(person => person.sign === zodiacSign);
    }

    filterByGender(gender) {
        return this.people.filter(person => person.gender === gender);
    }

    filterByHeightRange(minHeight, maxHeight) {
        return this.people.filter(person => person.height >= minHeight && person.height <= maxHeight);
    }

    filterByHobby(hobby) {
        return this.people.filter(person => person.hobbies.includes(hobby));
    }

    filterByMultipleHobbies(hobbies) {
        return this.people.filter(person => hobbies.every(hobby => person.hobbies.includes(hobby)));
    }

    filterByGenderAndHeight(gender, maxHeight) {
        return this.people.filter(person => person.gender === gender && person.height <= maxHeight);
    }

    filterByName(name) {
        return this.people.filter(person => person.name === name);
    }
}

// Example usage:
const singlesFilter = new SinglesFilter(people);

const ageRangeSingles = singlesFilter.filterByAgeRange(25, 35);
console.log("Age Range (25-35):", ageRangeSingles);

const sushiLovers = singlesFilter.filterByFavoriteFood("Sushi");
console.log("Sushi Lovers:", sushiLovers);

const scorpios = singlesFilter.filterByZodiacSign("Scorpio");
console.log("Scorpios:", scorpios);

const females = singlesFilter.filterByGender("Female");
console.log("Females:", females);

const heightRangeSingles = singlesFilter.filterByHeightRange(160, 180);
console.log("Height Range (160-180):", heightRangeSingles);

const painters = singlesFilter.filterByHobby("Painting");
console.log("Painters:", painters);

const multiHobbyPeople = singlesFilter.filterByMultipleHobbies(["Painting", "Reading"]);
console.log("People with multiple hobbies (Painting, Reading):", multiHobbyPeople);

const shortKings = singlesFilter.filterByGenderAndHeight("Male", 175);
console.log("Short Kings (Males <= 175cm):", shortKings);

const blueMilkDrinkers = singlesFilter.filterByFavoriteFood("Blue milk");
console.log("Blue Milk Drinkers:", blueMilkDrinkers);

const hammerThrowers = singlesFilter.filterByHobby("Hammer throwing");
console.log("Hammer Throwers:", hammerThrowers);

const namedThor = singlesFilter.filterByName("Thor");
console.log("Named Thor:", namedThor);
