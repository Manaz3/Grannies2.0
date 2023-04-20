const React = require('react')
const ReactDOMServer = require('react-dom/server')
const authRout = require('express').Router()
const auth = require('../../views/MainPage')



authRout.get('/login', (req,res)=>{
    res.send(res.renderComponent(auth, {}));
})

module.exports = authRout