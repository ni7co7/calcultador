function calcularMetrosCuadrados(){
  
    const ancho = parseInt(document.getElementById("ancho").value);
    const largo = parseInt(document.getElementById("largo").value);


    const metrosCuadrados = ancho * largo;
    console.log(metrosCuadrados);
    const resultado = document.getElementById("resultado").innerHTML = metrosCuadrados + " metros cuadrados"


    const usuarios = [];
    const desarrollo = (document.getElementById("desarrollo").value);

    const input = document.querySelector("nombre");

    z
   
    
   

    switch (desarrollo){
        case "sketchUp":
        tiempo = 0.5;
        precio = 10 * tiempo;

        break;

        case "autoCad":
            tiempo = 1;
            precio = 15 * tiempo;
    
        break;

        case "render3d":
            tiempo = 2;
            precio = 20 * tiempo;
    
        break;


        

        default:
          document.getElementById("resultado").innerHTML="ingrese un programa de las 3 opciones"    
        return;

    }
    

    const tiempoTotal = tiempo * metrosCuadrados;
    const precioTotal = precio * metrosCuadrados;



    
    console.log(precioTotal)
    console.log(tiempoTotal)
    
    const resultado2 = document.getElementById("resultado2").innerHTML = "$ " + precioTotal
    const resultado3 = document.getElementById("resultado3").innerHTML =  tiempoTotal + " hora/s " 

    
}




// // Mostrar la lista de nombres al cargar la página






 














/* 

 const usuario = {
  nombre:"nombre: "+ nombre,
  m2: metrosCuadrados + "m²",
  tipoDesarrollo: desarrollo,
  precio: "$ " + precioTotal
};

usuarios.push(usuario);

document.getElementById("resultado").innerHTML = metrosCuadrados + " metros cuadrados";
document.getElementById("resultado2").innerHTML = "$ " + precioTotal + nombre;
document.getElementById("resultado3").innerHTML = tiempoTotal + " hora/s";


function mostrarUsuarios() {
const usuariosContainer = document.getElementById("usuariosContainer");
usuariosContainer.innerHTML = "";

usuarios.forEach(usuario => {
  const usuarioElement = document.createElement("div");
  usuarioElement.innerHTML = `
      <p>Nombre: ${usuario.nombre}</p>
      <p>Área: ${usuario.m2}</p>
      <p>Tipo de desarrollo: ${usuario.tipoDesarrollo}</p>
      <p>Precio: ${usuario.precio}</p>
      <hr>
  `;
  usuariosContainer.appendChild(usuarioElement);
});
}




 */








/* 
{const fragment = document.createDocumentFragment();
const li = fragment
  .appendChild(document.createElement("section"))
  .appendChild(document.createElement("ul"))
  .appendChild(document.createElement("li"));
li.outerHTML = "hola " +nombre ;
}

document.body.appendChild(fragment);


*/






/* if (nombre != null){
  
  localStorage.getElementById('myInput', prompt('your name'));
  
}

 */





