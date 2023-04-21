const authApiRouter = require('express').Router();
const bcrypt = require('bcrypt');

const { Granny, Grandson } = require('../../db/models');

authApiRouter.post('/', async (req, res) => {
  try {
    const { select, login, grannyLogin, password, password2 } = req.body;
    console.log(select, login, grannyLogin, password, password2);
    if (password !== password2) {
      res.status(403).json({ success: false, message: 'Пароли не совпадают' });
      return;
    }
    if (select === '1') {
      const existingUser = await Granny.findOne({ where: { login } });
      if (existingUser) {
        res.status(409).json({
          success: false,
          message: 'Пользователь с таким логином уже существует',
        });
        return;
      }
      const user = await Granny.create({
        login,
        password: await bcrypt.hash(password, 10),
      });
      req.session.userId = user.id;
      res.status(201).json({ success: true });
    }
    if (select === '2') {
      const existingUser = await Grandson.findOne({ where: { login } });
      if (existingUser) {
        res.status(409).json({
          success: false,
          message: 'Пользователь с таким логином уже существует',
        });
        return;
      }
      const user = await Grandson.create({
        login,
        password: await bcrypt.hash(password, 10),
        grannyLogin: grannyLogin,
      });
      req.session.userId = user.id;
      res.status(201).json({ success: true });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: 'Непредвиденная ошибка сервера. Попробуйте позже.',
    });
  }
});

// authApiRouter.post('/login', async (req, res) => {
//   const { login, password } = req.body;
//   // ищем пользователя в БД
//   const user = await User.findOne({ where: { login } });
//   // password = '******'
//   // user.password - хэш
//   // compare - вернёт true если пароль правильный
//   if (!user || !(await bcrypt.compare(password, user.password))) {
//     res.json({ success: false, message: 'Нет такого пользователя либо пароли не совпадают' });
//     return;
//   }
//   // авторизация - запоминаем пользователя
//   // express-session сам создаст session-id и файл [sid].json
//   // положил туда userId
//   req.session.userId = user.id;
//   res.json({ success: true });
// });

module.exports = authApiRouter;
