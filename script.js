var lamp = window.document.getElementById('lampada')

function estaQuebrada() {
    return lamp.src.indexOf('quebrada') > -1
}

function ligar() {
    if ( !estaQuebrada() ) {
        lamp.src = 'ligada.png' 
    }
}

function desligar() {
    if ( !estaQuebrada() ) {
        lamp.src = 'desligada.png' 
    }
}

lamp.addEventListener ('click', quebrar)
function quebrar() {
    lamp.src = 'quebrada.png'
}