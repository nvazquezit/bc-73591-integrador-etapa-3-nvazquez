import express from 'express'
const routerUpload = express.Router()
import controller from '../controllers/uploads.controller.js'
import uploadsMiddleware from '../midlewares/uploads.middleware.js'


routerUpload.post('/', uploadsMiddleware.single('foto'), controller.uploadImagen)

export default routerUpload