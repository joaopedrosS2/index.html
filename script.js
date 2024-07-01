const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");


const perguntas = [
   {
       enunciado: "Quais são as principais fontes de poluição que afetam os rios atualmente? ",
       alternativas: [
           "Produtos quimicos ",
           "Água  "
       ]
   },
   {
       enunciado: "Quais são os impactos ambientais e econômicos da poluição dos rios em comunidades locais e ecossistemas aquáticos ? ",
       alternativas: [
           "Morte de vida aquática ",
           "Almento da população de peixes "
       ]
   },
   {   enunciado: "Quais as medidas podem ser tomadas para mitigar ou previnir a poluição dos rios e melhorar a qualidade da água ? ", 
       alternativas: [  
           "Regulamentações mais rigorosas ",
           "Leis mais flexiveis "
       ]
    }
];

let atual = 0;
let perguntaAtual;
let historia = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    mostraAlternativas();
}

function mostraAlternativas() {
    for (const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa))
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opçãoSelecionada){
    const afirmacoes = opçãoSelecionada.afirmacoes;
    historiafinal = afirmacoes
    atual++;
    mostraPergunta();
}
mostraPergunta();