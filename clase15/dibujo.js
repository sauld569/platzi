function dibujarLineas(color, xInicial, yInicial, xFinal, yFinal){
  lienzo.beginPath();
  lienzo.strokeStyle=color;
  lienzo.moveTo(xInicial,yInicial);
  lienzo.lineTo(xFinal,yFinal);
  lienzo.stroke();
  lienzo.closePath();
}

var d=document.getElementById("dibujo");
var lienzo=d.getContext("2d");
