function calcularMetrosCuadrados(){
    const ancho = parseInt(document.getElementById("ancho").value);
    const largo = parseInt(document.getElementById("largo").value);


    const metrosCuadrados = ancho * largo;
    console.log(metrosCuadrados);
    const resultado = document.getElementById("resultado").innerHTML = metrosCuadrados + " metros cuadrados"


    
    const desarrollo = (document.getElementById("desarrollo").value);
   

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

        default:(document.getElementById("resultado")).innerHTML="ingrese un programa de las 3 opciones"    
        return;

    }

    
    const tiempoTotal = tiempo * metrosCuadrados;
    const precioTotal = precio * metrosCuadrados;



    
    console.log(precioTotal)
    console.log(tiempoTotal)
    const resultado2 = document.getElementById("resultado2").innerHTML = "$ " + precioTotal
    const resultado3 = document.getElementById("resultado3").innerHTML =  tiempoTotal + " hora/s " 


    
}
const nombre = prompt("nombre", "");





alert("Hola " + nombre + " bienvenido");

localStorage.setItem(nombre, "")
console.log(nombre)
 



const input = document.querySelector("nombre");









const fragment = document.createDocumentFragment();
const li = fragment
  .appendChild(document.createElement("section"))
  .appendChild(document.createElement("ul"))
  .appendChild(document.createElement("li"));
li.outerHTML = "hola " +nombre ;

document.body.appendChild(fragment);













/* if (nombre != null){
  
  localStorage.getElementById('myInput', prompt('your name'));
  

}

   */






/* 
const siteId = 'MLA';
const categoryId = 'MLA168840';
const apiUrl = `https://api.mercadolibre.com/sites/${siteId}/search?category=${categoryId}`;

async function obtenerPreciosConstruccion() {
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();

    const preciosMateriales = data.results.map(item => {
      return {
        titulo: item.title,
        precio: item.price,
        moneda: item.currency_id,
      };
    });

    return preciosMateriales;
  } catch (error) {
    console.error('Error al obtener los precios:', error);
    return [];
  }
}

obtenerPreciosConstruccion()
  .then(precios => {
    console.log('Precios de materiales de construcción en MercadoLibre:', precios);
  });
 */