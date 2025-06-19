import { Router } from "express";

import {
    getBooksController,
    getBookByIdController,
    addBookController,
    updateBookByIdController,
    deleteBookByIdController,
} from "../controllers/book.controller.js";

const BookRouter = Router();
BookRouter.put("/:id", updateBookByIdController);
BookRouter.delete("/:id", deleteBookByIdController);

BookRouter.get("/", getBooksController);
BookRouter.get("/:id", getBookByIdController);
BookRouter.post("/", addBookController);

export default BookRouter;