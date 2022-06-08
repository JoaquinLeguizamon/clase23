const express = require("express");
let path = require("path");
let app = express();
let port = 3000;
let dirname = path.join(__dirname,"views","contacto","home.html");


app.get("/",(req,res)=>
res.send("¡¡Hola Mundo!!"));

app.get("/home", (req,res)=> 
res.sendFile(path.join(__dirname,"views","home.html")))

app.get("/contacto",(req,res)=> res.sendFile(path.resolve(__dirname,"views","contacto.html")))

app.listen(3000, () => console.log(`El servidor ha sido levantado con exito en http://localhost:${port}/n${dirname}
`));
