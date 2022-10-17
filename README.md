

<p align="center">
  <img  src="https://cdni.iconscout.com/illustration/premium/thumb/sports-day-5055183-4217751.png">
</p>
<h1 align="center">
   Let's Play
</h1>
<div align="center">

  <h3>Built With</h3>

  <img src="https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white" height="30px"/>
  <img src="https://img.shields.io/badge/Prisma-3982CE?style=for-the-badge&logo=Prisma&logoColor=white" height="30px"/>
  <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" height="30px"/>
  <img src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white" height="30px"/>  
  <img src="https://img.shields.io/badge/Express.js-404D59?style=for-the-badge&logo=express.js&logoColor=white" height="30px"/>
  <img src="https://img.shields.io/badge/Jest-323330?style=for-the-badge&logo=Jest&logoColor=white" height="30px"/>
  
  <!-- Badges source: https://dev.to/envoy_/150-badges-for-github-pnk -->
</div>

<br/>

# Description

### An api that aims better the organization of different types of collective games. Where you can organize or join events that already exist.

</br>

# Table of Contents
- [Features](#features)
- [Getting Started](#getting-started)
    - [Environment Variables](#environment-variables)
    - [Test](#test)
- [API Reference](#api-reference)
  - [Routes](#routes)
  - [Cards](#cards)
  - [Payments](#payments)
  - [Recharges](#recharges)
- [Contact & Study Playlist](#contact--study-playlist)

# Features

-   Sign Up
-   Login
-   Create/Update profile
-   Create/Get photos 
-   Create/Get phones
-   Register in  event lobbies
-   Create/Get lobbies
-   Create/Get local events
-   Create/Get address
-   Get all sportes

</br>

# Getting Started

This Api can be used in two different ways: by cloning the project or by using your preferred client, such as [Insomnia](https://insomnia.rest/) or [Postman](https://www.getpostman.com/).

To clone the project, run the following command:

```git
git clone https://github.com/VicterHuger/lets-play-api.git
```

Then, navigate to the project folder and run the following command:

```git
npm install
```

## Environment Variables

To run this project, you will need to create a `.env` file in root directory and
add the following environment variables to your .env file

```git 
DATABASE_URL = postgres://<userName>:<password>@<hostname>:5432/<database>
```
```git
PORT = <number> #recommended:5000
```
```git
TOKEN_SECRET_KEY= <string>
```
```git
TOKEN_EXPIRES_IN= <time> #recommended 1day
```


Finally, run the server locally with initial data:

```git
npm run dev:full 
```

Or without inital data:

```git
npm run dev:empty
```

You can now access the API's endpoints by navigating to `http://localhost:<PORT>/`

## Test

To apply automatized test on this project, you will need to create a `.env.test` file in root directory and
add the following environment variables to your .env.test file

```git 
DATABASE_URL = postgres://<userName>:<password>@<hostname>:5432/<database-of-test>
```
```git
PORT = <same-as-in-.env>
```
```git
TOKEN_SECRET_KEY= <same-as-in-.env>
```
```git
TOKEN_EXPIRES_IN= <time> #recommended 1day
```


Finally, run the integration test

```git
npm run test:integration 
```

<br/>


# API Reference
In this section, you will find the API's endpoints and their respective descriptions, along with the request and response examples. All data is sent and received as JSON.

## Routes

### [Sign Up](#signup) _`/sign-up`_

- [Register a new user](#---register-a-new-user)

### [Sign In](#signin)_`/sign-in`_

- [Login user](#---login-user)

### [Profile](#profile) _`/profile`_

- [Create profile](#---create-profile)

- [Update profile](#---update-profile)

### [Photo](#photo) _`/photo`_

- [Register photo](#---register-photo)

- [Get photo by id](#---get-photo-by-id)

- [Get photo by link](#---get-photo-by-link)

### [Phone](#phone) _`/phone`_

- [Register phone](#---register-phone)

- [Get phone by id](#---get-phone-by-id)

- [Get phone by number](#---get-phone-by-link)

### [Register in a Lobby](#register-in-a-lobby) _`/lobbyUser`_

- [Register user in a lobby](#---register-user-in-a-lobby)

### [Lobby](#lobby) _`/lobby`_

- [Create a lobby](#---create-a-lobby)
- [Get a lobby by id](#---get-a-lobby-by-id)
- [Get all lobbies](#---get-all-lobbies)

### [Event Local](#event-local) _`/eventLocal`_

- [Create event local](#---create-event-local)
- [Get event local by address id](#---get-event-local-by-address-id)
- [Get event local by id](#---get-event-local-by-id)

### [Address](#address) _`/address`_

- [Create address](#---create-address)
- [Get address](#---get-address)

### [Sport](#sport) _`/sports`_

- [Get all sports](#---get-all-sports)


## Sign Up

### &nbsp; ‣ &nbsp; Register a new user

```http
POST /sign-up
```

### &nbsp; ☰ &nbsp; Request

| Body             | Type     | Description                        |
| :--------------- | :------- | :--------------------------------- |
| `email`           | `string` | **Required**. valid email       |
| `password`         | `string` | **Required**. valid password         |
| `confirmPassword`         | `string` | **Required**. equal password   |

<br/>

`Email Format: <string>@<string>.<string>`

`Password Format: password with 6 length with 1 number, 1 lowercase and 1 uppercase letters and 1 special character`

`Confirm Password Format: equal to password` 


#### Body Example

```json
{
  "email": "teste@email.com",
  "password": "1qW@12",
  "confirmPassword": "1qW@12"
}
```


### &nbsp; ☰ &nbsp; Responses

| Status Code |      Description      |          Properties           |
| :---------: | :-------------------: | :---------------------------: |
|   **201**   |        Created        |   `data: { User }`    |
|   **409**   |    Conflict    | `error: { message, details }` |
|   **422**   |    Unprocessable Entity    | `error: { message, details }` |
|   **500**   | Internal Server Error | `error: { message, details }` |

#### Example User data:
```json
{
	"id": "1",
	"email": "test@email.com",
	"isBanned": false,
	"createdAt": "2022-10-17T02:58:39.748Z",
  "updatedAt": "2022-10-17T02:58:39.748Z"
}
```

#

## Sign In

### &nbsp; ‣ &nbsp; Login user

```http
POST /sign-in
```

### &nbsp; ☰ &nbsp; Request

| Body             | Type     | Description                        |
| :--------------- | :------- | :--------------------------------- |
| `email`           | `string` | **Required**. valid email       |
| `password`         | `string` | **Required**. valid password         |


<br/>

`Email Format: <string>@<string>.<string>`

`Password Format: <string>`


#### Body Example

```json
{
  "email": "teste@email.com",
  "password": "1qW@12",
}
```


### &nbsp; ☰ &nbsp; Responses

| Status Code |      Description      |          Properties           |
| :---------: | :-------------------: | :---------------------------: |
|   **200**   |        Created        |   `data: { jwt token }`    |
|   **401**   |        Unauthorized        |   `error: { message, details }`    |
|   **422**   |    Unprocessable Entity    | `error: { message, details }` |
|   **500**   | Internal Server Error | `error: { message, details }` |

#### Example jwt token:
```json
{
	"token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c"
}
```

#

## Profile

### &nbsp; ‣ &nbsp; Create profile

```http
POST /profile/create
```

### &nbsp; ☰ &nbsp; Headers

| Headers     | Type     | Description           |
| :---------- | :------- | :-------------------- |
| `Authorization` | `string` | **Required**. token |

<br/>

`Authorization Format: Bearer <token>`

<br/>

### &nbsp; ☰ &nbsp; Request


| Body             | Type     | Description                        |
| :--------------- | :------- | :--------------------------------- |
| `userName`           | `string` | **Required**. valid userName      |
| `name`         | `string` | **Required**. valid name         |
| `lastName`         | `string` | **Required**. equal name   |
| `birthday`         | `date` | **Required**. valid date   |
| `sex`         | `string` | **Required**. valid type   |
| `phoneId`         | `number` | **Required**. valid number   |
| `photoId`         | `number` | **Required**. valid number   |
| `addressId`         | `number` | **Required**. valid number   |

<br/>

`UserName Format: valid alphanumeric with optional . _`

`Name and Last Name Format: valid name with letters and spaces`

`Birthday Format: MM/DD/YYYY`

`Sex Format: must be  "FEMALECISGENDER" | "FEMALETRANSGENDER" | "MALECISGENDER" | "MALETRANSGENDER" `

`PhoneId, PhotoId and AddressId Format: valid number`


#### Body Example

```json
{"userName": "user12",
"name": "Mario",
"lastName": "Fernandes",
"birthday": "03/23/1997",
"sex": "MALECISGENDER",
"phoneId": "1",
"photoId": "1",
"addressId": "1"
}
```

### &nbsp; ☰ &nbsp; Responses

| Status Code |      Description      |          Properties           |
| :---------: | :-------------------: | :---------------------------: |
|   **201**   |        Created        |   `data: { Profile }`    |
|   **401**   |    Unauthorized   | `error: { message, details }` |
|   **404**   |    Not Found    | `error: { message, details }` |
|   **409**   |    Conflict    | `error: { message, details }` |
|   **422**   |    Unprocessable Entity    | `error: { message, details }` |
|   **500**   | Internal Server Error | `error: { message, details }` |

#### Example Profile data:
```json
{
	
  "id": 1,
  "userName": "user12",
  "name": "Mario",
  "lastName": "Fernandes",
  "birthday": "1997-03-23T03:00:00.000Z",
  "sex": "MALECISGENDER",
  "isPhoneVerified": false,
  "isEmailVerified": false,
  "score": 0,
  "createdAt": "2022-10-17T04:12:17.162Z",
  "updatedAt": "2022-10-17T04:12:17.162Z",
  "userId": 1,
  "phoneId": 1,
  "photoId": 1,
  "addressId": 1

}
```


#

### &nbsp; ‣ &nbsp; Update profile

```http
PATCH /profile/:id
```

### &nbsp; ☰ &nbsp; Params

| Param     | Type     | Description           |
| :---------- | :------- | :-------------------- |
| `id` | `number` | **Required**. number |

<br/>

`id Format:  <number>`

<br/>

### &nbsp; ☰ &nbsp; Headers

| Headers     | Type     | Description           |
| :---------- | :------- | :-------------------- |
| `Authorization` | `string` | **Required**. token |

<br/>

`Authorization Format: Bearer <token>`

<br/>

### &nbsp; ☰ &nbsp; Request


| Body             | Type     | Description                        |
| :--------------- | :------- | :--------------------------------- |
| `userName`           | `string` | **Required**. valid userName      |
| `name`         | `string` | **Required**. valid name         |
| `lastName`         | `string` | **Required**. equal name   |
| `birthday`         | `date` | **Required**. valid date   |
| `sex`         | `string` | **Required**. valid type   |
| `phoneId`         | `number` | **Required**. valid number   |
| `photoId`         | `number` | **Required**. valid number   |
| `addressId`         | `number` | **Required**. valid number   |

<br/>

`UserName Format: valid alphanumeric with optional . _`

`Name and Last Name Format: valid name with letters and spaces`

`Birthday Format: MM/DD/YYYY`

`Sex Format: must be  "FEMALECISGENDER" | "FEMALETRANSGENDER" | "MALECISGENDER" | "MALETRANSGENDER" `

`PhoneId, PhotoId and AddressId Format: valid number`


#### Body Example

```json
{"userName": "user12",
"name": "Mario",
"lastName": "Fernandes",
"birthday": "03/23/1997",
"sex": "MALECISGENDER",
"phoneId": "1",
"photoId": "1",
"addressId": "1"
}
```

### &nbsp; ☰ &nbsp; Responses

| Status Code |      Description      |          Properties           |
| :---------: | :-------------------: | :---------------------------: |
|   **201**   |        Created        |   `data: { Profile }`    |
|   **401**   |    Unauthorized   | `error: { message, details }` |
|   **403**   |    Forbidden    | `error: { message, details }` |
|   **404**   |    Not Found    | `error: { message, details }` |
|   **422**   |    Unprocessable Entity    | `error: { message, details }` |
|   **500**   | Internal Server Error | `error: { message, details }` |

#### Example Profile data:
```json
{
	
  "id": 1,
  "userName": "user12",
  "name": "Mario",
  "lastName": "Fernandes",
  "birthday": "1997-03-23T03:00:00.000Z",
  "sex": "MALECISGENDER",
  "isPhoneVerified": false,
  "isEmailVerified": false,
  "score": 0,
  "createdAt": "2022-10-17T04:12:17.162Z",
  "updatedAt": "2022-10-17T04:12:17.162Z",
  "userId": 1,
  "phoneId": 1,
  "photoId": 1,
  "addressId": 1

}
```

#

## Photo

### &nbsp; ‣ &nbsp; Register photo

```http
POST /photo/create
```

### &nbsp; ☰ &nbsp; Headers

| Headers     | Type     | Description           |
| :---------- | :------- | :-------------------- |
| `Authorization` | `string` | **Required**. token |

<br/>

`Authorization Format: Bearer <token>`

<br/>

### &nbsp; ☰ &nbsp; Request


| Body             | Type     | Description                        |
| :--------------- | :------- | :--------------------------------- |
| `link`           | `string<uri>` | **Required**. valid image uri     |
| `description`         | `string` | **Optional**. valid description         |


<br/>

`Link Format: valid image link`

`Description Format: <string>`

#### Body Example

```json
{
  "link": "https://res.cloudinary.com/practicaldev/image/fetch/s--985QhLxv--/c_fill,f_auto,fl_progressive,h_50,q_auto,w_50/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/325104/a7d59066-2713-48d2-aa92-6db649676a1f.jpeg",
  "description": "Nice photo"
}
```

### &nbsp; ☰ &nbsp; Responses

| Status Code |      Description      |          Properties           |
| :---------: | :-------------------: | :---------------------------: |
|   **201**   |        Created        |   `data: { Photo }`    |
|   **401**   |    Unauthorized   | `error: { message, details }` |
|   **409**   |    Conflict    | `error: { message, details }` |
|   **422**   |    Unprocessable Entity    | `error: { message, details }` |
|   **500**   | Internal Server Error | `error: { message, details }` |

#### Example Photo data:
```json
{
	
  "id": 1,
  "link": "https://res.cloudinary.com/practicaldev/image/fetch/s--985QhLxv--/c_fill,f_auto,fl_progressive,h_50,q_auto,w_50/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/325104/a7d59066-2713-48d2-aa92-6db649676a1f.jpeg",
  "description": "Nice photo",
  "createdAt": "2022-10-17T04:12:17.162Z",
  "updatedAt": "2022-10-17T04:12:17.162Z",
 
}
```

#

### &nbsp; ‣ &nbsp; Get photo by id

```http
GET /photo:id

```

### &nbsp; ☰ &nbsp; Params

| Param     | Type     | Description           |
| :---------- | :------- | :-------------------- |
| `id` | `number` | **Required**. number |

<br/>

`id Format:  <number>`

<br/> 

### &nbsp; ☰ &nbsp; Headers

| Headers     | Type     | Description           |
| :---------- | :------- | :-------------------- |
| `Authorization` | `string` | **Required**. token |

<br/>

`Authorization Format: Bearer <token>`

<br/>

####

### &nbsp; ☰ &nbsp; Responses

| Status Code |      Description      |          Properties           |
| :---------: | :-------------------: | :---------------------------: |
|   **200**   |        OK        |   `data: { Photo }`    |
|   **401**   |    Unauthorized   | `error: { message, details }` |
|   **404**   |    Not Found    | `error: { message, details }` |
|   **422**   |    Unprocessable Entity    | `error: { message, details }` |
|   **500**   | Internal Server Error | `error: { message, details }` |

#### Example Photo data:
```json
{
	
  "id": 1,
  "link": "https://res.cloudinary.com/practicaldev/image/fetch/s--985QhLxv--/c_fill,f_auto,fl_progressive,h_50,q_auto,w_50/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/325104/a7d59066-2713-48d2-aa92-6db649676a1f.jpeg",
  "description": "Nice photo",
  "createdAt": "2022-10-17T04:12:17.162Z",
  "updatedAt": "2022-10-17T04:12:17.162Z",
 
}
```

#

### &nbsp; ‣ &nbsp; Get photo by link

```http
GET /photo

```

### &nbsp; ☰ &nbsp; Headers

| Headers     | Type     | Description           |
| :---------- | :------- | :-------------------- |
| `Authorization` | `string` | **Required**. token |

<br/>

`Authorization Format: Bearer <token>`

<br/>

### &nbsp; ☰ &nbsp; Request


| Body             | Type     | Description                        |
| :--------------- | :------- | :--------------------------------- |
| `link`           | `string<uri>` | **Required**. valid image uri     |
| `description`         | `string` | **Optional**. valid description         |


<br/>

`Link Format: valid image link`

`Description Format: <string>`

#### Body Example

```json
{
  "link": "https://res.cloudinary.com/practicaldev/image/fetch/s--985QhLxv--/c_fill,f_auto,fl_progressive,h_50,q_auto,w_50/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/325104/a7d59066-2713-48d2-aa92-6db649676a1f.jpeg",
  "description": "Nice photo"
}
```

### &nbsp; ☰ &nbsp; Responses

| Status Code |      Description      |          Properties           |
| :---------: | :-------------------: | :---------------------------: |
|   **200**   |        OK        |   `data: { Photo }`    |
|   **401**   |    Unauthorized   | `error: { message, details }` |
|   **404**   |    Not Found    | `error: { message, details }` |
|   **422**   |    Unprocessable Entity    | `error: { message, details }` |
|   **500**   | Internal Server Error | `error: { message, details }` |

#### Example Photo data:
```json
{
	
  "id": 1,
  "link": "https://res.cloudinary.com/practicaldev/image/fetch/s--985QhLxv--/c_fill,f_auto,fl_progressive,h_50,q_auto,w_50/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/325104/a7d59066-2713-48d2-aa92-6db649676a1f.jpeg",
  "description": "Nice photo",
  "createdAt": "2022-10-17T04:12:17.162Z",
  "updatedAt": "2022-10-17T04:12:17.162Z",
 
}
```

#

## Phone

### &nbsp; ‣ &nbsp; Register phone

```http
POST /phone/create
```

### &nbsp; ☰ &nbsp; Headers

| Headers     | Type     | Description           |
| :---------- | :------- | :-------------------- |
| `Authorization` | `string` | **Required**. token |

<br/>

`Authorization Format: Bearer <token>`

<br/>

### &nbsp; ☰ &nbsp; Request


| Body             | Type     | Description                        |
| :--------------- | :------- | :--------------------------------- |
| `number`           | `string<numbers>` | **Required**. valid string with numbers     |


<br/>

`Number Format: DDI DDD XXXXXXXXX - Ex: 5521987456123`


#### Body Example

```json
{
  "number": "5521987456123"
}
```

### &nbsp; ☰ &nbsp; Responses

| Status Code |      Description      |          Properties           |
| :---------: | :-------------------: | :---------------------------: |
|   **201**   |        Created        |   `data: { Phone }`    |
|   **401**   |    Unauthorized   | `error: { message, details }` |
|   **409**   |    Conflict    | `error: { message, details }` |
|   **422**   |    Unprocessable Entity    | `error: { message, details }` |
|   **500**   | Internal Server Error | `error: { message, details }` |

#### Example Phone data:
```json
{
	
  "id": 1,
  "number": "5521987456123",
  "createdAt": "2022-10-17T04:12:17.162Z",
  "updatedAt": "2022-10-17T04:12:17.162Z",
 
}
```

### &nbsp; ‣ &nbsp; Get phone by id

```http
GET /phone/:id
```

### &nbsp; ☰ &nbsp; Params

| Param     | Type     | Description           |
| :---------- | :------- | :-------------------- |
| `id` | `number` | **Required**. number |

<br/>

`id Format:  <number>`

<br/> 

### &nbsp; ☰ &nbsp; Headers

| Headers     | Type     | Description           |
| :---------- | :------- | :-------------------- |
| `Authorization` | `string` | **Required**. token |

<br/>

`Authorization Format: Bearer <token>`

<br/>


### &nbsp; ☰ &nbsp; Responses

| Status Code |      Description      |          Properties           |
| :---------: | :-------------------: | :---------------------------: |
|   **200**   |        OK        |   `data: { Phone }`    |
|   **401**   |    Unauthorized   | `error: { message, details }` |
|   **404**   |    Not Found   | `error: { message, details }` |
|   **422**   |    Unprocessable Entity    | `error: { message, details }` |
|   **500**   | Internal Server Error | `error: { message, details }` |

#### Example Phone data:
```json
{
	
  "id": 1,
  "number": "5521987456123",
  "createdAt": "2022-10-17T04:12:17.162Z",
  "updatedAt": "2022-10-17T04:12:17.162Z",
 
}
```
#
### &nbsp; ‣ &nbsp; Get phone by number

```http
GET /phone
```

## &nbsp; ☰ &nbsp; Params

| Param     | Type     | Description           |
| :---------- | :------- | :-------------------- |
| `id` | `number` | **Required**. number |

<br/>

`id Format:  <number>`

<br/> 

### &nbsp; ☰ &nbsp; Headers

| Headers     | Type     | Description           |
| :---------- | :------- | :-------------------- |
| `Authorization` | `string` | **Required**. token |

<br/>

`Authorization Format: Bearer <token>`

<br/>

### &nbsp; ☰ &nbsp; Request


| Body             | Type     | Description                        |
| :--------------- | :------- | :--------------------------------- |
| `number`           | `string<numbers>` | **Required**. valid string with numbers     |


<br/>

`Number Format: DDI DDD XXXXXXXXX - Ex: 5521987456123`


#### Body Example

```json
{
  "number": "5521987456123"
}
```

### &nbsp; ☰ &nbsp; Responses

| Status Code |      Description      |          Properties           |
| :---------: | :-------------------: | :---------------------------: |
|   **200**   |        OK        |   `data: { Phone }`    |
|   **401**   |    Unauthorized   | `error: { message, details }` |
|   **404**   |    Not Found    | `error: { message, details }` |
|   **422**   |    Unprocessable Entity    | `error: { message, details }` |
|   **500**   | Internal Server Error | `error: { message, details }` |

#### Example Phone data:
```json
{
	
  "id": 1,
  "number": "5521987456123",
  "createdAt": "2022-10-17T04:12:17.162Z",
  "updatedAt": "2022-10-17T04:12:17.162Z",
 
}
```

#

## Register in a Lobby

### &nbsp; ‣ &nbsp; Register user in a lobby

```http
POST /lobbyUser/create/:lobbyId
```

## &nbsp; ☰ &nbsp; Params

| Param     | Type     | Description           |
| :---------- | :------- | :-------------------- |
| `lobbyId` | `number` | **Required**. number |

<br/>

`lobbyId Format: <number>`

<br/> 

### &nbsp; ☰ &nbsp; Headers

| Headers     | Type     | Description           |
| :---------- | :------- | :-------------------- |
| `Authorization` | `string` | **Required**. token |

<br/>

`Authorization Format: Bearer <token>`

<br/>


### &nbsp; ☰ &nbsp; Responses

| Status Code |      Description      |          Properties           |
| :---------: | :-------------------: | :---------------------------: |
|   **201**   |        Created        |   `data: { LobbyUser }`    |
|   **401**   |    Unauthorized   | `error: { message, details }` |
|   **409**   |    Conflict    | `error: { message, details }` |
|   **422**   |    Unprocessable Entity    | `error: { message, details }` |
|   **500**   | Internal Server Error | `error: { message, details }` |

#### Example LobbyUser data:
```json
{
  "id": 1,
  "userId": 1,
  "lobbyId":1,
  "createdAt": "2022-10-17T04:12:17.162Z",
  "updatedAt": "2022-10-17T04:12:17.162Z",
}
```
#

## Lobby

### &nbsp; ‣ &nbsp; Create a lobby

```http
POST /lobby/create
```

### &nbsp; ☰ &nbsp; Headers

| Headers     | Type     | Description           |
| :---------- | :------- | :-------------------- |
| `Authorization` | `string` | **Required**. token |

<br/>

`Authorization Format: Bearer <token>`

<br/>

### &nbsp; ☰ &nbsp; Request


| Body             | Type     | Description                        |
| :--------------- | :------- | :--------------------------------- |
| `title`           | `string` | **Required**. valid string      |
| `description`           | `string` | **Optional**. valid string      |
| `eventDate`           | `Date` | **Required**. valid date      |
| `eventTimeStart`           | `string` | **Required**. valid string      |
| `eventTimeEnd`           | `string` | **Required**. valid string      |
| `minParticipants`           | `number` | **Required**. valid positive number not null     |
| `maxParticipants`           | `number` | **Required**. valid positive number not null     |
| `allowedParticipants`           | `string` | **Required**. valid string type "MEN" | "WOMEN" | "MIXED"     |
| `status`           | `string` | **Required**. valid string type "OPEN" | "ONGOING" | "CLOSED" | "FULL"     |
| `sportId`           | `number` | **Required**. valid positive number not null     |
| `eventLocalId`           | `number` | **Required**. valid positive number not null     |

<br/>

`Title Format: text string min of 10 characteres and maximum of 50`

`Description Format: text string max of 255 characteres`

`EventDate Format: MM/DD/YYYY`

`EventTimeStart Format: hh:mm - 24h format`

`EventTimeEnd Format: hh:mm - 24h format`

`MinParticipants Format: not null positive number`

`MaxParticipants Format: not null positive number`

`AllowedParticipants Format: Must be MEN" , "WOMEN" or "MIXED`

`Status Format: Must be OPEN", "ONGOING", "CLOSED" or "FULL"`

`SportId Format: not null positive number`

`EventLocalId Format: not null positive number`

<br/>


#### Body Example

```json
{
  "title": "Futebol na Manet",
  "status": "OPEN",
  "eventDate": "10/09/2022",
  "eventTimeStart": "01:00",
  "eventTimeEnd": "06:00",
  "minParticipants":"8",
  "maxParticipants": "24",
  "allowedParticipants": "MIXED",
  "sportId":"1",
  "eventLocalId": "1"
}
```

### &nbsp; ☰ &nbsp; Responses

| Status Code |      Description      |          Properties           |
| :---------: | :-------------------: | :---------------------------: |
|   **201**   |        Created        |   `data: { LobbyResponse }`    |
|   **401**   |    Unauthorized   | `error: { message, details }` |
|   **409**   |    Conflict    | `error: { message, details }` |
|   **422**   |    Unprocessable Entity    | `error: { message, details }` |
|   **500**   | Internal Server Error | `error: { message, details }` |

#### Example LobbyResponse data:
```json
{
  "id": 1,
  "title": "Futebol na Manet",
  "status": "OPEN",
  "description": "No description",
  "eventDate": "2022-10-09T03:00:00.000Z",
  "eventTimeStart": "01:00",
  "eventTimeEnd": "06:00",
  "minParticipants": 8,
  "maxParticipants": 24,
  "allowedParticipants": "MIXED",
  "createdAt": "2022-10-17T15:07:35.359Z",
  "updatedAt": "2022-10-17T15:07:35.359Z",
  "userHostId": 2,
  "sportId": 1,
  "eventLocalId": 1,
  "lobbiesUsers": [
    {
      "id": 1,
      "createdAt": "2022-10-17T15:07:35.359Z",
      "updatedAt": "2022-10-17T15:07:35.359Z",
      "userId": 2,
      "lobbyId": 1
    }
}
```
# 

### &nbsp; ‣ &nbsp; Get a lobby by id

```http
GET /lobby/:id
```

### &nbsp; ☰ &nbsp; Params

| Param     | Type     | Description           |
| :---------- | :------- | :-------------------- |
| `id` | `number` | **Required**. number |

<br/>

`id Format:  not null positive number`

<br/> 

### &nbsp; ☰ &nbsp; Headers

| Headers     | Type     | Description           |
| :---------- | :------- | :-------------------- |
| `Authorization` | `string` | **Required**. token |

<br/>

`Authorization Format: Bearer <token>`

<br/>


### &nbsp; ☰ &nbsp; Responses

| Status Code |      Description      |          Properties           |
| :---------: | :-------------------: | :---------------------------: |
|   **200**   |        OK        |   `data: { LobbyResponse }`    |
|   **401**   |    Unauthorized   | `error: { message, details }` |
|   **404**   |    Not Found   | `error: { message, details }` |
|   **422**   |    Unprocessable Entity    | `error: { message, details }` |
|   **500**   | Internal Server Error | `error: { message, details }` |

#### Example LobbyResponse data:
```json
{
  "id": 1,
  "title": "Futebol na Van Gogh",
  "description": "No description",
  "eventDate": "2022-10-09T03:00:00.000Z",
  "eventTimeStart": "01:00",
  "eventTimeEnd": "06:00",
  "minParticipants": 8,
  "maxParticipants": 24,
  "allowedParticipants": "MIXED",
  "createdAt": "2022-10-17T15:07:35.359Z",
  "updatedAt": "2022-10-17T15:07:35.359Z",
  "userHost": {
    "createdAt": "2022-10-17T04:11:31.456Z",
    "profiles": [
      {
        "userId": 2,
        "userName": "jeniferMoura1",
        "sex": "FEMALECISGENDER",
        "score": 0,
        "photo": {
          "description": "no description",
          "link": "https://ssl.gstatic.com/calendar/images/dynamiclogo_2020q4/calendar_3_2x.png"
        }
      }
    ]
  },
  "sport": {
    "name": "Basketball"
  },
  "eventLocal": {
    "name": "Praça Van Gogh",
    "isPublic": false,
    "isOutdoor": false,
    "photo": {
      "description": "no description",
      "link": "https://ssl.gstatic.com/calendar/images/dynamiclogo_2020q4/calendar_3_2x.png"
    },
    "address": {
      "street": "Rua Qualquer de Guimarães",
      "number": "no number",
      "complement": "no complement",
      "zipCode": "11111111",
      "city": {
        "name": "Rio de Janeiro",
        "state": {
          "name": "Rio de Janeiro"
        }
      }
    }
  },
  "lobbiesUsers": []
}
```
#

### &nbsp; ‣ &nbsp; Get all lobbies

```http
GET /lobbies
```

### &nbsp; ☰ &nbsp; Headers

| Headers     | Type     | Description           |
| :---------- | :------- | :-------------------- |
| `Authorization` | `string` | **Required**. token |

<br/>

`Authorization Format: Bearer <token>`

<br/>


### &nbsp; ☰ &nbsp; Responses

| Status Code |      Description      |          Properties           |
| :---------: | :-------------------: | :---------------------------: |
|   **200**   |        OK        |   `data: { LobbyResponse }`    |
|   **401**   |    Unauthorized   | `error: { message, details }` |
|   **500**   | Internal Server Error | `error: { message, details }` |

#### Example LobbyResponse data:
```json
[
  {
    "id": 1,
    "title": "Futebol na Manet",
    "description": "No description",
    "eventDate": "2022-10-09T03:00:00.000Z",
    "eventTimeStart": "01:00",
    "eventTimeEnd": "06:00",
    "minParticipants": 8,
    "maxParticipants": 24,
    "allowedParticipants": "MIXED",
    "createdAt": "2022-10-17T15:07:35.359Z",
    "updatedAt": "2022-10-17T15:07:35.359Z",
    "userHost": {
      "createdAt": "2022-10-17T04:11:31.456Z",
      "profiles": [
        {
          "userId": 2,
          "userName": "fernand22",
          "sex": "FEMALECISGENDER",
          "score": 0,
          "photo": {
            "description": "no description",
            "link": "https://ssl.gstatic.com/calendar/images/dynamiclogo_2020q4/calendar_3_2x.png"
          }
        }
      ]
    },
    "sport": {
      "name": "Basketball"
    },
    "eventLocal": {
      "name": "Praça Manet",
      "isPublic": false,
      "isOutdoor": false,
      "photo": {
        "description": "no description",
        "link": "https://ssl.gstatic.com/calendar/images/dynamiclogo_2020q4/calendar_3_2x.png"
      },
      "address": {
        "street": "5th avenue",
        "number": "no number",
        "complement": "no complement",
        "zipCode": "99987789",
        "city": {
          "name": "Rio de Janeiro",
          "state": {
            "name": "Rio de Janeiro"
          }
        }
      }
    },
    "lobbiesUsers": []
  }
]
```

#

## Event Local

### &nbsp; ‣ &nbsp; Create event local

```http
POST /eventLocal/create
```

### &nbsp; ☰ &nbsp; Headers

| Headers     | Type     | Description           |
| :---------- | :------- | :-------------------- |
| `Authorization` | `string` | **Required**. token |

<br/>

`Authorization Format: Bearer <token>`

<br/>

### &nbsp; ☰ &nbsp; Request


| Body             | Type     | Description                        |
| :--------------- | :------- | :--------------------------------- |
| `name`           | `string` | **Required**. valid string      |
| `isPublic`           | `boolean` | **Optional**. valid boolean      |
| `isOutdoor`           | `boolean` | **Optional**. valid boolean      |
| `photoId`           | `number` | **Required**. valid positive number not null     |
| `addressId`           | `number` | **Required**. valid positive number not null     |


<br/>

`Name Format: text string min of 10 characteres and maximum of 50`

`isOutdoor Format: true or false`

`isPublic Format: true or false`

`PhotoId Format: not null positive number`

`AddressId Format: not null positive number`

<br/>


#### Body Example

```json
{
  "name": "Praça Manet",
  "addressId": "1",
  "photoId": "1"
}
```

### &nbsp; ☰ &nbsp; Responses

| Status Code |      Description      |          Properties           |
| :---------: | :-------------------: | :---------------------------: |
|   **201**   |        Created        |   `data: { EventLocal }`    |
|   **401**   |    Unauthorized   | `error: { message, details }` |
|   **409**   |    Conflict    | `error: { message, details }` |
|   **422**   |    Unprocessable Entity    | `error: { message, details }` |
|   **500**   | Internal Server Error | `error: { message, details }` |

#### Example EventLocal data:
```json
{
  "id": 2,
  "name": "Engenhão  Portão Norte",
  "isPublic": false,
  "isOutdoor": false,
  "createdAt": "2022-10-17T15:45:29.469Z",
  "updatedAt": "2022-10-17T15:45:29.469Z",
  "addressId": 2,
  "photoId": 1
}
```
#

## &nbsp; ‣ &nbsp; Get event local by address id

```http
GET /eventLocal/address/:addressId
```

### &nbsp; ☰ &nbsp; Params

| Param     | Type     | Description           |
| :---------- | :------- | :-------------------- |
| `addressId` | `number` | **Required**. number |

<br/>

`addressId Format:  not null positive number`

<br/> 

### &nbsp; ☰ &nbsp; Headers

| Headers     | Type     | Description           |
| :---------- | :------- | :-------------------- |
| `Authorization` | `string` | **Required**. token |

<br/>

`Authorization Format: Bearer <token>`

<br/>


### &nbsp; ☰ &nbsp; Responses

| Status Code |      Description      |          Properties           |
| :---------: | :-------------------: | :---------------------------: |
|   **200**   |        OK        |   `data: { EventLocal }`    |
|   **401**   |    Unauthorized   | `error: { message, details }` |
|   **404**   |    Not Found   | `error: { message, details }` |
|   **422**   |    Unprocessable Entity    | `error: { message, details }` |
|   **500**   | Internal Server Error | `error: { message, details }` |

#### Example EventLocal data:
```json
{
  "id": 2,
  "name": "Engenhão  Portão Norte",
  "isPublic": false,
  "isOutdoor": false,
  "createdAt": "2022-10-17T15:45:29.469Z",
  "updatedAt": "2022-10-17T15:45:29.469Z",
  "addressId": 2,
  "photoId": 1
}
```

#

## &nbsp; ‣ &nbsp; Get event local by id

```http
GET /eventLocal/:id'
```

### &nbsp; ☰ &nbsp; Params

| Param     | Type     | Description           |
| :---------- | :------- | :-------------------- |
| `id` | `number` | **Required**. number |

<br/>

`id Format:  not null positive number`

<br/> 

### &nbsp; ☰ &nbsp; Headers

| Headers     | Type     | Description           |
| :---------- | :------- | :-------------------- |
| `Authorization` | `string` | **Required**. token |

<br/>

`Authorization Format: Bearer <token>`

<br/>


### &nbsp; ☰ &nbsp; Responses

| Status Code |      Description      |          Properties           |
| :---------: | :-------------------: | :---------------------------: |
|   **200**   |        OK        |   `data: { EventLocal }`    |
|   **401**   |    Unauthorized   | `error: { message, details }` |
|   **404**   |    Not Found   | `error: { message, details }` |
|   **422**   |    Unprocessable Entity    | `error: { message, details }` |
|   **500**   | Internal Server Error | `error: { message, details }` |

#### Example EventLocal data:
```json
{
  "id": 2,
  "name": "Engenhão  Portão Norte",
  "isPublic": false,
  "isOutdoor": false,
  "createdAt": "2022-10-17T15:45:29.469Z",
  "updatedAt": "2022-10-17T15:45:29.469Z",
  "addressId": 2,
  "photoId": 1
}
```

#

## Address

### &nbsp; ‣ &nbsp; Create address

```http
POST /address/create
```

### &nbsp; ☰ &nbsp; Headers

| Headers     | Type     | Description           |
| :---------- | :------- | :-------------------- |
| `Authorization` | `string` | **Required**. token |

<br/>

`Authorization Format: Bearer <token>`

<br/>

### &nbsp; ☰ &nbsp; Request


| Body             | Type     | Description                        |
| :--------------- | :------- | :--------------------------------- |
| `zipCode`           | `string` | **Required**. valid string with only numbers      |
| `number`           | `string` | **Optional**. valid string with only numbers      |
| `complement`           | `string` | **Optional**. valid string      |
| `neighborhood`           | `string` | **Optional**. valid string      |
| `street`           | `string` | **Optional**. valid string     |


<br/>

`ZipCode Format: 8 digits length - XXXXXXXX (X=Number)`

`Number Format: Only numbers`

`Complement Format: Any string`

`Neighborhood Format: Any string`

`Street Format: Any String`

<br/>


#### Body Example

```json
{
  "zipCode": "18147000",
  "neighborhood": "Centro",
  "street": "Rua da Igreja"
}
```

### &nbsp; ☰ &nbsp; Responses

| Status Code |      Description      |          Properties           |
| :---------: | :-------------------: | :---------------------------: |
|   **201**   |        Created        |   `data: { Address }`    |
|   **401**   |    Unauthorized   | `error: { message, details }` |
|   **409**   |    Conflict    | `error: { message, details }` |
|   **422**   |    Unprocessable Entity    | `error: { message, details }` |
|   **500**   | Internal Server Error | `error: { message, details }` |

#### Example Address data:
```json
{
  "id": 5,
  "street": "Rua da Igreja",
  "number": "1",
  "complement": "no complement",
  "zipCode": "18147000",
  "neighborhood": "Centro",
  "createdAt": "2022-10-17T17:09:36.555Z",
  "updatedAt": "2022-10-17T17:09:36.555Z",
  "cityId": 9715
}
```

#

## &nbsp; ‣ &nbsp; Get address

```http
GET /address'
```

### &nbsp; ☰ &nbsp; Headers

| Headers     | Type     | Description           |
| :---------- | :------- | :-------------------- |
| `Authorization` | `string` | **Required**. token |

<br/>

`Authorization Format: Bearer <token>`

<br/>

### &nbsp; ☰ &nbsp; Request


| Body             | Type     | Description                        |
| :--------------- | :------- | :--------------------------------- |
| `zipCode`           | `string` | **Required**. valid string with only numbers      |
| `number`           | `string` | **Optional**. valid string with only numbers      |
| `complement`           | `string` | **Optional**. valid string      |


<br/>

`ZipCode Format: 8 digits length - XXXXXXXX (X=Number)`

`Number Format: Only numbers`

`Complement Format: Any string`


<br/>


#### Body Example

```json
{
  "zipCode": "18147000"
}
```


### &nbsp; ☰ &nbsp; Responses

| Status Code |      Description      |          Properties           |
| :---------: | :-------------------: | :---------------------------: |
|   **200**   |        OK        |   `data: { Address }`    |
|   **401**   |    Unauthorized   | `error: { message, details }` |
|   **404**   |    Not Found   | `error: { message, details }` |
|   **422**   |    Unprocessable Entity    | `error: { message, details }` |
|   **500**   | Internal Server Error | `error: { message, details }` |

#### Example Address data:
```json
{
  "id": 2,
  "name": "Engenhão  Portão Norte",
  "isPublic": false,
  "isOutdoor": false,
  "createdAt": "2022-10-17T15:45:29.469Z",
  "updatedAt": "2022-10-17T15:45:29.469Z",
  "addressId": 2,
  "photoId": 1
}
```
#

## Sport

### &nbsp; ‣ &nbsp; Get all sports

```http
GET /sports
```

### &nbsp; ☰ &nbsp; Headers

| Headers     | Type     | Description           |
| :---------- | :------- | :-------------------- |
| `Authorization` | `string` | **Required**. token |

<br/>

`Authorization Format: Bearer <token>`

<br/>


### &nbsp; ☰ &nbsp; Responses

| Status Code |      Description      |          Properties           |
| :---------: | :-------------------: | :---------------------------: |
|   **200**   |        OK        |   `data: [ Sports ]`    |
|   **401**   |    Unauthorized   | `error: { message, details }` |
|   **500**   | Internal Server Error | `error: { message, details }` |

#### Example Sports data:
```json
[
  {
    "id": 19,
    "name": "Altinha",
    "createdAt": "2022-10-06T19:57:35.422Z",
    "updatedAt": "2022-10-06T19:57:35.422Z"
  },
  {
    "id": 1,
    "name": "Basketball",
    "createdAt": "2022-10-06T19:57:35.422Z",
    "updatedAt": "2022-10-06T19:57:35.422Z"
  },
  {
    "id": 26,
    "name": "Bowling",
    "createdAt": "2022-10-06T19:57:35.422Z",
    "updatedAt": "2022-10-06T19:57:35.422Z"
  },
  {
    "id": 22,
    "name": "Cycling Urban",
    "createdAt": "2022-10-06T19:57:35.422Z",
    "updatedAt": "2022-10-06T19:57:35.422Z"
  },
  {
    "id": 20,
    "name": "Fencing",
    "createdAt": "2022-10-06T19:57:35.422Z",
    "updatedAt": "2022-10-06T19:57:35.422Z"
  },
  {
    "id": 3,
    "name": "Football",
    "createdAt": "2022-10-06T19:57:35.422Z",
    "updatedAt": "2022-10-06T19:57:35.422Z"
  },
  {
    "id": 6,
    "name": "Golf",
    "createdAt": "2022-10-06T19:57:35.422Z",
    "updatedAt": "2022-10-06T19:57:35.422Z"
  },
  {
    "id": 16,
    "name": "Handball",
    "createdAt": "2022-10-06T19:57:35.422Z",
    "updatedAt": "2022-10-06T19:57:35.422Z"
  },
  {
    "id": 9,
    "name": "Hockey",
    "createdAt": "2022-10-06T19:57:35.422Z",
    "updatedAt": "2022-10-06T19:57:35.422Z"
  },
  {
    "id": 25,
    "name": "Ice Skating",
    "createdAt": "2022-10-06T19:57:35.422Z",
    "updatedAt": "2022-10-06T19:57:35.422Z"
  },
  {
    "id": 11,
    "name": "Kickball",
    "createdAt": "2022-10-06T19:57:35.422Z",
    "updatedAt": "2022-10-06T19:57:35.422Z"
  },
  {
    "id": 53,
    "name": "Other",
    "createdAt": "2022-10-06T20:26:33.032Z",
    "updatedAt": "2022-10-06T20:26:33.032Z"
  },
  {
    "id": 7,
    "name": "Pickleball",
    "createdAt": "2022-10-06T19:57:35.422Z",
    "updatedAt": "2022-10-06T19:57:35.422Z"
  },
  {
    "id": 24,
    "name": "Roller Skate",
    "createdAt": "2022-10-06T19:57:35.422Z",
    "updatedAt": "2022-10-06T19:57:35.422Z"
  },
  {
    "id": 12,
    "name": "Rugby",
    "createdAt": "2022-10-06T19:57:35.422Z",
    "updatedAt": "2022-10-06T19:57:35.422Z"
  },
  {
    "id": 10,
    "name": "Running",
    "createdAt": "2022-10-06T19:57:35.422Z",
    "updatedAt": "2022-10-06T19:57:35.422Z"
  },
  {
    "id": 23,
    "name": "Skateboarding",
    "createdAt": "2022-10-06T19:57:35.422Z",
    "updatedAt": "2022-10-06T19:57:35.422Z"
  },
  {
    "id": 21,
    "name": "Slack Line",
    "createdAt": "2022-10-06T19:57:35.422Z",
    "updatedAt": "2022-10-06T19:57:35.422Z"
  },
  {
    "id": 2,
    "name": "Soccer",
    "createdAt": "2022-10-06T19:57:35.422Z",
    "updatedAt": "2022-10-06T19:57:35.422Z"
  },
  {
    "id": 17,
    "name": "Soccer Beach",
    "createdAt": "2022-10-06T19:57:35.422Z",
    "updatedAt": "2022-10-06T19:57:35.422Z"
  },
  {
    "id": 13,
    "name": "Softball",
    "createdAt": "2022-10-06T19:57:35.422Z",
    "updatedAt": "2022-10-06T19:57:35.422Z"
  },
  {
    "id": 14,
    "name": "Swimming",
    "createdAt": "2022-10-06T19:57:35.422Z",
    "updatedAt": "2022-10-06T19:57:35.422Z"
  },
  {
    "id": 8,
    "name": "Tennis",
    "createdAt": "2022-10-06T19:57:35.422Z",
    "updatedAt": "2022-10-06T19:57:35.422Z"
  },
  {
    "id": 5,
    "name": "Ultimate Frisbee",
    "createdAt": "2022-10-06T19:57:35.422Z",
    "updatedAt": "2022-10-06T19:57:35.422Z"
  },
  {
    "id": 4,
    "name": "Volleyball",
    "createdAt": "2022-10-06T19:57:35.422Z",
    "updatedAt": "2022-10-06T19:57:35.422Z"
  },
  {
    "id": 18,
    "name": "Volleyball Beach",
    "createdAt": "2022-10-06T19:57:35.422Z",
    "updatedAt": "2022-10-06T19:57:35.422Z"
  },
  {
    "id": 15,
    "name": "Yoga",
    "createdAt": "2022-10-06T19:57:35.422Z",
    "updatedAt": "2022-10-06T19:57:35.422Z"
  }
]
```

#
</br>

</br>

## Lessons Learned

In this project I learned a lot about how to structure an API with TypeScript, apply Prisma ( ORM ) to manage migrations and database, test the API with automatized tests with Jest and Supertest

</br>

## Acknowledgements

-   [Awesome Badges](https://github.com/Envoy-VC/awesome-badges)

</br>

## Authors

-   [Victor Hugo Simões](https://github.com/VicterHuger)
<br/>
