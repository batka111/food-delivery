import express from "express";
import { createBooks, getAllBooks } from "../controllers/book.controller.js";

const booksRouter = express.Router();

booksRouter.get("/", getAllBooks);
booksRouter.post("/", createBooks);

export default booksRouter;
