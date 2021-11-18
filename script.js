var div = document.createElement("div");
document.getElementById("f0").appendChild(div);
div.innerHTML = "0";

var str = "";
var resul = 0;

function pegarValor(val) {
  str += val;
  div.innerHTML = str;
}

function raiz() {
  value = Number(str);
  div.innerHTML = Math.sqrt(value);
  str="";
}

function calcular() {
    resul = eval(str);
    div.innerHTML = resul;
    str = "";
}

function limpar(){
  str = str.slice(0, -1);
  div.innerHTML=str;
}
