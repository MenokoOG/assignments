// filter lesson, menoko og, 1-15-24
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const result = arr.filter(function(num){
//     if( num % 2 === 0){
//         return true
//     }
// })

const result =arr.filter( num => num % 2 === 0 )

console.log(result)


const movies = [
    { name: "movie1", genre: "horror" },
    { name: "movie2", genre: "action" },
    { name: "movie3", genre: "action" },
    { name: "movie4", genre: "fantasy" }
]

const actionMovies = movies.filter(function(movie){
    if(movie.genre === "action"){
        return movie
    }
})

const actionMovies2 = movies.filter(movie => movie.genre === "action")

console.log(actionMovies)
console.log(actionMovies2)