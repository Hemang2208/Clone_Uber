# User Registration Endpoint Documentation

## Overview

This endpoint allows for the registration of a new user. It performs input validation and creates a new user record in the database.

## HTTP Method

`POST`

## Endpoint URL

`/users/register`

## Request Payload

```json
{
  "fullname": {
    "firstname": "string (min 3 characters, required)",
    "middlename": "string (optional)",
    "lastname": "string (optional)"
  },
  "email": "string (valid email format, required)",
  "password": "string (min 6 characters, required)"
}
```

### Payload Fields

- **fullname.firstname**: A string representing the user's first name. Must be at least 3 characters long. (Required)
- **fullname.middlename**: A string representing the user's middle name. (Optional)
- **fullname.lastname**: A string representing the user's last name. (Optional)
- **email**: A string representing the user's email address. Must be a valid email format. (Required)
- **password**: A string representing the user's password. Must be at least 6 characters long. (Required)

## Successful Response

- **Status Code:** `201 Created`
- **Response Body:**

```json
{
    "message": "User registered successfully",
    "token": "JWT token",
    "user": { "user details" }
}
```

## Error Responses

- **400 Bad Request:** This error occurs when the request payload fails validation.
- **500 Internal Server Error:** This error occurs due to server-side issues.

## Notes

- Ensure that all required fields are provided in the request payload.
- The email must be unique and not already registered in the system.
- The password should be stored securely using hashing algorithms.

<br>
<br>
<br>

# User Login Endpoint Documentation

## Overview

This endpoint allows for the authentication of a user. It performs input validation and returns a JWT token if the credentials are valid.

## HTTP Method

`POST`

## Endpoint URL

`/users/login`

## Request Payload

```json
{
  "email": "string (valid email format, required)",
  "password": "string (min 6 characters, required)"
}
```

### Payload Fields

- **email**: A string representing the user's email address. Must be a valid email format. (Required)
- **password**: A string representing the user's password. Must be at least 6 characters long. (Required)

## Successful Response

- **Status Code:** `200 OK`
- **Response Body:**

```json
{
    "token": "JWT token",
    "user": { "user details" }
}
```

## Error Responses

- **400 Bad Request:** This error occurs when the request payload fails validation.
- **401 Unauthorized:** This error occurs when the email or password is incorrect.
- **500 Internal Server Error:** This error occurs due to server-side issues.

## Notes

- Ensure that all required fields are provided in the request payload.
- The email and password must match an existing user in the system.

<br>
<br>
<br>

# User Profile Endpoint Documentation

## Overview

This endpoint allows an authenticated user to retrieve their profile information.

## HTTP Method

`GET`

## Endpoint URL

`/users/profile`

## Request Headers

- **Authorization:** `Bearer <JWT token>`

## Successful Response

- **Status Code:** `200 OK`
- **Response Body:**

```json
{
    "user": { "user details" }
}
```

## Error Responses

- **401 Unauthorized:** This error occurs when the user is not authenticated or the token is invalid.
- **500 Internal Server Error:** This error occurs due to server-side issues.

## Notes

- Ensure that the request includes a valid JWT token in the Authorization header.

<br>
<br>
<br>

# User Logout Endpoint Documentation

## Overview

This endpoint allows an authenticated user to log out by invalidating their JWT token.

## HTTP Method

`GET`

## Endpoint URL

`/users/logout`

## Request Headers

- **Authorization:** `Bearer <JWT token>`

## Successful Response

- **Status Code:** `200 OK`
- **Response Body:**

```json
{
  "message": "Logged Out Successfully"
}
```

## Error Responses

- **401 Unauthorized:** This error occurs when the user is not authenticated or the token is invalid.
- **500 Internal Server Error:** This error occurs due to server-side issues.

## Notes

- Ensure that the request includes a valid JWT token in the Authorization header.

<br>
<br>
<br>

# Captain Registration Endpoint Documentation

## Overview

This endpoint allows for the registration of a new captain. It performs input validation and creates a new captain record in the database.

## HTTP Method

`POST`

## Endpoint URL

`/captains/register`

## Request Payload

