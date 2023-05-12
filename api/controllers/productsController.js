const mongoose= require("mongoose");
const Product= mongoose.model(process.env.Product_MODEL);

const _updateOne = function(req, res, makeUpdate){
    const productId = req.params.productId;
    Product.findById(productId, function(err, product){
        if(err){
            console.log(partialUpdateOne.name, err);
            res.status(500).json(err);
        }else if(!product){
            res.status(400).send("Incorrect ID");
        }else{
            makeUpdate(product);
            product.save(function(err, updatedProduct){
                if(err){
                    console.log(partialUpdateOne.name, err);
                    res.status(500).json(err);
                }else{
                    res.status(200).json(updatedProduct);
                }
            });
        }
    });
}


const partialUpdateOne = function(req, res){
    const makePartialUpdate = function(product){
        if(req.body.title) product.title = req.body.title;
        if(req.body.price) product.price = req.body.price;
        if(req.body.image) product.image = req.body.image;
    }
    _updateOne(req, res, makePartialUpdate);  
}


const fullUpdateOne = function (req, res) {
    const makeFullUpdate = function(product){
        product.title = req.body.title;
        product.price = req.body.price;
        product.image = req.body.image;
    }
    _updateOne(req, res, makeFullUpdate);
}



const deleteOne = function (req, res) {
    const productId = req.params.productId;
    
    Product.findByIdAndDelete(productId).exec(function (err, deletedProduct) {
        let response = { status: 204, message: deletedProduct };
        if (err) {
            console.log("Error finding product");
            response.status = 500;
            response.message = err;
        } else if (!deletedProduct) {
            console.log("Product id not found");
            response.status = 404;
            response.message = {
            "message": "Product ID not found"
            };
        }
        res.status(response.status).json(response.message);
    });
}

const getOne= function(req, res) {
    console.log(req.url);
    const productId= req.params.productId;
    Product.findById(productId).exec(function(err, product) {
        if(err){
            console.log("getOne_err", err);
            res.status(500).send("Something went wrong");
        }else{
            res.status(200).json(product);
        }
    });
}

const getAll = function(req, res){
    let offset = 0;
    let count = 5;
    if (req.query && req.query.offset) {
            offset= parseInt(req.query.offset);
    }
    if (req.query && req.query.count) {
        count= parseInt(req.query.count);
    }
    Product.find().skip(offset).limit(count).exec(function(err, products) {
        if(err){
            console.log("getAll_err", err);
            res.status(500).send("Something went wrong");
        }else{
            res.status(200).json(products);
        }
       
    });
};

const addOne = function(req, res){
    const newProduct = {
        title: req.body.title, 
        price: req.body.price, 
        image: req.body.image, 
    };
    console.log(req.body);
    res.status(200).send("okay dockey");
    // Product.create(newProduct, function(err, product){
    //     if(err){
    //         console.log("addOne_err", err);
    //         res.status(500).json(err);
    //     }else{
    //         res.status(200).json(product);
    //     }
    // })
}

exports = module.exports = {getAll, addOne, getOne, deleteOne,  fullUpdateOne, partialUpdateOne}