import express from 'express'
const routerUpload = express.Router()
import controller from '../controllers/uploads.controller.js'
import path from 'node:path'
import multer from 'multer'
import { v4 as uuidv4 } from 'uuid';


const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        const rutaDeAlmacenamiento = path.join('public', 'uploads')
        cb(null, rutaDeAlmacenamiento)
    },
    filename: function(req, file, cb) {
        const extension = file.originalname.split('.').pop()
        const nombreArchivo = `${uuidv4()}.${extension}`
        cb(null,nombreArchivo)
}
})

const uploadsMiddleware = multer({ storage })

routerUpload.post('/', uploadsMiddleware.single('foto'), controller.uploadImagen)

export default routerUpload