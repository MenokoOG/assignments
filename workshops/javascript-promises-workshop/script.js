const axios = require('axios')




// Example 1
// Function to simulate an HTTP GET request

function fetchDataFromServer() {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            const randomValue = Math.random();
            if (randomValue < 0.5) {
                resolve("Data successfully fetched!");
            } else {
                reject("Failed to fetch data!");
            }
        }, 2000); // Simulating a delay of 2 seconds
    });
    return promise
}

// Usage example:

fetchDataFromServer()
    .then((result) => {
        // This function is called if the Promise is resolved successfully
        console.log("Success:", result);
    })
    .catch((error) => {
        // This function is called if the Promise is rejected
        console.error("Error:", error);
    });








// Example 2
// Handling promises 

// const getData = async () => {
//     try {
//         const response = axios.get('https://pokeapi.co/api/v2/pokemon/1');
//         console.log(response.data)
//     } catch (error) {
//         console.log(error)
//     }
// }

// getData()



// Example 2.5
// callstack

// function loop() {
//     const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
//     let num = 0

//     for (let i = 0; i < arr.length; i++) {
//         for (let j = 0; j < arr.length; j++) {
//             const mul = arr[i] * arr[j]
//             num += mul
//         }
//     }
//     return num
// }

// console.log(loop())








// Example 3
// Callback hell

// function callbacks() {
//     axios.get('https://pokeapi.co/api/v2/pokemon/1', (error, response1) => {
//         if (error) {
//             console.error('Error fetching response 1:', error);
//         } else {
//             console.log('Response 1:', response1.data);
//             axios.get('https://pokeapi.co/api/v2/pokemon/2', (error, response2) => {
//                 if (error) {
//                     console.error('Error fetching response 2:', error);
//                 } else {
//                     console.log('Response 2:', response2.data);
//                     axios.get('https://pokeapi.co/api/v2/pokemon/3', (error, response3) => {
//                         if (error) {
//                             console.error('Error fetching response 3:', error);
//                         } else {
//                             console.log('Response 3:', response3.data);
//                             axios.get('https://pokeapi.co/api/v2/pokemon/4', (error, response4) => {
//                                 if (error) {
//                                     console.error('Error fetching response 4:', error);
//                                 } else {
//                                     console.log('Response 4:', response4.data);
//                                     axios.get('https://pokeapi.co/api/v2/pokemon/5', (error, response5) => {
//                                         if (error) {
//                                             console.error('Error fetching response 5:', error);
//                                         } else {
//                                             console.log('Response 5:', response5.data);
//                                         }
//                                     });
//                                 }
//                             });
//                         }
//                     });
//                 }
//             });
//         }
//     });
// }

// // Usage

// callbacks()







// Example 4
// with promises

// async function promises() {
//     try {
//         const data1 = await axios.get('https://pokeapi.co/api/v2/pokemon/1');
//         const data2 = await axios.get('https://pokeapi.co/api/v2/pokemon/2');
//         const data3 = await axios.get('https://pokeapi.co/api/v2/pokemon/3');
//         const data4 = await axios.get('https://pokeapi.co/api/v2/pokemon/4');
//         const data5 = await axios.get('https://pokeapi.co/api/v2/pokemon/5');
//         return([data1.data, data2.data, data3.data, data4.data, data5.data]) 
//     } catch (err) {
//         console.log(err)
//     }
// }

// promises().then(res => console.log(res))