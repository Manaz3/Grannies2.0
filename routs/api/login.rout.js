const loginApiRouter = require('express').Router();
const bcrypt = require('bcrypt');

const { Granny, Grandson } = require('../../db/models');

loginApiRouter.post('/login', async (req, res) => {
    const { login, password } = req.body;
    console.log(login, password)
  
    // ищем пользователя в БД
    const user = await Granny.findOne({ where: { login } });
    console.log(user)
    // password = '******'
    // user.password - хэш
    // compare - вернёт true если пароль правильный
    if (!user || !(await bcrypt.compare(password, user.password))) {
      res.json({ success: false, message: 'Нет такого пользователя либо пароли не совпадают' });
      return;
    }
  
    // авторизация - запоминаем пользователя
    // express-session сам создаст session-id и файл [sid].json
    // положил туда userId
    req.session.userId = user.id;
    res.json({ success: true });

  });

module.exports = loginApiRouter;