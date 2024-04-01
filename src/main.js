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
  // Filtra los datos según el valor seleccionado raza

  
  // Elimina los elementos anteriores del contenedor
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }
  // Renderiza los elementos filtrados en el contenedor
  const itemsFiltradoraza = renderItems(datosFiltrados);
  container.appendChild(itemsFiltradoraza);

});


// Agrega un evento de cambio al elemento <select>
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


