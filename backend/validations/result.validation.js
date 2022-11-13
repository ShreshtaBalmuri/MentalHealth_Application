const Joi = require("joi");
Joi.objectId = require("joi-objectid")(Joi);

module.exports = {
  evaluate: {
    body: {
      userId: Joi.objectId().required(),
      answers: Joi.array().items(Joi.string()).required(),
    },
  },
};
