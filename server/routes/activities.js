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


// Get activities by organization:
router.get("/organization/:organization", (req, res, next) => {
    Activities.find({ organization: {_id: req.params.organization }})
    .populate('organization')
    .populate('participants')
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


// Delete participant from specific activity:
router.put("/:activityId/participants/delete", (req, res, next) => {
    Activities.findByIdAndUpdate(req.params.activityId, { $pull: { participants: req.body.participant }}, { new: true })
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
            imgPath = "https://res.cloudinary.com/yelpcampagb/image/upload/v1583492530/ironhack-project3/mk0fd45cbpj9howsjff1.jpg",
            description = "Persigue disminuir el impacto negativo del ser humano sobre el medio ambiente y poner en valor el patrimonio natural existente, las especies animales y vegetales, los ecosistemas y los recursos naturales."
            break;
        case "comunitario":
            imgPath = "https://res.cloudinary.com/yelpcampagb/image/upload/v1583492530/ironhack-project3/ofpctk5zinroexnkotpb.jpg", 
            description = "Favorece la mejora de la comunidad, y promueve la participación para resolver los problemas y exigir mayor calidad de vida en los espacios vitales más cercanos, vertebrando una sociedad solidaria, activa, crítica, comprometida y corresponsable."
            break;
        case "cultural":
            imgPath = "https://res.cloudinary.com/yelpcampagb/image/upload/v1583492528/ironhack-project3/hs5gyqp7mofnlvdumxlg.jpg",
            description = "Promueve y defiende el derecho de acceso a la cultura y la promoción y protección de la identidad cultural, la defensa del patrimonio cultural y la participación en la vida cultural de la comunidad."
            break;
        case "deportivo":
            imgPath = "https://res.cloudinary.com/yelpcampagb/image/upload/v1583493118/ironhack-project3/vpyxhad8vklho9ji4a16.jpg",
            description = "Contribuye a la cohesión social, sumando los valores propios del voluntariado con aquellos otros inherentes al deporte, fomentando la práctica deportiva en cualquiera de sus manifestaciones."
            break;
        case "educativo":
            imgPath = "https://res.cloudinary.com/yelpcampagb/image/upload/v1583492536/ironhack-project3/t1yw7o7on7p10giirbni.jpg",
            description = "Mejora las posibilidades de realización de actividades extraescolares contribuyendo a compensar las desigualdades que pudieran existir entre los alumnos por diferencias sociales, personales o económicas, mediante la utilización de programas de aprendizaje-servicio."
            break;
        case "ocio y tiempo libre":
            imgPath = "https://res.cloudinary.com/yelpcampagb/image/upload/v1583492530/ironhack-project3/v4x6ixibt1yzst0ezuwp.jpg",
            description = "Forma y sensibiliza en los principios y valores de la acción voluntaria mediante el desarrollo de actividades en el ámbito de la educación no formal que favorezcan la solidaridad y la inclusión, y logren el compromiso, la participación y la implicación social."
            break;
        case "proteccion civil":
            imgPath = "https://res.cloudinary.com/yelpcampagb/image/upload/v1583493729/ironhack-project3/t6emwx7oclntllyk3kdl.jpg",
            description = "Colabora regularmente en la gestión de las emergencias o catástrofes, como expresión y medio eficaz de participación ciudadana en la respuesta social a estos fenómenos."
            break;
        case "socio-sanitario":
            imgPath = "https://res.cloudinary.com/yelpcampagb/image/upload/v1583492530/ironhack-project3/v8qsfjmpviisn8ysw5jc.jpg",
            description = "Combina la promoción de la salud, la prevención de la enfermedad, la asistencia sanitaria, la rehabilitación y la atención social que va dirigida al conjunto de la sociedad o a los colectivos en situación de vulnerabilidad y ofrece apoyo y orientación a las familias."
            break;
        case "social":
            imgPath = "https://res.cloudinary.com/yelpcampagb/image/upload/v1583492530/ironhack-project3/pvx0vhllzri7zjg8iual.jpg",
            description = "Se desarrolla mediante la intervención con las personas y la realidad social, frente a situaciones de vulneración, privación o falta de derechos u oportunidades para alcanzar una mejor calidad de vida y una mayor cohesión y justicia social."
            break;
        case "otro":
            imgPath = "https://res.cloudinary.com/yelpcampagb/image/upload/v1583493396/ironhack-project3/as8xogqhzr2gmqgpb9a9.jpg",
            description = "Incluye aquellas actividades de voluntariado que por razón del ámbito de actuación, por el lugar en el que se realizan o por la especiallidad de las actividades no se encuentra incluida en el resto de categorías."
            break;
    }
    let categoryWithImage = {
        name: categoryName,
        imgPath: imgPath
    }
    return categoryWithImage;
}


module.exports = router;