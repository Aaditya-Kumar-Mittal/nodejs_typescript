# 🚀 Learn TypeScript & Build a Basic Node.js + Express Backend

![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white) ![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white) ![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)

## 📚 Table of Contents

- [🚀 Learn TypeScript \& Build a Basic Node.js + Express Backend](#-learn-typescript--build-a-basic-nodejs--express-backend)
  - [📚 Table of Contents](#-table-of-contents)
  - [📖 Introduction](#-introduction)
  - [🌟 Project Highlights](#-project-highlights)
  - [🗂️ Folder Structure](#️-folder-structure)
  - [🧠 Key Concepts Covered](#-key-concepts-covered)
    - [🧩 Basic Types](#-basic-types)
    - [🧾 Interfaces](#-interfaces)
    - [⚙️ Functions](#️-functions)
  - [⚙️ Installation \& Setup](#️-installation--setup)
    - [1️⃣ Initialize TypeScript](#1️⃣-initialize-typescript)
    - [2️⃣ Install Dev Dependencies](#2️⃣-install-dev-dependencies)
    - [3️⃣ Install Runtime Dependencies](#3️⃣-install-runtime-dependencies)
  - [🛠️ Available Scripts](#️-available-scripts)
    - [🧪 Development Mode](#-development-mode)
  - [📬 Sample API Endpoints](#-sample-api-endpoints)
    - [➕ `POST /user`](#-post-user)
    - [🔍 `GET /user/:id`](#-get-userid)
      - [**Fetch user by ID**](#fetch-user-by-id)
    - [🔗 `GET /`](#-get-)
  - [📝 License](#-license)

---

## 📖 Introduction

This project demonstrates how to set up a basic **Node.js** backend using **Express.js** and **TypeScript**. The purpose is to learn TypeScript fundamentals, how it integrates with Express, and how to build clean, typed server-side APIs.

---

## 🌟 Project Highlights

- ✅ TypeScript integration
- ✅ Basic types and interfaces
- ✅ Express with typed middleware and request/response
- ✅ API with `GET` and `POST` routes
- ✅ Dev setup using `nodemon` and `ts-node`

---

## 🗂️ Folder Structure

```bash
your-project/
│
├── src/
│   └── app.ts        # Main Express server setup
│
├── tsconfig.json     # TypeScript compiler configuration
├── package.json      # Project metadata and scripts
```

---

## 🧠 Key Concepts Covered

### 🧩 Basic Types

Used primitive types like `string`, `number`, and more for request bodies and parameters.

### 🧾 Interfaces

Defined custom interfaces like:

```ts
interface User {
  name: string;
  email: string;
}

interface CustomRequest extends Request {
  startTime?: number;
}
```

### ⚙️ Functions

Express middleware functions using proper `Request`, `Response`, and `NextFunction` types.

---

## ⚙️ Installation & Setup

### 1️⃣ Initialize TypeScript

```bash
npx tsc --init
```

Update `tsconfig.json`:

```json
{
  "compilerOptions": {
    "target": "es6",
    "module": "commonjs",
    "outDir": "./dist",
    "rootDir": "./src",
    "strict": true,
    "esModuleInterop": true
  }
}
```

### 2️⃣ Install Dev Dependencies

```bash
npm install --save-dev typescript ts-node @types/node @types/express nodemon
```

### 3️⃣ Install Runtime Dependencies

```bash
npm install express
```

---

## 🛠️ Available Scripts

### 🧪 Development Mode

```json
"scripts": {
  "dev": "nodemon src/app.ts"
}
```

Run:

```bash
npm run dev
```

---

## 📬 Sample API Endpoints

### ➕ `POST /user`

**Create a new user.**

**Request Body:**

```json
{
  "name": "Aaditya",
  "email": "aaditya@example.com"
}
```

**Response:**

```json
{
  "name": "Aaditya",
  "email": "aaditya@example.com",
  "message": "User created successfully"
}
```

---

### 🔍 `GET /user/:id`

#### **Fetch user by ID**

**Request:**

`GET /user/123`

**Response:**

```json
{
  "id": "123",
  "message": "User found successfully"
}
```

---

### 🔗 `GET /`

```bash
Hello, I'm learning Express with TypeScript!
```

---

## 📝 License

This project is licensed under the [MIT License](LICENSE).
