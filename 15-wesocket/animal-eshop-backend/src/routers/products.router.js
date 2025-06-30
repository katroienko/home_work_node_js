import { Router } from "express";

import { addProductController, getProductsController } from "../controllers/products.controller.js";

import { authenticate, isAdmin } from "../middlewares/authorization.js";
import upload from "../middlewares/upload.js";

const productsRouter = Router();
// маршрут на получение  всех товаров товара.
productsRouter.get("/", authenticate, isAdmin, getProductsController);
// маршрут на добавление товара.
productsRouter.post("/", authenticate, isAdmin, upload.fields([
    {name: "mainImage", maxCount: 1},
    {name: "images", maxCount: 8}
]), addProductController);

export default productsRouter;