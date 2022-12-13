var express = require('express');
var app = express();

//Recursos
app.use(express.static(__dirname+'/'));

app.listen(3000);
console.log('server on port 3000');


/* Ruta a los archivos */
app.get('/', (req, res) => {
    res.sendFile('/home/ubuntu/Colectico-Sur-Real/H221S2_01/index.html')});

app.get('/', (req, res) => {
    res.sendFile('/home/ubuntu/Colectico-Sur-Real/H221S2_01/css/styles.css')});

app.get('/', (req, res) => {
    res.sendFile('/home/ubuntu/Colectico-Sur-Real/H221S2_01/js/main.js')});

app.use(express.json());

