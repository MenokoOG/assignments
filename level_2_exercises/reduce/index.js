// reduce, menoko og, 1-16-24
// .reduce()

// 1 - reduce the array of numbers into a sum of all the numbers
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const result1 = nums.reduce((final, num) =>{
    final += num
    return final
}, 0)
console.log(result1)


// 2 - reduce the users to an array of strings of the user's first and last names
const users = [
    { fName: "joe", lName: "smithy" },
    { fName: "tina", lName: "johnson" },
    { fName: "rick", lName: "sanchez" }
]
const userNames = users.reduce((final, user) =>{
    // final.push(user.fName + " " + user.lName)
    final.push(`${user.fName} ${user.lName}`)
    return final
}, [] )
console.log(userNames)

// 3 - reduce the array into a count of how many people voted
const voters = [
    { name: "steve", voted: true },
    { name: "janet", voted: true },
    { name: "rebecca", voted: false },
    { name: "harvey", voted: true },
]

const howManyVoted = voters.reduce((final, voter) =>{
    if(voter.voted){
        final++
    }
    return final
}, 0)

console.log(howManyVoted)

const voterObj = voters.reduce((final, voter) =>{
    if(voter.voted){
        final.didVote++
    } else{
        final.didNotVote++
    }
    return final
}, {didVote: 0, didNotVote: 0})

console.log(voterObj)