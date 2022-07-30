function calcularMedia ( notas ) {

let soma = 0;
for (c = 0; c < notas.length; c++) {
soma += notas[c];
}

media = soma / notas.length;
return media;

}

function aprovacao ( media ) {

let condicao = media >= 7 ? "aprovado" : "reprovado";

return condicao;

}

console.log ( "Média: " + calcularMedia([8, 8, 9, 10, 5]))
console.log ( aprovacao( calcularMedia([8, 8, 9, 10, 5])))
