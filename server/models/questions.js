//Questions and Answers API
const axios = require('axios')

module.exports = {

  /**
   *
   * @param {Object} options
   * @returns
   */
  listQuestions: (options) => {
    return axios.get('/qa/questions', options)
  },
    /**
   *
   * @param {Object} options
   * @returns
   */
  listAnswers: (question_id, options) => {
    return axios.get(`/qa/questions/${question_id}/answers`, options)
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
  addAnswer: (answer) => {
    return axios.post(`/qa/questions/${question_id}/answers`, {
      body: body,
      name: name,
      email: email,
      photos: photos:
    })
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