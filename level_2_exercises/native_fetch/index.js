// native fetch, menoko og, 1-22-24

// Fetch
// url: "https://rickandmortyapi.com/api/character"
fetch("https://rickandmortyapi.com/api/character")
    .then(res => res.json())
    .then(res => {
        
        for(let i = 0; i < res.results.length; i++){
            const h1 = document.createElement('h1')
            h1.textContent = res.results[i].name
            document.body.appendChild(h1)
        }
        
    })
    .catch(err => console.log(err))

// my practice
// Example API URL
const apiUrl = 'https://jsonplaceholder.typicode.com/todos/1';

// Example 1: Basic Fetch
fetch(apiUrl)
  .then(response => {
    if (!response.ok) {
      throw new Error(`Network response was not ok: ${response.statusText}`);
    }
    return response.json();
  })
  .then(data => {
    console.log('Example 1 - Data retrieved:', data);
  })
  .catch(error => {
    console.error('Example 1 - Error during fetch operation:', error);
  });

// Example 2: GET Request
fetch(apiUrl)
  .then(response => response.json())
  .then(data => console.log('Example 2 - Data retrieved:', data))
  .catch(error => console.error('Example 2 - Error during GET request:', error));

// Example 3: POST Request
const postData = {
  title: 'foo',
  body: 'bar',
  userId: 1
};

fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(postData)
})
  .then(response => response.json())
  .then(data => console.log('Example 3 - Data posted and response received:', data))
  .catch(error => console.error('Example 3 - Error during POST request:', error));

// Example 4: GET Request with Query Parameters
const queryParams = new URLSearchParams({
  userId: 1
});

const urlWithParams = `${apiUrl}?${queryParams}`;

fetch(urlWithParams)
  .then(response => response.json())
  .then(data => console.log('Example 4 - Data retrieved with query parameters:', data))
  .catch(error => console.error('Example 4 - Error during GET request with query parameters:', error));
