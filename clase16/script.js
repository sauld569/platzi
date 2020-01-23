var texto=document.getElementById("cajaEdad");
var boton=document.getElementById("botonEnviar");

boton.addEventListener("click",calcularEdad);


function calcularEdad(){

document.write("Tu edad es: "+(2020-parseInt(texto.value)));
}
