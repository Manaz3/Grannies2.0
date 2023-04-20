const React = require('react')
const ReactDOMServer = require('react-dom/server')

const MainPage = require('../../views/MainPage')
const mainPageRoute = require('express').Router()



mainPageRoute.get('/', (req,res)=>{
  res.send(res.renderComponent(MainPage, {}));
})



module.exports = mainPageRoute