const formulario = document.getElementById("btn");
formulario.addEventListener("click",insertar);

function insertar()
{
    const nombre = String(document.getElementById("nombre").value);
    const resultado = document.getElementById("resultado");

    resultado.innerText= "Hola!!, Bienvenid@:  " + nombre;
}