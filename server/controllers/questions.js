const {questions} = require('../models');

module.exports = {

  getQuestions: (req, res) => {
    console.log(req.body)
    questions.listQuestions(req.body)
    .then((response) => {
      res.status(200).send(response.data);
    }).catch((error) => {
      res.status(404).send(error);
    })
  },

  postQuestions: (req, res) => {
    questions.addQuestion(req.body)
    .then(() => {
      res.status(201).send();
    }).catch((error) => {
      res.status(404).send(error);
    })
  },

  putQuestions: (req, res) => {
    questions.markQuestionAsHelpful(req.params.question_id)
    .then(() => {
      res.status(200).send();
    }).catch((error) => {
      res.status(404).send(error);
    })
  },

  removeQuestions: (req, res) => {
    questions.reportQuestion(req)
    .then(() => {
      res.status(200).send();
    }).catch((error) => {
      res.status(404).send(error);
    })
  },

  getAnswers: (req, res) => {
    questions.listAnswers(req.params.question_id, req.body)
    .then((response) => {
      res.status(200).send(response.data);
    }).catch((error) => {
      res.status(404).send(error);
    })
  },

  postAnswers: (req, res) => {
    questions.addAnswer(req.body)
    .then(() => {
      res.status(201).send();
    }).catch((error) => {
      res.status(404).send(error);
    })
  },

  putAnswers: (req, res) => {
    questions.markAnswerAsHelpful(req)
    .then(() => {
      res.status(200).send();
    }).catch((error) => {
      res.status(404).send(error);
    })
  },

  removeAnswers: (req, res) => {
    questions.reportAnswer(req)
    .then(() => {
      res.status(200).send();
    }).catch((error) => {
      res.status(404).send(error);
    })
  }
};
