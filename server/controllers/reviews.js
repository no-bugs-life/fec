const models = require('../models');

function imageToDataUri(img, width, height) {

  // create an off-screen canvas
  var canvas = document.createElement('canvas'),
      ctx = canvas.getContext('2d');

  // set its dimension to target size
  canvas.width = width;
  canvas.height = height;

  // draw source image into the off-screen canvas:
  ctx.drawImage(img, 0, 0, width, height);

  // encode image to data-uri with base64 version of compressed image
  return canvas.toDataURL();
}

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

