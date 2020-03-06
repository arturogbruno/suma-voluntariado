const express = require("express");
const router = express.Router();
const Users = require("../models/User");

// Get all users:
router.get("/all", (req, res, next) => {
    Users.find()
    .then(allUsers => res.status(200).json( allUsers ))
    .catch(err => console.log(err))
});


// Get specific user:
router.get("/:id", (req, res, next) => {
    Users.findById(req.params.id)
    .then(user => res.status(200).json( user ))
    .catch(err => console.log(err))
});


// Update a specific user:
router.put("/:id", (req, res, next) => {
    Users.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then(updatedUser => res.status(200).json(updatedUser))
    .catch(err => console.log(err))
});


// Delete a specific user:
router.delete("/:id", (req, res, next) => {
    Users.findByIdAndDelete(req.params.id)
    .then(_ => res.status(200).json({ deleted: true }))
    .catch(err => console.log(err))
});


module.exports = router;