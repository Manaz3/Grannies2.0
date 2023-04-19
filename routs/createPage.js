const React = require('react')
const ReactDOMServer = require('react-dom/server')
const createPageRoute = require('express').Router()

const createPage = require('')


createPageRoute.get('/', (req,res)=>{
    const element = React.createElement()
    const html = ReactDOMServer.renderToStaticMarkup(element)
    res.write(`<!DOCTYPE html>`)
    res.end(html)
})

module.exports = createPage



const { Advice } = require('../../db/models');

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
 advicesRoute.post('/:id/delete', async (req, res) => {
  const id = Number(req.params.id);
  await Advice.destroy({
    where: { id },
  });
  res.redirect('/');
}); 
