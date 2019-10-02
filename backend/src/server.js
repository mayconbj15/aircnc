const express = require('express')
const mongoose = require('mongoose')
const routes = require('./routes')

const app = express()

mongoose.connect('mongodb+srv://mayconbj:mpee123cao456@aircnc-uzq9b.mongodb.net/semana09?retryWrites=true&w=majority',
{useNewUrlParser: true,
useUnifiedTopology: true
})

app.use(express.json()) //seta o body como JSON
app.use(routes) //define as rotas

app.listen(3333) //porta onde vai acessar o app

