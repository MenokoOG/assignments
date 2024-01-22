// axios intro, menoko og, 1-22-24
import axios from "axios"



const lukeSkywalker = axios.get('https://swapi.co/api/people/1');

console.log(lukeSkywalker);

axios.get('https://swapi.co/api/people/1').then(response => {
    console.log(response.data);
  }).catch(error => {
    console.log(error)
  });


