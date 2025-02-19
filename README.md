<h1 align="center">Bookshelf</h1>
<p align="center"><img alt="Bookshelf Logo" src="https://github.com/Nayanbv02/LND-BookShelf-Nayan/blob/main/img/Bookshelf.png?raw=true"/></p> 

## Table of Contents:
---
- [Description](#description)
- [Installation](#installation)
- [E/R_Diagram](#e/r_diagram)
- [Use_Case_Diagram](#use_case_diagram)
- [Features](#features)
- [Database_Structure](#database_structure)
- [System_Architecture](#system_architecture)
- [Main_Endpoints](#main_endpoints)
- [Authentication](#authentication)
- [User_Manual](#user_manual)
- [Author](#author)

## Description

Bookshelf is a React application designed for book enthusiasts and casual readers alike. 

Users can log in to save their favorite or pending books in the library, keeping them all in one place, locally and quickly.

In short: *one library to rule them all*.

---

## Installation

To get started, ensure you have **Node.js** installed on your system. Then follow these steps:

1. Clone the repository:
    ```bash
    git clone https://github.com/Nayanbv02/React-BookshelfReader
    cd React-BookshelfReader

2. Install the dependencies:
    ```bash
    npm install

3. Run the application locally:
    ```bash
    npm run dev

---

## E/R_Diagram

<p align="center"><img alt="E/R Diagram" src="https://media.discordapp.net/attachments/765658882453536768/1338588847780659303/image.png?ex=67b6d643&is=67b584c3&hm=947f8b8ad2319a904376b07a43702688d9d7c81d1010f2f7a3706e3334f698e2&=&format=webp&quality=lossless"/></p> 

---

## Use_Case_Diagram

<p align="center"><img alt="UseCase" src="https://media.discordapp.net/attachments/765658882453536768/1338589122184613989/image.png?ex=67b6d684&is=67b58504&hm=4116108d367be44b33d4f84a908f12ae7324efe868b8e7749f8a2aa4fc7b5c36&=&format=webp&quality=lossless"/></p> 

---

## Features

User Management: Create, update, retrieve, and delete users.

Book Management: Add, edit, mark as favorite, and delete PDF books.

Bookmarks: Add and manage bookmarks for specific books.

Authentication: JWT token generation for secure CRUD operations.

---

## Database_Structure

Users: id (PK), name, email, password
Books: book_id (PK), pdf_name, pdf_path, favorite, last_page, user_name (FK)
Bookmarks: bookmark_id (PK), page_number, color, date, book_id (FK)

---

## System_Architecture

Frontend: React (user interface).
Backend: Spring Boot (RESTful API).
Database: MySQL (data persistence management).

---

## Main_Endpoints

1. Users

   GET /api/users - Retrieve all users.
   POST /api/users - Create a user.
   PUT /api/users/{id} - Update a user.
   DELETE /api/users/{id} - Delete a user.

2. Books

   GET /api/books - List all books.
   POST /api/books - Add a book.
   PUT /api/books/{book_id} - Edit a book.
   DELETE /api/books/{book_id} - Delete a book.

3. Bookmarks

   GET /api/bookmarks - View all bookmarks.
   POST /api/bookmarks/book/{book_id} - Create a bookmark.
   PUT /api/bookmarks/{bookmark_id} - Edit a bookmark.
   DELETE /api/bookmarks/{bookmark_id} - Delete a bookmark.

---

## Authentication

Login: POST /login (Generates JWT token upon credential validation).
Register: POST /register (Creates a new user in the database).

---

## User_Manual

Registration: Create an account with your name, email, and password.
Book Management: Add PDF books, mark them as favorites, or delete the ones you no longer need.
Bookmarks: Add bookmarks on specific pages with color and date.
Security: Sessions are protected using JWT tokens.

---

## Authors

Nayan Betancor Vallejo
Diego Ferrer Rojas
