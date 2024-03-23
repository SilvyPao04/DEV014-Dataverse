export const renderItems = (data) => {
  
  // Crear un elemento <ul>
  
  const divElement = document.createElement('div');
  
  // Recorrer la data
  data.forEach(item => {
    // Crear un elemento <li> para cada item
    const liImg = document.createElement('img');
    const liElement = document.createElement('li');
    const liDescription = document.createElement('li')

    // Asignar el contenido del item al <li>
    liImg.src = item.imageUrl;
    liElement.textContent = item.name;
    liDescription.textContent = item.shortDescription;

    // Agregar el <li> al <ul>
    divElement.appendChild(liImg);
    divElement.appendChild(liElement);
    divElement.appendChild(liDescription);
  });

  // Retornar el elemento <ul>
  return divElement;
};



