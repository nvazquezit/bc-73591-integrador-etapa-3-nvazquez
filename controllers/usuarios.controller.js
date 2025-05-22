import models from '../models/usuarios.model.js'

const getAll = (req, res) => {
    res.send('getAll')
}

const getOne = (req, res) => {
    res.send('getOne')
}

const create = async (req, res) => {
    const nuevoUsuario = req.body

    const { nombre, correo, password, confirm_password } = nuevoUsuario

    if ( password !== confirm_password ) {
        console.log('La contraseñas no coinciden')
        return res.status(500).json({
            mensaje: 'La contraseñas no coinciden'
        })
    }

    // TODO: controlar si el usuario con el correo enviado ya existe.

    try {
        const usuarioCreado = await models.crearUnUsuario(nuevoUsuario)
        res.json(usuarioCreado)
    } catch (error) {
        console.log(error)
        res.status(500).json({
            mensaje: 'No se pudo crear el usuario'
        })
    }


}

const update = (req, res) => {
    res.send('update')
}

const remove = (req, res) => {
    res.send('remove')
}

export default {
    getAll,
    getOne,
    create,
    update,
    remove
}