# **COMP3133 Full Stack Assignment**

## **Project Overview**

This project is a full-stack application built using **Express**, **Apollo Server**, **MongoDB**, and **GraphQL**. It implements a GraphQL API for managing scheduling and worker-related functionalities, including employee availability, time-off requests, user management, and more.

### **Technologies Used**

- **Frontend**: React (if applicable, mention any frontend details)
- **Backend**:
  - **Node.js** with **Express**
  - **Apollo Server** for GraphQL API
  - **MongoDB** for database management
  - **JWT Authentication** for secure user login and authorization
- **GraphQL**: Used to handle complex queries and mutations related to employee scheduling, time-off requests, and user management.

### **Features**

- **GraphQL API** for handling scheduling, time-off requests, and user management.
- **Employee Availability**: Employees can view and create their availability schedules.
- **Time-Off Requests**: Employees can request time off, which can be approved/rejected by managers.
- **User Management**: Admins can create, delete, and manage users (HR, Manager, Employee roles).
- **Real-time Chat** (optional): Allows users to send messages in groups or privately using **Socket.io** (if implemented).
- **JWT Authentication**: Secure user login and protected routes based on roles (Employee, HR, Manager, etc.).

## **Installation**

### **1. Clone the repository**

```bash
git clone https://github.com/your-username/your-project-name.git
cd your-project-name
```

### **2.  Install dependencies**
```bash
npm install
```

### **3. Set up environment variables**
```bash
MONGO_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/mydatabase
JWT_SECRET=your_jwt_secret_key
PORT=4000
```

### **2. Run the project locally**
```bash
npm start
```

## **API Endpoints**

The backend exposes a **GraphQL API** at the following endpoint:

- **GraphQL API**: `http://localhost:4000/graphql`

You can interact with the GraphQL API using a tool like **Apollo Studio** or **Postman** to test queries and mutations.

### **Sample Queries**

1. **Get All Employees** (for HR/Managers):

```graphql
query {
  getAllUsers {
    id
    name
    role
    email
  }
}
```
## **Deployment**

### **Vercel**

To deploy the application using Vercel, follow these steps:

1. **Install the Vercel CLI**:

   ```bash
   npm install -g vercel
   ```
2. **Deploy the app**:

    ```bash
    vercel --prod
    ```
3. **Visit the deployment URL**