const React = require('react')
const ReactDOMServer = require('react-dom/server')
const editPageRoute = require('express').Router()
const editPage = require('../component/editPage')


editPageRoute.get('/edit', (req,res)=>{
    res.send(res.renderComponent(editPage, {}));
})

module.exports = editPageRoute




// advicesRoute.post('/:id/put', async (req, res) => {
//     const id = Number(req.params.id);
//     // data - какие поля пришли измененные
//     await Advice.update(
//       { instruction: req.body.instruction, age: req.body.age },
//       {
//         where: { id },
//       }
//     );
//     res.redirect('/');
//   });






// const { Advice } = require('../../db/models'); адвайс берется из модели базы данных 

 //  отрисовывать форму изменения совета
 editPageRoute.get('/:id/put', async (req, res) => {
    const id = Number(req.params.id);
  
    const advice = await 'Advice'.findByPk(id);
  
    const form = React.createElement(UpdateAdviceForm, {
      advice,
    });
  
    const html = ReactDOMServer.renderToStaticMarkup(form);
  
    res.write('<!DOCTYPE html>');
    res.end(html);
  });
  
  // update
  editPageRoute.post('/:id/put', async (req, res) => {
    const id = Number(req.params.id);
    // data - какие поля пришли измененные
    await 'Advice'.update(
      { instruction: req.body.instruction, age: req.body.age },
      {
        where: { id },
      }
    );
    res.redirect('/');
  });