```json
{
  "fullname": {
    "firstname": "string (min 3 characters, required)",
    "middlename": "string (optional)",
    "lastname": "string (optional)"
  },
  "email": "string (valid email format, required)",
  "password": "string (min 6 characters, required)",
  "vehicalColor": "string (required)",
  "vehicalBrand": "string (required)",
  "vehicalModel": "string (required)",
  "plateNumber": "string (required)",
  "capacity": "number (required)",
  "vehicalType": "string (required)"
}
```

### Payload Fields

- **fullname.firstname**: A string representing the captain's first name. Must be at least 3 characters long. (Required)
- **fullname.middlename**: A string representing the captain's middle name. (Optional)
- **fullname.lastname**: A string representing the captain's last name. (Optional)
- **email**: A string representing the captain's email address. Must be a valid email format. (Required)
- **password**: A string representing the captain's password. Must be at least 6 characters long. (Required)
- **vehicalColor**: A string representing the color of the captain's vehicle. (Required)
- **vehicalBrand**: A string representing the brand of the captain's vehicle. (Required)
- **vehicalModel**: A string representing the model of the captain's vehicle. (Required)
- **plateNumber**: A string representing the plate number of the captain's vehicle. (Required)
- **capacity**: A number representing the capacity of the captain's vehicle. (Required)
- **vehicalType**: A string representing the type of the captain's vehicle. (Required)

## Successful Response

- **Status Code:** `201 Created`
- **Response Body:**

```json
{
    "message": "Captain registered successfully",
    "token": "JWT token",
    "captain": { "captain details" }
}
```

## Error Responses

- **400 Bad Request:** This error occurs when the request payload fails validation.
- **500 Internal Server Error:** This error occurs due to server-side issues.

## Notes

- Ensure that all required fields are provided in the request payload.
- The email must be unique and not already registered in the system.
- The password should be stored securely using hashing algorithms.

<br>
<br>
<br>

# Captain Login Endpoint Documentation

## Overview

This endpoint allows for the authentication of a captain. It performs input validation and returns a JWT token if the credentials are valid.

## HTTP Method

`POST`

## Endpoint URL

`/captains/login`

## Request Payload

```json
{
  "email": "string (valid email format, required)",
  "password": "string (min 6 characters, required)"
}
```

### Payload Fields

- **email**: A string representing the captain's email address. Must be a valid email format. (Required)
- **password**: A string representing the captain's password. Must be at least 6 characters long. (Required)

## Successful Response

- **Status Code:** `200 OK`
- **Response Body:**

```json
{
    "token": "JWT token",
    "captain": { "captain details" }
}
```

## Error Responses

- **400 Bad Request:** This error occurs when the request payload fails validation.
- **401 Unauthorized:** This error occurs when the email or password is incorrect.
- **500 Internal Server Error:** This error occurs due to server-side issues.

## Notes

- Ensure that all required fields are provided in the request payload.
- The email and password must match an existing captain in the system.

<br>
<br>
<br>

# Captain Profile Endpoint Documentation

## Overview

This endpoint allows an authenticated captain to retrieve their profile information.

## HTTP Method

`GET`

## Endpoint URL

`/captains/profile`

## Request Headers

- **Authorization:** `Bearer <JWT token>`

## Successful Response

- **Status Code:** `200 OK`
- **Response Body:**

```json
{
    "captain": { "captain details" }
}
```

## Error Responses

- **401 Unauthorized:** This error occurs when the captain is not authenticated or the token is invalid.
- **500 Internal Server Error:** This error occurs due to server-side issues.

## Notes

- Ensure that the request includes a valid JWT token in the Authorization header.

<br>
<br>
<br>

# Captain Logout Endpoint Documentation

## Overview

This endpoint allows an authenticated captain to log out by invalidating their JWT token.

## HTTP Method

`GET`

## Endpoint URL

`/captains/logout`

## Request Headers

- **Authorization:** `Bearer <JWT token>`

## Successful Response

- **Status Code:** `200 OK`
- **Response Body:**

```json
{
  "message": "Captain Logged Out Successfully"
}
```

## Error Responses

- **401 Unauthorized:** This error occurs when the captain is not authenticated or the token is invalid.
- **500 Internal Server Error:** This error occurs due to server-side issues.

## Notes

- Ensure that the request includes a valid JWT token in the Authorization header.
