import { example } from './dataFunctions.js';
import { renderItems } from './view.js';
import data from './data/dataset.js';

console.log(example, renderItems(data), data);





const container = document.getElementById('lista-de-datos');
container.append(renderItems(data))
// Recorrer la data y mostrar los elementos uno por uno
// Iterar sobre los datos y agregar elementos <li> al <ul>
