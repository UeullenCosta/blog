const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const connection = require("./database/database");

//view engine
app.set('view engine', 'ejs');

//Static Arquivos estatigos
app.use(express.static('public'));

//Body-parser
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//Datebase
connection.authenticate()
    .then(() =>{
        console.log("conectado ao DB")
    }).catch((erro) =>{
        console.log(erro)
    });

// Main route
app.get("/", (req, res) =>{
    res.send("Ola mundoo !!")
});




app.listen(8080, () =>{
    console.log("Servidor iniciado")
});