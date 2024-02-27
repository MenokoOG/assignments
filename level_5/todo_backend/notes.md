

# Objectives

Create a simple Express Server that manages a list of todos (which at this point will just be held in an array on the server, since we haven't gotten to including databases yet).

Todos should have a data format similar to:

```jsx
{
    "name": "The name",
    "description": "The description of the todo"
    "imageUrl": "http://www.myimage...."
    "completed": false
    "_id": "23k4lh23h2"
}
```

Create endpoints that:

- allows new todo items to be posted to the array,
    - When posting a new todo, you must generate a unique id for that todo (consider using the `uuid` npm package),
- returns the entire list of todos,
- allows the user to update a todo by its `_id`,
- allows the user to delete a todo by its `_id`, and
- allows the user retrieve a single todo by its `_id`.

# Related Lessons

[First Express Server](https://www.notion.so/First-Express-Server-6f405642d07a401d9f48d76adbbed58c?pvs=21)

[We Need ID's](https://www.notion.so/We-Need-ID-s-a9c82ba30d3e44aea42c045f7d4a9d69?pvs=21)

[Get Request](https://www.notion.so/Get-Request-97bf147de98d440688fea8d3ebbc97e2?pvs=21)

[Request Body - Post Request](https://www.notion.so/Request-Body-Post-Request-09baf6b2a6ab448cbb849df4c66d19f1?pvs=21)

[Delete Request in Express](https://www.notion.so/Delete-Request-in-Express-9ee10f6aadab4702b055380698336bc3?pvs=21)

[Put Request in Express](https://www.notion.so/Put-Request-in-Express-10bdcae7238d40b09cbcd615f179b438?pvs=21)

# Next Up

[Install Morgan](https://www.notion.so/Install-Morgan-c767819158c64ea1a0350cf38727e547?pvs=21)