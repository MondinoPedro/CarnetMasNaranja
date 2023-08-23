
const qrContainer = document.getElementById("qr");
const nroSocio = 1320;

new QRCode(qrContainer, {text: `${nroSocio}`, height:170, width:170});

