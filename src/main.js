import { filterData} from './dataFunctions.js';
import { filterData2} from './dataFunctions.js';
import { renderItems } from './view.js';
import data from './data/dataset.js';

const itemsList = renderItems(data); // creamos una constante para guardar los datos en una lista e invocar sólo una 1 vez renderItems para no duplicar datos
// tiene que ser un sólo contenedor para todos los 24 elementos para no duplicarlos
const container = document.querySelector('#root');
container.appendChild(itemsList.cloneNode(true));

// Selecciona el elemento <select> por su ID
const selector = document.getElementById("filtro1");
const selector2 = document.getElementById("filtro2");

// Agrega un evento de cambio al elemento <select>
selector.addEventListener("change", function() {
  // Captura el valor seleccionado
  const valorSeleccionado = selector.value;

  // Filtra los datos según el valor seleccionado raza
  const datosFiltrados = filterData(data, 'race', valorSeleccionado);
  
  // Elimina los elementos anteriores del contenedor
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }

  // Renderiza los elementos filtrados en el contenedor
  const itemsFiltradoraza = renderItems(datosFiltrados);
  container.appendChild(itemsFiltradoraza);

});


// Agrega un evento de cambio al elemento <select> - para el segundo filtro de "Age"
selector2.addEventListener("change", function() {
    // Captura el valor seleccionado
   
      const valorSeleccionado2 = selector2.value;

      // Filtra los datos según el valor seleccionado edad
      const datosFiltrados2 = filterData2(data, 'age', valorSeleccionado2);
    
      console.log( filterData2(data, 'age', valorSeleccionado2))
      // Elimina los elementos anteriores del contenedor
      while (container.firstChild) {
        container.removeChild(container.firstChild);
      }
    
  // Renderiza los elementos filtrados en el contenedor
  const itemsFiltradoedad = renderItems(datosFiltrados2);
  container.appendChild(itemsFiltradoedad);
    
});

// Agrega un evento de cambio al elemento <select>
selector5.addEventListener("change", function() {
  // Captura el valor seleccionado
   
  const valorSeleccionado5 = selector5.value;

  // Filtra los datos según el valor seleccionado edad
  const datosFiltrados2 = sortData(data,'name', valorSeleccionado5);
    
  console.log( sortData(data,'name', valorSeleccionado5))
  // Elimina los elementos anteriores del contenedor
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }
    
  // Renderiza los elementos filtrados en el contenedor
  const itemsFiltradoedad = renderItems(datosFiltrados2);
  container.appendChild(itemsFiltradoedad);
    
});


// Restablecer los valores predeterminados de los selectores
document.getElementById('limpiar').addEventListener('click', function() {
  
  document.getElementById('filtro1').selectedIndex = 0;
  document.getElementById('filtro2').selectedIndex = 0;
  document.getElementById('filtro3').selectedIndex = 0;
  document.getElementById('filtro4').selectedIndex = 0;
  document.getElementById('filtro5').selectedIndex = 0;
  container.innerHTML="";
  container.appendChild(itemsList.cloneNode(true));
});


// Agrega un evento de cambio al elemento <select> - para el segundo filtro de "Height"
selector3.addEventListener("change", function() {
  // Captura el valor seleccionado
  const valorSeleccionado3 = selector3.value;

  // Filtra los datos según el valor seleccionado edad
  const datosFiltrados3 = filterData3(data, 'height', valorSeleccionado3);

  // Elimina los elementos anteriores del contenedor
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }
    
  // Renderiza los elementos filtrados en el contenedor
  const itemsFiltradoestatura = renderItems(datosFiltrados3);
  container.appendChild(itemsFiltradoestatura);
    
});


// Agrega un evento de cambio al elemento <select> - para el segundo filtro de "Year of Birth"
selector4.addEventListener("change", function() {
  // Captura el valor seleccionado
  const valorSeleccionado4 = selector4.value;

  // Filtra los datos según el valor seleccionado edad
  const datosFiltrados4 = filterData4(data, 'yearOfBirth', valorSeleccionado4);

  // Elimina los elementos anteriores del contenedor
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }
    
  // Renderiza los elementos filtrados en el contenedor
  const itemsFiltradoaño = renderItems(datosFiltrados4);
  container.appendChild(itemsFiltradoaño);
    
});


// Lógica para la función "Ordenar"
// Agrega un evento de cambio al elemento <select> - para la función "Ordenar"
selector5.addEventListener("change", function() {
// Captura el valor seleccionado
  const valorSeleccionado5 = selector5.value;

  //Llama a la función para ordenar los datos
  const datosOrdenados = sortData(data,'name', valorSeleccionado5);

  // Elimina los elementos anteriores del contenedor
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }
  // Renderiza los elementos filtrados en el contenedor
  container.appendChild(renderItems(datosOrdenados));

});


//Lógica para la función "Borrar filtros"
// Guarda una copia de los datos originales
const originalData = [...data];

// Función para restablecer los valores predeterminados de los selectores y los elementos filtrados
document.querySelector('#limpiar').addEventListener('click', function() {
  // Restablecer los valores predeterminados de los selectores
  document.querySelector('#filtro1').selectedIndex = 0;
  document.querySelector('#filtro2').selectedIndex = 0;
  document.querySelector('#filtro3').selectedIndex = 0;
  document.querySelector('#filtro4').selectedIndex = 0;
  document.querySelector('#filtro5').selectedIndex = 0;

  // Renderiza los elementos con los datos originales
  const itemsList = renderItems(originalData);
  
  // Elimina los elementos anteriores del contenedor
  container.innerHTML = '';
  
  // Agregar los nuevos elementos al contenedor
  container.appendChild(itemsList);
});
