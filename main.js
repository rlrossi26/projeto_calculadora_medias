let linhas = '';
const imgAprovado = '<img src="./images/aprovado.png" alt="Emoji festejando">'
const imgReprovado = '<img src="./images/reprovado.png" alt="Emoji Triste">'
const atividades = [];
const nomes = [];
const notas = [];
const spanAprovado = `<span class="resultado aprovado">Aprovado</span>`
const spanReprovado = `<span class="resultado reprovado">Reprovado</span>`
const notaMinima = parseFloat(prompt('Digite a nota mínima: '));

const form = document.getElementById('form-atividade');

form.addEventListener('submit', function(e) {
    e.preventDefault();
    adicionaLinha();
    atualizaTabela();
    atualizaMedia();

});

function adicionaLinha() {
    const nomeAtividade = document.getElementById('nome-atividade');
    const notaAtividade = document.getElementById('nota-atividade');

    if (atividades.includes(nomeAtividade.value)) {
        alert(`A atividade ${nomeAtividade.value} já foi cadastrada!`);
    } else {
        atividades.push(nomeAtividade.value);
        nomes.push(nomeAtividade.value);
        notas.push(parseFloat(notaAtividade.value));

        let linha = '<tr>';
        linha += `<td>${nomeAtividade.value}</td>`;
        linha += `<td>${notaAtividade.value}</td>`;
        linha += `<td>${notaAtividade.value >= notaMinima ? imgAprovado : imgReprovado}</td>`;
        linha += '</tr>'

        linhas += linha;
    }
    nomeAtividade.value = '';
    notaAtividade.value = '';
};

function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
};

function atualizaMedia(){
    const mediaFinal = calculaNotaFinal();

    document.getElementById('media-final-valor').innerHTML = mediaFinal;
    document.getElementById('media-final-resultado').innerHTML = mediaFinal >= notaMinima ? spanAprovado : spanReprovado;
}

function calculaNotaFinal() {
    let somaDasNotas = 0;
    
    for (i = 0; i < notas.length; i++) {
        somaDasNotas += notas[i];
    }

    return somaDasNotas / notas.length;
}