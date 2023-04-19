require('@babel/register')
require('dotenv').config();
const express = require('express');
const app = express();

const path = require('path');
const renderComponent = require('./middlewares/renderComponent');
//импорт роута
const createPage = require()
const editPage = require()
const auth = require()
const register = require()

// мидлварки
app.use(express.static(path.join(__dirname, 'publick')))
app.use(renderComponent)
// роуты
app.use('/',createPage)
app.use('/',editPage)
app.use('/',auth)
app.use('/',register)




const { PORT } = process.env;
app.listen(PORT, () => console.log(`Server started at ${PORT}`));