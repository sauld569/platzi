var teclas = {
  UP: 38,
  DOWN: 40,
  LEFT: 37,
  RIGHT: 39
};
document.addEventListener("mousedown", empezarADibujar);
document.addEventListener("mouseup", dejarDeDibujar);
document.addEventListener("mousemove", dibujando);

document.addEventListener("keydown", dibujarTeclado);
var cuadro=document.getElementById("canvas");
var papel= cuadro.getContext("2d");
var x=0;
var y=0;
var colorcito="blue";
var movimiento=10;
var press=false;

function dibujar(color, xi,yi,xf,yf,lienzo){
  lienzo.beginPath();
  lienzo.strokeStyle=color;
  lienzo.moveTo(xi,yi);
  lienzo.lineTo(xf,yf);
  lienzo.stroke();
  lienzo.closePath();
}

function empezarADibujar(e){
  press=true;
  x=e.offsetX;
  y=e.offsetY;
}

function dibujando(e){
  if(press){
    dibujar(colorcito,x,y,e.offsetX, e.offsetY,papel);

  }
  x=e.offsetX;
  y=e.offsetY;
}

function dejarDeDibujar(){
  press=false;
}

function dibujarTeclado(evento) {
  switch (evento.keyCode) {
    case teclas.UP:
        dibujar(colorcito,x,y,x,y-movimiento,papel);
        y=y-movimiento;
      break;
    case teclas.DOWN:
        dibujar(colorcito,x,y,x,y+movimiento,papel);
        y=y+movimiento;
      break;
    case teclas.LEFT:
        dibujar(colorcito,x,y,x-movimiento,y,papel);
        x=x-movimiento;
      break;
    case teclas.RIGHT:
        dibujar(colorcito,x,y,x+movimiento,y,papel);
        x=x+movimiento;
      break;
    default:

  }
}
