function exercicio1() {
    let nota = parseInt(prompt("Digite uma nota de 1 a 10: "));
    console.log("A nota digitada foi",nota);
    while(nota >10 || nota <1 || isNaN(nota) || num.trim() === ''){
        nota = prompt("Valor invalido, digite novamente: ");
    }

    console.log("Nota valida")
}

function exercicio2(){
    let nomeUsuario = prompt("Digite seu nome: ");
    let senhaUsuario = prompt("Digite sua senha: ");
    while(nomeUsuario.trim()===""){
        nomeUsuario = prompt("Valor vazio, digite novamente: ");
    }
    while((senhaUsuario.trim()==="") || senhaUsuario==nomeUsuario){
        senhaUsuario = prompt("Sua senha não pode ser seu nome, digite novamente: ");
    }

    console.log("Login Aceito");

}

function exercicio3(){
    // Solicita ao usuário o número de notas
const N = parseInt(prompt("Digite o número de notas: "));

// Inicializa a soma das notas
let soma = 0;

// Loop para ler as notas
for (let i = 0; i < N; i++) {
  const nota = parseFloat(prompt(`Digite a nota ${i + 1}: `));
  soma += nota;
}

// Calcula a média aritmética
const media = soma / N;

// Mostra o resultado
alert(`A média aritmética é: ${media.toFixed(2)}`);
    
}
function exercicio4(){
    let numero = prompt("Digite um numero inteiro: ");
}