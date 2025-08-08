---
sidebar_position: 7
---

# API References

This document provides a detailed reference for all the API endpoints used in the project.

## Authentication

Endpoints for user authentication, including signup, login, and password management.

### `POST /auth/signup`

**Description:** Registers a new user account using Firebase Authentication and stores additional user details in the application database.

**Request Body:**

```json
{
  "email": "user@example.com",
  "password": "password123",
  "firstName": "John",
  "lastName": "Doe"
}
```

**Responses:**

- `201 Created`: User registered successfully.
- `400 Bad Request`: Invalid input data.
- `500 Internal Server Error`: Server-side error.

### `POST /auth/login`

**Description:** Authenticates a user with their email and password, returning a Firebase ID token.

**Request Body:**

```json
{
  "email": "user@example.com",
  "password": "password123"
}
```

**Responses:**

- `200 OK`: Login successful. Returns a Firebase ID token.
- `400 Bad Request`: Invalid credentials.
- `500 Internal Server Error`: Server-side error.

### `PATCH /auth/change-password`

**Description:** Allows an authenticated user to change their password.

**Request Body:**

```json
{
  "oldPassword": "currentPassword",
  "newPassword": "newPassword"
}
```

**Responses:**

- `200 OK`: Password changed successfully.
- `400 Bad Request`: Old password does not match.
- `401 Unauthorized`: User is not authenticated.

### `POST /auth/verify`

**Description:** Verifies a Firebase ID token to check if it's valid and not expired.

**Responses:**

- `200 OK`: Token is valid.

## Users

Endpoints for managing user profiles.

### `GET /users/firebase/:firebaseUID`

**Description:** Retrieves a user's full profile by their Firebase UID.

**URL Parameters:**

- `firebaseUID` (string): The user's Firebase UID.

**Responses:**

- `200 OK`: User profile retrieved successfully.
- `404 Not Found`: User with the specified Firebase UID not found.

### `POST /users/firebase/:firebaseUID/profile`

**Description:** Creates a new user profile or finds an existing one by Firebase UID.

**URL Parameters:**

- `firebaseUID` (string): The user's Firebase UID.

**Request Body:**

```json
{
  "firstName": "John",
  "lastName": "Doe",
  "email": "user@example.com"
}
```

**Responses:**

- `201 Created`: User profile created or found successfully.

### `GET /users/:id/profile`

**Description:** Retrieves a user's profile by their internal database ID.

**URL Parameters:**

- `id` (string): The user's internal ID.

**Responses:**

- `200 OK`: User profile retrieved successfully.
- `404 Not Found`: User with the specified ID not found.

### `PUT /users/:id/profile`

**Description:** Updates a user's profile by their internal database ID.

**URL Parameters:**

- `id` (string): The user's internal ID.

**Request Body:**

```json
{
  "firstName": "John",
  "lastName": "Doe",
  "bio": "Software developer"
}
```

**Responses:**

- `200 OK`: User profile updated successfully.
- `404 Not Found`: User with the specified ID not found.

### `GET /users/firebase/:firebaseUID/profile`

**Description:** Retrieves a user's profile by their Firebase UID (plain JSON).

**URL Parameters:**

- `firebaseUID` (string): The user's Firebase UID.

**Responses:**

- `200 OK`: User profile retrieved successfully.
- `404 Not Found`: User with the specified Firebase UID not found.

## Live Quizzes

Endpoints for managing live quizzes, rooms, and polls.

### `POST /livequizzes/rooms`

**Description:** Creates a new poll room.

**Request Body:**

```json
{
  "name": "My Poll Room",
  "teacherId": "teacher123"
}
```

**Responses:**

- `200 OK`: Room created successfully. Returns room details including an invite link.

### `GET /livequizzes/rooms/:code`

**Description:** Retrieves details for a specific poll room by its code.

**URL Parameters:**

- `code` (string): The room code.

**Responses:**

- `200 OK`: Room details retrieved successfully.
- `404 Not Found`: Room with the specified code not found.

### `POST /livequizzes/rooms/:code/polls`

**Description:** Creates a new poll within a room.

**URL Parameters:**

- `code` (string): The room code.

**Request Body:**

```json
{
  "question": "What is 2 + 2?",
  "options": ["3", "4", "5"],
  "correctOptionIndex": 1,
  "creatorId": "teacher123",
  "timer": 60
}
```

**Responses:**

- `200 OK`: Poll created successfully.

### `GET /livequizzes/rooms/teacher/:teacherId`

**Description:** Retrieves all rooms created by a specific teacher.

**URL Parameters:**

- `teacherId` (string): The teacher's ID.

**Responses:**

- `200 OK`: Returns a list of rooms.

### `GET /livequizzes/rooms/teacher/:teacherId/active`

**Description:** Retrieves all active rooms for a specific teacher.

**URL Parameters:**

- `teacherId` (string): The teacher's ID.

**Responses:**

- `200 OK`: Returns a list of active rooms.

### `GET /livequizzes/rooms/teacher/:teacherId/ended`

**Description:** Retrieves all ended rooms for a specific teacher.

**URL Parameters:**

- `teacherId` (string): The teacher's ID.

**Responses:**

- `200 OK`: Returns a list of ended rooms.

### `GET /livequizzes/rooms/:roomId/analysis`

**Description:** Retrieves the poll analysis for a specific room.

**URL Parameters:**

- `roomId` (string): The room's ID.

**Responses:**

- `200 OK`: Returns poll analysis data.

### `POST /livequizzes/rooms/:code/polls/answer`

**Description:** Submits an answer to a poll.

**URL Parameters:**

- `code` (string): The room code.

**Request Body:**

```json
{
  "pollId": "poll123",
  "userId": "student123",
  "answerIndex": 1
}
```

**Responses:**

- `200 OK`: Answer submitted successfully.

### `GET /livequizzes/rooms/:code/polls/results`

**Description:** Retrieves the results for all polls in a room.

**URL Parameters:**

- `code` (string): The room code.

**Responses:**

- `200 OK`: Returns poll results.

### `POST /livequizzes/rooms/:code/end`

**Description:** Ends a poll room.

**URL Parameters:**

- `code` (string): The room code.

**Responses:**

- `200 OK`: Room ended successfully.

### `POST /livequizzes/rooms/:code/generate-questions`

**Description:** Generates questions from a video transcript (either from an uploaded file or a YouTube URL).

**URL Parameters:**

- `code` (string): The room code.

**Request Body (form-data):**

- `file`: (optional) An audio or video file.
- `youtubeUrl`: (optional) A YouTube video URL.
- `questionSpec`: A JSON object specifying the types and number of questions to generate.
- `model`: (optional) The AI model to use for question generation.

**Responses:**

- `200 OK`: Questions generated successfully.
- `400 Bad Request`: Missing file or YouTube URL.
- `500 Internal Server Error`: Error during question generation.

## Dashboard

Endpoints for retrieving dashboard data for students and teachers.

### `GET /students/dashboard/:studentId`

**Description:** Retrieves dashboard data for a specific student.

**URL Parameters:**

- `studentId` (string): The student's ID.

**Responses:**

- `200 OK`: Returns dashboard data.

### `GET /teachers/dashboard/:teacherId`

**Description:** Retrieves dashboard data for a specific teacher.

**URL Parameters:**

- `teacherId` (string): The teacher's ID.

**Responses:**

- `200 OK`: Returns dashboard data. 