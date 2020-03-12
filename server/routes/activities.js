const express = require("express");
const router = express.Router();
const Activities = require("../models/Activity");

// Get all activities:
router.get("/all", (req, res, next) => {
    Activities.find()
    .populate('organization')
    .then(allActivities => res.status(200).json( allActivities ))
    .catch(err => console.log(err))
});


// Get specific activity:
router.get("/:id", (req, res, next) => {
    Activities.findById(req.params.id)
    .populate('organization')
    .populate('participants')
    .then(activity => res.status(200).json( activity ))
    .catch(err => console.log(err))
});


// Get activities by category:
router.get("/categories/:category", (req, res, next) => {
    Activities.find({ 'category.name': req.params.category })
    .populate('organization')
    .then(activities => res.status(200).json( activities ))
    .catch(err => console.log(err))
});



// Get activities by search term:
router.get("/search/:searchTerm", (req, res, next) => {
    Activities.find({ $or: [{ title: new RegExp(req.params.searchTerm, "gi") }, { description: new RegExp(req.params.searchTerm, "gi") }] })
    .populate('organization')
    .populate('participants')
    .then(activities => res.status(200).json( activities ))
    .catch(err => console.log(err))
});


// Get activities by participant:
router.get("/participants/:participant", (req, res, next) => {
    Activities.find({ participants: req.params.participant })
    .populate('organization')
    .then(activities => res.status(200).json( activities ))
    .catch(err => console.log(err))
});


// Create new activity:
router.post('/new', (req, res, next) => {
    let categoryWithImage = createCategory(req.body.category);
    req.body.category = categoryWithImage;
    Activities.create(req.body)
      .then(createdActivity => res.status(200).json(createdActivity))
      .catch(err => console.log(err))
})


// Update a specific activity:
router.put("/:id", (req, res, next) => {
    Activities.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .populate('organization')
    .populate('participants')
    .then(updatedActivity => res.status(200).json(updatedActivity))
    .catch(err => console.log(err))
});


// Add participant to specific activity:
router.put("/:activityId/participants/add", (req, res, next) => {
    Activities.findByIdAndUpdate(req.params.activityId, { $push: { participants: req.body.newParticipant }}, { new: true })
    .populate('organization')
    .populate('participants')
    .then(updatedActivity => res.status(200).json(updatedActivity))
    .catch(err => console.log(err))
});


// Delete a specific activity:
router.delete("/:id", (req, res, next) => {
    Activities.findByIdAndDelete(req.params.id)
    .then(_ => res.status(200).json({ deleted: true }))
    .catch(err => console.log(err))
});


const createCategory = (categoryName) => {
    imgPath = "";
    switch(categoryName) {
        case "ambiental":
            imgPath = "https://res.cloudinary.com/yelpcampagb/image/upload/v1583492530/ironhack-project3/mk0fd45cbpj9howsjff1.jpg";
            break;
        case "comunitario":
            imgPath = "https://res.cloudinary.com/yelpcampagb/image/upload/v1583492530/ironhack-project3/ofpctk5zinroexnkotpb.jpg";
            break;
        case "cultural":
            imgPath = "https://res.cloudinary.com/yelpcampagb/image/upload/v1583492528/ironhack-project3/hs5gyqp7mofnlvdumxlg.jpg";
            break;
        case "deportivo":
            imgPath = "https://res.cloudinary.com/yelpcampagb/image/upload/v1583493118/ironhack-project3/vpyxhad8vklho9ji4a16.jpg";
            break;
        case "educativo":
            imgPath = "https://res.cloudinary.com/yelpcampagb/image/upload/v1583492536/ironhack-project3/t1yw7o7on7p10giirbni.jpg";
            break;
        case "ocio y tiempo libre":
            imgPath = "https://res.cloudinary.com/yelpcampagb/image/upload/v1583492530/ironhack-project3/v4x6ixibt1yzst0ezuwp.jpg";
            break;
        case "proteccion civil":
            imgPath = "https://res.cloudinary.com/yelpcampagb/image/upload/v1583493729/ironhack-project3/t6emwx7oclntllyk3kdl.jpg";
            break;
        case "socio-sanitario":
            imgPath = "https://res.cloudinary.com/yelpcampagb/image/upload/v1583492530/ironhack-project3/v8qsfjmpviisn8ysw5jc.jpg";
            break;
        case "social":
            imgPath = "https://res.cloudinary.com/yelpcampagb/image/upload/v1583492530/ironhack-project3/pvx0vhllzri7zjg8iual.jpg";
            break;
        case "otro":
            imgPath = "https://res.cloudinary.com/yelpcampagb/image/upload/v1583493396/ironhack-project3/as8xogqhzr2gmqgpb9a9.jpg";
            break;
    }
    let categoryWithImage = {
        name: categoryName,
        imgPath: imgPath
    }
    return categoryWithImage;
}


module.exports = router;