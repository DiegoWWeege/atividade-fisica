function calculaTempoPercurso(){
    let distancia = document.getElementById("distancia").value;
    let velocidade = document.getElementById("velocidade").value;
    let tempo = distancia / velocidade;
    document.getElementById("tempo-percurso").innerHTML =  tempo + " horas";
}

function calculaQuantVezes(){
    let distancia = document.getElementById("distancia").value;
    let tempo = distancia / 2;
    document.getElementById("quant-vezes").innerHTML = tempo + " vezes";
}

function calculaQuantCalorias(){
    let distancia = document.getElementById("distancia").value;
    let velocidade = document.getElementById("velocidade").value;
    let tempo = distancia / velocidade;
    let caloriasGastas = tempo * 300;
    document.getElementById("quant-calorias").innerHTML = caloriasGastas + " Calorias";
}




