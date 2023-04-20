const React = require('react')
const ReactDOMServer = require('react-dom/server')
const createPageRoute = require('express').Router()

const CreatePage = require('../../views/CreatePage')


createPageRoute.get('/create', (req,res)=>{
    res.send(res.renderComponent(CreatePage, {}));
})


module.exports = createPageRoute
