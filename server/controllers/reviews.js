const models = require('../models');

module.exports = {
  getAll: (req, res) => {
    // console.log(req.query)
    models.reviews.getReviews(req.query)
      .then((result) => {
        res.status(200).send(result.data);
      })
      .catch((err) => {
        console.log('Error getting reviews: ', err);
      });
  },
  getOneMeta: (req, res) => {
    models.reviews.getReviewMeta(req.query)
      .then((result) => {
        res.status(200).send(result.data);
      })
      .catch((err) => {
        console.log('Error getting review metadata: ', err);
      });
  },
  postReview: (req, res) => {
    models.reviews.addReview(req.body)
      .then(() => {
        res.status(201).send();
      })
      .catch((err) => {
        console.log('Error posting review: ', err);
      });
  },
  putReviewHelpful: (req, res) => {
    models.reviews.markReviewHelpful(req.params.review_id)
      .then(() => {
        res.status(204).send();
      })
      .catch((err) => {
        console.log('Error marking review as helpful: ', err);
      })
  },
  putReviewReport: (req, res) => {
    models.reviews.reportReview(req.params.review_id)
      .then(() => {
        res.status(204).send();
      })
      .catch((err) => {
        console.log('Error reporting review: ', err);
      })
  }
}

