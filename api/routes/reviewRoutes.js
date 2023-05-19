const router = require("express").Router({mergeParams: true});
const reviewsController = require("../controllers/reviewsController");

router.route("/")
    .get(reviewsController.getAll)
    .post(reviewsController.addOne);

router.route("/:reviewId")
    .patch(reviewsController.partialUpdateOne)
    .put(reviewsController.fullUpdateOne)
    .delete(reviewsController.deleteOne)
    .get(reviewsController.getOne);

module.exports = router