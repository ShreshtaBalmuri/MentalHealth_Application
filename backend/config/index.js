require("dotenv").config();

module.exports = {
  port: process.env.PORT,
  app: process.env.APP,
  secret: process.env.APP_SECRET,
  mongo: {
    uri: process.env.MONGOURI,
    testURI: process.env.MONGOTESTURI,
  },
  flask: process.env.FLASK_SERVER,
};
