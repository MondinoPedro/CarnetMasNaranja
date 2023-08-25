const API_URL = "https://carnet-5h5pqm2zvq-uc.a.run.app/nrosocio/53881373";

const xhr = new XMLHttpRequest();

class CarnetModel {
    constructor(numero, nombre, apellido, ultimoPago){
        this.numero = numero,
        this.nombre = nombre,
        this.apellido = apellido,
        this.ultimoPago = ultimoPago
    }
}


function onRequestHandler(){
    if(this.readyState == 4 && this.status == 200){
        const socio = JSON.parse(this.response)
        const nomSocio = socio.nombre.split(" ");
        const carnetData = new CarnetModel(socio.nroSocio,nomSocio[0],nomSocio[1],socio.fechaLiquidacion);
        console.log(carnetData)

        const nombre = document.getElementById("usr-name").innerHTML
        nombre = `${carnetData.nombre}`
    }
}

const qrContainer = document.getElementById("qr");
const nroSocio = 1320;

new QRCode(qrContainer, {text: `${nroSocio}`, height:170, width:170});

xhr.addEventListener("load", onRequestHandler);
xhr.open('GET', `${API_URL}`);
xhr.send();