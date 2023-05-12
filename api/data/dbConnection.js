const mongoose = require("mongoose");
require("./productsModel")

mongoose.set('strictQuery', true);
mongoose.connect(
    "mongodb://127.0.0.1:27017/mean_eCommerce", 
    {useNewUrlParser: true, useUnifiedTopology: true}
);

mongoose.connection.on("connected", function(){
    console.log("Connected to DB");
});

mongoose.connection.on("disconnected", function(){
    console.log("DB disconnected");
});

mongoose.connection.on("error", function(err){
    console.log("dbConnection_err", err);
});

process.on("SIGINT", function(){
    mongoose.disconnect(function(){
        process.exit(0);
    });
});

process.on("SIGTERM", function(){
    mongoose.disconnect(function(){
        process.exit(0);
    });
});

process.once("SIGUSR2", function(){
    mongoose.disconnect(function(){
        process.kill(process.pid, "SIGUSR2");
    });
});