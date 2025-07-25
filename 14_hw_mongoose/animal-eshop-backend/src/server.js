import express from "express";
import cors from "cors";

import notFoundHandler from "./middlewares/notFoundHandler.js";
import errorHandler from "./middlewares/errorHandler.js";

import productsRouter from './routers/products.router.js'
import categoriesRouter from "./routers/categories.router.js";

const startServer = ()=> {
    const app = express();

    app.use(cors());
    app.use(express.json());


    app.use("/api/categories", categoriesRouter);

    app.use("/api/products", productsRouter);

    app.use(notFoundHandler);
    app.use(errorHandler);

    const port = process.env.PORT || 3000;

    app.listen(port, ()=> console.log(`Server running on ${port} port`));
}

export default startServer;