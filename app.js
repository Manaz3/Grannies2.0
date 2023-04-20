require('@babel/register')
require('dotenv').config();
const express = require('express');
const app = express();

const path = require('path');
const renderComponent = require('./middlewares/renderComponent');
//импорт роута
const createPage = require('./routs/createPage')
const mainPage = require('./routs/mainPage')
const editPage = require('./routs/editPage')
const authRout = require('./routs/auth')
const register = require('./routs/login')

// мидлварки
app.use(express.static(path.join(__dirname, 'publick')))
app.use(renderComponent)
// роуты
app.use('/',createPage)
app.use('/',mainPage)
app.use('/',editPage)
app.use('/',authRout)
app.use('/',register)




// const { PORT } = process.env;
// app.listen(PORT, () => console.log(`Server started at ${PORT}`));
app.listen(3000)