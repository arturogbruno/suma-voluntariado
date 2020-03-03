// To execute this seed, run from the root of the project
// $ node bin/seeds.js

require('dotenv').config();
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const User = require("../models/User");
const Organization = require("../models/Organization");
const Activity = require("../models/Activity");

const bcryptSalt = 10;

mongoose
  .connect(`${process.env.DBLOCAL}`, {useNewUrlParser: true, useUnifiedTopology: true})
  .then(x => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  })
  .catch(err => {
    console.error('Error connecting to mongo', err)
  });


// ==================== USERS ====================

// ID's for users:
const arrUsersId = Array(20)
.fill()
.map(() => {
  return new mongoose.mongo.ObjectId()
})


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
];


// ==================== ORGANIZATIONS ====================

// ID's for organizations:
const arrOrganizationsId = Array(15)
.fill()
.map(() => {
  return new mongoose.mongo.ObjectId()
})


// Function to generate random phone numbers:
function getPhoneNumber() {
  let randomPhoneNumber = '91';
  for(let i = 0; i < 7; i++) {
    let randomNumber = Math.floor(Math.random() * 9);
    randomPhoneNumber += randomNumber;
  }
  return randomPhoneNumber;
}


// Organizations array:
let organizations = [
  {
    _id: arrOrganizationsId[0],
    name: "Bokatas",
    address: "Paseo de la Habana, 31, 28036 Madrid",
    email: "info@bokatas.org",
    phone: getPhoneNumber(),
    webpage: "http://bokatas.org",
    description: `La Asociación Bokatas es una historia de personas, con nombre y apellidos. Es una historia de encuentros, de “acercarse”, de relatos concretos, de caminos cruzados y de escucha mutua. Ayudamos a las personas a las que acompañamos siempre y cuando sea un trabajo mutuo, ellos son los protagonistas de su vida, nosotros les tendemos la mano cada vez que les vemos para ser su oportunidad de cambio. 
    Buscamos ser el puente entre las personas sin hogar y las instituciones sociales, trabajando en red, para ello, formamos parte de varios grupos de trabajo con otras entidades que trabajan en la misma dirección. En la actualidad contamos con 420 voluntarios, tenemos presencia en tres ciudades españolas, realizamos acompañamiento a unas 500 personas sin hogar y cada año pasamos más de 3.000 horas en la calle.`,
    imgPath: "http://bokatas.org/wp-content/uploads/2016/11/LOGO-1.png",
    user: arrUsersId[0]
  },
  {
    _id: arrOrganizationsId[1],
    name: "Reforesta",
    address: "Sector Foresta, 43, 28760 Tres Cantos, Madrid",
    email: "info@reforesta.es",
    phone: getPhoneNumber(),
    webpage: "https://www.reforesta.es/index.php",
    description: `Reforesta es una asociación sin ánimo de lucro fundada en 1991 y declarada de Utilidad Pública. Se dedica a la promoción del desarrollo sostenible. Dentro de este amplio ámbito, en el marco de la Agenda 2030 de Naciones Unidas brindamos una especial atención a los Objetivos de Desarrollo Sostenible 13 (acción por el clima) y 15 (conservación de los ecosistemas terrestres), priorizando la recuperación de la vegetación y la lucha contra la desertificación.
    Acumulamos una notable experiencia en programas de educación, formación, voluntariado, comunicación ambiental y estudio y conservación de la naturaleza. Nuestras actividades están abiertas a la participación de diferentes colectivos: escolares, particulares, personas en riesgo de exclusión, personas con diversidad funcional, trabajadores de empresas… En nuestros programas colaboramos con empresas, administraciones públicas y otras entidades del Tercer Sector.`,
    imgPath: "https://www.reforesta.es/images/Iconos/Head_.png",
    user: arrUsersId[1]
  },
  {
    _id: arrOrganizationsId[2],
    name: "Asociación Educación, Cultura y Solidaridad",
    address: "Calle Paterna, 57, 28021 Madrid",
    email: "info@aecys.es",
    phone: getPhoneNumber(),
    webpage: "http://eculturas.org/index.html",
    description: `Educación, Cultura y Solidaridad es una Asociación de Ámbito Autonómico, (Comunidad de Madrid) declarada de Utilidad Pública. Sus principales actividades se desarrollan desde el Centro Educación Cultura y Solidaridad (Proyecto San Cristóbal) en el Barrio San Cristóbal de los Ángeles (Villaverde). 
    El Centro está consolidado y reconocido en San Cristóbal como referente para familias, niños y jóvenes, especialmente inmigrantes y jóvenes en riesgo de exclusión, a los que les ofrece la posibilidad de reinserción sociolaboral y académica. Es  también un referente para mujeres norteafricanas y subsaharianas, que encuentran en él, un aliado para su desarrollo personal e integración social. La asociación ECyS está reconocida como una activa participante en cuantas plataformas, mesas, y grupos de interés funcionan en el barrio.
    `,
    imgPath: "http://eculturas.org/images/logo-64x61.gif",
    user: arrUsersId[2]
  },
  {
    _id: arrOrganizationsId[3],
    name: "Fundación ANAR",
    address: "Avda. de América, 24, 28028 Madrid",
    email: "voluntariado@anar.org",
    phone: getPhoneNumber(),
    webpage: "https://www.anar.org/",
    description: `La Fundación ANAR (ayuda a niños y adolescentes en riesgo) es una organización sin ánimo de lucro, cuyos orígenes se remontan a 1970, y se dedica a la promoción y defensa de los derechos de los niños y adolescentes en situación de riesgo y desamparo, mediante el desarrollo de proyectos tanto en España como en Latinoamérica, en el marco de la Convención de los Derechos del Niño de Naciones Unidas.
    Nuestra visión es la de un mundo en el que todos los niños, niñas y adolescentes tengan derecho a que su voz sea escuchada, sobre las situaciones de vida que les afectan y siempre que se vulneren sus derechos. Conscientes de que son los más indefensos de nuestra sociedad, nuestra visión es la de un mundo en el que esos niños, niñas y adolescentes tengan plenamente protegidos sus derechos.`,
    imgPath: "https://www.anar.org/wp-content/uploads/2014/11/Logo-home-ANAR.jpg",
    user: arrUsersId[3]
  },
  {
    _id: arrOrganizationsId[4],
    name: "Asociación Feddig 2008",
    address: "Avda. Don Juan de Borbón, s/n, 28903 Getafe, Madrid",
    email: "feddig2008@gmail.com",
    phone: getPhoneNumber(),
    webpage: "https://www.feddig2008.org/",
    description: `Feddig es una entidad sin ánimo de lucro que fue constituida en 2008 y cuyas siglas corresponden a: Asociación de escuelas deportivas y de ocio para personas con diversidad funcional de Getafe. Nuestro objetivo general es conseguir la integración social de las personas con diversidad a través de actividades deportivas y de ocio dentro de un buen ambiente de unión y amistad.`,
    imgPath: "https://cdn.website-editor.net/9d71048894394ea4af4a88fe64eb4692/dms3rep/multi/mobile/ESCUDO_NUEVO_DE_FEDDIG20081-2-768x1085-98608648.jpg",
    user: arrUsersId[4]
  },
  {
    _id: arrOrganizationsId[5],
    name: "Fundación Desarrollo  y Asistencia (Nadiesolo)",
    address: "Calle Artistas, 2, 28020 Madrid",
    email: "info@desarrolloyasistencia.org",
    phone: getPhoneNumber(),
    webpage: "http://desarrolloyasistencia.org/",
    description: `En Nadiesolo llevamos a cabo programas de acompañamiento a personas que se encuentran en situación de necesidad por soledad, enfermedad, exclusión, discapacidad u otras causas.
    Comenzamos nuestra actividad en diciembre de 1995. Desde entonces hemos ido creciendo apoyándonos siempre en el deseo de ayudar con nuestro acompañamiento persona a persona y nuestros valores fundamentales como son el reconocimiento de la dignidad de la persona y el respeto a su libertad, el apoyo a la familia y la constancia y el compromiso en el trabajo.`,
    imgPath: "http://desarrolloyasistencia.org/wp-content/uploads/2020/03/Positivo-nadiesolo-transicion.png",
    user: arrUsersId[5]
  }
];


