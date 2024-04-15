import { filterData, filterData2, filterData3, filterData4, sortData, computeStats } from './dataFunctions.js';
import { renderItems } from './view.js';
import data from './data/dataset.js';

// Definimos los selectores
const selector = document.querySelector("#filtro1");
const selector2 = document.querySelector("#filtro2");
const selector3 = document.querySelector("#filtro3");
const selector4 = document.querySelector("#filtro4");
const selector5 = document.querySelector("#filtro5");

const container = document.querySelector('#root');
let filteredData = [...data]; // Creamos una copia de los datos originales

function applyFilters(event) {
  let currentData = [...data]; // Copia de los datos originales

  // Obtenemos el valor seleccionado del selector que desencadenó el evento
  const valorSeleccionado = event.target.value;
  
  // Lógica para aplicar los filtros según el selector que desencadenó el evento
  if (event.target === selector && valorSeleccionado !== 'raza') {
    currentData = filterData(currentData, 'race', valorSeleccionado);
  } else if (event.target === selector2 && valorSeleccionado !== 'Edad') {
    currentData = filterData2(currentData, 'age', valorSeleccionado);
  } else if (event.target === selector3 && valorSeleccionado !== 'Estatura') {
    currentData = filterData3(currentData, 'height', valorSeleccionado);
  } else if (event.target === selector4 && valorSeleccionado !== 'año') {
    currentData = filterData4(currentData, 'yearOfBirth', valorSeleccionado);
  } else if (event.target === selector5 && valorSeleccionado !== 'orden') {
    currentData = sortData(currentData, 'name', valorSeleccionado);
  }

  // Actualizamos los datos filtrados
  filteredData = currentData;
  renderFilteredItems();
}

// Función para "Empty State": para tener un mensaje que explique a la usuaria que no se encontraron resultados en su búsqueda
function mostrarEmptyState() {
  const mensajeError = document.createElement('p');
  mensajeError.textContent = 'La Tierra Media aguada, ningún personaje encontrado. Inténtalo nuevamente.';
  mensajeError.classList.add('empty-state');
  container.appendChild(mensajeError);
}

function renderFilteredItems() {
  container.innerHTML = ''; // Limpiamos el contenedor
  const itemsList = renderItems(filteredData); // Renderizamos los elementos filtrados

  if (filteredData.length === 0) {
    return mostrarEmptyState();
  } else {
    container.appendChild(itemsList);
  }
}

// Eventos de cambio para los selectores
selector.addEventListener("change", (event)=>{
  let currentData = [...data]; // Copia de los datos originales

  // Obtenemos el valor seleccionado del selector que desencadenó el evento
  const valorSeleccionado = event.target.value;
  
  // Lógica para aplicar los filtros según el selector que desencadenó el evento
  if (event.target === selector && valorSeleccionado !== 'raza') {
    currentData = filterData(currentData, 'race', valorSeleccionado);
  } else if (event.target === selector2 && valorSeleccionado !== 'Edad') {
    currentData = filterData2(currentData, 'age', valorSeleccionado);
  } else if (event.target === selector3 && valorSeleccionado !== 'Estatura') {
    currentData = filterData3(currentData, 'height', valorSeleccionado);
  } else if (event.target === selector4 && valorSeleccionado !== 'año') {
    currentData = filterData4(currentData, 'yearOfBirth', valorSeleccionado);
  } else if (event.target === selector5 && valorSeleccionado !== 'orden') {
    currentData = sortData(currentData, 'name', valorSeleccionado);
  }

  // Actualizamos los datos filtrados
  filteredData = currentData;
  renderFilteredItems();
});
selector2.addEventListener("change", applyFilters);
selector3.addEventListener("change", applyFilters);
selector4.addEventListener("change", applyFilters);
selector5.addEventListener("change", applyFilters);

// Lógica para borrar filtros
document.querySelector('#limpiar').addEventListener('click', function() {
  selector.selectedIndex = 0;
  selector2.selectedIndex = 0;
  selector3.selectedIndex = 0;
  selector4.selectedIndex = 0;
  selector5.selectedIndex = 0;
  filteredData = [...data]; // Restauramos los datos originales
  renderFilteredItems();
});

// Renderizamos los elementos al cargar la página
renderFilteredItems();

//Lógica para la función calcular
document.querySelector('#mostrar').addEventListener('click', function(e) {
  e.preventDefault()
  document.querySelector('.conten-estadisticas').innerHTML = 'La edad promedio es: '+ computeStats(data)+ ' años'

  console.log(computeStats(data));

});
