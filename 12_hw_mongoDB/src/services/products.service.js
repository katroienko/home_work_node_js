import Product from "../db/Product.js";

export const addProduct = payload => Product.create(payload);

export const getProductsAll = () => Product.find();

export const getProductById = id => Product.findById(id);

export const updateProduct = (id, payload) => Product.findByIdAndUpdate(id, payload, { new: true });

export const deleteProduct = id => Product.findByIdAndDelete(id);