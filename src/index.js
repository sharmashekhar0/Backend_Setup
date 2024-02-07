// require("dotenv").config({ path: "/.env" });
import connectDB from "./db/index.js";
import dotenv from "dotenv";
import { app } from "./app.js";

dotenv.config({
    path: "/.env",
});

const PORT = process.env.PORT || 8000;

connectDB()
    .then(() => {
        app.listen(PORT, () => {
            console.log(`Server is listening on PORT :: ${PORT}`);
        });
    })
    .catch((error) => {
        console.log("MongoDB Connection Failed", error);
    });

/*
import express from "express";

const app = express();

(async () => {
    try {
        await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`);

        app.on("error", (error) => {
            console.log("Error :: ", error);
            throw error;
        });

        app.listen(process.env.PORT, () => {
            console.log(`App is listening on port ${process.env.PORT}`);
        });
    } catch (error) {
        console.log("Error :: ", error);
    }
})();
*/
