import { example } from './dataFunctions.js';
import { renderItems } from './view.js';
import data from './data/dataset.js';

console.log(example, renderItems(data), data);

const itemsList = renderItems(data); // creamos una constante para guardar los datos en una lista e invocar sólo una 1 vez renderItems para no duplicar datos


//const fotos = document.getElementById('fotos');
const container = document.getElementById('container');
//const description = document.getElementById('descripcion');


//fotos.appendChild(itemsList.cloneNode(true)); 
container.appendChild(itemsList.cloneNode(true));
//description.appendChild(itemsList.cloneNode(true));


