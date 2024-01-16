// array reduce exercise, menoko og, 1-16-24
// Turn an array of numbers into a total of all the numbers
numbersArr = [1,2,3]

const total = numbersArr.reduce((final, num) =>{
    final += num
    return final
}, 0)
console.log(total)

//Turn an array of numbers into a long string of all those numbers.
const stringConcat = numbersArr.reduce((final, num) => {
    return final + num.toString()
}, "")
console.log(stringConcat)

// Turn an array of voter objects into a count of how many people voted.
let voters = [
    {name:'Bob' , age: 30, voted: true},
    {name:'Jake' , age: 32, voted: true},
    {name:'Kate' , age: 25, voted: false},
    {name:'Sam' , age: 20, voted: false},
    {name:'Phil' , age: 21, voted: true},
    {name:'Ed' , age:55, voted:true},
    {name:'Tami' , age: 54, voted:true},
    {name: 'Mary', age: 31, voted: false},
    {name: 'Becky', age: 43, voted: false},
    {name: 'Joey', age: 41, voted: true},
    {name: 'Jeff', age: 30, voted: true},
    {name: 'Zack', age: 19, voted: false}
]

const totalVotes = voters.reduce((final, voter) => {
    return final + (voter.voted ? 1 : 0)

}, 0)
console.log(totalVotes)

// Given an array of all your wishlist items, figure out how much it would cost to just buy everything at once
let wishlist = [
    { title: "Tesla Model S", price: 90000 },
    { title: "4 carat diamond ring", price: 45000 },
    { title: "Fancy hacky Sack", price: 5 },
    { title: "Gold fidgit spinner", price: 2000 },
    { title: "A second Tesla Model S", price: 90000 }
]
const shoppingSpree = wishlist.reduce((final, item ) => {
    return final + item.price
}, 0 )
console.log(shoppingSpree)

// Given an array of arrays, flatten them into a single array
let arrays = [
    ["1", "2", "3"],
    [true],
    [4, 5, 6]
]

const flatten = arrays.reduce((final, arr ) => {
    return final.concat(arr)
}, [] )
console.log(flatten)

//Given an array of potential voters, return an object representing the results of the vote Include how many of the potential voters were in the ages 18-25, how many from 26-35, how many from 36-55, and how many of each of those age ranges actually voted. The resulting object containing this data should have 6 properties.
let voters2 = [
    {name:'Bob' , age: 30, voted: true},
    {name:'Jake' , age: 32, voted: true},
    {name:'Kate' , age: 25, voted: false},
    {name:'Sam' , age: 20, voted: false},
    {name:'Phil' , age: 21, voted: true},
    {name:'Ed' , age:55, voted:true},
    {name:'Tami' , age: 54, voted:true},
    {name: 'Mary', age: 31, voted: false},
    {name: 'Becky', age: 43, voted: false},
    {name: 'Joey', age: 41, voted: true},
    {name: 'Jeff', age: 30, voted: true},
    {name: 'Zack', age: 19, voted: false}
]

const voteResults = voters2.reduce((result, voter) => {
    const ageRange = voter.age <= 25 ? '18-25' : (voter.age <= 35 ? '26-35' : '36-55');
    
    result.totalVoters++;
    result[ageRange].total++;
    
    if (voter.voted) {
      result[ageRange].voted++;
      result.totalVoted++;
    }
    
    return result;
  }, {
    totalVoters: 0,
    totalVoted: 0,
    '18-25': { total: 0, voted: 0 },
    '26-35': { total: 0, voted: 0 },
    '36-55': { total: 0, voted: 0 }
  })

  console.log(voteResults)

  // Extra Credit
  
const githubUsername = 'MenokoOG';


const apiUrl = `https://api.github.com/users/${githubUsername}/repos`;


const getTotalWatchers = async () => {
  try {
    const response = await fetch(apiUrl);
    
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    
    const repositories = await response.json();
    
    
    const totalWatchers = repositories.reduce((acc, repo) => {
      return acc + repo.watchers;
    }, 0);
    
    console.log(`Total Watchers: ${totalWatchers}`);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

getTotalWatchers();
