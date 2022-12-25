const mongoose = require("mongoose");

// create employe schema

const EmployeShcema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    gender: {
        type: String,
        enum: ["Male", "Female"],
    },
    age: {
        type: Number,
        required: true,
    },
    position: {
        type: String,
        required: true,
    },
    salary: {
        type: Number,
        required: true,
    },
});

// create employe model

const EmployeModel = mongoose.model("employes", EmployeShcema);

module.exports = EmployeModel;