import { filterData, filterData2, /*filterData3, filterData4,*/ sortData, computeStats } from './dataFunctions.js';
import { renderItems } from './view.js';
import data from './data/dataset.js';

// Definimos los selectores
const selector = document.querySelector("#filtro1");
const selector2 = document.querySelector("#filtro2");
/*const selector3 = document.querySelector("#filtro3");
const selector4 = document.querySelector("#filtro4");*/
const selectSort = document.querySelector('[data-testid="select-sort"]');
const container = document.querySelector('#root');

let filteredData = [...data]; // Creamos una copia de los datos originales

function applyFilters() {
  // Obtenemos el valor seleccionado de cada selector
  const valorSeleccionado1 = selector.value;
  const valorSeleccionado2 = selector2.value;
  /*const valorSeleccionado3 = selector3.value;
  const valorSeleccionado4 = selector4.value;*/
  const valorSeleccionado5 = selectSort.value;

  // Aplicamos los filtros en el orden deseado y actualizamos los datos filtrados
  let currentData = [...data]; // Copia de los datos originales
  if (valorSeleccionado1 !== 'raza') {
    currentData = filterData(currentData, 'race', valorSeleccionado1);
  }
  if (valorSeleccionado2 !== 'Edad') {
    currentData = filterData2(currentData, 'age', valorSeleccionado2);
  }/*
  if (valorSeleccionado3 !== 'Estatura') {
    currentData = filterData3(currentData, 'height', valorSeleccionado3);
  }
  if (valorSeleccionado4 !== 'año') {
    currentData = filterData4(currentData, 'yearOfBirth', valorSeleccionado4);
  }*/
  if (valorSeleccionado5 !== 'orden') {
    currentData = sortData(currentData, 'name', valorSeleccionado5);
  }

  filteredData = currentData;
  renderFilteredItems();
}

// Eventos de cambio para los selectores
selector.addEventListener("change", (e)=>{
  applyFilters(e)
});
selector2.addEventListener("change", (e)=>{
  applyFilters(e)
});/*
selector3.addEventListener("change", (e)=>{
  applyFilters(e)
});
selector4.addEventListener("change", (e)=>{
  applyFilters(e)
});*/
selectSort.addEventListener("change", (e)=>{
  applyFilters(e)
});


// Función para mostrar un mensaje cuando no hay resultados
function mostrarEmptyState() {
  container.innerHTML = ''; // Limpiamos el contenedor
  const mensajeError = document.createElement('p');
  mensajeError.textContent = 'La Tierra Media aguarda, ningún personaje encontrado. Inténtalo nuevamente.';
  mensajeError.classList.add('empty-state');
  container.appendChild(mensajeError);
}

function renderFilteredItems() {
  container.innerHTML = ''; // Limpiamos el contenedor
  if (filteredData.length === 0) {
    return mostrarEmptyState();
  }
  const itemsList = renderItems(filteredData);
  container.appendChild(itemsList);
}

// Lógica para borrar filtros
document.querySelector('[data-testid="button-clear"]').addEventListener('click', function() {
  selector.value = 'raza';
  selector2.value = 'Edad';
  /*selector3.value = 'Estatura';
  selector4.value = 'año';*/
  selectSort.value = 'orden';
  filteredData = [...data]; // Restauramos los datos originales
  renderFilteredItems();
  
  // Limpiamos la información de mostrar promedio de edades
  document.querySelector('.conten-estadisticas').innerHTML = '';

});

// Renderizamos los elementos al cargar la página
renderFilteredItems();

// Lógica para la función calcular
document.querySelector('#mostrar').addEventListener('click', function() {
  document.querySelector('.conten-estadisticas').innerHTML = 'La edad promedio es: ' + computeStats(filteredData) + ' años';
  //console.log(computeStats(filteredData));
});

