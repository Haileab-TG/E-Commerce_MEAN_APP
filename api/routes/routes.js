const express = require("express");
const productsController = require("../controllers/productsController");
const reviewsController = require("../controllers/reviewsController");


const router = express.Router();

router.route("/products")
    .get(productsController.getAll)
    .post(productsController.addOne);

router.route("/products/:productId")
    .get(productsController.getOne)
    .delete(productsController.deleteOne)
    .patch(productsController.partialUpdateOne)
    .put(productsController.fullUpdateOne); 

router.route("/products/:productId/reviews")
    .get(reviewsController.getAll)
    .post(reviewsController.addOne);

router.route("/products/:productId/reviews/:reviewId")
    .get(reviewsController.getOne);





exports = module.exports = router;

