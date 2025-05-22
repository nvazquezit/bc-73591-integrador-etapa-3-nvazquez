import express from 'express'
import 'dotenv/config'
import connection from './utils/connection.js'
import routerProductos from './routers/productos.router.js'


// ! Constantes
const app = express()
const PORT = 8080
const URI_DB = process.env.URI_LOCAL
console.log(URI_DB);

// ! Middleware

app.use(express.json())

app.get('/', (req, res) => {
  res.send('Hello World!')
})


// ! Rutas
app.use('/api/v1/productos', routerProductos)


// ! Arranque del servidor
app.listen(PORT, (err) => {
    if (err) throw new Error('No se pudo levantar el servidor')
    console.log(`Servidor funcionando en: http://localhost:${PORT}`)
    connection(URI_DB)
})