const httpStatus = require("http-status");
const jwt = require("jsonwebtoken");
const User = require("../models/user.model");

exports.signup = async (req, res, next) => {
  try {
    const user = new User(req.body);
    const savedUser = await user.save();
    res.status(httpStatus.CREATED);
    res.send(savedUser.transform());
  } catch (error) {
    return next(User.checkDuplicateEmailError(error));
  }
};

exports.login = async (req, res, next) => {
  try {
    const user = await User.findAndValidate(req.body);
    const payload = { sub: user.id };
    const token = jwt.sign(payload, "cmpe295secret");
    return res.json({
      message: "success",
      user: user.transform(),
      token: token,
    });
  } catch (error) {
    next(error);
  }
};

exports.update = async (req, res, next) => {
  try {
    const user = new User(req.body);
    let userDetail = await User.findByIdAndUpdate(
      req.body.id,
      user.transform()
    ).exec();
    userDetail = await User.findById(req.body.id).exec();
    res.status(httpStatus.ACCEPTED);
    res.send(userDetail.transform());
  } catch (error) {
    next(error);
  }
};
