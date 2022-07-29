## Travessia do Rio

-Passo 1: fazendeiro leva a cabra da margem1 para a margem2; ### margem1: lobo + alfafa / margem2: cabra.<br>
-Passo 2: fazendeiro navega da margem2 para margem1. ### barco: vazio <br>
-Passo 3: fazendeiro leva a alfafa da margem1 para margem2 & fazendeiro leva a cabra da margem2 para margem1; ### margem1: lobo / margem2: alfafa / barco: cabra <br>
-Passo 4: fazendeiro deixa cabra na margem1 & leva o lobo da margem1 para margem2; ### margem 1: cabra / margem2: alfafa + lobo <br>
-Passo 5: fazendeiro navega da margem2 para margem1. ### barco: vazio <br>
-Passo 6: fazendeiro leva a cabra da margem1 para margem2; ### margem1: 0 / margem2: cabra+ lobo + alfafa <br>


## Calculo das medias

## <html>
  <p>
Digite 3 números para calcular a média
</p>
<input type="number" id="a">
<input type="number" id="b">
<input type="number" id="c">

<button onclick ="obtermedia()">
Calcular Media
</button>

<div id="resultado">

</div>
</html>

## CSS

input, button {
display: block;
margin 10px;
}

## <script>

function obtermedia(){
var a = parseInt(document.getElementById("a").value);
var b = parseInt(document.getElementById("b").value);
var c = parseInt(document.getElementById("c").value);

var media = (a+b+c)/3;

document.getElementById("resultado").innerHTML = "Resultado: " + media;


}
