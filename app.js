function calcular() {
    let distancia = Number(document.getElementById("distancia").value);
    let tempo = Number(document.getElementById("tempo").value);

    if (distancia <= 0 || tempo <= 0) {
        alert("Informe valores válidos.");
        return;
    }

    let velocidade = distancia / (tempo / 60);
    let ritmo = tempo / distancia;

    document.getElementById("velocidade").textContent = velocidade.toFixed(2);
    document.getElementById("resultadoTempo").textContent = tempo;
    document.getElementById("resultadoDistancia").textContent = distancia * 1000;
    document.getElementById("ritmo").textContent = ritmo.toFixed(2);
}

async function carregarClima() {
    try {
        let url = "https://api.open-meteo.com/v1/forecast?latitude=-26.4856&longitude=-49.0667&current=temperature_2m,relative_humidity_2m,wind_speed_10m,weather_code";

        let resposta = await fetch(url);
        let dados = await resposta.json();

        let clima = dados.current;

        let temperatura = clima.temperature_2m;
        let umidade = clima.relative_humidity_2m;
        let vento = clima.wind_speed_10m;
        let codigo = clima.weather_code;

        document.getElementById("temperatura").textContent = temperatura;
        document.getElementById("umidade").textContent = umidade;
        document.getElementById("vento").textContent = vento;
        document.getElementById("condicao").textContent = interpretarClima(codigo);

        analisarCorrida(temperatura, vento, codigo);

    } catch (erro) {
        document.getElementById("recomendacao").textContent =
            "Não foi possível carregar o clima.";
    }
}

function interpretarClima(codigo) {
    if (codigo === 0) return "Ensolarado";
    if (codigo <= 3) return "Nublado";
    if (codigo <= 48) return "Neblina";
    if (codigo <= 67) return "Chuva";
    if (codigo <= 77) return "Neve";
    if (codigo <= 82) return "Pancadas de chuva";
    return "Tempestade";
}

function analisarCorrida(temperatura, vento, codigo) {
    let recomendacao = document.getElementById("recomendacao");

    if (codigo >= 95) {
        recomendacao.textContent = "Evite correr: possibilidade de tempestade.";
        recomendacao.style.background = "#fde2e2";
        recomendacao.style.color = "#b42318";
    } else if (codigo >= 51 && codigo <= 82) {
        recomendacao.textContent = "Atenção: há possibilidade de chuva.";
        recomendacao.style.background = "#fff3cd";
        recomendacao.style.color = "#856404";
    } else if (temperatura > 30) {
        recomendacao.textContent = "Está muito quente para correr.";
        recomendacao.style.background = "#fde2e2";
        recomendacao.style.color = "#b42318";
    } else if (temperatura < 10) {
        recomendacao.textContent = "Está frio. Tenha cuidado durante a atividade.";
        recomendacao.style.background = "#fff3cd";
        recomendacao.style.color = "#856404";
    } else if (vento > 30) {
        recomendacao.textContent = "Vento forte. Tenha atenção durante a corrida.";
        recomendacao.style.background = "#fff3cd";
        recomendacao.style.color = "#856404";
    } else {
        recomendacao.textContent = "O clima está bom para correr!";
        recomendacao.style.background = "#e3f6e9";
        recomendacao.style.color = "#087443";
    }
}

carregarClima();