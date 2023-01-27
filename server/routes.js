const ctrl = require('./controllers');
const router = require('express').Router();

//Products
router.get('/products', ctrl.products.readAll);
router.get('/products/:product_id', ctrl.products.readByID);
router.get('/products/:product_id/styles', ctrl.products.readAllStyles);
router.get('/products/:product_id/related', ctrl.products.readRelatedProducts);

//Review
router.get('/reviews', ctrl.reviews.getAll);
router.get('/reviews/meta', ctrl.reviews.getOneMeta);
router.post('/reviews', ctrl.reviews.postReview);
router.put('/reviews/:review_id/helpful', ctrl.reviews.putReviewHelpful);
router.put('/reviews/:review_id/report', ctrl.reviews.putReviewReport);

//Question & Answers
router.get('/qa/questions', ctrl.questions.getQuestions);
router.get('/qa/questions/:question_id/answers', ctrl.questions.getAnswers);
router.post('/qa/questions', ctrl.questions.postQuestions);
router.post('/qa/questions/:question_id/answers', ctrl.questions.postAnswers);
router.put('/qa/questions/:question_id/helpful', ctrl.questions.putQuestions);
router.put('/qa/questions/:question_id/report', ctrl.questions.removeQuestions);
router.put('/qa/answers/:answer_id/helpful', ctrl.questions.putAnswers);
router.put('/qa/answers/:answer_id/report', ctrl.questions.removeAnswers);


// //Cart
// router.get('/cart');
// router.post('/cart');

// //Interactions
// router.post('/interactions')

module.exports = router;