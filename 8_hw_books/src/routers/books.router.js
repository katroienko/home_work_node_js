import { Router } from "express";

import { getBooksController, postBooksController, putBookController, deleteBookController } from "../controllers/books.conrtoller.js";

const booksRouter= Router();

booksRouter.get('/', getBooksController);

booksRouter.post('/', postBooksController );

booksRouter.put('/:id', putBookController);

booksRouter.delete('/:id', deleteBookController)

export default booksRouter; 