const ctrl = require('./controllers');
const router = require('express').Router();

//Products
router.get('/products', ctrl.readAll);
router.get('/product/:product_id', ctrl.readByID);
router.get('/products/:product_id/styles', ctrl.readAllStyles);
router.get('/products/:product_id/related', ctrl.readRelatedProducts);

//Review
router.get('/reviews', ctrl.getAll);
router.get('/reviews/meta', ctrl.getReviewMeta);
router.post('/reviews', ctrl.postReview);
router.put('/reviews/:review_id/helpful', ctrl.putReviewHelpful);
router.put('/reviews/:review_id/report', ctrl.putReviewReport);

//Question & Answers
router.get('/qa/questions');
router.get('/qa/questions/:question_id/answers');
router.post('/qa/questions');
router.post('/qa/questions/:question_id/answers');
router.put('/qa/questions/:question_id/helpful');
router.put('/qa/questions/:question_id/report');
router.put('/qa/answers/:answer_id/helpful');
router.put('/qa/answers/:answer_id/report');


// //Cart
// router.get('/cart');
// router.post('/cart');

// //Interactions
// router.post('/interactions')

module.exports = router;