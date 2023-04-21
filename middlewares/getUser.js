const { Granny, Grandson } = require('../db/models');

async function getUser(req, res, next) {
  const { userId } = req.session;
  res.locals.user = userId && (await Granny.findByPk(userId));
  next();
}

module.exports = getUser;
