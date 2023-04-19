const React = require('react')
const ReactDOMServer = require('react-dom/server')
const editPageRoute = require('express').Router()
const editPage = require('')


editPageRoute.get('/', (req,res)=>{
    const element = React.createElement()
    const html = ReactDOMServer.renderToStaticMarkup(element)
    res.write(`<!DOCTYPE html>`)
    res.end(html)
})

module.exports = editPage




advicesRoute.post('/:id/put', async (req, res) => {
    const id = Number(req.params.id);
    // data - какие поля пришли измененные
    await Advice.update(
      { instruction: req.body.instruction, age: req.body.age },
      {
        where: { id },
      }
    );
    res.redirect('/');
  });