# Furation-backend

This is a simple RESTful API built with Express.js and MongoDB that allows performing CRUD operations on a collection of items.


## Tech Stack

**Server:** Node, Express, mongoose

**API-Test:** POSTMAN

**External libraries:** winston, bcrypt, dotenv


## Getting Started

### Installation

1. Clone this repository to your local machine.

```bash
  https://github.com/lalit-shendage/furation-backend
```
2. Install the dependencies.

```bash
 npm install
```
### Configuration

1.  Create .env file

2. Open the .env file and provide the following information:

```bash
CLUSTER=<user>:<password>@<clustername>
SECREAT_KEY="your key"
```
### Running the API

1. Start the application.

```bash
npm start
```

2. The API will be available at http://localhost:5000.


    
## API Reference


#### Register User

```http
  POST /api/register
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `Name` | `string` | **Required**. User's name |
| `email` | `string` | **Required**. User's email |
| `password` | `string` | **Required**. User's name |

####  User login

```http
  POST /api/login
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `email` | `string` | **Required**. User's email |
| `password` | `string` | **Required**. User's name |



#### Get all items

```http
  GET /api/items
```
| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `auth-token`      | `string` | **Required**. auth-token |

#### Get item by id

```http
  GET /api/items/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of item to fetch |
| `auth-token`      | `string` | **Required**. auth-token |


#### Get items by page

```http
  GET /api/items/page?page={page no}&limit={items per page}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `auth-token`      | `string` | **Required**. auth-token |


#### Post item 
```http
  POST /api/items/
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `auth-token`      | `string` | **Required**. auth-token |
| `title`      | `string` | **Required**. item title |
| `language`      | `string` | **Required**. item language |
| `pages`      | `string` | **Required**. item pages |
| `author`      | `string` | **Required**. item author |

#### Update item 
```http
  PUT /api/items/
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `auth-token`      | `string` | **Required**. auth-token |
| `title`      | `string` |  item title |
| `language`      | `string` |  item language |
| `pages`      | `string` |  item pages |
| `author`      | `string` |  item author |


#### Delete item by id
```http
  DELETE /api/items/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of item to fetch |
| `auth-token`      | `string` | **Required**. auth-token |


## Additional Features

### Error Handling

1. The API handles errors appropriately and returns meaningful error messages for each endpoint.

2. Error responses follow the following format:

```bash
 {
    "error": "Error message"
 }
```
### Validation

1. Data is properly validated using express-validator before performing database operations.

2. The API returns appropriate error messages for validation failures.

### Logging 
 1. Basic error logging is implemented using the Winston logging library.

 2. Logs are saved to a file named error.log in the project's root directory.

### pagination

1. Pagination: The API supports pagination for retrieving items. You can specify the page and limit query parameters to control the pagination. For example, /api/items?page=1&limit=10 will retrieve the first page of 10 items

### Authentication 

1. Authentication/Authorization: Authentication and authorization mechanisms have been implemented to protect the endpoints. Users need to authenticate and provide a valid token in the request headers to access the protected endpoints.

### Test

#### Manual test using postman

** To test hosted APIs please import collection named 'Postman collection-web in Postman**

** To check app working in local machine**

1. Start the application
2. Open Postman and import the provided collection file named *Postman collection- Local machine*
3. The collection includes pre-configured requests for each API endpoint. You can send requests to the corresponding endpoints and examine the responses.

**Note**: Make sure to update the request URLs and data as needed based on your local environment and specific API configurations.
## Authors

- [Lalit Shendage](https://github.com/lalit-shendage)

