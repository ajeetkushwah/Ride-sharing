# BACKEND API Documentation

## Description

The `/users/register` endpoint is used to create a new user account. It validates the incoming data, hashes the password before storing it, creates the user, and returns a JSON Web Token along with the user details.

## HTTP Method

`POST`

### Endpoint

`/users/register`

## Request Body

The endpoint expects a JSON payload with the following fields:

- **fullname** (object): Contains the user's first and last names.
  - **firstname** (string): Required. Must be at least 3 characters.
  - **lastname** (string): Optional (if provided, should be at least 3 characters).
- **email** (string): Required. Must be a valid email address.
- **password** (string): Required. Must be at least 6 characters.

**Example: RESPONSE**

{
"fullname": {
"firstname": "Jane",
"lastname": "Doe"
},
"email": "jane.doe@example.com",
"password": "secure123"
}

## /users/login

### Description

The `/users/login` endpoint is used to authenticate an existing user. It validates the incoming data, checks the credentials, and returns a JSON Web Token along with the user details.

### HTTP Method

`POST`

### Endpoint

`/users/login`

### Request Body

The endpoint expects a JSON payload with the following fields:

- **email** (string): Required. Must be a valid email address.
- **password** (string): Required. Must be at least 6 characters.

**Example: REQUEST**

```json
{
  "email": "jane.doe@example.com",
  "password": "secure123"
}
```

**Example: RESPONSE**

```json
{
  "token": "your_jwt_token",
  "user": {
    "fullname": {
      "firstname": "Jane",
      "lastname": "Doe"
    },
    "email": "jane.doe@example.com"
  }
}
```

## /users/profile

### Description

The `/users/profile` endpoint retrieves the authenticated user's profile information. This endpoint requires authentication via JWT token.

### HTTP Method

`GET`

### Endpoint

`/users/profile`

### Headers

- **Authorization**: Bearer {JWT_TOKEN}

### Response

Returns the user profile information if authentication is successful.

**Example: RESPONSE**

```json
{
  "user": {
    "fullname": {
      "firstname": "Jane",
      "lastname": "Doe"
    },
    "email": "jane.doe@example.com"
  }
}
```

## /users/logout

### Description

The `/users/logout` endpoint invalidates the current user's session/token. This endpoint requires authentication.

### HTTP Method

`POST`

### Endpoint

`/users/logout`

### Headers

- **Authorization**: Bearer {JWT_TOKEN}

### Response

Returns a success message upon successful logout.

**Example: RESPONSE**

```json
{
  "message": "Successfully logged out"
}
```

## Captain Routes

### /captain/register

### Description

The `/captain/register` endpoint is used to register a new captain along with their vehicle details. It validates the incoming data and creates a new captain account.

### HTTP Method

`POST`

### Endpoint

`/captain/register`

### Request Body

The endpoint expects a JSON payload with the following fields:

- **fullname** (object): Contains the captain's first and last names
  - **firstname** (string): Required. Must be at least 3 characters
  - **lastname** (string): Required
- **email** (string): Required. Must be a valid email address
- **password** (string): Required. Must be at least 6 characters
- **vehicle** (object): Contains vehicle details
  - **color** (string): Required. Must be at least 3 characters
  - **plate** (string): Required. Must be at least 3 characters
  - **capacity** (number): Required. Must be at least 1
  - **vehicleType** (string): Required. Must be one of: "car", "motorcycle", "auto"

**Example: REQUEST**

```json
{
  "fullname": {
    "firstname": "John",
    "lastname": "Driver"
  },
  "email": "john.driver@example.com",
  "password": "secure123",
  "vehicle": {
    "color": "black",
    "plate": "ABC123",
    "capacity": 4,
    "vehicleType": "car"
  }
}
```

**Example: RESPONSE**

```json
{
  "captain": {
    "fullname": {
      "firstname": "John",
      "lastname": "Driver"
    },
    "email": "john.driver@example.com",
    "vehicle": {
      "color": "black",
      "plate": "ABC123",
      "capacity": 4,
      "vehicleType": "car"
    }
  }
}
```
