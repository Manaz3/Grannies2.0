const React = require('react')
const ReactDOMServer = require('react-dom/server')

function renderComponentFunction(component, props,options ={doctype: true}){
    const element = React.createElement(component, {
    ...this.locals,
    ...props,
    })

    const html = ReactDOMServer.renderToStaticMarkup(element)
    return options.doctype ? `<!DOCTYPE html>${html}` : html;
}

//мидлварка на отрисовку

function renderComponent(req,res,next){
res.renderComponent = renderComponentFunction

next()

}

module.exports = renderComponent