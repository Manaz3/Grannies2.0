const React = require('react')
const ReactDOMServer = require('react-dom/server')
const { Post } = require('../../db/models')

const MainPage = require('../../views/MainPage')
const mainPageRoute = require('express').Router()



mainPageRoute.get('/', async (req,res)=>{
  const { userId } = req.session;
  const post = userId ?
  await Post.findAll({
    where: { grannyId: userId },
    // order: [['age', 'DESC']],
  })
  : [];
  // const post = await Post.find()
  res.send(res.renderComponent(MainPage, {post}));
})

mainPageRoute.delete('/del/:id', async (req,res) => {
  const id = Number(req.params.id);
  await Post.destroy({ where: {id} })
  res.json({ success: true })

})

mainPageRoute.get('/logout', (req, res) => {
  // удаление сессии
  req.session.destroy(() => {
    // очищаем куку (название куки лежит в config/session.js свойство cookie.name)
    res.clearCookie('user_sid');
    res.redirect('/');
  });
});



module.exports = mainPageRoute