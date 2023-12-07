class Proveedor {
    constructor(){
        this.documentos = {};
        this.perfil = {};
    }


    subirDocumentos(tipoDocumento, contenido){
        this.documentos[tipoDocumento] = contenido;
    }

    procesarDocumentos(documentos){
        let informacionExtraida = {};

        if (documentos['Rut']){
            informacionExtraida.rut = this.extraerRut(documentos['Rut]']);
        }

        if (documentos['GirosComerciales']){
            informacionExtraida.girosComerciales = this.extraerGirosComerciales(documentos['GirosComerciales]']);
        }
        return informacionExtraida;
    }

    extraerRut(contenidoRut){
        const rutExtraido = contenidoRut.match(/\d{1,8}-[\d|kK]{1}/);
        return rutExtraido ? rutExtraido[0] : null;
    }

    extraerGirosComerciales(contenidoGiros){
        return contenidoGiros.split('.').map(giro => giro.trim());
    }
}

module.exports = Proveedor;