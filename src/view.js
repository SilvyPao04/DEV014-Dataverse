export const renderItems = (data) => {
  // Crear un elemento <ul>
  const ulElement = document.createElement('ul');
  
  // Recorrer la data
  data.forEach(item => {
    // Crear un elemento <li> para cada item
    const liElement = document.createElement('li');
    const liImg = document.createElement('img');
    const liDescription = document.createElement('li');

    // Asignar el contenido del item al <li>
    liImg.src = item.imageUrl;
    liElement.textContent = item.name;
    liDescription.textContent = item.shortDescription;

    // Agregar el atributo itemtype al <li>
    liElement.setAttribute('itemtype');

    // Agregar el <img> y los <li> al <li> principal
    liElement.appendChild(liImg);
    liElement.appendChild(liDescription);

    // Agregar el <li> al <ul>
    ulElement.appendChild(liElement);
  });

  // Retornar el elemento <ul>
  return ulElement;
};



