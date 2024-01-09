// Nested Loops, menoko og 1-8-24
// also known as matrix or grid
var arrayOfArrays = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

// console.log(arrayOfArrays[0])
// console.log(arrayOfArrays[1])
// console.log(arrayOfArrays[2])
// console.log(arrayOfArrays[2][1])

for(let i = 0; i < arrayOfArrays.length; i++){
    console.log(arrayOfArrays[i])

}
for(let i = 0; i < arrayOfArrays.length; i++){          // how mant times will this loop run = 3
    for(let j = 0; j < arrayOfArrays[i].length; j++){   // how mant times will this loop run = 9
        console.log(arrayOfArrays[i][j])
    }   
}
console.log(arrayOfArrays[1][2]) // 6
console.log(arrayOfArrays[0][0]) // 1
console.log(arrayOfArrays[2][2]) // 9
console.log("******************************************************")
// let myPracArray = [
//     [[1,2,3], 2, 3],
//     [4, 5, [6,7,8]],
//     [9,10,[11,12,13]]
// ]
// for(let i = 0; i < myPracArray.length; i++){
//     for(let j = 0; j < myPracArray[i].length; j++){
//         for( let k = 0; k < myPracArray[j].length; k++){
//             console.log(myPracArray[i][j][k])
//         }
//     }
// }
