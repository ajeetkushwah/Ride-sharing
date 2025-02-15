# BACKEND API Documentation

## Description
The `/users/register` endpoint is used to create a new user account. It validates the incoming data, hashes the password before storing it, creates the user, and returns a JSON Web Token along with the user details.

## HTTP Method
`POST`

## ENNDPOINT
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