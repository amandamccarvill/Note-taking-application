Setup Instructions
To set up the project locally, follow these steps:

1. Clone the Repository
First, clone the repository from GitHub:

git clone <repository_url>

2. Initiate the Node Project
Navigate to the project directory:

cd <project_directory>

3. Install Dependencies
Run the following command to install all the necessary dependencies:

npm install

4. Start the Application
To run the application locally, use:

npm run start

The application should now be running on http://localhost:3000.

API Endpoints

The following API endpoints are available for interacting with the app.

1. Authorization Endpoint
POST http://localhost:3000/api/auth

Purpose: User login or registration.

Request Body (JSON):
email (string) – The email of the user.
password (string) – The password of the user.

2. Notes Endpoint
GET http://localhost:3000/api/notes

Purpose: Get a list of all the user's notes.

CRUD Operations

POST http://localhost:3000/api/notes
Purpose: Create a new note.

Request Body (JSON):
title (string) – The title of the note (must be between 5 and 100 characters long).
description (string) – The description of the note (must be at least 5 characters long).

Success message: "Note Successfully Added!" 

PUT http://localhost:3000/api/notes/:id
Purpose: Edit an existing note.

Request Body (JSON):
title (string) – The updated title of the note.
description (string) – The updated description of the note.

Success message: "Note Successfully Updated!" 

DELETE http://localhost:3000/api/notes/:id
Purpose: Delete an existing note.

Success message: "Note Successfully Deleted!" 

Important Notes

Login Requirement:
Users must log in before they can create, view, or edit notes. The login process is handled via the /api/auth endpoint. You cannot interact with the notes unless logged in.

Registration and Login:
Once you go live on index.html, you will be prompted to register or log in. After registering, you'll need to log in to access your notes.

Note Validation:

Both the title and description are required fields when creating or editing a note.
The title must be at least 5 characters long.
The description must be between 5 and 100 characters in length.

Editing Notes:
Once you create a note, you can edit it using the "edit function." After editing, the updated note will automatically appear on the screen.

Deleting Notes:
Notes can be deleted by clicking the delete button next to the note you wish to remove.

Challenges Encountered
Throughout the development of this project, I faced several challenges that pushed me to grow both technically and personally. One of the major difficulties was troubleshooting. It was frustrating to see how small changes could sometimes break the app entirely. Even after making what seemed like minor adjustments, pinpointing the issue became a trial of patience and persistence. I found that debugging required a more systematic approach, forcing me to slow down and methodically trace the problem. Another significant challenge I encountered was managing state between the front end and back end. Ensuring that the app updated and deleted notes seamlessly was crucial to its functionality, but it required me to grasp the complexities of state management more deeply. The issue of error handling also tested my understanding of HTTP status codes, especially during user authentication. I had to ensure that the app responded correctly to different error scenarios, which required a level of attention to detail I hadn't anticipated.

Development Reflections
Reflecting on the development process, one of the key lessons I learned was the importance of validation. It became clear to me how essential it was to implement strict validation rules for things like note titles and descriptions. Without these constraints, I realized users could create invalid notes, leading to confusion or bugs. Another realization came through debugging. I learned the importance of breaking down issues step by step and using tools like console logs to get to the root of the problem. The process of isolating errors taught me to approach problems in a more methodical, patient way. Additionally, while working on the user flow, I came to understand how vital it is to create a seamless and intuitive experience. I had to ensure that every step, from logging in to creating and managing notes, felt fluid and easy for the user. I realized that user experience isn’t just about functionality; it’s about making the process as clear and intuitive as possible.

Contributing
If you would like to contribute to this project, feel free to fork the repository and submit a pull request. Contributions are welcome to enhance the functionality or fix any issues you may find.