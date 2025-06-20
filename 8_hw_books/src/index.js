import "dotenv/config";

import { connectDatabase } from "./db/sequelize.js";
import startServer from "./server.js";
import './db/Books.js'

const bootstrap = async()=> {
    await connectDatabase(); 
    startServer();
}

bootstrap(); 