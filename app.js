function calculaTempoPercurso(){
    let distancia = document.getElementById("distancia").value;
    let velocidade = document.getElementById("velocidade").value;
    let tempo = distancia / velocidade;
    document.getElementById("tempo-percurso").innerHTML = "O tempo de percurso é: " + tempo + " horas.";
}

function calculaVelocidadeMedia(){
    let distancia = document.getElementById("distancia").value;
    let velocidade = document.getElementById("velocidade").value;
    let tempo = distancia / velocidade;
    document.getElementById("velocidade-media").innerHTML = "O tempo de percurso é: " + tempo + " horas.";
}

function calculaConversaoKm(){
    let distancia = document.getElementById("distancia").value;
    let velocidade = document.getElementById("velocidade").value;
    let tempo = distancia / velocidade;
    document.getElementById("conversao-km").innerHTML = "A quantidade: " + tempo + " horas.";
}




