const express = require("express");
const ConnectionDB = require("./config/db");
const userRouter = require("./routes/userRoute");
const employeRouter = require("./routes/employeRoute");
const dotenv = require("dotenv");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
dotenv.config();

ConnectionDB(); // <= database connection function define

app.use("/user", userRouter); // <= user authentication routes

app.use("/employe", employeRouter); // <= Employe CRUD routes

app.get("/", (req, res) => {
    res.send("Express world");
});

// default error handler

const ErrorHandler = (err, req, res, next) => {
    if (res.headersSent) {
        return next(err);
    }
    res.status(500).json({ error: err });
};

app.use(ErrorHandler);

const PORT = process.env.SERVER_PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server runing on ${PORT}`);
});