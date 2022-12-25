const express = require("express");
const EmployeModel = require("../Schema/employeSchema");
const CheckLogin = require("../middleware/checkLogin");

// define router

const router = express.Router();

// GET REQUEST FOR ALL EMPLOYE

router.get("/list", CheckLogin, (req, res) => {
    EmployeModel.find()
        .then((data) => {
            res.status(200).json(data);
        })
        .catch((err) => {
            res.status(500).json({ message: "Sorry Can't Find any Employe" });
        });
});

// POST REQUEST FOR EMPLOYE

router.post("/add", CheckLogin, (req, res) => {
    const addEmploye = new EmployeModel(req.body);
    addEmploye.save((err) => {
        if (err) {
            res.status(500).json({ message: "Sorry failed to add Employe" });
        } else {
            res.status(200).json({ message: "Successfully Added New Employe" });
        }
    });
});

module.exports = router;