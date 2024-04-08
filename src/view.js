export const renderItems = (data) => {
  // Crear un elemento <ul>
  const ulElement = document.createElement('ul');
  
  // Recorrer la data
  data.forEach(item => {
    // Crear un elemento <li> para cada item
    const liElement = document.createElement('li');
    const liImg = document.createElement('img');
    const liDescription = document.createElement('p');

    //Asignar la clase item al <li>
    liElement.classList.add("item");
    

    // Asignar el contenido del item al <li>
    liImg.src = item.imageUrl;
    liElement.textContent = item.name;
    liDescription.textContent = item.shortDescription;

    // Asignar el atributo itemtype a los elementos <li>
    liElement.setAttribute("itemtype", "actors");
    liElement.setAttribute("itemscope","")
    
    // Agregar la imagen y la descripción como hijos de <li>
    liElement.appendChild(liImg);
    liElement.appendChild(liDescription);

    // Agregar el <li> al <ul>
    ulElement.appendChild(liElement);
  });


  // Retornar el elemento <ul>
  return ulElement;
};



