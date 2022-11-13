const httpStatus = require("http-status");
const Result = require("../models/result.model");
const config = require("../config");
const fetch = require("node-fetch");

exports.evaluate = async (req, res, next) => {
  try {
    const response = await fetch(`${config.flask}/predict`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(req.body.answers),
    });
    const data = await response.json();
    const result = new Result({
      userId: req.body.userId,
      score: data.score,
    });
    const savedResult = await result.save();
    res.status(httpStatus.CREATED);
    res.send(savedResult.transform());
  } catch (error) {
    next(error);
  }
};
