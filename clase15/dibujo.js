var d=document.getElementById("dibujo");
var lienzo=d.getContext("2d");

var y=0;
var x=0;
var a=0;
var b=300;
  do{
  dibujarLineas("red", x,y,a,b);
  y=y+10;
  a=a+10;
}while (a<300);
function dibujarLineas(color, xInicial, yInicial, xFinal, yFinal){
  lienzo.beginPath();
  lienzo.strokeStyle=color;
  lienzo.moveTo(xInicial,yInicial);
  lienzo.lineTo(xFinal,yFinal);
  lienzo.stroke();
  lienzo.closePath();
}
