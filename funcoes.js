function calculoMedia ( notas ) {

var notas = 0;
for (c = 0; c < notas.length; c++) {
notas += notas[c];
}

media = notas / notas.length;
return media;

}
