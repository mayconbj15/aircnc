const express = require('express')
const mongoose = require('mongoose')
const routes = require('./routes')
const cors = require('cors')


const app = express()

mongoose.connect('mongodb+srv://mayconbj:mpee123cao456@aircnc-uzq9b.mongodb.net/semana09?retryWrites=true&w=majority',
{useNewUrlParser: true,
useUnifiedTopology: true
})

<<<<<<< HEAD
app.use(cors()) // { origin: 'http://localhost:3333'})
=======
>>>>>>> c334bfa392b18697ee74b99b3f54fac9fba6394d
app.use(express.json()) //seta o body como JSON
app.use(routes) //define as rotas

app.listen(3333) //porta onde vai acessar o app

