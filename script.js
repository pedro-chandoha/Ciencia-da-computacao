function exercicio1() {
    let nota = parseInt(prompt("Digite uma nota de 1 a 10: "));
    console.log("A nota digitada foi",nota);
    while(nota >10 || nota <1 || isNaN(nota) || nota.trim() === ''){
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
let N = parseInt(prompt("Digite o número de notas: "));

let soma = 0;

for (let i = 0; i < N; i++) {
  let nota = parseFloat(prompt(`Digite a nota ${i + 1}: `));
  soma += nota;
}

let media = soma / N;

alert(`A média aritmética é: ${media.toFixed(2)}`);
    
}
function exercicio4(){
    const numero = parseInt(prompt("Digite um número inteiro: "));

function ehPrimo(numero) {
  if (numero <= 1) {
    return false;
  }
  for (let i = 2; i * i <= numero; i++) {
    if (numero % i === 0) {
      return false;
    }
  }
  return true;
}

if (ehPrimo(numero)) {
  console.log(`${numero} é um número primo!`);
} else {
  console.log(`${numero} não é um número primo.`);
}
}