function exercicio1() {
  let nota = prompt("Digite uma nota de 1 a 10: ");
  console.log("A nota digitada foi",nota);
  while(nota >10 || nota <1 || isNaN(nota) || nota.trim() === ''){
      nota = prompt("Valor invalido, digite novamente: ");
  }
  nota = parseInt(nota);

  alert("Nota valida")
  console.log("Nota válida")
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

  alert("Login Aceito");
  console.log("Login Aceito")
}

function exercicio3(){
let N = prompt("Digite o número de notas: ");
while(N<1 || N.trim()==='' || isNaN(N)){
  N = prompt("Valor inválido digite novamente: ");
}
N = parseInt(N);
let soma = 0;

for (let i = 0; i < N; i++) {
let nota = prompt(`Digite a nota ${i + 1}: `);
while(nota<0 || nota.trim()==='' || isNaN(nota)){
  nota = prompt("Nota inválida, digite novamente: ");
  
}
nota = parseFloat(nota);
soma += nota;
}

let media = soma / N;

alert(`A média aritmética é: ${media.toFixed(2)}`);
  
}
function exercicio4(){
  let num = prompt("Digite um numero inteiro para ver se é primo ou não:");
  while(num<1 || isNaN(num) || num.trim === ''){
  num = prompt("Valor inválido digite novamente: ");
  }
  num = parseInt(num);
  let SimOuNao;
  let cont = 0;
  for (let i = 1; i <= num; i++) {
      if (num % i === 0) {
          cont++;            
          if (cont > 2) {
              SimOuNao = false;
          }else{
              SimOuNao = true;
          }
      }
  }
  if(SimOuNao){
      alert("O numero é primo! ");
      console.log("O numero é primo! ");
  }else{
      alert("O numero não é primo! ");
      console.log("O numero não é primo!");
  }
}