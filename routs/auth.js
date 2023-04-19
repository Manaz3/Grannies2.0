const React = require('react')
const ReactDOMServer = require('react-dom/server')
const authRout = require('express').Router()
const auth = require('')



authRout.get('/', (req,res)=>{
    const element = React.createElement()
    const html = ReactDOMServer.renderToStaticMarkup(element)
    res.write(`<!DOCTYPE html>`)
    res.end(html)
})

module.exports = auth