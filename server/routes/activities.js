const express = require("express");
const router = express.Router();
const Activities = require("../models/Activity");

// Get all activities:
router.get("/all", (req, res, next) => {
    Activities.find()
    .then(allActivities => res.status(200).json({ allActivities }))
    .catch(err => console.log(err))
});


// Get specific activity:
router.get("/:id", (req, res, next) => {
    Activities.findById(req.params.id)
    .then(activity => res.status(200).json({ activity }))
    .catch(err => console.log(err))
});


// Create new activity:
router.post('/new', (req, res, next) => {
    Activities.create(req.body)
      .then(createdActivity => res.status(200).json(createdActivity))
      .catch(err => console.log(err))
})


// Update a specific activity:
router.put("/:id", (req, res, next) => {
    Activities.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then(updatedActivity => res.status(200).json(updatedActivity))
    .catch(err => console.log(err))
});


// Delete a specific activity:
router.delete("/:id", (req, res, next) => {
    Activities.findByIdAndDelete(req.params.id)
    .then(_ => res.status(200).json({ deleted: true }))
    .catch(err => console.log(err))
});


module.exports = router;