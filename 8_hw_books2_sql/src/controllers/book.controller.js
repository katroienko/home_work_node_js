import * as Bookservice from "../services/book.service.js"

import HttpExeption from "../utils/HttpExeption.js";
import validateBody from "../utils/validateBody.js";
import { BookAddSchema, BookUpdateSchema } from "../validation/book.schema.js";

export const getBooksController = async (req, res) => {
    const result = await Bookservice.getBooks();
    res.json(result)
};

export const getBookByIdController = async (req, res) => {
    const { id } = req.params;
    const result = await Bookservice.getBookById(id);
    if (!result) throw HttpExeption(404, `Book with id=${id} not found`);

    res.json(result);
};

export const addBookController = async (req, res) => {
    await validateBody(BookAddSchema, req.body);

    const result = await Bookservice.addBook(req.body);
    res.status(201).json(result);
};

export const updateBookByIdController = async (req, res) => {
    await validateBody(BookUpdateSchema, req.body);

    const { id } = req.params;
    const result = await Bookservice.updateBook(id, req.body);
    if (!result) throw HttpExeption(404, `Book with id=${id} not found`);

    res.json(result);
};

export const deleteBookByIdController = async(req, res) => {
const {id} = req.params;
  const result = await Bookservice.deleteBookById(id);
  if(!result) throw HttpExeption(404, `Book with id=${id} not found`);
  res.json(result);
}