const React = require('react')
const ReactDOMServer = require('react-dom/server')
const registerRoute = require('express').Router()

const register = require('')


registerRoute.get('/', (req,res)=>{
    const element = React.createElement()
    const html = ReactDOMServer.renderToStaticMarkup(element)
    res.write(`<!DOCTYPE html>`)
    res.end(html)
})

module.exports = register