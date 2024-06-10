**Task 2: Dynamic Web Page with Express and React**

**Table of Contents**
Table of Contents
Description
Installation
Usage
Credits

**Description**
This coding task involves creating a dynamic web page using a backend built with Express.js and a frontend built with React.js. The goal of this task is to demonstrate how to create an API endpoint in Express and fetch data from it using a React frontend.

Understanding the integration between a backend and a frontend is crucial for modern web development. This task helps in learning how to create RESTful APIs and consume them in a React application, which is a common requirement in full-stack development.

**Installation**

**Backend**
Clone the repository:
git clone https://github.com/onyebuche/codingTasks/Task2.git

Navigate to the backend directory:
cd codingTasks/Task2/backend
Install the required dependencies:
npm install

Start the backend server:
npm start

**Frontend**
Navigate to the frontend directory:
cd ../frontend

Install the required dependencies:
npm install

Start the frontend server:
npm start

**Usage**
Once both servers are running, open your web browser and navigate to http://localhost:3000. You should see the custom message fetched from the backend displayed on the webpage.

**Example messages**
Backend
Endpoint: /api/message
Response:
{
  "message": "Hello from the back end!"
}

Frontend
The frontend React application fetches the message from the backend and displays it.

**Steps to Use**
Run the backend server:
cd codingTasks/Task2/backend
npm start

Run the frontend server:
cd ../frontend
npm start
Open the web page: Navigate to http://localhost:3000 in your web browser to see the custom message.

**Credits**
This project was developed by Eugene Uche. The task demonstrates the integration of an Express.js backend with a React.js frontend, showcasing full-stack development practices.

For more information, visit the repository.

By following these steps and understanding the provided information, you should be able to install, run, and use the dynamic web page project effectively. This README file serves as a comprehensive guide to ensure a smooth experience for all users.