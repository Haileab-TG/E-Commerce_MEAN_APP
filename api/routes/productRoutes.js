const productsController = require("../controllers/productsController");
const router = require("express").Router();

router.route("/")
    .get(productsController.getAll)
    .post(productsController.addOne);

router.route("/:productId")
    .get(productsController.getOne)
    .delete(productsController.deleteOne)
    .patch(productsController.partialUpdateOne)
    .put(productsController.fullUpdateOne);


module.exports = router;


