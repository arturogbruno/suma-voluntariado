const express = require("express");
const router = express.Router();
const Organizations = require("../models/Organization");

// Get all organizations:
router.get("/all", (req, res, next) => {
    Organizations.find()
    .then(allOrganizations => res.status(200).json( allOrganizations ))
    .catch(err => console.log(err))
});


// Get specific organization:
router.get("/:id", (req, res, next) => {
    Organizations.findById(req.params.id)
    .then(organization => res.status(200).json( organization ))
    .catch(err => console.log(err))
});


// Create new organization:
router.post('/new', (req, res, next) => {
    console.log("BEFORE: " + req.body);
    if(req.body.imgPath === "") {
        delete req.body.imgPath;
    }
    console.log("AFTER: " + req.body)
    Organizations.create(req.body)
      .then(createdOrganization => res.status(200).json(createdOrganization))
      .catch(err => console.log(err))
})


// Update a specific organization:
router.put("/:id", (req, res, next) => {
    Organizations.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then(updatedOrganization => res.status(200).json(updatedOrganization))
    .catch(err => console.log(err))
});


// Delete a specific organization:
router.delete("/:id", (req, res, next) => {
    Organizations.findByIdAndDelete(req.params.id)
    .then(_ => res.status(200).json({ deleted: true }))
    .catch(err => console.log(err))
});


module.exports = router;