import { defaults } from 'pg';
import * as booksSrvise from '../services/books.service.js'

export const getBooksController = async(req, res)=>{
    const result = await booksSrvise.getBooks();
    res.json(result);
};

export const postBooksController = async (req, res)=>{
    const result = await booksSrvise.addBook(req.body);
    res.status(201).json(result);
}

export const putBookController = async(req, res, next)=>{
    try {
    const { id } = req.params;
    const updatedData = req.body;

    const result = await booksSrvise.updateBook(id, updatedData);

    if (!result) {
      return res.status(404).json({ message: "Book not found" });
    }

    res.json(result);
  } catch (error) {
    next(error);
  }

};

export const deleteBookController = async (req, res, next) => {
  try {
    const { id } = req.params;
    const deleted = await booksSrvise.deleteBook(id);

    if (!deleted) {
      return res.status(404).json({ message: "Book not found" });
    }

    res.json({ message: `Book with id ${id} deleted successfully` });
  } catch (error) {
    next(error);
  }
};