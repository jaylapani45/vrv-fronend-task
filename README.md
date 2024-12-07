# **User Management Interface**

A responsive web application for managing users, roles, and permissions, built using React. This interface integrates with a JSON-based mock API for data storage and retrieval, ensuring a seamless user experience.

---

## **Features**

1. **User Management:**
   - View a list of users in a responsive table.
   - Add, edit, or delete users via a modal-based interface.
   - Manage user roles and statuses dynamically.

2. **Role Management:**
   - Define roles with specific permissions (e.g., Read, Write, Delete).
   - Assign roles to users during creation or modification.

3. **API Integration:**
   - Mock API using `json-server` to handle CRUD operations for users and roles.

4. **Enhanced UI/UX:**
   - Modern, responsive design using TailwindCSS.
   - Interactive components like modals and forms.
   - Visual status indicators for better usability.

---

## **Installation**

### Prerequisites
- Node.js (v16.20.2 or higher recommended).
- A package manager (npm or yarn).

---

### **Steps**

1. Clone the repository:
   git clone https://github.com/akbariapurv/VRV-Frontend.git
   cd vrv-frontend

2. Install dependencies:
npm install

3. Start the development server:
npm start

4. Start the mock API server:
npx json-server --watch db.json --port 5000

5. Open your browser and navigate to:
http://localhost:3000


**API Details**
The mock API is powered by json-server, serving data from a db.json file.

Endpoints
Users

GET /users
Fetch all users.
POST /users
Add a new user.
PUT /users/:id
Update a user.
DELETE /users/:id
Delete a user.
Roles

GET /roles
Fetch all roles.
POST /roles
Add a new role.
PUT /roles/:id
Update a role.
DELETE /roles/:id
Delete a role.


**Sample db.json**
{
  "users": [
    {
      "id": "c8dc",
      "name": "Parth",
      "email": "akbariapurv@gmail.com",
      "role": "User",
      "status": "Active"
    },
    {
      "id": "586f",
      "name": "ledlight",
      "email": "pmovaliya9@gmail.com",
      "role": "Editor",
      "status": "Active"
    }
  ],
  "roles": [
    {
      "id": "1",
      "name": "Admin",
      "permissions": [
        "Read",
        "Write",
        "Delete"
      ]
    },
    {
      "id": "2",
      "name": "Editor",
      "permissions": [
        "Read",
        "Write"
      ]
    }
  ]
}
Usage
Frontend:

Interact with the User Management interface to manage users and roles.
Data will be dynamically fetched and updated via the mock API.
API Server:

Make requests to the API endpoints to interact with the mock database.
Technologies Used

Frontend:
React.js
TailwindCSS

Mock API:
json-server

Package Management:
npm
