const React = require('react');
const ReactDOMServer = require('react-dom/server');
const editPageRoute = require('express').Router();
const editPage = require('../../views/Edit');

const { Post } = require('../../db/models');

editPageRoute.get('/:id', async (req, res) => {
  const post = await this.Post.findOne({ where: { id: req.params.id } });
  res.send(res.renderComponent(editPage, { post }));
  res.json({ html });
});

editPageRoute.put('/:id', async (req, res) => {
  const post = await this.Post.findOne({ where: { id: req.params.id } });
  const { image, body } = req.body;
  post.image = image;
  post.body = body;
  post.save();
  res.json();
});

// const { Advice } = require('../../db/models'); адвайс берется из модели базы данных

//  отрисовывать форму изменения совета
// editPageRoute.get('/:id/put', async (req, res) => {
//   const id = Number(req.params.id);

//   const advice = await 'Advice'.findByPk(id);

//   const form = React.createElement(UpdateAdviceForm, {
//     advice,
//   });

//   const html = ReactDOMServer.renderToStaticMarkup(form);

//   res.write('<!DOCTYPE html>');
//   res.end(html);
// });

// update
// editPageRoute.post('/:id/put', async (req, res) => {
//   const id = Number(req.params.id);
//   // data - какие поля пришли измененные
//   await 'Advice'.update(
//     { instruction: req.body.instruction, age: req.body.age },
//     {
//       where: { id },
//     }
//   );
//   res.redirect('/');
// });

module.exports = editPageRoute;
