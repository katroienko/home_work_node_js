import express from "express";
import cors from "cors";

import notFoundHandler from "./middlewares/notFoundHandler.js";
import errorHandler from "./middlewares/errorHandler.js";
import usersRouter from './routers/users.router.js'

// import authRouter from "./routers/auth.router.js";
// import usersRouter from "./routers/users.router.js";
// import categoriesRouter from "./routers/categories.router.js";

const startServer = ()=> {
    const app = express();

    app.use(cors());
    app.use(express.json());

    // app.use("/api/auth", authRouter);
    app.use("/api/users", usersRouter);
    // app.use("/api/categories", categoriesRouter);

    app.use(notFoundHandler);
    app.use(errorHandler);

    const port = process.env.PORT || 3000;

    app.listen(port, ()=> console.log(`Server running on ${port} port`));
}

export default startServer;