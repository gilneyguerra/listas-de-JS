var alunos = [
[6, 7, 8, 6],
[9, 5, 6, 7],
[8, 4, 6, 7]

]
var nota = 0;
for(var i = 0; i < alunos.length; i++) {

nota = 0
aluno = alunos[i]
console.log("Aluno: " + aluno);

for(c = 0; c < aluno.length; c++){
nota += aluno[c];
}

media = nota / 4;

if(media >= 6) {
resultado = "aprovado"
} else {
resultado = "reprovado";
}

console.log("Media: " + media + " - " + resultado);
}


//contador//

var contador = 0;
while (contador < 10) {
contador++;
console.log(contador);
}

//decrescer hora//

var hora = 24;
while (hora > 0) {
hora--;
console.log(hora);
}
