// To execute this seed, run from the root of the project
// $ node bin/seeds.js

require('dotenv').config();
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const User = require("../models/User");

const bcryptSalt = 10;

mongoose
  .connect(`${process.env.DBLOCAL}`, {useNewUrlParser: true, useUnifiedTopology: true})
  .then(x => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  })
  .catch(err => {
    console.error('Error connecting to mongo', err)
  });


  // ID's for users:
const arrUsersId = Array(20)
.fill()
.map(() => {
  return new mongoose.mongo.ObjectId()
})

console.log(arrUsersId);


// Users array:
let users = [
  {
    _id: arrUsersId[0],
    firstName: "Arturo",
    lastName: "Gomez",
    email: "agomez@gmail.com",
    password: bcrypt.hashSync("arturo", bcrypt.genSaltSync(bcryptSalt)),
    imgPath: "https://ca.slack-edge.com/T02CQ4EN4-UQC6P04HH-dce5799c5fcf-512",
    role: "organization",
  },
  {
    _id: arrUsersId[1],
    firstName: "Pablo",
    lastName: "Carceller",
    email: "pcarceller@gmail.com",
    password: bcrypt.hashSync("pablo", bcrypt.genSaltSync(bcryptSalt)),
    imgPath: "https://ca.slack-edge.com/T02CQ4EN4-UQPLRNBK7-524ea009fa21-512",
    role: "organization",
  },
  {
    _id: arrUsersId[2],
    firstName: "Fernando",
    lastName: "Comet",
    email: "fcomet@gmail.com",
    password: bcrypt.hashSync("fernando", bcrypt.genSaltSync(bcryptSalt)),
    imgPath: "https://ca.slack-edge.com/T02CQ4EN4-U6L0HBYCC-264ce4287fbb-512",
    role: "organization",
  },
  {
    _id: arrUsersId[3],
    firstName: "Jaime",
    lastName: "Hidalgo",
    email: "jhidalgo@gmail.com",
    password: bcrypt.hashSync("jaime", bcrypt.genSaltSync(bcryptSalt)),
    imgPath: "https://ca.slack-edge.com/T02CQ4EN4-UQPLJ957A-4e2bb75c7df7-512",
    role: "organization",
  },
  {
    _id: arrUsersId[4],
    firstName: "Alejandro",
    lastName: "Sanchez",
    email: "asanchez@gmail.com",
    password: bcrypt.hashSync("alejandro", bcrypt.genSaltSync(bcryptSalt)),
    imgPath: "https://ca.slack-edge.com/T02CQ4EN4-UNECKHELB-b8e7967af39b-512",
    role: "organization",
  },
  {
    _id: arrUsersId[5],
    firstName: "Cristina",
    lastName: "Suarez",
    email: "csuarez@gmail.com",
    password: bcrypt.hashSync("cristina", bcrypt.genSaltSync(bcryptSalt)),
    imgPath: "https://ca.slack-edge.com/T02CQ4EN4-UNFEZP5BQ-05dc99b98bff-512",
    role: "organization",
  },
  {
    _id: arrUsersId[6],
    firstName: "Jose Manuel",
    lastName: "Henche",
    email: "jhenche@gmail.com",
    password: bcrypt.hashSync("jose manuel", bcrypt.genSaltSync(bcryptSalt)),
    imgPath: "https://ca.slack-edge.com/T02CQ4EN4-UQASRS6TC-6f6b028b5f3d-512",
    role: "organization",
  },
  {
    _id: arrUsersId[7],
    firstName: "Cesar",
    lastName: "Val",
    email: "cval@gmail.com",
    password: bcrypt.hashSync("cesar", bcrypt.genSaltSync(bcryptSalt)),
    imgPath: "https://ca.slack-edge.com/T02CQ4EN4-UQFNN65L1-0f211be25562-512",
    role: "organization",
  },
  {
    _id: arrUsersId[8],
    firstName: "Armando",
    lastName: "Momo",
    email: "amomo@gmail.com",
    password: bcrypt.hashSync("armando", bcrypt.genSaltSync(bcryptSalt)),
    imgPath: "https://ca.slack-edge.com/T02CQ4EN4-UQC6P1ZAP-bbaef63d3ab8-512",
    role: "organization",
  },
  {
    _id: arrUsersId[9],
    firstName: "Laura",
    lastName: "Tobajas",
    email: "ltobajas@gmail.com",
    password: bcrypt.hashSync("laura", bcrypt.genSaltSync(bcryptSalt)),
    imgPath: "https://ca.slack-edge.com/T02CQ4EN4-UQC6NU15Z-6586d84174e5-512",
    role: "organization",
  },
  {
    _id: arrUsersId[10],
    firstName: "Pedro",
    lastName: "Castañeda",
    email: "pcastañeda@gmail.com",
    password: bcrypt.hashSync("pedro", bcrypt.genSaltSync(bcryptSalt)),
    imgPath: "https://ca.slack-edge.com/T02CQ4EN4-UQASRTC74-3dbad9c7c55e-512",
    role: "organization",
  },
  {
    _id: arrUsersId[11],
    firstName: "Manuel",
    lastName: "Freire",
    email: "mfreire@gmail.com",
    password: bcrypt.hashSync("manuel", bcrypt.genSaltSync(bcryptSalt)),
    imgPath: "https://ca.slack-edge.com/T02CQ4EN4-UQP6W4BV2-e6212173bd2d-512",
    role: "organization",
  },
  {
    _id: arrUsersId[12],
    firstName: "Franky",
    lastName: "Molina",
    email: "fmolina@gmail.com",
    password: bcrypt.hashSync("franky", bcrypt.genSaltSync(bcryptSalt)),
    imgPath: "https://ca.slack-edge.com/T02CQ4EN4-URYRH0V3Q-08c7ad3928bb-512",
    role: "organization",
  },
  {
    _id: arrUsersId[13],
    firstName: "Juan Carlos",
    lastName: "Mateo",
    email: "jmateo@gmail.com",
    password: bcrypt.hashSync("juan carlos", bcrypt.genSaltSync(bcryptSalt)),
    imgPath: "",
    role: "organization",
  },
  {
    _id: arrUsersId[14],
    firstName: "Luciano",
    lastName: "Sanchez",
    email: "lsanchez@gmail.com",
    password: bcrypt.hashSync("luciano", bcrypt.genSaltSync(bcryptSalt)),
    imgPath: "https://ca.slack-edge.com/T02CQ4EN4-UQP6W4MA8-8cc4565ca32c-512",
    role: "organization",
  },
  {
    _id: arrUsersId[15],
    firstName: "Pedro",
    lastName: "Sanchez",
    email: "psanchez@gmail.com",
    password: bcrypt.hashSync("pedro", bcrypt.genSaltSync(bcryptSalt)),
    imgPath: "https://ca.slack-edge.com/T02CQ4EN4-UNSMUTM18-e217346f3574-512",
    role: "volunteer",
  },
  {
    _id: arrUsersId[16],
    firstName: "Maria",
    lastName: "Simo",
    email: "msimo@gmail.com",
    password: bcrypt.hashSync("maria", bcrypt.genSaltSync(bcryptSalt)),
    imgPath: "https://ca.slack-edge.com/T02CQ4EN4-UNFEZRW4E-ba28cc35c36a-512",
    role: "volunteer",
  },
  {
    _id: arrUsersId[17],
    firstName: "Enrique",
    lastName: "Montaño",
    email: "emontaño@gmail.com",
    password: bcrypt.hashSync("enrique", bcrypt.genSaltSync(bcryptSalt)),
    imgPath: "https://ca.slack-edge.com/T02CQ4EN4-UN1QJKT0B-2aab5aaea454-512",
    role: "volunteer",
  },
  {
    _id: arrUsersId[18],
    firstName: "Fran",
    lastName: "Naranjo",
    email: "fnaranjo@gmail.com",
    password: bcrypt.hashSync("fran", bcrypt.genSaltSync(bcryptSalt)),
    imgPath: "https://ca.slack-edge.com/T02CQ4EN4-UN6S71QRX-6d740dc12a37-512",
    role: "volunteer",
  },
  {
    _id: arrUsersId[19],
    firstName: "Dani",
    lastName: "Vicario",
    email: "dvicario@gmail.com",
    password: bcrypt.hashSync("dani", bcrypt.genSaltSync(bcryptSalt)),
    imgPath: "https://ca.slack-edge.com/T02CQ4EN4-UCZ0QF848-12ca86297199-512",
    role: "volunteer",
  }
]





// Organizations array:
// let organizations = [
//   {
//     name: String,
//     address: String,
//     email: String,
//     phone: String,
//     description: String,
//     imgName: { type: String, default: "imagename" },
//     imgPath: {
//       type: String,
//       default:
//         "https://res.cloudinary.com/yelpcampagb/image/upload/v1583187522/ironhack-project3/ooupp2ez9quvgooe3biz.png"
//     },
//     user: {
//       type: Schema.Types.ObjectId,
//       ref: "User"
//     }
//   }
// ]



User.deleteMany()
.then(() => {
  return User.create(users)
})
.then(usersCreated => {
  console.log(`${usersCreated.length} users created with the following id:`);
  console.log(usersCreated.map(u => u._id));
})
.then(() => {
  // Close properly the connection to Mongoose
  mongoose.disconnect()
})
.catch(err => {
  mongoose.disconnect()
  throw err
})