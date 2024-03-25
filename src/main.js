import { example } from './dataFunctions.js';
import { renderItems } from './view.js';
import data from './data/dataset.js';

console.log(example, renderItems(data), data);

const container = document.getElementById('lista-de-datos');

container.append(renderItems(data))