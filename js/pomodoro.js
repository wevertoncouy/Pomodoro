
var cronometro;
function pararConometro() {

    clearInterval(cronometro)
}

function iniciarContator() {
    setTimeout(cronometro)
}

function numero(x){
    return contadorMin = x 
}

 var contadorMin = 25;
 var contadorSeg = 60;
function iniciar() {

    

   // var contadorMin = 1;
    //var contadorSeg = 60;
    console.log(contadorMin);
    var minuto = document.getElementById("minutos");
    var segundo = document.getElementById("segundos");

    cronometro = setInterval(function () {
      
        if ((contadorSeg--) >= 60) {
            contadorSeg = contadorSeg--;
            segundo.innerHTML = contadorSeg;


        }

        segundo.innerHTML = contadorSeg;

        if (contadorSeg < 10) {

            segundo.innerHTML = "0" + contadorSeg;

        }



        if (contadorSeg == 0) {
            contadorSeg = 60;
            contadorMin--;
            minuto.innerHTML = contadorMin;

        }


        if (contadorMin == 0 && contadorMin == 0) {
            minuto.innerHTML = "00"
            segundo.innerHTML = "00"
            pararConometro();

        }

    }, 10);
}


//

// ---------------btn------------------
btnIniciar.addEventListener("click", () => {
    iniciar();
});

btnParar.addEventListener("click", () => {
    pararConometro();
});

btnReiniciar.addEventListener("click", () => {
    location.reload();
});

//------------------quadro---------------------
let pomodoro = document.getElementById("pomodoro")
 pomodoro.addEventListener("click", () => {
    iniciar();
    numero(25);
});

intervalo.addEventListener("click", ()=>{

});

// var x = document.querySelectorAll(".quadro")