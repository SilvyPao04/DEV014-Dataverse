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

function applyFilters() {
  let currentData = [...data]; // Copia de los datos originales

  // Aplicamos los filtros secuenciales
  const valorSeleccionado = selector.value;
  if (valorSeleccionado !== 'raza') {
    currentData = filterData(currentData, 'race', valorSeleccionado);
  }

  const valorSeleccionado2 = selector2.value;
  if (valorSeleccionado2 !== 'Edad') {
    currentData = filterData2(currentData, 'age', valorSeleccionado2);
  }

  const valorSeleccionado3 = selector3.value;
  if (valorSeleccionado3 !== 'Estatura') {
    currentData = filterData3(currentData, 'height', valorSeleccionado3);
  }

  const valorSeleccionado4 = selector4.value;
  if (valorSeleccionado4 !== 'año') {
    currentData = filterData4(currentData, 'yearOfBirth', valorSeleccionado4);
  }

  const valorSeleccionado5 = selector5.value;
  if (valorSeleccionado5 !== 'orden') {
    currentData = sortData(currentData, 'name', valorSeleccionado5);
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
selector.addEventListener("change", applyFilters);
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

document.querySelector('#mostrar').addEventListener('click', function() {

  document.querySelector('.conten-estadisticas').innerHTML = 'La edad promedio es:'+ computeStats(data)

  console.log(computeStats(data));

});