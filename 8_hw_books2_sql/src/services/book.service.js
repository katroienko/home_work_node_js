import Book from "../db/Book.js"

export const getBooks = () => Book.findAll();

// export const getBookById = async id => {
//     const result = await Book.findByPk(id);
//     if (!result) return null;
//     return result
// };

export const getBookById = (id) => Book.findByPk(id);

export const addBook = (payload) => Book.create(payload);

export const updateBook = async (id, payload) => {
    const result = await Book.findByPk(id);
    if (!result) return null;

    await result.update(payload);
    return result;
};

export const deleteBookById = async (id) => {
    const deletedCount = await Book.destroy({ where: { id } });
  return deletedCount; // повертає кількість видалених рядків
}