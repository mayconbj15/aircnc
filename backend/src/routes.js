const express = require('express')
const multer = require('multer')
const uploadConfig = require('./config/upload')

const SessionController = require('./controllers/SessionController')
const SpotController = require('./controllers/SpotController')
const DashbordController = require('./controllers/DashbordController')
const BookingController = require('./controllers/BookingController')

const routes = express.Router()
const upload = multer(uploadConfig)

// req representa a requisição, pega as informações da requisição
// res devolve uma resposta pra requesição
// {idade: req.query.idade} //fazer o get de algo 

// req.query = Acessar query params (para filtros)
// req.params = Acessar route params (para edição, delete)
// req.body = Acessar o o corpo da requisição 
/*routes.post('/users', (req, res) => {
    return res.json(req.body)
})*/ //a rota que vai executar o código

routes.post('/sessions', SessionController.store)
routes.post('/spots',upload.single('thumbnail'), SpotController.store)
routes.get('/spots', SpotController.index)
routes.get('/dashboard', DashbordController.show)
routes.get('/spots/:id/bookings', BookingController.store)

module.exports = routes