const mongoose = require("mongoose");

const ConnectionDB = () => {
    mongoose.set("strictQuery", true);
    mongoose
        .connect(
            `mongodb+srv://${process.env.DB_USER_NAME}:${process.env.DB_PASSWORD}@cluster0.0ow2wzm.mongodb.net/${process.env.DB_Name}?retryWrites=true&w=majority`
        )
        .then(() => {
            console.log("DB connections OK");
        })
        .catch(() => {
            console.log("DB connections Failed");
        });
};

module.exports = ConnectionDB;