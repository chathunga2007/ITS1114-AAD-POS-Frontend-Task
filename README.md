# 🛒 AAD POS System - Frontend (User Management Module)

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![jQuery](https://img.shields.io/badge/jQuery-0769AD?style=flat&logo=jquery&logoColor=white)](https://jquery.com/)
[![JWT Authorization](https://img.shields.io/badge/Security-JWT%20Tokens-000000?style=flat&logo=jsonwebtokens)](https://jwt.io/)

A responsive, lightweight Web Frontend for the **Point of Sale (POS) User Management System**. This application provides secure user authentication (Login & Signup) and a full-featured User Management Dashboard integrated with a Spring Security backend API using JWT (JSON Web Tokens) and asynchronous AJAX requests.

---

## 📌 Features

- 🔐 **User Authentication**
  - **Login System:** Authenticates users via backend credentials and securely stores JWT Tokens in `localStorage`.
  - **Registration / Sign Up:** Allows registering new users along with custom user roles (`ADMIN`, `USER`, etc.).
  - **Password Match Validation:** Client-side validation ensuring matching passwords during registration.

- 👥 **User Management Dashboard**
  - **View All Users:** Displays all registered users dynamically in a structured data table.
  - **Search & Filter:** Search users dynamically by username using backend query parameters.
  - **Select & Edit User:** Load user details into form inputs for live editing and update operations.
  - **Delete User:** Remove users directly from the system via asynchronous RESTful requests.
  - **Logout Session:** Clear active user credentials and safely redirect to the login portal.

- 🎨 **Modern & Responsive UI**
  - Clean card layouts with glassmorphic accents, soft shadow elevation, and interactive feedback state transitions.

---

## 🛠️ Tech Stack & Technologies

| Technology | Usage |
| :--- | :--- |
| **HTML5** | Markup structure for web components & forms |
| **CSS3** | Custom responsive stylesheet (`Style.css`) |
| **JavaScript (ES6+)** | Dynamic DOM manipulation & event handlers |
| **jQuery 3.6.0** | Simplified AJAX requests & DOM traversal |
| **JWT (JSON Web Tokens)** | Bearer header security integration |
| **LocalStorage API** | Session token & user metadata persistence |

---

## 📁 Project Architecture & File Structure

```text
AAD POS Fortend/
├── Login.html          # Authentication / Login Portal
├── Signup.html         # User Registration Form
├── UserManagement.html # Admin Dashboard (CRUD Operations)
├── Style.css           # Global Responsive Stylesheet
└── README.md           # Documentation
```

---

## 📡 REST API Integration Specs

The application communicates with a Spring Security backend running by default at `http://localhost:8080`.

| Page | Endpoint | Method | Security | Description |
| :--- | :--- | :--- | :--- | :--- |
| `Login.html` | `/api/test/login` | `POST` | Public | Authenticates user & returns JWT Token |
| `Signup.html` | `/api/test/saveUser` | `POST` | Bearer Token | Registers a new user with specified roles |
| `UserManagement.html` | `/api/test/getAllUsers` | `GET` | Bearer Token | Fetches all registered users |
| `UserManagement.html` | `/api/test/select-user/{userId}` | `GET` | Bearer Token | Fetches details for a specific user ID |
| `UserManagement.html` | `/api/test/update-user` | `PUT` | Bearer Token | Updates existing user credentials & roles |
| `UserManagement.html` | `/api/test/filter-users?userName={query}` | `GET` | Bearer Token | Filters users matching search string |
| `UserManagement.html` | `/api/test/{userId}` | `DELETE` | Bearer Token | Deletes a user by ID |

---

## 🚀 Getting Started / How to Run

### Prerequisites
1. A modern Web Browser (Google Chrome, Mozilla Firefox, Microsoft Edge, Brave, etc.).
2. Running instance of the **Spring Security Backend REST API** on `http://localhost:8080`.

### Running Locally
1. **Clone or Download** the repository:
   ```bash
   git clone https://github.com/chathunga2007/ITS1114-AAD-POS-Frontend-Task.git
   ```
2. Open the project folder in VS Code or your preferred code editor.
3. Open `Login.html` in your browser directly, or serve using **Live Server** extension.
4. Log in with existing credentials to obtain a JWT token, or navigate to `Signup.html` to register.

---

## 📄 License & Attribution

Developed for **ITS1114 - Advanced Application Development (AAD)** module.
Free to use and modify for educational purposes.

---

<div align="center">
  Made with ❤️ Chathunga Bimsara using Spring Boot &nbsp;|&nbsp; IJSE AD - Spring Security & User Management Frontend
</div>