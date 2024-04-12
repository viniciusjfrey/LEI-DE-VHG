function calcularMedia() {
    let pesoAparencia = 2;
    let pesoPersonalidade = 3;
    let pesoSituacao = 1;

    let personalidade = parseFloat(document.getElementById("personalidade").value);
    let rosto = parseFloat(document.getElementById("rosto").value);
    let peito = parseFloat(document.getElementById("peito").value);
    let bunda = parseFloat(document.getElementById("bunda").value);
    let historico = parseFloat(document.getElementById("historico").value);
    let dialogo = parseFloat(document.getElementById("dialogo").value);
    let repertorio = parseFloat(document.getElementById("repertorio").value);
    let carater = parseFloat(document.getElementById("carater").value);
    let redes = parseFloat(document.getElementById("redes").value);
    let familia = parseFloat(document.getElementById("familia").value);
    let financeiro = parseFloat(document.getElementById("financeiro").value);

    if (isNaN(personalidade) || isNaN(rosto) || isNaN(peito) || isNaN(bunda) || isNaN(historico) || isNaN(dialogo) || isNaN(repertorio) || isNaN(carater) || isNaN(redes) || isNaN(familia) || isNaN(financeiro)) {
        alert("Por favor, preencha todos os campos com números entre 0 e 10.");
        return;
    }

    // Média de cada seção
    let mediaAparencia = ((personalidade + rosto + peito + bunda) / 4) * pesoAparencia;
    let mediaPersonalidade = ((historico + dialogo + repertorio + carater) / 4) * pesoPersonalidade;
    let mediaSituacao = ((redes + familia + financeiro) / 3) * pesoSituacao;

    // Média Ponderada
    let mediaPonderada = (mediaAparencia + mediaPersonalidade + mediaSituacao) / (pesoAparencia + pesoPersonalidade + pesoSituacao);

    // Arredondar a média para um número após a vírgula
    mediaPonderada = Math.round(mediaPonderada * 10) / 10;

    document.getElementById("media").innerText = mediaPonderada.toFixed(1);
}
