function exercicio1() {
    let nota = prompt("Digite uma nota de 1 a 10: ");
    console.log("A nota digitada foi",nota);
    while(nota >10 || nota <1 ){
        nota = prompt("Valor invalido, digite novamente: ");
    }
    console.log("Nota valida")
}
function exercicio2(){
    let nomeUsuario = prompt("Digite seu nome: ");
    let senhaUsuario = prompt("Digite sua senha: ");
    while(senhaUsuario==nomeUsuario){
        senhaUsuario = prompt("Sua senha não pode ser seu nome, digite novamente: ");
    }
    console.log("Login Aceito :)");
}
function exercicio3(){
    
}
function exercicio4(){
    let numero = prompt("Digite um numero inteiro: ");
}