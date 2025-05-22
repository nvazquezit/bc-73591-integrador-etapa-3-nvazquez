import mongoose from 'mongoose'

const connection = async (uri) => {
    try {
        await mongoose.connect(uri)
        console.log('conexion a MONGODB OK');
    } catch (error) {
        console.log('Conexion Error', error)
    }
}

export default connection