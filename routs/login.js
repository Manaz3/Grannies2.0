const React = require('react')
const ReactDOMServer = require('react-dom/server')
const registerRoute = require('express').Router()
const register = require('../component/Register')
//подключить модель из бд



// registerRoute.get('/', (req,res)=>{
//     const element = React.createElement()
//     const html = ReactDOMServer.renderToStaticMarkup(element)
//     res.write(`<!DOCTYPE html>`)
//     res.end(html)
// })

// module.exports = registerRoute




// registerRoute.get('/register', (req, res) => {
//     const element = React.createElement(register);
//     const html = ReactDOMServer.renderToStaticMarkup(element);
//     res.send(`<!DOCTYPE html>${html}`);
//   });
  
registerRoute.get('/login', (req, res) => {
    res.send(res.renderComponent(register, {}));
  });


  registerRoute.post('/login', (req,res)=>{
    const {login, password} = req.body
    
    // if(login && password){
      // беру юзера из базы данных и  проверяю есть ли такой юзер уже 
      // const user?
      if(!user){

      }else{
        console.log('такой юзер уже есть');
      }
    }

  })
  module.exports = registerRoute