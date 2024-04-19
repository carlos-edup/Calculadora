function insert(num) {
    var numero = document.getElementById('resp').innerHTML;
    document.getElementById("resp").innerHTML = numero + num;
}

function clean(){
    document.getElementById("resp").innerHTML = "";
}
function back() {
    var resultado = document.getElementById('resp').innerHTML;
    document.getElementById('resp').innerHTML = resultado.substring(0, resultado.length -1);
}

function calcular(){
    var resultado = document.getElementById('resp').innerHTML;
    if(resultado){
        document.getElementById('resp').innerHTML = eval(resultado);
    }
    else {
        document.getElementById('resp').innerHTML = 'Nada para calcular'
    }
}
