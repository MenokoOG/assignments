## Standup


# Overview

Learn about REST and RESTful API's. 

# Lesson Video

https://www.youtube.com/watch?v=Q5ETjJLGaOc

# Supplementary Content

## An Introduction to APIs

You can find a comprehensive introduction to APIs [here](https://zapier.com/learn/apis/).

!https://coursework.vschool.io/content/images/size/w2000/2017/06/rest.jpg

As you embark on the journey of developing your own backend API for data access, you'll quickly realize the complexity that can arise. This complexity can be managed effectively by adhering to the principles of **REST** (Representational State Transfer), a widely-used design approach for creating APIs. This guide will focus on the most important and beginner-friendly aspects of RESTful API design to help you keep your API organized, understandable, and user-friendly.

## Example

To illustrate these concepts, let's consider an example of a website that sells outdoor equipment, such as snowboards, skis, bikes, and more. Keep in mind that there is no single "right" way to structure an API, so the solution we present here is not the only one possible.

## Terminology

Before diving into REST API design, let's establish some key terms you'll encounter throughout this lesson:

- **Resource**: A single instance of an object, for example, a specific brand/model of a snowboard.
- **Collection**: A group of similar objects, like all the mountain bikes sold in your store, regardless of brand or model.
- **Base (or Root) URL**: The initial part of the URL for all requests to your API. It typically appears as something like `http://api.equipment.com/v1` or `http://equipment.com/api/v1`. The "v1" indicates that this is the first version of your API, allowing you to create updated versions in the future. This distinction helps manage changes and updates to your API.
- **API Endpoint**: The part of the URL that follows the Base URL, such as `/ski` or `/ski/:skiId`.
- **`:nounId`**: The colon (:) preceding a word indicates that dynamic data is expected in that part of the endpoint. For example, in `/ski/:skiId`, the endpoint could be something like `/ski/1234`, where `1234` represents the unique ID of a specific ski in your database.
- **Client**: The entity, whether a person or a machine, that consumes information from your API. In this context, it often refers to a browser application, like an Angular app running in a Chrome browser, but it could also be an iOS or Android app or even another server accessing your API for data.
- **Server**: The machine where your API runs.
- **Request Method**: The type of operation performed on the database, including GET (retrieve data), POST (create new data), PUT (update data), and DELETE (remove data).

## Nouns > Verbs

One of the primary principles of RESTful API design is to keep API endpoints clear and easy to understand in terms of the resource they provide. In the past, non-RESTful design practices led to endpoints like `/get-tents`, which returned a list of tents from the database. With REST, the request method already specifies the operation (GET, POST, PUT, DELETE), so the endpoint itself should only contain the noun representing the resource. Instead of making a GET request to `/get-tents`, create an endpoint that handles GET requests for `/tent` or `/tents`. You can choose to use singular or plural nouns, but consistency is key. In this lesson, we'll stick with singular nouns.

Using nouns allows you to reuse endpoints and perform different actions based on the request method, leading us to the next section.

## `GET`, `POST`, `PUT`, `DELETE`

### GET List of Resources

In a RESTful design, a GET request to `/bike` should return an array (list) of bikes from your API. In the context of our outdoor equipment store, this would be a list of bikes to be displayed on a web page, including details like images, brand names, and prices. Some APIs may limit the amount of information returned in a "GET list" endpoint, ensuring that the response doesn't contain unnecessary data.

**Examples:**

- `GET /tent` - returns a list of tents available in our store.
- `GET /glove` - returns a list of gloves offered in our store.
- And so on.

The response for `GET /tent` might look like this in JSON:

```json
[
  {
    "brand": "Coleman",
    "model": "Sundome",
    "type": "dome tent",
    "shortDescription": "4-person dome tent",
    "itemNumber": 2000024582,
    "capacity": 4,
    ... and more ...
  },
  {
    "brand": "Marmot",
    "model": "Catalyst",
    "type": "backpacking",
    "shortDescription": "2-person Tent with Footprint",
    "itemNumber": 2000024583,
    "capacity": 2,
    ... and more ...
  },
  {... and more ...}
]

```

### GET Single Resource

A GET request to `/bike` returns an array of bikes, while a GET request to `/bike/:bikeId` returns a single resource object for the bike with the unique ID indicated by `:bikeId`. For example, `GET /bike/123` would retrieve a single bike object, not an array, as follows:

```json
{
    "brand": "Cannondale",
    "model": "CAAD12 Disc Dura Ace",
    "price": "$3,999",
    "type": "Road Bike",
    ... and more ...
}

```

### POST a New Resource

When submitting a POST request to create a new item in the server's database, it is usually directed to the `/noun` endpoint, not `/noun/:nounId`. Think of it as adding a new "noun" to the existing collection of "nouns."

### PUT (Update) an Existing Resource

PUT requests are used to modify an existing resource, so the endpoint must include the ID of the resource to update. For example, to change the price of a helmet with ID `42`, you would submit:

1. A PUT request to `/helmet/42` endpoint.
2. An object (or partial object) containing the new price, like:

```json
{
    "price": "$39"
}

```

> Note about PUT vs. PATCH: If you're only updating part of the resource and not completely replacing it, a PATCH request is more suitable than PUT. However, for simplicity and to avoid delving into extensive discussions about REST specifications, we'll use PUT requests in this class for learning purposes. If you're interested in the differences, you can explore this post on PUT vs. PATCH.
> 

### DELETE

DELETE requests are used to remove a single resource from the database. The endpoint for DELETE is typically `/noun/:nounId`, indicating which item should be removed. Sending DELETE to just `/noun/` would imply removing the entire collection of resources, which is generally not an operation you'd want to allow.

## Nesting API Design

As resources often relate to other resources, your APIs can become more complex than simple `/noun[/:nounId]` endpoints. Suppose you're creating endpoints for bicycles in your outdoor equipment shop, and

you want to access all the components of a specific bike (frame, brakes, wheel size, etc.). In this case, you might create an endpoint like `/bike/:bikeId/components`. The "components" part of the endpoint suggests it should return an array of all components for the bike specified by the ID earlier in the URL.

It's important to note that nesting the components resource in the bike endpoint doesn't necessarily mean that the data is nested in the database. Components could also have their own endpoints like `/components` and `/components/:componentId` for interaction with all components, whether they belong to a bike, a snowboard, or any other product.

## Conclusion

While there's a wealth of information and differing opinions about what makes an API perfectly RESTful, adhering closely to REST principles will help make your API logical, conventional, easy to use, and organized as your code evolves. To delve deeper into REST API design specifics, you can explore the [REST API Tutorial](http://www.restapitutorial.com/).

# Next Up

[Request Body - Post Request](https://www.notion.so/Request-Body-Post-Request-09baf6b2a6ab448cbb849df4c66d19f1?pvs=21)