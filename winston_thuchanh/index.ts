import express from "express";
import bodyParser from "body-parser";
import { logger } from "./src/logger/winston";

const PORT = 3000;
const app = express();

app.use(bodyParser.json());

app.get('/', (req, res) => {
    try {
        res.end("<h1>Hello winston!</h1>")
        throw new Error("Error test winston");
    } catch (err) {
        logger.error(err)
    }
})

app.listen(PORT, () => {
    console.log("App running on port: " + PORT)
})