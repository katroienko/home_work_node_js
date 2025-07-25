import { Router } from "express";

import {
    addProductController,
    getProductsAllController,
    getProductByIdController,
    updateProductController,
    deleteProductController,
} from "../controllers/products.controller.js";

const productsRouter = Router();

productsRouter.post("/", addProductController);
productsRouter.get("/", getProductsAllController);
productsRouter.get("/:id", getProductByIdController);
productsRouter.put("/:id", updateProductController);
productsRouter.delete("/:id", deleteProductController);

export default productsRouter;