require('@babel/register')
require('dotenv').config();
const express = require('express');
const app = express();
const session = require('express-session');


const path = require('path');
const getUser = require('./middlewares/getUser');
const renderComponent = require('./middlewares/renderComponent');
//импорт роута
const sessionConfig = require('./config/session');
const createPage = require('./routs/views/createPage')
const mainPage = require('./routs/views/mainPage')
const editPage = require('./routs/views/editPage')
const authRout = require('./routs/api/authRout')
const loginApiRouter = require('./routs/api/login.rout')


// мидлварки
app.use(session(sessionConfig));
app.use(express.json())
app.use(express.urlencoded({ extended:true }))
app.use(express.static(path.join(__dirname, 'public')))
app.use(getUser);

app.use(renderComponent)
// роуты
app.use('/auth',authRout)
app.use('/',createPage)
app.use('/',mainPage)
app.use('/',editPage)
app.use('/', loginApiRouter)





// const { PORT } = process.env;
// app.listen(PORT, () => console.log(`Server started at ${PORT}`));
app.listen(3000)

