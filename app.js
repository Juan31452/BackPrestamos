var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var auth = require("./auth/mi_auth");
const mongoConnect = require("./config/database");
const connectDB = require("./config/atlas");
const ClientesRouter = require('./router/clientes.router');
const PrestamosRouter = require('./router/prestamos.router');
const CuotasRouter = require('./router/cuotas.router');
const UsuariosRouter = require('./router/usuario.router');
const helmet = require('helmet');

const cors = require('cors');
const { default: mongoose } = require('mongoose');
mongoose.set('strictQuery', false); // Establece strictQuery en false

var app = express();
require ("dotenv").config();
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());
app.use(helmet());//librería de seguridad

// PORT
const port = process.env.PORT || 4000;


//Conexion a Mongodb
mongoConnect();
//connectDB();
// mongoose.connect(process.env.MONGOODB_URI)
// .then(()=> console.log("Conexion a mongodb Atlas"))
// .catch((error) => console.error(error));

//Router
app.use('/usuarios',UsuariosRouter);
//autorizacion
app.use(auth);

app.use('/clientes',ClientesRouter);
app.use('/prestamos',PrestamosRouter);
app.use('/cuotas',CuotasRouter);

// iniciamos nuestro servidor
app.listen(port,'0.0.0.0',() =>{
    console.log('API escuchando en el puerto ' + port)
  
  })
  

  // catch 404 and forward to error handler
  app.use(function(req, res, next) {
    next(createError(404));
  });
  
  // error handler
  app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
  
    // render the error page
    res.status(err.status || 500);
    //res.render('error');
    res.json({ error: err });
  });
  
  module.exports = app;