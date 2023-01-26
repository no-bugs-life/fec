const models = require('../models');

module.exports = {

  getQuestions: (req, res) => {
    models.listQuestions(req.body)
    .then((response) => {
      res.status(200).send(response);
    }).catch((error) => {
      res.status(404).send(error);
    })
  },

  postQuestions: (req, res) => {
    models.addQuestions(req)
    .then(() => {
      res.status(201).send();
    }).catch((error) => {
      res.status(404).send(error);
    })
  },

  putQuestions: (req, res) => {
    models.markQuestionAsHelpful(req)
    .then(() => {
      res.status(200).send();
    }).catch((error) => {
      res.status(404).send(error);
    })
  },

  removeQuestions: (req, res) => {
    models.reportQuestion(req)
    .then(() => {
      res.status(200).send();
    }).catch((error) => {
      res.status(404).send(error);
    })
  },

  getAnswers: (req, res) => {
    models.listAnswers(req)
    .then((response) => {
      res.status(200).send(response);
    }).catch((error) => {
      res.status(404).send(error);
    })
  },

  postAnswers: (req, res) => {
    models.addAnswer(req)
    .then(() => {
      res.status(201).send();
    }).catch((error) => {
      res.status(404).send(error);
    })
  },

  putAnswers: (req, res) => {
    models.markAnswerAsHelpful(req)
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
