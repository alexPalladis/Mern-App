***Workout Manager App***

A full-stack MERN application to help users add, manage, and track their workouts with user authentication and secure data handling.

***
***Features***

-***User Authentication***: Sign up, login, and logout functionality with secure JWT-based authentication.

-***Workout Management***: Users can add, view and delete workouts with details like exercise title, load, and reps.

-***User-Specific Workouts***: Each user has their own workout records, securely managed and isolated from other users.

-***Responsive Design***: Built with React for a responsive and dynamic User Interface.

***
***Technologies Used***

-***Frontend***: React Hooks for state management, and CSS for styling.

-***Backend***: Node.js, Express, SQL, JWT for authentication, and Sequelize for database modeling.
***

***Installation***

***1)Clone the repository:***

-git clone https://github.com/alexPalladis/Mern-App.git

-cd Mern-App

***2)Install dependencies:***

-For the backend:

-cd backend

-npm install

-For the frontend:

-cd frontend

-npm install

***3)Setup environment variables:***

-In the backend folder, create a .env file to store your environment variables.(like PORT,Database Credentials and a key for JWT tokens)

-For security reasons, these credentials on my project can be given only with my permission after request.

-In order to set up this project on your local machine, you have to create your own database credentials, listening on a port of your choise and give your own secret JWT token.

***4)Run the Application:***

-In the backend directory, start the server:

-npm start

-In the frontend directory, start the React app:

-npm start

The frontend should now be running on http://localhost:3000, and the backend on http://localhost:4000 (or whichever port you specified in .env)

***5)Testing the Application:***

-After both servers are running, you should be able to:

-Register and log in to your account.

-Add, view and delete workout records associated with your account.
***

***Important Security Note***

-Ensure you never commit your .env file to version control (like GitHub). Sensitive information like your MongoDB credentials and JWT secret should remain private. You can use a .gitignore file to prevent committing .env!


