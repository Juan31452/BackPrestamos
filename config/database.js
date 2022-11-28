const mongoose = require('mongoose');

const host = "localhost";
const port = "27017";
const db = "Prestamos";


//localhost
exports.mongoConnect = () => {
    const miconexionmongo = `mongodb://${host}:${port}/${db}`;
    mongoose.connect(miconexionmongo);
    mongoose.Promise = global.Promise;
    const dbconexion = mongoose.connection;
    dbconexion.on("Error Conexion",console.error.bind
    (console,"Error al Conectar a Mongodb"));
}


//conexion mongodb
//mongoose.connect("mongodb+srv://juan31452:minticgrupo61@clusterprueba.co7lca6.mongodb.net/?retryWrites=true&w=majority");
// mongoose.connect(process.env.MONGOODB_URI)
//   .then(()=> console.log("Conexion a mongodb Atlas"))
//   .catch((error) => console.error(error));
