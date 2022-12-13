var express = require("express");
var mysql = require("mysql");
var app = express();
var cors = require("cors");

app.use(express.json());
app.use(cors());

var conexion = mysql.createConnection({
  host: "Localhost",
  user: "root",
  password: "MELIODAS.COM123",
  database: "dbProximosEventos",
});

conexion.connect(function (error) {
    if (error) {
      throw error;
    } else {
      console.log("Conexión exitosa");
    }
  });

  const puerto = process.env.PUERTO || 3000;

app.listen(puerto, function () {
  console.log("Servidor funcionando en puerto: " + puerto);
});

app.post("/api/pedido", (req, res) => {
	let data = {
    	NOM_USER: req.body.NOM_USER,
    	APE_USER: req.body.APE_USER,
    	GMA_USER: req.body.GMA_USER,
    	CEL_USER: req.body.CEL_USER,
    	PRO_USER: req.body.PRO_USER,
		LDP_USER: req.body.LDP_USER,
	};
	let sql = "INSERT INTO USUARIO SET ?";
	conexion.query(sql, data, function (error, results) {
  	if (error) {
    	throw error;
  	} else {
    	console.log(data);
    	res.send(data);
  	}
	});
  });