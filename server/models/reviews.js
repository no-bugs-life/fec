const axios = require('axios');
require("dotenv").config();

axios.defaults.headers.common['Authorization'] = process.env.GITHUB_KEY
axios.defaults.baseURL = process.env.API_SERVER

module.exports = {
  getReviews: (options) => {

    // console.log(options);
    return axios.get(`/reviews`, { params: options});
  },
  getReviewMeta: (options) => {
    return axios.get(`/reviews/meta`, { params: options});

  },
  addReview: (postData) => {
    return axios.post('/reviews', postData);
  },
  //dummy review id: 1278301
  markReviewHelpful: (review_id) => {
    return axios.put(`/reviews/${review_id}/helpful`);
  },
  reportReview: (review_id) => {
    return axios.put(`/reviews/${review_id}/report`);
  }
}