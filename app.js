import express from "express";
import bodyParser from "body-parser";
import router from "./route.js";

const app = express()

const PORT = 3000




app.use(bodyParser.json())
    .use(bodyParser.urlencoded({
        extended: true
    }));

app.use("/", router);

app.listen(PORT, () => {
    console.log(`Server is listening at PORT ${PORT}`)
})
