const express = require("express");
const router = express.Router();


const productRouter = require("./productRoutes");
const reviewRouter = require("./reviewRoutes");


router.use("/products", productRouter);
router.use("/products/:productId/reviews", reviewRouter);



module.exports = router;