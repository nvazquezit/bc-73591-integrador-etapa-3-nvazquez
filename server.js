//const express = require('express')
import express from 'express'
import 'dotenv/config'
import connection from './utils/connection.js'
import routerProductos from './routers/productos.router.js'
import routerUsuarios from './routers/usuarios.router.js'
import routerUploads from './routers/uploads.router.js'
import path from 'node:path'
import cors from 'cors'

// ! Constantes
const app = express()
const PORT = 8080
const URI_DB = process.env.URI_REMOTA
const URL_FRONT = process.env.URL_FRONTEND_CORS
//console.log(URI_DB)

// ! Configuraciones

const corsConfig = {
  origin: URL_FRONT // prod: http://etapa-3.netlify.com/ | dev: http://localhost:5173
}

// ! Middlewares
app.use(express.json()) // Traduce a Express el objeto que llega por el body
app.use(express.static(path.join('public')))
app.use(cors(corsConfig))

// ! Rutas
app.use('/api/v1/productos', routerProductos)
app.use('/api/v1/usuarios', routerUsuarios)
app.use('/api/v1/uploads', routerUploads)

app.get('/', (req, res) => {
  res.send('Hello World!')
})

// ! Arranque del servidor
app.listen(PORT, (err) => {
    if (err) throw new Error('No se pudo levantar el servidor')
    console.log(`Servidor funcionando en: http://localhost:${PORT}`)
    connection(URI_DB)
})