//const express = require('express')
import express from 'express'
import 'dotenv/config'
import connection from './utils/connection.js'
import routerProductos from './routers/productos.router.js'
import routerUsuarios from './routers/usuarios.router.js'
import routerUploads from './routers/uploads.router.js'

// ! Constantes
const app = express()
const PORT = 8080
const URI_DB = process.env.URI_LOCAL
//console.log(URI_DB)

// ! Configuraciones

// ! Middlewares
app.use(express.json()) // Traduce a Express el objeto que llega por el body

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