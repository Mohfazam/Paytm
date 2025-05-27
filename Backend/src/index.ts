import express from "express";
import {User} from './Schema/db'

import { router as MainRouter } from './Routes/index'

const app = express();

app.use(express.json());

app.use("/api/v1", MainRouter);

app.listen(3000, () => {
    console.log("Server Started on PORT 3000");
});

