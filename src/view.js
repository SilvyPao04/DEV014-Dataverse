export const renderItems = (data) => {
  
  // Crear un elemento <ul>
  const ulElement = document.createElement('ul');

  // Recorrer la data
  data.forEach(item => {
    // Crear un elemento <li> para cada item
    const liElement = document.createElement('li');

    // Asignar el contenido del item al <li>
    liElement.textContent = "jajaja";

    // Agregar el <li> al <ul>
    ulElement.appendChild(liElement);
  });

  // Retornar el elemento <ul>
  return ulElement;
};

