const {questions} = require('../models');

module.exports = {

  getQuestions: (req, res) => {
    questions.listQuestions(req.body)
    .then((result) => {
      res.status(200).send(result.data);
    }).catch((error) => {
      res.status(404).send(error);
    })
  },

  postQuestions: (req, res) => {
    questions.addQuestion(req)
    .then(() => {
      res.status(201).send();
    }).catch((error) => {
      res.status(404).send(error);
    })
  },

  putQuestions: (req, res) => {
    questions.markQuestionAsHelpful(req)
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
    .then((result) => {
      res.status(200).send(result.data);
    }).catch((error) => {
      res.status(404).send(error);
    })
  },

  postAnswers: (req, res) => {
    questions.addAnswer(req)
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
    models.reportAnswer(req)
    .then(() => {
      res.status(200).send();
    }).catch((error) => {
      res.status(404).send(error);
    })
  }
};
