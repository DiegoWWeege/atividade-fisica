function calcular(){
    let d=Number(document.getElementById("distancia").value);
    let t=Number(document.getElementById("tempo").value);
    
    if(d<=0||t<=0)return alert("Informe valores válidos.");
    
    document.getElementById("velocidade").textContent=(d/(t/60)).toFixed(2);
    document.getElementById("resultadoTempo").textContent=t;
    document.getElementById("resultadoDistancia").textContent=(d*1000).toFixed(0);
    document.getElementById("ritmo").textContent=(t/d).toFixed(2);
    }
    