import express from 'express'
const routerProductos = express.Router()

  
routerProductos.get('/', (req, res) => {
    res.send('GET ALL')
  })
  
routerProductos.get('/:id', (req, res) => {
    const id = req.params.id
    console.log(id)
    res.send('GET ONE')
  })
  
routerProductos.post('/', (req, res) => {
    const productoACrear = req.body
    console.log(productoACrear)
    res.send('CREATE Producto')
  })
  
routerProductos.put('/:id', (req, res) => {
    const id = req.params.id
    const productoAEditar = req.body
    console.log(id)
    console.log(productoAEditar)
    res.send('UPDATED Producto')
  })
  
routerProductos.delete('/:id', (req, res) => {
    const id = req.params.id
    console.log(id);
    res.send('DELETED Producto')
  })
  
export default routerProductos