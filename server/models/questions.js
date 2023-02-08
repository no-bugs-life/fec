//Questions and Answers API
const axios = require('axios')
require("dotenv").config();

axios.defaults.headers.common['Authorization'] = process.env.GITHUB_KEY
axios.defaults.baseURL = process.env.API_SERVER

module.exports = {

  /**
   *
   * @param {Object} options
   * @returns
   */
  listQuestions: (options) => {
    console.log(options);
    return axios.get('/qa/questions', {params: options});
  },
    /**
   *
   * @param {Object} options
   * @returns
   */
  listAnswers: (question_id, options) => {
    return axios.get(`/qa/questions/${question_id}/answers`, {options})
  },
  /**
   *
   * @param {Object} question
   * @returns
   */
  addQuestion: (question) => {
    return axios.post('/qa/questions', question)
  },

  /**
   *
   * @param {Object} answer
   * @returns
   */
  addAnswer: (question_id, answer) => {
    return axios.post(`/qa/questions/${question_id}/answers`, answer)
  },

  markQuestionAsHelpful: (question_id) => {
    return axios.put(`/qa/questions/${question_id}/helpful`)
  },

  reportQuestion: (question_id) => {
    return axios.put(`/qa/questions/${question_id}/report`)
  },
  markAnswerAsHelpful: (answer_id) => {
    return axios.put(`/qa/answers/${answer_id}/helpful`)
  },
  reportAnswer: (answer_id) => {
    return axios.put(`/qa/answers/${answer_id}/report`)
  },
}