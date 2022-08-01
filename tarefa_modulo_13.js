//NUMERO 1 - RESOLVA AS OPERAÇOES
var a = 10;
var b = 15;
console.log(a+b); //R: 25
//PROX
var a = "10";
var b = 2;
console.log(a+b); //R: "102"
//PROX
var a = "10";
var b = 2;
console.log(a*b); //R: 20
//PROX
var a = "10";
var b = 3;
console.log(a/b); //R: 3.3333333
//PROX
var a = "10";
var b = 3;
console.log(a%b); // R: 1
//PROX
var a = 10;
var b = true;
console.log(a+b); // R: 11
//PROX
var a = 10;
var b = "10";
console.log(a==b); // R: true
//PROX
var a = 10;
var b = "10";
console.log(a===b); //R: false
//PROX
var a = 10;
var b = 11;
console.log(a<b); //R: true
//PROX
var a = 10;
var b = 12;
console.log(a>b); //R: false
//PROX
var a = 10;
var b = 10.1;
console.log(a<=b); //R: true
//PROX
var a = 10;
var b = 9.99;
console.log(a>b); //R: true
//PROX
var a = 10;
var b = "dez";
console.log(a!=b); //R: true
//PROX
var a = 10;
var b = true;
console.log(a+b); //R: 11
//PROX
var a = "dez";
var b = true;
console.log(a+b); //R: "deztrue"
//PROX
var a = 10;
var b = false;
console.log(a+b); //R: 10
//PROX
var a = 10;
var b = false;
console.log(a*b); //R: 0
//PROX
var a = true;
var b = true;
console.log(a+b); //R: 2
//PROX
var a = 10;
var i = 0;
console.log(a + parseInt(i+1)); //R: 11
//PROX
var a = 10;
var i = 0;
console.log(a + parseInt(i-1)); //R: 9
//PROX
var a = 1;
var b = 1;
console.log(a&b); //R: 1
//PROX
var a = 1;
var b = 0;
console.log(a&b); //R: 0
//PROX
var a = 0;
var b = 0;
console.log(a&b); //R: 0
//PROX
var a = 0;
var b = 1;
console.log(a/b); //R: 0
//PROX
var a = 5;
var b = 5;
console.log(a+b==10); //R: true
//PROX
var a = "5";
var b = "5";
console.log(a+b==10); //R: false
//PROX
var a = "5";
var b = 2;
console.log(a*b>9); //R: true
//PROX
var a = 10;
var b = 10;
console.log((a+b)*2); //R: 40
//PROX
var a = 10;
var b = 10;
console.log(a+b*2); //R: 30

//NUMERO 2 - RESPONDA AS PERGUNTAS

var branco = "preto";
var preto = "cinza";
var cinza = "branco";
var carro = "preto";
var valor = 30000;
var prestacao = 750;

//LETRA A

console.log(branco=="branco"); //R: false

//LETRA B

console.log(branco==cinza); //R: false

//LETRA C

console.log(carro===branco); //R: true

//LETRA D

var cavalo = carro

if (carro=="preto") {
 		cavalo = "cinza"
} else {
		cavalo = "marrom";
}
console.log(cavalo); //R: cinza

//LETRA E

var entrada = 3000;
var novoValor = (valor-entrada);
var quantPrest = (novoValor / prestacao);
console.log(quantPrest); //R: 36

//LETRA F

var totalCores = ("branco"+"preto"+"cinza");
console.log (totalCores.length); //R: 16


