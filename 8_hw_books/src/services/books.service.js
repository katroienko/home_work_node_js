import Books from "../db/Books.js";

export const getBooks = ()=> Books.findAll();
export const addBook = (payloud) => Books.create(payloud);

export const updateBook = async (id, data) => {
  const [updatedCount] = await Books.update(data, { where: { id } });

  if (updatedCount === 0) return null;

  const updatedBook = await Books.findByPk(id);
  return updatedBook;
};

export const deleteBook = async (id) => {
  const deletedCount = await Books.destroy({ where: { id } });
  return deletedCount > 0;
};