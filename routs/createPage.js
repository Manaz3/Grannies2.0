const React = require('react')
const ReactDOMServer = require('react-dom/server')
const createPageRoute = require('express').Router()

const CreatePage = require('../component/CreatePage')


createPageRoute.get('/create', (req,res)=>{
    res.send(res.renderComponent(CreatePage, {}));
})



// module.exports = createPageRoute



// const { Advice } = require('../../db/models');

// // Нужно будет защитить от IDOR - удаление и редактирование
// advicesApiRouter.delete('/:id', async (req, res) => {
//   const id = Number(req.params.id);
//   const removedCount = await Advice.destroy({
//     // проверка на атаку IDOR. Удаляем только совет от клиента.
//     where: { id, user_id: req.session.userId },
//   });

//   // removedCount - количество удалённых записей
//   if (removedCount === 0) {
//     res.status(404).json({ success: false, message: 'Нет записи для удаления либо нет доступа' });
//   } else {
//     // зависит от реализации, что мы отправляем в json
//     res.json({ success: true });
//   }
// });

// module.exports = advicesApiRouter;





//удаление из лекции Артема
//  advicesRoute.post('/:id/delete', async (req, res) => {
//   const id = Number(req.params.id);
//   await Advice.destroy({
//     where: { id },
//   });
//   res.redirect('/');
// }); 







// const { Advice } = require('../../db/models'); адвайс берется из модели базы данных 

// createPageRoute.get('/', async (req, res) => {
//     const { userId } = req.session;
  
//     const advices = userId
//       ? await 'Advice'.findAll({
//           where: { user_id: userId },
//           order: [['age', 'DESC']],
//         })
//       : [];
  
//     // передаём пользователя в MainPage
//     res.send(res.renderComponent(MainPage, { advices }));
//   });
  
  // отрисовываем форму
//   createPageRoute.get('/post', (req, res) => {
//     const form = React.createElement('novaya forma');
//     const html = ReactDOMServer.renderToStaticMarkup(form);
  
//     res.write('<!DOCTYPE html>');
//     res.end(html);
//   });
  
//   // read one advice
//   createPageRoute.get('/:id', async (req, res) => {
//     const advice = await 'Advice'.findByPk(Number(req.params.id));
  
//     const form = React.createElement(AdviceInfo, {
//       advice,
//     });
//     const html = ReactDOMServer.renderToStaticMarkup(form);
  
//     res.write('<!DOCTYPE html>');
//     res.end(html);
//   });
  
//   //  create
//   createPageRoute.post('/', async (req, res) => {
//     //  принимаем данные из формы
  
//     const data = req.body;
  
//     await 'Advice'.create({
//       instruction: data.instruction,
//       age: data.age,
//       user_id: req.session.userId,
//     });
  
//     res.redirect('/');
//   });
  
//   //  отрисовывать форму изменения совета
//   createPageRoute.get('/:id/put', async (req, res) => {
//     const id = Number(req.params.id);
  
//     const advice = await 'Advice'.findByPk(id);
  
//     const form = React.createElement(UpdateAdviceForm, {
//       advice,
//     });
  
//     const html = ReactDOMServer.renderToStaticMarkup(form);
  
//     res.write('<!DOCTYPE html>');
//     res.end(html);
//   });
  
//   // update
//   createPageRoute.post('/:id/put', async (req, res) => {
//     const id = Number(req.params.id);
//     // data - какие поля пришли измененные
//     await 'Advice'.update(
//       { instruction: req.body.instruction, age: req.body.age },
//       {
//         where: { id },
//       }
//     );
//     res.redirect('/');
//   });

module.exports = createPageRoute
