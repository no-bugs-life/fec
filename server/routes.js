const controller = require('./controllers');
const router = require('express').Router();


//Products
router.get('/products');
router.get('/product/:product_id');
router.get('/products/:product_id/styles');
router.get('/products/:product_id/related');

//Review
router.get('/reviews');
router.get('/reviews/meta');
router.post('/reviews');
router.put('/reviews/:review_id/helpful');
router.put('/reviews/:review_id/report');

//Question & Answers
router.get('/qa/questions');
router.get('/qa/questions/:question_id/answers');
router.post('/qa/questions');
router.post('/qa/questions/:question_id/answers');
router.put('/qa/questions/:question_id/helpful');
router.put('/qa/questions/:question_id/report');
router.put('/qa/answers/:answer_id/helpful');
router.put('/qa/answers/:answer_id/report');

//Cart
router.get('/cart');
router.post('/cart');

//Interactions
router.post('/interactions')

module.exports = router