const mongoose= require("mongoose");
const Product= mongoose.model(process.env.Product_MODEL);

const getOne= function(req, res) {
    const productId= req.params.productId;
    const reviewId= req.params.reviewId;
    Product.findById(productId).exec(function(err, product) {
        if(err){
            console.log("Review_GetOne_err", err);
            res.status(500).send("Something went wrong");
        }else{
            const review = product.reviews.id(reviewId);
            if(review){
                res.status(200).json(review);
            }else{
                res.status(404).send("Review not found");
            }
        }
    });
}

const getAll= function(req, res) {
    let offset = 0;
    let count = 3;
    if (req.query && req.query.offset) {
        offset= parseInt(req.query.offset);
    }
    if (req.query && req.query.count) {
        count= parseInt(req.query.count);
    }
    const productId= req.params.productId;
    Product.findById(productId).select("reviews").exec(function(err, product) {
        if(err){
            console.log("Review_GetAll_Err", err);
            res.status(500).send("Something went wrong");
        }else{
            res.status(200).json(product.reviews.slice(offset, offset + count));
        }
    });
}

const _addReview= function (req, res, product) {
    const newReview = {
        title: req.body.title, 
        rating: req.body.rating, 
        text: req.body.text
    };
    product.reviews.push(newReview);
    product.save(function(err, updatedProduct) {
        const response= { status: 200, message: [] };
        if (err) {
            response.status= 500;
            response.message= err;
        } else {
            response.status= 201;
            response.message= updatedProduct.reviews;
        }
        res.status(response.status).json(response.message);
    });
}

const addOne= function(req, res) {
    const productId= req.params.productId;
    Product.findById(productId).select("reviews").exec(function(err, product) {
    console.log("Foun a product ", product);
    const response= { status: 200, message: product };
    if (err) {
        console.log("Error finding product");
        response.status= 500;
        response.message= err;
    } else if (!product) {
        console.log("Error finding product");
        response.status= 404;
        response.message= {"message": "product ID not found "+productId};
    }
    if (product) {
        _addReview(req, res, product);
    } else {
        res.status(response.status).json(response.message);
    }
    });
}

module.exports = exports = {addOne, getAll, getOne}