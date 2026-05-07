# React CRUD

This project demonstrates a basic **CRUD (Create, Read, Update, Delete)** workflow between a Client and a Server.

- **Client**: React, Bootstrap 5, Axios, React Router  
- **Server**: Express.js, Nodemon, Mongoose (MongoDB)

---

## 📂 Project Structure

```
project-root/
│
├── client/        # Frontend React App
│   ├── src/
│   │   ├── components/   # UI Components
│   │   ├── pages/        # Page-level views
│   │   ├── services/     # Axios API calls
│   │   └── App.js
│   └── package.json
│
└── server/        # Backend Express API
    ├── models/    # Mongoose Schemas
    ├── routes/    # Express Routes
    ├── server.js  # Entry point
    └── package.json
```

---

## 🚀 Installation & Usage

### 1. Clone the repository
```bash
git clone https://github.com/Nanomete/React_CRUD.git
cd React_CRUD
```

### 2. Install dependencies

#### Client
```bash
cd client
npm install
```

#### Server
```bash
cd server
npm install express
```

### 3. Run the project

#### Start Server (Express + Nodemon)
```bash
cd server
npm start
```
> Server runs at `http://localhost:5000`

#### Start Client (React)
```bash
cd client
npm start
```
> Client runs at `http://localhost:3000`

---

## ⚙️ CRUD Features

- **Create**: Add new data via React form → Axios POST → MongoDB  
- **Read**: Fetch all data from API → Display in Bootstrap table/cards  
- **Update**: Edit selected data → Axios PUT → MongoDB update  
- **Delete**: Remove selected data → Axios DELETE → MongoDB delete  

---

## 🔗 API Endpoints (Server)

| Method | Endpoint       | Description        |
|--------|----------------|--------------------|
| GET    | /api/product     | Fetch all product   |
| GET    | /api/product/:id     | Fetch product by ID   |
| POST   | /api/product     | Create new product   |
| PUT    | /api/product/:id | Update product by ID |
| DELETE | /api/product/:id | Delete product by ID |

---

## 🛠️ Technologies

### Client
- React 18+
- Bootstrap 5
- Axios
- React Router v6/v7

### Server
- Node.js + Express.js
- Nodemon (auto-restart during development)
- Mongoose (MongoDB ODM)

---

## 📌 Notes
- Ensure MongoDB is running locally or connect to MongoDB Atlas.  
- Recomment to use the Postman for test methods of HTTP
- Configure `.env` in the `client` folder for path settings.  

---