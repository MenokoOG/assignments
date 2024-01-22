// // ajax part 2, menoko og, 1-22-24
// // url: https://swapi.dev/api/people/1


// const xhr = new XMLHttpRequest()
//             // method . // url                     // async? or not
// // xhr.open("GET", "https://swapi.dev/api/people/1", true )
// // xhr.send()

// xhr.open("GET", "https://swapi.dev/api/people", true )
// xhr.send()
        

// xhr.onreadystatechange = function(){
//     if(xhr.readyState === 4 && xhr.status === 200){
//         // response from server
//         const jsonData = (xhr.responseText)   // returns gaint string = JSON
//         const data = JSON.parse(jsonData)  // returns a JS object
//         // console.log(data.results)
//         showData(data.results)
       


//     }else if(xhr.readyState === 4 && xhr.status !== 200){
//         console.log(xhr.responseText)
//     }
// }

// // const showData = (luke) =>{
// //     const h1 = document.createElement("h1")
// //     h1.textContent = luke.name
// //     document.body.appendChild(h1)
// // }

// const showData = (arr) =>{
//     for(let i = 0; i < arr.length; i++){
//         const h1 = document.createElement("h1")
//         h1.textContent = arr[i].name
//         document.body.appendChild(h1)
// }

// }

// practice with es6 style syntax:
const xhr = new XMLHttpRequest();

xhr.open("GET", "https://swapi.dev/api/people", true);
xhr.send();

xhr.onreadystatechange = () => {
    if (xhr.readyState === 4 && xhr.status === 200) {
        const jsonData = xhr.responseText;
        const data = JSON.parse(jsonData);
        showData(data.results);
    } else if (xhr.readyState === 4 && xhr.status !== 200) {
        console.log(xhr.responseText);
    }
};

const showData = (arr) => {
    arr.map((item) => {
        const h1 = document.createElement("h1");
        h1.textContent = item.name;
        document.body.appendChild(h1);
    });
};
