const express = require('express');
const mongoose = require('mongoose');
const Proveedor = require('./proveedor');


//conectar a la base de datos al localhost

mongoose.connect('mongodb://localhost:27017/cidere', {useNewUrlParser: true, useUnifiedTopology: true});

//Definir el esquema del proveedor 
const proveedorSchema = new mongoose.Schema({
    documentos: {
        type: Object,
        default:{}
    },
    perfil:{
        type: Object,
        default: {}
    }
});


//Crear el modelo del proveedor
const Proveedor = mongoose.model('Proveedor', proveedorSchema);

const app = express();
const port = 3000;

app.use(express.json());

//Ruta para registrar un proveedor 
app.post('/registrar-proveedor', async (reo, res) =>{
    const nuevoProveedor = new Proveedor();

    //Simular la carga de documentos desde el cuerpo de la solicitud
    //Considerando el formato del archivo, que este puede ser como un formulario
    nuevoProveedor.subirDocumentos('Rut', req.body.Rut);
    nuevoProveedor.subirDocumentos('GirosComerciales', req.body.GirosComerciales);

    //Autorellenar el perfil
    nuevoProveedor.autorrellenarPerfil();

    try{
        //Guardar el proveedor en la base de datos
        const proveedorGuardado = await nuevoProveedor.save();
        res.json(proveedorGuardado);
    } catch(error) {
        res.status(500).send(error.message);
    }
    });

//Iniciar el servidor
app.listen(port, () => {
    console.log('Servidor en ejecución en http://localhost:${port}');
});