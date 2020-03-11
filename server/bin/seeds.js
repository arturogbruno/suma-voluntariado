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
  .connect(`${process.env.DBURL}`, {useNewUrlParser: true, useUnifiedTopology: true})
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
    username: "arturo",
    email: "agomez@gmail.com",
    password: bcrypt.hashSync("arturo", bcrypt.genSaltSync(bcryptSalt)),
    imgPath: "https://ca.slack-edge.com/T02CQ4EN4-UQC6P04HH-dce5799c5fcf-512",
    role: "organization",
  },
  {
    _id: arrUsersId[1],
    username: "pablo",
    email: "pcarceller@gmail.com",
    password: bcrypt.hashSync("pablo", bcrypt.genSaltSync(bcryptSalt)),
    imgPath: "https://ca.slack-edge.com/T02CQ4EN4-UQPLRNBK7-524ea009fa21-512",
    role: "organization",
  },
  {
    _id: arrUsersId[2],
    username: "fernando",
    email: "fcomet@gmail.com",
    password: bcrypt.hashSync("fernando", bcrypt.genSaltSync(bcryptSalt)),
    imgPath: "https://ca.slack-edge.com/T02CQ4EN4-U6L0HBYCC-264ce4287fbb-512",
    role: "organization",
  },
  {
    _id: arrUsersId[3],
    username: "jaime",
    email: "jhidalgo@gmail.com",
    password: bcrypt.hashSync("jaime", bcrypt.genSaltSync(bcryptSalt)),
    imgPath: "https://ca.slack-edge.com/T02CQ4EN4-UQPLJ957A-4e2bb75c7df7-512",
    role: "organization",
  },
  {
    _id: arrUsersId[4],
    username: "alejandro",
    email: "asanchez@gmail.com",
    password: bcrypt.hashSync("alejandro", bcrypt.genSaltSync(bcryptSalt)),
    imgPath: "https://ca.slack-edge.com/T02CQ4EN4-UNECKHELB-b8e7967af39b-512",
    role: "organization",
  },
  {
    _id: arrUsersId[5],
    username: "cristina",
    email: "csuarez@gmail.com",
    password: bcrypt.hashSync("cristina", bcrypt.genSaltSync(bcryptSalt)),
    imgPath: "https://ca.slack-edge.com/T02CQ4EN4-UNFEZP5BQ-05dc99b98bff-512",
    role: "organization",
  },
  {
    _id: arrUsersId[6],
    username: "jose manuel",
    email: "jhenche@gmail.com",
    password: bcrypt.hashSync("jose manuel", bcrypt.genSaltSync(bcryptSalt)),
    imgPath: "https://ca.slack-edge.com/T02CQ4EN4-UQASRS6TC-6f6b028b5f3d-512",
    role: "organization",
  },
  {
    _id: arrUsersId[7],
    username: "cesar",
    email: "cval@gmail.com",
    password: bcrypt.hashSync("cesar", bcrypt.genSaltSync(bcryptSalt)),
    imgPath: "https://ca.slack-edge.com/T02CQ4EN4-UQFNN65L1-0f211be25562-512",
    role: "organization",
  },
  {
    _id: arrUsersId[8],
    username: "armando",
    email: "amomo@gmail.com",
    password: bcrypt.hashSync("armando", bcrypt.genSaltSync(bcryptSalt)),
    imgPath: "https://ca.slack-edge.com/T02CQ4EN4-UQC6P1ZAP-bbaef63d3ab8-512",
    role: "organization",
  },
  {
    _id: arrUsersId[9],
    username: "laura",
    email: "ltobajas@gmail.com",
    password: bcrypt.hashSync("laura", bcrypt.genSaltSync(bcryptSalt)),
    imgPath: "https://ca.slack-edge.com/T02CQ4EN4-UQC6NU15Z-6586d84174e5-512",
    role: "organization",
  },
  {
    _id: arrUsersId[10],
    username: "pedroc",
    email: "pcastañeda@gmail.com",
    password: bcrypt.hashSync("pedro", bcrypt.genSaltSync(bcryptSalt)),
    imgPath: "https://ca.slack-edge.com/T02CQ4EN4-UQASRTC74-3dbad9c7c55e-512",
    role: "organization",
  },
  {
    _id: arrUsersId[11],
    username: "manu",
    email: "mfreire@gmail.com",
    password: bcrypt.hashSync("manuel", bcrypt.genSaltSync(bcryptSalt)),
    imgPath: "https://ca.slack-edge.com/T02CQ4EN4-UQP6W4BV2-e6212173bd2d-512",
    role: "organization",
  },
  {
    _id: arrUsersId[12],
    username: "franky",
    email: "fmolina@gmail.com",
    password: bcrypt.hashSync("franky", bcrypt.genSaltSync(bcryptSalt)),
    imgPath: "https://ca.slack-edge.com/T02CQ4EN4-URYRH0V3Q-08c7ad3928bb-512",
    role: "organization",
  },
  {
    _id: arrUsersId[13],
    username: "juan carlos",
    email: "jmateo@gmail.com",
    password: bcrypt.hashSync("juan carlos", bcrypt.genSaltSync(bcryptSalt)),
    imgPath: "",
    role: "organization",
  },
  {
    _id: arrUsersId[14],
    username: "luciano",
    email: "lsanchez@gmail.com",
    password: bcrypt.hashSync("luciano", bcrypt.genSaltSync(bcryptSalt)),
    imgPath: "https://ca.slack-edge.com/T02CQ4EN4-UQP6W4MA8-8cc4565ca32c-512",
    role: "organization",
  },
  {
    _id: arrUsersId[15],
    username: "pedros",
    email: "psanchez@gmail.com",
    password: bcrypt.hashSync("pedro", bcrypt.genSaltSync(bcryptSalt)),
    imgPath: "https://ca.slack-edge.com/T02CQ4EN4-UNSMUTM18-e217346f3574-512",
    role: "volunteer",
  },
  {
    _id: arrUsersId[16],
    username: "maria",
    email: "msimo@gmail.com",
    password: bcrypt.hashSync("maria", bcrypt.genSaltSync(bcryptSalt)),
    imgPath: "https://ca.slack-edge.com/T02CQ4EN4-UNFEZRW4E-ba28cc35c36a-512",
    role: "volunteer",
  },
  {
    _id: arrUsersId[17],
    username: "enrique",
    email: "emontaño@gmail.com",
    password: bcrypt.hashSync("enrique", bcrypt.genSaltSync(bcryptSalt)),
    imgPath: "https://ca.slack-edge.com/T02CQ4EN4-UN1QJKT0B-2aab5aaea454-512",
    role: "volunteer",
  },
  {
    _id: arrUsersId[18],
    username: "fran",
    email: "fnaranjo@gmail.com",
    password: bcrypt.hashSync("fran", bcrypt.genSaltSync(bcryptSalt)),
    imgPath: "https://ca.slack-edge.com/T02CQ4EN4-UN6S71QRX-6d740dc12a37-512",
    role: "volunteer",
  },
  {
    _id: arrUsersId[19],
    username: "dani",
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
    webpage: "http://www.bokatas.org",
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
    webpage: "http://www.eculturas.org/index.html",
    description: `Educación, Cultura y Solidaridad es una Asociación de Ámbito Autonómico, (Comunidad de Madrid) declarada de Utilidad Pública. Sus principales actividades se desarrollan desde el Centro Educación Cultura y Solidaridad (Proyecto San Cristóbal) en el Barrio San Cristóbal de los Ángeles (Villaverde). 
    El Centro está consolidado y reconocido en San Cristóbal como referente para familias, niños y jóvenes, especialmente inmigrantes y jóvenes en riesgo de exclusión, a los que les ofrece la posibilidad de reinserción sociolaboral y académica. Es  también un referente para mujeres norteafricanas y subsaharianas, que encuentran en él, un aliado para su desarrollo personal e integración social. La asociación ECyS está reconocida como una activa participante en cuantas plataformas, mesas, y grupos de interés funcionan en el barrio`,
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
    webpage: "http://www.desarrolloyasistencia.org/",
    description: `En Nadiesolo llevamos a cabo programas de acompañamiento a personas que se encuentran en situación de necesidad por soledad, enfermedad, exclusión, discapacidad u otras causas.
    Comenzamos nuestra actividad en diciembre de 1995. Desde entonces hemos ido creciendo apoyándonos siempre en el deseo de ayudar con nuestro acompañamiento persona a persona y nuestros valores fundamentales como son el reconocimiento de la dignidad de la persona y el respeto a su libertad, el apoyo a la familia y la constancia y el compromiso en el trabajo.`,
    imgPath: "http://desarrolloyasistencia.org/wp-content/uploads/2020/03/Positivo-nadiesolo-transicion.png",
    user: arrUsersId[5]
  },
  {
    _id: arrOrganizationsId[6],
    name: "Fundación Amoverse",
    address: "Calle Geranios, 30, 28029 Madrid",
    email: "fundacionamoverse@fundacionamoverse.org",
    phone: getPhoneNumber(),
    webpage: "https://www.fundacionamoverse.org/",
    description: `Acompañar a niños, niñas, adolescentes, jóvenes y sus familias en situación de vulnerabilidad social, impulsando sus oportunidades de crecimiento personal, familiar y profesional, promoviendo su dignificación y su plena integración en la sociedad.
    La Fundación Amoverse se desarrolla una intervención socioeducativa integral con niños, niñas, adolescentes, jóvenes y sus familias, desde un enfoque de prevención, a través de la educación no-formal, ocio y tiempo libre, acompañamiento personal y académico, y está a su vez dirigido a la promoción de la familia y la transformación social del barrio.
    Este programa se implementa en dos barrios, Pozo-Entrevías en el distrito de Vallecas y La Ventilla en Tetuán, ambos en Madrid.`,
    imgPath: "https://res.cloudinary.com/yelpcampagb/image/upload/v1583926357/ironhack-project3/yylzwtaqw1ocobwr6ji0.png",
    user: arrUsersId[6]
  },
  {
    _id: arrOrganizationsId[7],
    name: "Asociación Manos de Ayuda Social",
    address: "Calle Reina de África, 10, 28018 Madrid",
    email: "comedorsocial@manosayudasocial.org",
    phone: getPhoneNumber(),
    webpage: "https://www.manosayudasocial.org/",
    description: `La Asociación Manos de Ayuda Social se constituyó en 2011 gracias a la iniciativa de un grupo de voluntarios que, en plena crisis económica, se unieron para crear un comedor social para familias en el Distrito de Ciudad Lineal. Con mucho esfuerzo e ilusión por impactar en nuestro entorno, creamos el Comedor Social Ventas que funcionó hasta 2018. En él se repartieron alrededor de 157000 comidas y se ayudó de manera continuada a unas 1409 personas.
    Tras esos siete años de trabajo, Manos de Ayuda Social traslada su labor al Distrito Puente de Vallecas, donde inicia un nuevo comedor social en el barrio de Palomeras Bajas.
    Nuestro objetivo es proporcionar una correcta nutrición y promover un ambiente cálido para que las personas que allí acuden se sientan acogidas, fomentando además la búsqueda activa de empleo para conseguir que sean autónomas en el menor tiempo posible.
    Manos de Ayuda Social ha sido declarada Entidad de Utilidad Pública por el Ministerio del Interior, reconociéndose así nuestra labor de ayuda a los más necesitados.`,
    imgPath: "https://res.cloudinary.com/yelpcampagb/image/upload/v1583925550/ironhack-project3/zvuoc4uwoeh05ouayaow.png",
    user: arrUsersId[7]
  },
  {
    _id: arrOrganizationsId[8],
    name: "Fundación Concordia y Libertad",
    address: "Bravo Murillo, 120, 28020 Madrid",
    email: "hmasd@hmasd.org",
    phone: getPhoneNumber(),
    webpage: "http://www.hmasd.org/",
    description: `La Fundación Concordia y Libertad, antes Humanismo y Democracia, es una organización privada sin ánimo de lucro que sirve a un interés general. Fue constituida en octubre de 1977, comenzando sus actividades en enero de 1978 como fundación cultural privada al servicio de los derechos humanos y de los valores democráticos, contribuyendo a la transición hacia la democracia en España y a la consolidación del sistema de derechos y libertades configurado en la Constitución Española de 1978.
    La Fundación se centra en proyectos de desarrollo rural integral y necesidades sociales básicas tales como educación, sanidad , agua y saneamiento.
    Como criterio general, ofrece un enfoque preferente en favor del fortalecimiento de las instituciones, públicas y privadas.
    Dedica también una especial atención a las migraciones, a la integración de inmigrantes y al vínculo entre cooperación y desarrollo y los fenómenos migratorios; así como a la sensibilización social en todas estas materias.`,
    imgPath: "http://hmasd.org/wp-content/themes/h%2Bd/assets/img/hmasd-logoH.svg",
    user: arrUsersId[8]
  },
  {
    _id: arrOrganizationsId[9],
    name: "Adóptalo.com-Madrid",
    address: "Calle Lituania, 4, 28030 Madrid",
    email: "infoadoptalo@yahoo.es",
    phone: getPhoneNumber(),
    webpage: "http://www.adoptalomadrid.com/",
    description: `La protectora de animales Adoptalo.com-Madrid es una entidad sin ánimo de lucro que se fundó en el año 2006. Estamos legalmente constituidos e inscritos en el Registro de Asociaciones de la Comunidad de Madrid con el número 29.206.
    Surgimos como respuesta al elevado número de animales que son abandonados y/o maltratados a diario en este país y como una alternativa útil y humanitaria para mejorar la situación actual.
    Nuestro trabajo se centra en la protección y defensa de los animales en un sentido amplio, tanto a corto plazo, proporcionando un hogar a los animales abandonados, como a largo plazo, difundiendo una cultura y educación basadas en el conocimiento y respeto hacia los animales y fomentando una tenencia responsable de cualquier ser vivo.
    Puedes elegir una de las muchas formas que tenemos según tus necesidades de tiempo y espacio: hazte casa de acogida temporal, voluntario en el albergue, adopta a unos de nuestros animales, apadrínalo o hazte socio, se padrino de vuelo en tus viajes al extranjero, compra en nuestra tienda solidaria …`,
    imgPath: "http://adoptalomadrid.com/wp-content/uploads/2016/04/apotalomadrid-logo-medium-2.png",
    user: arrUsersId[9]
  },
  {
    _id: arrOrganizationsId[10],
    name: "Fundación San Patricio",
    address: "Serrano, 208, 28002 Madrid",
    email: "info@fundacionsanpatricio.org",
    phone: getPhoneNumber(),
    webpage: "https://www.fundacionsanpatricio.org/es/",
    description: `La Fundación San Patricio trabaja por encontrar vías para mejorar la educación en nuestro país y compartir nuestra convicción de que una sociedad avanza si mejora la formación de los ciudadanos que la componen. Bajo el lema “Otras formas de enseñar, otras formas de aprender” desarrollamos nuestra misión.
    La Fundación tiene la misión de desarrollar programas que faciliten a los centros docentes, tanto públicos como privados, la posibilidad de abrir sus aulas a nuevas experiencias de aprendizaje, que complementen la formación académica con una sólida educación en valores. Así mismo, la Fundación, como parte de la Institución San Patricio, tiene la misión de educar hombres y mujeres de bien, a través de un modelo educativo que les permita adaptarse personal y profesionalmente a la sociedad que les toque vivir.
    Nuestra visión es:
    - Encontrar vías de mejora de la educación en nuestro país, y compartir nuestra convicción de que una sociedad avanza si mejora la formación de los ciudadanos que la componen.
    - Mantener la confianza de las familias y de la sociedad, por ser motor de cambio y de mejora en el sistema educativo español y por alcanzar una amplia proyección internacional.`,
    imgPath: "https://www.fundacionsanpatricio.org/es/images/logocole.jpg",
    user: arrUsersId[10]
  },
  {
    _id: arrOrganizationsId[11],
    name: "Recrearte Teatro Social",
    address: "Miguel de Cervantes, 2, 28430 Madrid",
    email: "recrearteteatrosocial@yahoo.es",
    phone: getPhoneNumber(),
    webpage: "https://www.ladarsenacm.com/recrearte-teatro-social",
    description: `RECREARTE Teatro Social es una Asociación sin ánimo de lucro de intervención y acción social, que tiene como fin general la creación, preparación y representación de obras teatrales para la dinamización, entretenimiento y sensibilización de toda la población en general y, especialmente, de las personas mayores, la infancia y la juventud.
    Desde la creación de la asociación, en marzo del 2010, hemos desarrollado nuestra actividad en colaboración con diversas residencias geriátricas, tanto privadas como particulares, llevando nuestras representaciones para disfrute de nuestros mayores con obras como: Sancho Panza en la ínsula de Barataria, Farsa y justicia del señor Corregidor, el rey Tiburcio busca novia, recitales de poesía y música, etc.
    Asimismo hemos colaborado con diversos Observatorios contra la violencia de género, sensibilizando a alumnos de institutos y al público en general con obras tales como: La palabra arrincona al miedo, Lágrimas negras, La sal de la vida y otras.
    También hemos llevado obras sensibilizando en igualdad hombre/mujer, especialmente en el Día Internacional de la Mujer.
    Este año y por primera vez, hemos decidido ampliar el objeto de nuestra Asociación llevando también distracción a los niños/as que sufren algún tipo de enfermedad que les obliga a permanecer hospitalizados`,
    imgPath: "https://i2.wp.com/www.fetam.es/fetam/blog/wp-content/uploads/2017/07/logo-recrearte.jpg",
    user: arrUsersId[11]
  },
  {
    _id: arrOrganizationsId[12],
    name: "SAMUR-Protección Civil. Formación al voluntariado",
    address: "Ronda de las Provincias, 7, 28011 Madrid",
    email: "unidadformacion@samurpc.es",
    phone: getPhoneNumber(),
    webpage: "https://www.formatemadrid.com/",
    description: `Unidad de Formación al Voluntariado es la unidad encargada de elaborar y gestionar los planes de formación interna del voluntario y la de sus alumnos de nuevo ingreso. Impulsa y apoya con su esfuerzo diario el proceso de modernización, haciendo posible el mantenimiento y la mejora de los conocimientos, habilidades y capacidades del personal al servicio de la institución para su mejor desarrollo profesional, su fácil adaptación a los cambios y la innovación en cualquiera de sus formas bajo la supervisión de la División de Formación.
    Asimismo, para dar una mayor difusión del Cuerpo de Voluntarios de Protección Civil esta unidad ha desarrollado un proyecto educativo llamado ”Fórmate Madrid”, que dará respuesta a las necesidades de SAMUR Protección Civil, de sus actuales voluntarios y nuevas incorporaciones, además de concienciar y animar a la ciudadanía a que formen parte del Cuerpo de Voluntarios.
    El Cuerpo de Voluntarios te ofrece la posibilidad de colaborar con SAMUR Protección Civil en las diferentes áreas de ayudas y asistencias que realiza:
    -Planificación, prevención y cobertura de servicios programados con riesgos previsibles.
    -Prevención Operativa.
    -Asistencia sanitaria extrahospitalaria.
    -Coordinación y atención sanitaria en catástrofes.`,
    imgPath: "https://www.formatemadrid.com/wp-content/uploads/2018/05/logo-fm-300x300.png",
    user: arrUsersId[12]
  },
  {
    _id: arrOrganizationsId[13],
    name: "Cruz Roja Española",
    address: "Santa Leonor, 8, 28037 Madrid",
    email: "uinforma@cruzroja.es",
    phone: getPhoneNumber(),
    webpage: "https://www2.cruzroja.es/",
    description: `Cruz Roja Española (CRE) es una institución humanitaria, de carácter voluntario y de interés público, que desarrolla su actividad bajo la protección del Gobierno de España y el Alto Patronazgo de los Reyes de España. Fue fundada en el año 1.864 y, en sus más de 150 años de historia, siempre ha estado al lado de la población vulnerable, salvaguardando la vida y aliviando el sufrimiento humano, en función de las necesidades y demandas de cada momento, ya sea dentro o fuera de nuestras fronteras.
    Actualmente, Cruz Roja Española como organización humanitaria de carácter voluntario, fuertemente arraigada en la sociedad, dará respuestas integrales a las personas vulnerables desde una perspectiva de desarrollo humano y comunitario reforzando sus capacidades individuales en su contexto social.
    Dichas respuestas se realizarán estando cada vez más cerca de las personas vulnerables en los ámbitos nacional e internacional, a través de acciones integradas, realizadas esencialmente por voluntariado y con una amplia participación social y presencia territorial.
    Cruz Roja Española es miembro de la Federación Internacional de Sociedades Nacionales de la Cruz Roja y la Media Luna Roja, organización que agrupa a todas las Cruces Rojas y Medias Lunas Rojas del mundo, así como del Movimiento Internacional de la Cruz Roja, una red de solidaridad con presencia en la casi todos los países del mundo.`,
    imgPath: "https://www2.cruzroja.es/o/cruzroja-web-theme/images/logo.svg",
    user: arrUsersId[13]
  },
  {
    _id: arrOrganizationsId[14],
    name: "Banco de Alimentos de Madrid",
    address: "Colegio San Fernando, Carretera de Colmenar, Km 13.600, 28049 Madridd",
    email: "ugrvoluntarios@bamadrid.org",
    phone: getPhoneNumber(),
    webpage: "https://www.bamadrid.org/",
    description: `El Banco de Alimentos de Madrid es una organización benéfica sin ánimo de lucro cuyo fin es conseguir gratuitamente alimentos para distribuirlos, también de manera gratuita, entre entidades benéficas dedicadas a la asistencia y cuidado directo de personas necesitadas dentro de la Comunidad de Madrid.
    El Banco de Alimentos es miembro de la Federación Española de Bancos de Alimentos (FESBAL) que agrupa en la actualidad a 54 Bancos de Alimentos de toda España, y a través de ella a la Federación Europea de Bancos de Alimentos (FEBA) que engloba a 271 Bancos de Alimentos en toda Europa.
    El objetivo del Banco de Alimentos de Madrid es trabajar para que las personas más desfavorecidas puedan llevar una vida más digna.
    Su misión es concienciar a la sociedad y promover su solidaridad frente a los problemas originados por el hambre, el paro, el abandono familiar, el despilfarro de alimentos y en general de la falta de los recursos necesarios para tener una vida conforme a la dignidad humana. Colaborar a la solución de estos problemas y tratar de paliar sus efectos mediante el reparto gratuito de alimentos.`,
    imgPath: "https://granrecogidamadrid.org/public/img/logo.png",
    user: arrUsersId[14]
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
    category: {
      name: "social",
      imgPath: "https://res.cloudinary.com/yelpcampagb/image/upload/v1583492530/ironhack-project3/pvx0vhllzri7zjg8iual.jpg"
    },
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
    category: {
      name: "social",
      imgPath: "https://res.cloudinary.com/yelpcampagb/image/upload/v1583492530/ironhack-project3/pvx0vhllzri7zjg8iual.jpg"
    },
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
    category: {
      name: "ambiental",
      imgPath: "https://res.cloudinary.com/yelpcampagb/image/upload/v1583492530/ironhack-project3/mk0fd45cbpj9howsjff1.jpg"
    },
    minParticipants: 10,
    maxParticipants: 25,
    requirements: "Estar en buena forma física para poder pasar un día casi completo en el monte realizando las tareas especificadas. El material necesario lo aporta la organización.",
    organization: arrOrganizationsId[1]
  },
  {
    title: "Vallado y mantenimiento de árboles en Manzanares el Real",
    description: `Los trabajos a realizar durante esta actividad serán los siguientes: vallados con postes de madera y malla ganadera para evitar que el ganado y los corzos dañen los árboles. Mantenimiento, incluyendo riego estival. Censo del estado de los árboles y arbustos plantados.`,
    dates: getDates(),
    time: "9:00 h - 17:00 h",
    location: "Calle de la Paz, 25, 28410 Manzanares el Real, Madrid",
    coord: {
      lat: 40.7212214,
      lng: -3.8723282
    },
    imgPath: "https://www.reforesta.es/images/Que_Hacemos/05_Voluntariado/05_Corporativo_1.jpg",
    category: {
      name: "ambiental",
      imgPath: "https://res.cloudinary.com/yelpcampagb/image/upload/v1583492530/ironhack-project3/mk0fd45cbpj9howsjff1.jpg"
    },
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
    category: {
      name: "educativo",
      imgPath: "https://res.cloudinary.com/yelpcampagb/image/upload/v1583492536/ironhack-project3/t1yw7o7on7p10giirbni.jpg"
    },
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
    category: {
      name: "social",
      imgPath: "https://res.cloudinary.com/yelpcampagb/image/upload/v1583492530/ironhack-project3/pvx0vhllzri7zjg8iual.jpg"
    },
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
    category: {
      name: "social",
      imgPath: "https://res.cloudinary.com/yelpcampagb/image/upload/v1583492530/ironhack-project3/pvx0vhllzri7zjg8iual.jpg"
    },
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
    category: {
      name: "deportivo",
      imgPath: "https://res.cloudinary.com/yelpcampagb/image/upload/v1583493118/ironhack-project3/vpyxhad8vklho9ji4a16.jpg"
    },
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
    category: {
      name: "deportivo",
      imgPath: "https://res.cloudinary.com/yelpcampagb/image/upload/v1583493118/ironhack-project3/vpyxhad8vklho9ji4a16.jpg"
    },
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
    category: {
      name: "comunitario",
      imgPath: "https://res.cloudinary.com/yelpcampagb/image/upload/v1583492530/ironhack-project3/ofpctk5zinroexnkotpb.jpg"
    },
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
    category: {
      name: "comunitario",
      imgPath: "https://res.cloudinary.com/yelpcampagb/image/upload/v1583492530/ironhack-project3/ofpctk5zinroexnkotpb.jpg"
    },
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
    category: {
      name: "comunitario",
      imgPath: "https://res.cloudinary.com/yelpcampagb/image/upload/v1583492530/ironhack-project3/ofpctk5zinroexnkotpb.jpg"
    },
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
    category: {
      name: "social",
      imgPath: "https://res.cloudinary.com/yelpcampagb/image/upload/v1583492530/ironhack-project3/pvx0vhllzri7zjg8iual.jpg"
    },
    minParticipants: 2,
    maxParticipants: 8,
    requirements: "Para ser voluntario de Desarrollo y Asistencia solo es necesario tener ganas de ayudar y más de 16 años con permiso paterno. Si quieres iniciarte en el voluntariado con Desarrollo y Asistencia, primero ven a una sesión de iniciación al voluntariado.",
    organization: arrOrganizationsId[5]
  },
  {
    title: "Refuerzo escolar con menores",
    description: `Necesitamos voluntarios para nuestro programa de aprendizaje individualizado con adolescentes de 12 a 17 años. Nuestro objetivo es acompañarles en la adquisición de conocimientos, habilidades y técnicas para el éxito escolar en grupos reducidos. Son chicos y chicas desmotivados hacia el aprendizaje con dificultades muy específicas que pueden superar con el apoyo de personas con los conocimientos necesarios: matemáticas, física, química, inglés, biología, lengua, etc. El voluntario participará en las reuniones de programación y evaluación de las actividades.`,
    dates: getDates(),
    time: "16:30 h - 18:30 h",
    location: "Calle Palmera, 21, 28029 Madrid",
    coord: {
      lat: 40.4720856,
      lng: -3.6949809
    },
    imgPath: "https://fundacionamoverse.org/wp-content/uploads/2019/04/foto-3-test.jpg",
    category: {
      name: "educativo",
      imgPath: "https://res.cloudinary.com/yelpcampagb/image/upload/v1583492536/ironhack-project3/t1yw7o7on7p10giirbni.jpg"
    },
    minParticipants: 2,
    maxParticipants: 6,
    requirements: "Personas a partir de 21 años con conocimientos de las asignaturas correspondientes. Paciencia y habilidades básicas de enseñanza y pedagogía.",
    organization: arrOrganizationsId[6]
  },
  {
    title: "Colabora en un comedor social",
    description: `Esta organización ofrece un servicio de comida elaborada para llevar en envases de un solo uso para familias en riesgo de exclusión social. Se sirve alimentos a diario de lunes a viernes donde la persona acude a recoger la comida elaborada y envasada. Los voluntarios se encargan de las tareas de limpieza, acondicionamiento del local, envasado de los alimentos y entrega de los mismos a los usuarios.`,
    dates: getDates(),
    time: "10:45 h - 13:30 h",
    location: "Calle Reina de África, 10, 28018 Madrid",
    coord: {
      lat: 40.3888594,
      lng: -3.6719644
    },
    imgPath: "https://ue-vidauniversitaria-production-files.s3.amazonaws.com/uploads/post/detail_image/4823/large_comedorLARGA.jpg",
    category: {
      name: "social",
      imgPath: "https://res.cloudinary.com/yelpcampagb/image/upload/v1583492530/ironhack-project3/pvx0vhllzri7zjg8iual.jpg"
    },
    minParticipants: 1,
    maxParticipants: 3,
    requirements: "Personas entre 18 y 65 años. En buena condición física ya que se carga peso. Responsable, madura, con equilibrio emocional, discreción y compromiso. Facilidad de comunicación y trato, y ausencia de prejuicios.",
    organization: arrOrganizationsId[7]
  },
  {
    title: "Clases de español, inglés e informática",
    description: `Esta organización busca voluntarios para el Centro de Participación e Integración de la Comunidad de Madrid (CEPI) Usera-Villaverde, con conocimientos suficientes de inglés, español e informática para impartir talleres formativos de inglés en distintos niveles, de español y de informática. Los cursos van dirigido a adultos y jóvenes en búsqueda de empleo o para obtener una mejora del mismo. Población mayoritariamente inmigrante.`,
    dates: getDates(),
    time: "19:00 h - 21:00 h",
    location: "Calle del Camino Viejo de Villaverde, 1, 28041 Madrid",
    coord: {
      lat: 40.3723156,
      lng: -3.7124962
    },
    imgPath: "http://hmasd.org/wp-content/uploads/2018/03/IMG_3595.jpg",
    category: {
      name: "social",
      imgPath: "https://res.cloudinary.com/yelpcampagb/image/upload/v1583492530/ironhack-project3/pvx0vhllzri7zjg8iual.jpg"
    },
    minParticipants: 2,
    maxParticipants: 4,
    requirements: "Mayores de edad con capacidad comunicativa y con conocimientos sobre la materia.",
    organization: arrOrganizationsId[8]
  },
  {
    title: "Actividades de ocio y tiempo libre con menores",
    description: `Esta organización busca voluntarios para el Centro de Participación e Integración de la Comunidad de Madrid (CEPI) Usera-Villaverde, para desarrollar actividades de ocio y tiempo libre con menores de 6 a 10 años. Población mayoritariamente inmigrante.`,
    dates: getDates(),
    time: "18:00 h - 19:30 h",
    location: "Calle del Camino Viejo de Villaverde, 1, 28041 Madrid",
    coord: {
      lat: 40.3723156,
      lng: -3.7124962
    },
    imgPath: "https://autismomadrid.es/wp-content/uploads/2016/07/Antares-Curso-Ocio-y-Tiempo-Libre-1080x661.jpg",
    category: {
      name: "ocio y tiempo libre",
      imgPath: "https://res.cloudinary.com/yelpcampagb/image/upload/v1583492530/ironhack-project3/v4x6ixibt1yzst0ezuwp.jpg"
    },
    minParticipants: 2,
    maxParticipants: 5,
    requirements: "Mayores de edad con capacidad comunicativa y en posesión del Diploma oficial de Monitor/a de Tiempo Libre.",
    organization: arrOrganizationsId[8]
  },
  {
    title: "Voluntariado en el albergue",
    description: `Si te gustan los animales, te preocupa su bienestar y te indigna el enorme problema de abandono que tenemos en este país puedes aportar tu granito de arena colaborando como voluntario.
    Nuestra asociación dispone de un albergue donde los animales están alojados, alimentados  y cuidados, y que cubre todas sus necesidades básicas mientras esperan un hogar. Pero sin la ayuda de los voluntarios carecerían de lo esencial: de que alguien vaya a pasearles, a jugar con ellos, a darles cariño, y lo más importante, a ayudarles a recuperar su confianza. Y ese alguien puedes ser tú.`,
    dates: getDates(),
    time: "09:30 h - 11:00 h",
    location: "Calle Lituania, 4, 28030 Madrid",
    coord: {
      lat: 40.410857,
      lng: -3.6983995
    },
    imgPath: "https://blog.gudog.com/wp-content/uploads/2019/08/dogs-with-bows-and-touch.jpg",
    category: {
      name: "otro",
      imgPath: "https://res.cloudinary.com/yelpcampagb/image/upload/v1583493396/ironhack-project3/as8xogqhzr2gmqgpb9a9.jpg"
    },
    minParticipants: 5,
    maxParticipants: 10,
    requirements: "El único requisito es que te gusten los animales, que desees aprender a comprenderlos, tratarlos con cariño, respeto y que te apetezca compartir parte de tu tiempo con ellos.",
    organization: arrOrganizationsId[9]
  },
  {
    title: "Mesas solidarias",
    description: `Si te gustan los animales, te preocupa su bienestar y te indigna el enorme problema de abandono que tenemos en este país puedes aportar tu granito de arena colaborando como voluntario.
    Nuestra asociación dispone de un albergue donde los animales están alojados, alimentados  y cuidados, y que cubre todas sus necesidades básicas mientras esperan un hogar. Para ello, necesitamos voluntarios para informar en mesas solidarias sobre la labor de la asociación, y así poder recaudar fondos y hacer nuevos socios`,
    dates: getDates(),
    time: "12:00 h - 14:00 h",
    location: "Calle Lituania, 4, 28030 Madrid",
    coord: {
      lat: 40.410857,
      lng: -3.6983995
    },
    imgPath: "http://adoptalomadrid.com/wp-content/uploads/2015/12/casa_de_acogida.png",
    category: {
      name: "otro",
      imgPath: "https://res.cloudinary.com/yelpcampagb/image/upload/v1583493396/ironhack-project3/as8xogqhzr2gmqgpb9a9.jpg"
    },
    minParticipants: 1,
    maxParticipants: 3,
    requirements: "Mayores de edad sensibilizados contra el maltrato y el abandono de los animales.",
    organization: arrOrganizationsId[9]
  },
  {
    title: "Reparto de alimentos a domicilio",
    description: `Desde la Fundación San Patricio buscamos voluntarios con el objetivo principal de suplir necesidades básicas de alimentación de personas sin recursos y acompañarlas en la soledad. La labor consiste en realizar una ruta, establecida por la fundación, en la que se recogen alimentos en el local de la fundación y se reparten a las personas sin recursos, en una media de 4 domicilios. Junto con la entrega del paquete, se establece un espacio de tiempo para compartirlo con las personas beneficiarias.`,
    dates: getDates(),
    time: "11:30 h - 14:00 h",
    location: "Serrano, 208, 28002 Madrid",
    coord: {
      lat: 40.4501666,
      lng: -3.6730137
    },
    imgPath: "https://www.fundacionsanpatricio.org/es/images/slider/slide_FSPsocial6.jpg",
    category: {
      name: "comunitario",
      imgPath: "https://res.cloudinary.com/yelpcampagb/image/upload/v1583492530/ironhack-project3/ofpctk5zinroexnkotpb.jpg"
    },
    minParticipants: 8,
    maxParticipants: 15,
    requirements: "Dirigido a personas con empatía, activas y sociables.",
    organization: arrOrganizationsId[10]
  },
  {
    title: "Teatro solidario Alpedrete",
    description: `Participar en un proyecto con diez años de experiencia, representando obras de teatro con el fin de promover el derecho y acceso a la cultura y sensibilizar en valores respecto a la violencia de género, igualdad entre hombres y mujeres, respecto a la homofobia, xenofobia, etc. Llevar el teatro a niños en hospitales, mayores en residencias, internos en centros penitenciarios, etc. 
    Esta actividad se puede realizar en grupos.
    El voluntario adquirirá las sigueintes competencias: iniciativa y autonomía, capacidad de aprendizaje, optimismo y entusiasmo, capacidad para liderar iniciativas, organización y planificación, fiabilidad técnica y personal, comunicación interpersonal, trabajo en equipo y diplomacia.`,
    dates: getDates(),
    time: "19:30 h - 21:00 h",
    location: "Miguel de Cervantes, 2, 28430 Madrid",
    coord: {
      lat: 40.6458074,
      lng: -4.0245239
    },
    imgPath: "http://1.bp.blogspot.com/-96B7BO1LzDo/VKO-NJQkQvI/AAAAAAAAADY/Qt8zW3lM_L8/s1600/NJ-10-100.jpg",
    category: {
      name: "cultural",
      imgPath: "https://res.cloudinary.com/yelpcampagb/image/upload/v1583492528/ironhack-project3/hs5gyqp7mofnlvdumxlg.jpg"
    },
    minParticipants: 5,
    maxParticipants: 6,
    requirements: "Dirigido a personas responsables, amantes del teatro, extrovertidas, con ganas de sensibilizar y comprometidas.",
    organization: arrOrganizationsId[11]
  },
  {
    title: "Prevención operativa",
    description: `¿Quieres pertenecer a una de las Agrupaciones de Voluntarios de Protección Civil mejor valoradas por parte de la de la Comunidad de Madrid? ¡Te necesitamos! El cuerpo de Voluntarios te ofrece la posibilidad de colaborar con SAMUR Protección Civil en el área de prevención operativa para el Análisis y verificación de prevención de riesgos en edificios y locales de la Ciudad de Madrid y para el apoyo a la intervención de otros servicios de emergencia y auxilio a la Ciudadanía en caso de fenómenos metereológicos adversos`,
    dates: getDates(),
    time: "10:30 h - 17:00 h",
    location: "Ronda de las Provincias, 7, 28011 Madrid",
    coord: {
      lat: 40.4116536,
      lng: -3.7460944
    },
    imgPath: "https://www.moralzarzal.es/wp-content/uploads/2016/11/Voluntarios-protecci%C3%B3n-civil-1.jpg",
    category: {
      name: "protección civil",
      imgPath: "https://res.cloudinary.com/yelpcampagb/image/upload/v1583493729/ironhack-project3/t6emwx7oclntllyk3kdl.jpg"
    },
    minParticipants: 5,
    maxParticipants: 10,
    requirements: "Si tienes un poco de tiempo libre, capacidad de compromiso, la formación requerida y ganas de ayudar a los demás de una manera voluntaria y altruista. ¡NO LO DUDES!, únete a nuestro equipo de Protección Civil. Será necesario haber realizado un curso básico de voluntariado y, al menos, uno específico, enmarcados en el Plan de Formación de SAMUR-Protección Civil (dentro del Plan de Formación del Centro Integral de Formación y Seguridad del Ayuntamiento de Madrid, CIFSE). Además, será necesario tener cumplidos 18 años, tener nacionalidad española o permiso de residencia en España, residir en la Comunidad de Madrid, presentar declaración responsable de no tener antedecentes penales, presentar certificación negativa de los datos inscritos en el Registro Central de Delicuentes Sexuales, presentar certificado de salud y superar las pruebas de admisión",
    organization: arrOrganizationsId[12]
  },
  {
    title: "Formación en medio ambiente",
    description: `¿Te preocupa la salud de nuestro planeta? ¿Eres consciente de que todos nosotros y nosotras podemos hacer actos cada día para preservar el Medio Ambiente? Si la respuesta es sí, estamos seguras de que este voluntariado te va a encantar. Y, lo más importante, ¡que lo vas a saber transmitir!
    Estamos buscando 2 personas voluntarias para el proyecto de Medio Ambiente en Pozuelo. Realizarán sesiones informativas y talleres sobre Medio Ambiente, ahorro energético y huertos urbanos en el centros educativo asignado.
    ¿Quieres unirte al reto? ¡Anímate, toda ayuda será bienvenida`,
    dates: getDates(),
    time: "09:00 h - 14:00 h",
    location: "Calle Diego de Velázquez, 5, 28223 Pozuelo de Alarcón, Madrid",
    coord: {
      lat: 40.4502059,
      lng: -3.7799268
    },
    imgPath: "https://www.hacesfalta.org/IO/usuarios/tufoto/7b9097f0b7374c07a4d1df47952903d9_749X500_s.jpg",
    category: {
      name: "ambiental",
      imgPath: "https://res.cloudinary.com/yelpcampagb/image/upload/v1583492530/ironhack-project3/mk0fd45cbpj9howsjff1.jpg"
    },
    minParticipants: 1,
    maxParticipants: 2,
    requirements: "Personas extrovertidas y comprometidas con nuestro planeta, con dotes de comunicación y trabajo en equipo. Que estén concienciadas sobre la importancia de cuidar el Medio Ambiente y quieran colaborar transmitiendo su preocupación haciendo voluntariado.",
    organization: arrOrganizationsId[13]
  },
  {
    title: "Voluntariado en la recogida de alimentos",
    description: `Ser voluntario del Banco de Alimentos de Madrid significa...que con tu trabajo, con tus 4 horas de dedicación, vas a poder ayudar a las más de 140.000 personas que, actualmente, están pasando graves dificultades para conseguir alimentos.
    Gracias a los voluntarios, el Banco de Alimentos puede organizar la Gran Recogida. Necesitamos que seas generoso con tu tiempo y dediques, 4 horas a las personas más desfavorecidas.
    ¿Qué trabajo realizará el coluntario? Informar y animar al público que entra en el supermercado a que colaboren con la Gran Recogida, facilitándoles una bolsa de plástico y una octavilla informativa. Además, junto con el resto de voluntarias recibe y agradece la donación y pre-clasifica los alimentos recibidos por tipología.
    Buscamos entre 5 y 6 voluntarias para realizar la recogida en el Mercadona de Lopez de Hoyos`,
    dates: getDates(),
    time: "10:00 h - 14:00 h",
    location: "Calle de López de Hoyos, 151, 28002 Madrid",
    coord: {
      lat: 40.4484526,
      lng: -3.67115
    },
    imgPath: "https://www.hola.com/imagenes/sociedad/20191104153155/gran-recogida-alimentos-madrid-2019/0-741-393/recogida-alimentos-t.jpg",
    category: {
      name: "social",
      imgPath: "https://res.cloudinary.com/yelpcampagb/image/upload/v1583492530/ironhack-project3/pvx0vhllzri7zjg8iual.jpg"
    },
    minParticipants: 4,
    maxParticipants: 6,
    requirements: "Mayoría de de edad. Podrán participar y ocupar puesto de voluntario con una autorización paterna los jóvenes de entre 14 y 17 años. Los menores entre 8 y 13 años podrán ir acompañando a sus padres o responsables, pero no ocuparán plaza de voluntario.",
    organization: arrOrganizationsId[14]
  },
  {
    title: "Coordinación para la recogida de alimentos",
    description: `El objetivo de la recogida de alimentos es conseguir la mayor cantidad de kilos de alimentos NO PERECEDEROS solicitados por el Banco: latas de conservas de carne y de pescado, aceite, alimentos infantiles, pasta, arroz y legumbres.
    Para lograr los objetivos es muy importante trabajar en equipo, con un buen clima de trabajo
    El coordinador es la persona que representa al Banco de Alimentos en el punto de donación. Establece la relación con el responsable del supermercado y organiza a los voluntarios en el puesto de donación. Permanece durante la apertura, los cambios de turno y el cierre y reporta a su supervisor de distrito los kilos recogidos, así como las incidencias que puedan surgir durante la campaña.
    Realiza ente otras las sigueintes funciones:
    -Se asegurará de que cuenta con los voluntarios necesarios.
    -Recibirá a los voluntarios, les facilitará los petos y les asignará sus funciones.
    -Se pondrá en contacto con su supervisor comunicandole los resultados e informándole de las incidencias.
    -Recogerá los petos y la documentación.`,
    dates: getDates(),
    time: "10:00 h - 14:00 h",
    location: "Calle de López de Hoyos, 151, 28002 Madrid",
    coord: {
      lat: 40.4484526,
      lng: -3.67115
    },
    imgPath: "https://d1hyrom7wmg5jx.cloudfront.net/default/0001/03/eaf6dcc2c392055dc8ba84def99c7b0c3e388db1.jpeg",
    category: {
      name: "social",
      imgPath: "https://res.cloudinary.com/yelpcampagb/image/upload/v1583492530/ironhack-project3/pvx0vhllzri7zjg8iual.jpg"
    },
    minParticipants: 1,
    maxParticipants: 2,
    requirements: "Para ser coordinador solo es necesario ser mayor de edad, responsable y tener ganas de colaborar",
    organization: arrOrganizationsId[14]
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