// ==================== ACTIVITIES ====================

// Function to generate dates from the current day:
function getDates() {
  let numerOfDays = Math.floor(Math.random() * 4) + 1;
  let arrDays = [];
  let arrDates = [];
  for(let i = 0; i < numerOfDays; i++) {
    let day = Math.floor(Math.random() * 30) + 1;
    if(arrDays.indexOf(day) === -1) {
      arrDays.push(day);
    }
  }
  for(let i = 0; i < arrDays.length; i++) {
    let result = new Date;
    result.setDate(result.getDate() + arrDays[i]);
    arrDates.push(result);
  }
  return arrDates.sort((a, b) => a - b);
}


let activities = [
  {
    title: "Rutas de calle",
    description: `Los voluntarios salen repartiendo bocadillos, café y caldo como excusa para pasar un rato con las personas sin hogar. Se organizan los diferentes grupos de voluntarios que se distribuyen en varias rutas y… ¡comienza nuestra labor! La idea es que cada voluntario haga siempre la misma ruta para lograr así crear vínculos reales que nos permitan alcanzar una relación de confianza y de respeto mutuo. Sin embargo, se pide flexibilidad cuando se necesiten voluntarios en otras rutas. Después, uno de los voluntarios elaborará un “email de ruta” que sirve de información a efectos internos para coordinar mejor las necesidades y poder realizar un mejor acompañamiento. Mensualmente, cada sede tendrá una reunión donde todos los voluntarios pondrán en común los distintos casos y situaciones ocurridas en las rutas. Es en este momento donde se realiza nuestra labor de “puente” vinculando los eventuales casos con recursos profesionales.`,
    dates: getDates(),
    time: "20:00 h - 23:00 h",
    location: "Calle de Fernando el Católico, 63, 28015 Madrid",
    coord: {
      lat: 40.4343077,
      lng: -3.7172962
    },
    imgPath: "http://bokatas.org/wp-content/uploads/2016/11/foto-seccion-1.jpg",
    category: "social",
    minParticipants: 3,
    maxParticipants: 20,
    requirements: "Todo el mundo es bienvenido, solo se necesitan ganas de ayudar! Si puedes traer algo de comida o bebida para repartir a las personas sin hogar, mejor aún!",
    organization: arrOrganizationsId[0]
  },
  {
    title: "Tándem",
    description: `Tándem es el Centro de Acompañamiento abierto por la Asociación Bokatas a finales 2014, con el objetivo de ser un refuerzo al acompañamiento llevado a cabo por los voluntarios en las rutas de calle y desde 2017, en las Rutas Zero.
    En Tándem se dan cursos de formación a nuestros usuarios y voluntarios, se comparte el tiempo viendo películas, partidos de fútbol y celebrando momentos especiales con las personas que acuden al centro: cumpleaños, Navidades, fiestas temáticas así como otras actividades.
    En resumen, Tándem es un lugar de encuentro.`,
    dates: getDates(),
    time: "12:00h - 18:00 h",
    location: "Paseo de las Delicias, 61, 28045 Madrid",
    coord: {
      lat: 40.400342,
      lng: -3.6958533
    },
    imgPath: "http://bokatas.org/wp-content/uploads/2016/11/foto-seccion-2.jpg",
    category: "social",
    minParticipants: 2,
    maxParticipants: 6,
    requirements: "Todo el mundo es bienvenido, solo se necesitan ganas de ayudar!",
    organization: arrOrganizationsId[0]
  },
  {
    title: "Reforestación en Navacerrada",
    description: `Los trabajos a realizar durante esta actividad serán los siguientes: plantación de árboles y arbustos autóctonos en las zonas deforestadas del monte. Vallados con postes de madera y malla ganadera para evitar que el ganado y los corzos dañen los árboles. Censo del estado de la planta de la reforestación. Determinación de daños en los árboles producidos por ganado y herbívoros silvestres. Determinación de daños producidos a los enebros por la planta parásita muérdago del enebro.`,
    dates: getDates(),
    time: "9:00 h - 17:00 h",
    location: "Calle del Párroco Desiderio García, 3, 28491 Navacerrada, Madrid",
    coord: {
      lat: 40.7315737,
      lng: -4.0000611
    },
    imgPath: "https://www.reforesta.es/images/Que_Hacemos/05_Voluntariado/05_Voluntariado_1.jpg",
    category: "ambiental",
    minParticipants: 10,
    maxParticipants: 25,
    requirements: "Estar en buena forma física para poder pasar un día casi completo en el monte realizando las tareas especificadas. El material necesario lo aporta la organización.",
    organization: arrOrganizationsId[1]
  },
  {
    title: "Vallado y mantenimiento de árboles en la Colada de Manzanares el Real",
    description: `Los trabajos a realizar durante esta actividad serán los siguientes: vallados con postes de madera y malla ganadera para evitar que el ganado y los corzos dañen los árboles. Mantenimiento, incluyendo riego estival. Censo del estado de los árboles y arbustos plantados.`,
    dates: getDates(),
    time: "9:00 h - 17:00 h",
    location: "Calle de la Paz, 25, 28410 Manzanares el Real, Madrid",
    coord: {
      lat: 40.7212214,
      lng: -3.8723282
    },
    imgPath: "https://www.reforesta.es/images/Que_Hacemos/05_Voluntariado/05_Corporativo_1.jpg",
    category: "ambiental",
    minParticipants: 10,
    maxParticipants: 25,
    requirements: "Estar en buena forma física para poder pasar un día casi completo en el monte realizando las tareas especificadas. El material necesario lo aporta la organización.",
    organization: arrOrganizationsId[1]
  },
  {
    title: "Taller de escritura y cálculo matemático",
    description: `Este taller está destinado a alumnos y alumnas inmigrantes, de habla hispana, que necesitan alfabetizarse. Son atendidos por voluntarios en niveles y horarios adaptados. El objetivo es dar respuesta a la gran demanda por parte de la población inmigrante de aprender castellano y alzabetizarse para poder integrarse en el país y poder trabajar.
    Los alumnos están divididos en varios grupos con diferentes niveles.`,
    dates: getDates(),
    time: "17:00 h - 19:00 h",
    location: "Calle Paterna, 57, 28021 Madrid",
    coord: {
      lat: 40.3407892,
      lng: -3.6867341
    },
    imgPath: "https://valenciaextra.com/wp-content/uploads/2020/01/031-escuela-acogida-2-680x365_c.jpg",
    category: "ambiental",
    minParticipants: 1,
    maxParticipants: 4,
    requirements: "Para este taller necesitamos especialmente personas con estudios medios o superiores y con capacidad pedagógica.",
    organization: arrOrganizationsId[2]
  },
  {
    title: "Teléfono de ayuda a niños y adolescentes",
    description: `En el Teléfono ANAR de Ayuda a Niños y Adolescentes damos respuesta inmediata a todo tipo de problemas: acoso escolar, violencia de género, maltrato, trastornos de alimentación, ciberbullying, entre otros. Cualquier niño o joven puede marcar nuestro número, que es gratuito y confidencial, y encontrará al otro lado un psicólogo que le va a escuchar el tiempo necesario, que le orientará en su problema y que le ayudará a encontrar un solución.
    El objetivo principal del Teléfono ANAR es facilitar a los niños y adolescentes un espacio seguro, confidencial, en el que se sientan escuchados y respetados, y en el que puedan expresar libremente aquello que les ocurre para intentar buscar alternativas a sus problemas conjuntamente con ellos.`,
    dates: getDates(),
    time: "10:00 h - 14:00 h",
    location: "Avda. de América, 24, 28028 Madrid",
    coord: {
      lat: 40.4387216,
      lng: -3.676186
    },
    imgPath: "https://res.cloudinary.com/yelpcampagb/image/upload/v1583268032/ironhack-project3/akmutoc3d6sj5flwdzyk.png",
    category: "social",
    minParticipants: 4,
    maxParticipants: 10,
    requirements: "En este ámbito necesitamos voluntarios que sean psicólogos, sociólogos o trabajadores sociales. Además, todos los voluntarios que trabajan como orientadores del Teléfono ANAR deben pasar por un periodo formativo previo, que va desde la teoría a la práctica en tres fases o niveles.",
    organization: arrOrganizationsId[3]
  },
  {
    title: "Teléfono de la familia y los centros escolares",
    description: `La Fundación ANAR ofrece un servicio de atención gratuito dirigido a aquellos adultos que necesitan ser orientados en temas relacionados con niños/as y jóvenes. En una sociedad cada vez más preocupada por los problemas de sus menores, cada año aumenta el número de adultos que utiliza este servicio para asesorarse: padres preocupados por los comportamientos de sus hijos, vecinos que sospechan situaciones de maltrato a menores y no saben qué hacer, profesores inmersos en problemas de violencia escolar, profesionales relacionados con la infancia.`,
    dates: getDates(),
    time: "16:00 h - 20:00 h",
    location: "Avda. de América, 24, 28028 Madrid",
    coord: {
      lat: 40.4387216,
      lng: -3.676186
    },
    imgPath: "https://res.cloudinary.com/yelpcampagb/image/upload/v1583268032/ironhack-project3/akmutoc3d6sj5flwdzyk.png",
    category: "social",
    minParticipants: 4,
    maxParticipants: 10,
    requirements: "En este ámbito necesitamos voluntarios que sean psicólogos, sociólogos o trabajadores sociales. Además, todos los voluntarios que trabajan como orientadores del Teléfono ANAR deben pasar por un periodo formativo previo, que va desde la teoría a la práctica en tres fases o niveles.",
    organization: arrOrganizationsId[3]
  },
  {
    title: "Escuela deportiva de fútbol sala",
    description: `Esta actividad esta dirigida a promover la actividad deportiva en personas con diversidad funcional. Se cuenta con cuatro equipos divididos por niveles de juego que compiten en las ligas deportivas de Femaddi (Federación madrileña de deportes para discapacitados intelectuales).`,
    dates: getDates(),
    time: "19:00 h - 20:00 h",
    location: "Av. del Parque, 6-14, 28907 Getafe, Madrid",
    coord: {
      lat: 40.3262453,
      lng: -3.7414765
    },
    imgPath: "https://res.cloudinary.com/yelpcampagb/image/upload/v1583269280/ironhack-project3/nnhghpbzmnc1ibskkfwj.png",
    category: "deportivo",
    minParticipants: 2,
    maxParticipants: 6,
    requirements: "Los voluntarios son personas relacionadas con el deporte (INEFs, Maestros de Educación Física, TAFAD, técnicos deportivos...) que ofrecen su tiempo y experiencia para beneficio de las personas con discapacidad intelectual.",
    organization: arrOrganizationsId[4]
  },
  {
    title: "Escuela deportiva de gimnasia rítmica",
    description: `Esta actividad esta dirigida a promover la actividad deportiva en personas con diversidad funcional. El equipo participa en el campeonato autonómico de gimansia rítmica de Femaddi (Federación madrileña de deportes para discapacitados intelectuales).`,
    dates: getDates(),
    time: "18:00 h - 19:30 h",
    location: "Av. del Parque, 6-14, 28907 Getafe, Madrid",
    coord: {
      lat: 40.3262453,
      lng: -3.7414765
    },
    imgPath: "http://www.femaddi.org/sites/default/files/gimansiaritmicafemaddi.jpg",
    category: "deportivo",
    minParticipants: 2,
    maxParticipants: 6,
    requirements: "Los voluntarios son personas relacionadas con el deporte (INEFs, Maestros de Educación Física, TAFAD, técnicos deportivos...) que ofrecen su tiempo y experiencia para beneficio de las personas con discapacidad intelectual.",
    organization: arrOrganizationsId[4]
  },
  {
    title: "Voluntariado de acompañamiento en domicilio",
    description: `El programa de acompañamiento en domicilio tiene el objetivo principal de atender a personas en situaciones de vulnerabilidad, en riesgo de aislamiento, negligencia o maltrato para que puedan y prolongar su estancia en sus propios domicilios como medio habitual de convivencia. Además, con el programa se pretende también fomentar la participación social, la promoción del envejecimiento activo y de las relaciones intergeneracionales.
    El voluntariado, a través de un acompañamiento personal y cercano ayuda a:
    - Paliar los efectos negativos de la soledad y deterioro propio de la edad.
    - Procurar retrasar el riesgo de dependencia.
    - Activar y/o recuperar las facultades mentales.
    - Apoyar al cuidador principal.`,
    dates: getDates(),
    time: "17:00 h - 20:00 h",
    location: "Calle Artistas, 2, 28020 Madrid",
    coord: {
      lat: 40.4472219,
      lng: -3.7053683
    },
    imgPath: "http://desarrolloyasistencia.org/wp-content/uploads/2018/10/Domiciliio_Enriqueta2.jpg",
    category: "comunitario",
    minParticipants: 2,
    maxParticipants: 15,
    requirements: "Para ser voluntario de Desarrollo y Asistencia solo es necesario tener ganas de ayudar y más de 16 años con permiso paterno. Si quieres iniciarte en el voluntariado con Desarrollo y Asistencia, primero ven a una sesión de iniciación al voluntariado.",
    organization: arrOrganizationsId[5]
  },
  {
    title: "Voluntariado en hospitales",
    description: `La finalidad del presente programa de voluntariado de Desarrollo y Asistencia es contribuir a humanizar los hospitales mediante acompañamiento, apoyo afectivo y empatía, con la única finalidad de ser útiles a las personas que atendemos.
    En el programa de voluntariado de Desarrollo y Asistencia en el ámbito hospitalario nos encontramos con personas con alguna enfermedad, a veces crónica o terminal, que se encuentran hospitalizadas. También se incluye a familiares del enfermo que, debido a la larga duración de la enfermedad y la carga psicológica y física que soportan puedan necesitar apoyo externo.
    Se realizan las siguientes actividades con el fin de acompañar a las personas allí donde es necesario:
    - Acompañamiento a pacientes ingresados y apoyo a sus familiares.
    - Guía y acompañamiento a pacientes en consultas externas.
    - Acompañamiento en el área de Urgencias.
    - Acompañamiento específico a pacientes con Discapacidad (Programa APAD).
    - Acompañamiento a pacientes tras el alta hospitalaria (Proyecto PLATA).`,
    dates: getDates(),
    time: "17:00 h - 20:00 h",
    location: "Calle Artistas, 2, 28020 Madrid",
    coord: {
      lat: 40.4472219,
      lng: -3.7053683
    },
    imgPath: "http://desarrolloyasistencia.org/wp-content/uploads/2018/10/hospitales-inicio-1024x680.jpg",
    category: "comunitario",
    minParticipants: 2,
    maxParticipants: 15,
    requirements: "Para ser voluntario de Desarrollo y Asistencia solo es necesario tener ganas de ayudar y más de 16 años con permiso paterno. Si quieres iniciarte en el voluntariado con Desarrollo y Asistencia, primero ven a una sesión de iniciación al voluntariado.",
    organization: arrOrganizationsId[5]
  },
  {
    title: "Voluntariado en residencias",
    description: `Uno de los graves problemas de nuestros mayores es la soledad. En el actual estilo de sociedad, se da cada vez en mayor medida que las personas mayores pasen a vivir en residencias por circunstancias muy diversas. En muchos casos, las propias familias no pueden atenderlos en su domicilio, bien por su estado de salud, bien por las limitaciones de tiempo y espacio en esa estructura familiar, o bien porque el mayor ha quedado solo y no puede vivir de forma independiente.
    Desde DA tenemos como objetivo en este programa cooperar con los profesionales de las residencias para que los usuarios reciban una atención individualizada y podamos paliar en parte su soledad, en esa última temporada de su vida, teniendo en los voluntarios ese familiar o amigo que necesitan.`,
    dates: getDates(),
    time: "17:00 h - 20:00 h",
    location: "Calle Artistas, 2, 28020 Madrid",
    coord: {
      lat: 40.4472219,
      lng: -3.7053683
    },
    imgPath: "http://desarrolloyasistencia.org/wp-content/uploads/2018/10/residencias-inicio-1024x682.jpg",
    category: "comunitario",
    minParticipants: 2,
    maxParticipants: 15,
    requirements: "Para ser voluntario de Desarrollo y Asistencia solo es necesario tener ganas de ayudar y más de 16 años con permiso paterno. Si quieres iniciarte en el voluntariado con Desarrollo y Asistencia, primero ven a una sesión de iniciación al voluntariado.",
    organization: arrOrganizationsId[5]
  },
  {
    title: "Zapatillas solidarias",
    description: `El programa Zapatillas Solidarias, se inicia y consolida en 2018 y pretende la inclusión de personas sin hogar a través del deporte.
    El deporte es el estímulo principal de las personas sin hogar que participan en Zapatillas Solidarias, para mantener su salud, tanto física como mental y mejorar sus vidas. Concretamente el running, se ha convertido para ellos en una excusa más para juntarse en los entrenamientos y pasar ratos bien acompañados, con motivaciones, esfuerzo y constancia, para llegar siempre un poco más allá.
    Es allí, más allá, donde se encontrarán siempre con su siguiente meta, a la que miran con determinación y ganas de cruzarla. Pues ese es su lema y así son: adictos a cruzar metas.`,
    dates: getDates(),
    time: "18:00 h - 20:00 h",
    location: "Calle Artistas, 2, 28020 Madrid",
    coord: {
      lat: 40.4472219,
      lng: -3.7053683
    },
    imgPath: "http://desarrolloyasistencia.org/wp-content/uploads/2019/03/zapatillas-nota-de-prensa2-1024x681.jpg",
    category: "social",
    minParticipants: 2,
    maxParticipants: 8,
    requirements: "Para ser voluntario de Desarrollo y Asistencia solo es necesario tener ganas de ayudar y más de 16 años con permiso paterno. Si quieres iniciarte en el voluntariado con Desarrollo y Asistencia, primero ven a una sesión de iniciación al voluntariado.",
    organization: arrOrganizationsId[5]
  }
]




// ==================== POPULATION OF DB ====================
User.deleteMany()
.then(() => {
  return User.create(users)
})
.then(usersCreated => {
  console.log(`${usersCreated.length} users created with the following id:`);
  console.log(usersCreated.map(u => u._id))
})
.then(() => {
  Organization.deleteMany()
.then(() => {
  return Organization.create(organizations)
})
.then(organizationsCreated => {
  console.log(`${organizationsCreated.length} organizations created with the following id:`);
  console.log(organizationsCreated.map(o => o._id));
})
.then(() => {
  Activity.deleteMany()
.then(() => {
  return Activity.create(activities)
})
.then(activitiesCreated => {
  console.log(`${activitiesCreated.length} activities created with the following id:`);
  console.log(activitiesCreated.map(a => a._id));
})
.then(() => {
  // Close properly the connection to Mongoose
  mongoose.disconnect()
})
.catch(err => {
  mongoose.disconnect()
  throw err
})
})
})