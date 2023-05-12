require("dotenv").config();
require("./api/data/dbConnection");
const express = require("express");
const router = require("./api/routes/routes");

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use("/api", function(req, res, next){
    res.header('Access-Control-Allow-Origin','http://localhost:4200');
    res.header('Access-Control-Allow-Methods','DELETE');
    next();
});

app.use("/api", router);

const server = app.listen(process.env.SERVER_PORT, function(){
    console.log("Listening on port", server.address().port);
});

