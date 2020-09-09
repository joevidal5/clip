let btnprobar= document.getElementById('btnprobar');
let respuesta = document.getElementById('respuesta');
let resAdivinanza = "fosforos"
let cantidadIntentos = 0;
let intentosDisponibles = 3
let listaIntentos = [];
let resultado = "";
let estadoAdv = "";

if ( cantidadIntentos == 0 ){
    document.getElementById("intentos").innerHTML = "3";
    document.getElementById("cantidad").innerHTML = "0";
    document.getElementById("resultados").innerHTML = "ninguna";
    document.getElementById("estado").innerHTML = "No se usaron intetos.";
    document.getElementById("pista").innerHTML = "Gasta un intento para ver una pista.";
}

function adivinar (respuesta, resAdivinanza){
    if (respuesta == resAdivinanza){
        alert('USTED A ADIVINADO!!!');
        estadoAdv = "Respuesta correcta, fosforos!!!"
        return;
    }else{
        if (cantidadIntentos == 2){
            alert('SE LE AN TERMINADO LA CANTIDAD DE INTENTOS, MEJOR SUERTE LA PROXIMA');
            return;
        }else{
            estadoAdv = "Respuesta incorrecta!!!"
        }
    }
    intentosDisponibles = intentosDisponibles - 1;
    cantidadIntentos ++;
    listaIntentos.push(respuesta);
    
}

function pista(){
    if (intentosDisponibles == 2){
        document.getElementById("pista").innerHTML = "Con ellos consigues hacer fuego.";
    }
    if (intentosDisponibles == 1){
        document.getElementById("pista").innerHTML = "Tenemos la cabeza colorada. ";
    }
    
}

function mostrar (respuestas, cantidadIntentos,est){
    document.getElementById("intentos").innerHTML = intentosDisponibles;
    document.getElementById("resultados").innerHTML = respuestas;
    document.getElementById("cantidad").innerHTML = cantidadIntentos;
    document.getElementById("estado").innerHTML = est;
    pista();
}

btnprobar.addEventListener("click", function(){
    let x = respuesta.value;
    adivinar(x,resAdivinanza)
    mostrar(listaIntentos,cantidadIntentos,estadoAdv)
});

respuesta.addEventListener("keypress", function(e) {
    if (e.keyCode === 13) {
        let x = respuesta.value;
        adivinar(x,resAdivinanza)
        mostrar(listaIntentos,cantidadIntentos,estadoAdv)
    }
});