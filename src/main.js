import { example } from './dataFunctions.js';
import { renderItems } from './view.js';
import data from './data/dataset.js';
console.log(example, renderItems(data), data);
const itemsList = renderItems(data); // creamos una constante para guardar los datos en una lista e invocar sólo una 1 vez renderItems para no duplicar datos
// tiene que ser un sólo contenedor para todos los 24 elementos para no duplicarlos
const container = document.querySelector('#root');
container.appendChild(itemsList.cloneNode(true));

