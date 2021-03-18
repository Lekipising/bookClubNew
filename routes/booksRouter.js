import express from "express";
import { addBook, viewBook, viewAllBooks, updateBook, deleteBook } from '../controllers/booksController.js'
// import { authenticate } from '../middlewares/auth.js';

const booksRouter = express.Router();

//Add a Book
booksRouter.post("/", addBook);

//View a Book Books/:id
booksRouter.get("/:id", viewBook);

//View all books bookss/
booksRouter.get("/", viewAllBooks);

//Update book book/
booksRouter.put("/", updateBook);

//Delete a book books/:id
booksRouter.delete("/:id", deleteBook);

export default booksRouter;