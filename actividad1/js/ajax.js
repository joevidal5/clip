$(document).ready(function(){

    $('#adivinanza').click(function(){
        $('#principal').load("adivinanza.html");
    })
   
    $('#consulta').click(function(){
        $('#principal').load("consulta.html");
    })

    $('#enviar').click(function(){
        $('#principal').load("consultaFinalizada.html");
    })
});