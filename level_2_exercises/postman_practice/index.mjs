// Using axios library for HTTP requests
import axios from 'axios';

// GET a list of planets:
axios.get('https://swapi.dev/api/planets/')
    .then(response => {
        console.log(response.data);
    })
    .catch(error => {
        console.error(error);
    });

// GET a single person object
axios.get('https://swapi.dev/api/people/1/')
    .then(response => {
        console.log(response.data);
    })
    .catch(error => {
        console.error(error);
    });

// Replace [your_name] with your actual name
const todoUrl = 'https://api.vschool.io/lawrencejefferson/todo';

// Replace [your_name] with your actual name and adjust the data accordingly
const todoData = [
    {
        title: "Task 1",
        description: "Description for Task 1",
        price: 0,
        imgUrl: "http://path-to-url.jpg",
        completed: false
    },
    {
        title: "Task 2",
        description: "Description for Task 2",
        price: 0,
        imgUrl: "http://path-to-url.jpg",
        completed: false
    },
    {
        title: "Task 3",
        description: "Description for Task 3",
        price: 0,
        imgUrl: "http://path-to-url.jpg",
        completed: false
    }
];

// Sending POST requests for each todo
todoData.forEach(async todo => {
    try {
        const response = await axios.post(todoUrl, todo);
        console.log(response.data);
    } catch (error) {
        console.error(error);
    }
});

// Replace [your_name] with your actual name
const getAllTodosUrl = 'https://api.vschool.io/lawrencejefferson/todo';

try {
    const response = await axios.get(getAllTodosUrl);
    console.log(response.data);
} catch (error) {
    console.error(error);
}

// Replace [your_name] and [todo_id] with your actual name and todo ID
const getOneTodoUrl = 'https://api.vschool.io/lawrencejefferson/todo/[todo_id]';

try {
    const response = await axios.get(getOneTodoUrl);
    console.log(response.data);
} catch (error) {
    console.error(error);
}

// Replace [your_name] and [todo_id] with your actual name and todo ID
const deleteOneTodoUrl = 'https://api.vschool.io/lawrencejefferson/todo/[todo_id]';

try {
    const response = await axios.delete(deleteOneTodoUrl);
    console.log(response.data);
} catch (error) {
    console.error(error);
}

// Replace [your_name] and [todo_id] with your actual name and todo ID
const putOneTodoUrl = 'https://api.vschool.io/lawrencejefferson/todo/[todo_id]';

// Replace [your_name] with your actual name and adjust the data accordingly
const updatedTodoData = {
    title: "Updated Task",
    description: "Updated description",
    price: 0,
    imgUrl: "http://path-to-updated-url.jpg",
    completed: true
};

try {
    const response = await axios.put(putOneTodoUrl, updatedTodoData);
    console.log(response.data);
} catch (error) {
    console.error(error);
}
