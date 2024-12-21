# MyBlogs: A simple micro-blogging web app 
Built with Express.js, Axios, and Sequelize. This project allows users to create, read, update, and delete blog posts.

<br/>

## Table of Contents
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [API Endpoints](#api-endpoints)
<br/>

## Features
- Create new blog posts
- Edit existing blog posts
- Delete blog posts
- View all blog posts
<br/>

## Technologies Used
- Node.js
- Express.js
- Axios
- Sequelize
- PostgreSQL
- EJS (Embedded JavaScript templating)
<br/>

## Project Structure
```
/MyBlogs
├── config
│   └── sequelize.config.js
├── models
│   └── blog.models.js
├── views
│   ├── form.ejs
│   └── index.ejs
├── node_modules
├── server.js
├── index.js
├── blogs.example.txt
├── package-lock.json
├── package.json
├── .env
└── .gitignore
```
<br/>

## Getting Started

### Prerequisites
Before you begin, ensure that you have the following installed on your machine:
- **Node.js** (v14.x or higher): Required to run the server and client applications.
- **npm** (v6.x or higher) or **yarn** (v1.x or higher): Package managers to install dependencies.
- **PostgreSQL**: The database used for storing user information. Ensure you have it installed and set up locally or have access to a remote PostgreSQL instance.

### Installation

1. **Clone the repository:**
  ```bash
  git clone https://github.com/JuhilSavani/MyBlogs
  cd MyBlogs
  ```

2. **Install the dependencies**
  ```bash
  npm install
  ```

3. **Database Setup**<br/>
This project uses PostgreSQL as its database management system. Follow the steps below to set up the database.
    - Open the terminal on your system.
    - Run the following Command to create a database
      ```bash
      psql -U postgres -c "CREATE DATABASE my_blogs_db;"
      ```
    - If you encounter a command not found error for psql, you may need to add PostgreSQL to your system’s PATH environment variable.

4. **Configure a `.env` file**
- Create a `.env` file in the root directory of the project 
- Add the database connection string according to following format
  ```bash
  DB_URL="postgres://username:password@hostname:port/databasename
  ```
  For example, 
  ```bash
  DB_URL="postgres://postgres:password123@localhost:5432/my_blogs_db"
  ```

5. **Running the Application**

Use the following command to start both servers concurrently:
 ```bash
npm start
```
This command will automatically run both the backend and frontend servers for you.

<br/>

## API Endpoints

**Backend (Port 4000)**
-	GET / - Retrieve all blog posts.
-	GET /:id - Retrieve a specific blog post by ID.
-	POST / - Create a new blog post.
-	PUT / - Update an existing blog post.
-	DELETE /:id - Delete a blog post by ID.

**Frontend (Port 3000)**
- GET / - Render the homepage with all blog posts.
-	GET /edit/:id - Render the edit form for a specific blog post.
-	POST /edit/:id - Submit the updated blog post.
-	GET /new - Render the form for creating a new blog post.
-	POST /add - Submit the new blog post.
-	GET /del/:id - Delete a blog post and redirect to the homepage.
<br/>

## Contributing
If you would like to contribute to this project, feel free to fork the repository and submit a pull request. 

<br/>

**Thanks for checking out this project! Happy coding! 🚀**

---
