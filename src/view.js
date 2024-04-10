export const renderItems = (data) => {
  // Crear un elemento <ul> para contener la lista de elementos
  const ulElement = document.createElement('ul');
  
  // Recorrer el arreglo de datos
  data.forEach(item => {
    // Para cada elemento en el arreglo, creamos un elemento <li> para representarlo
    const liElement = document.createElement('li'); // Crear un elemento <li>
    const liImg = document.createElement('img'); // Crear un elemento <img> para la imagen
    const liName = document.createElement('h3'); // Crear un elemento <h3> para el nombre
    const liShortDescription = document.createElement('p'); // Crear un elemento <p> para la descripción corta
    const liDetails = document.createElement('p'); // Crear un elemento <p> para la información detallada
    
    // Asignar la clase "item" al <li>
    liElement.classList.add("item");

    // Asignar el contenido del elemento actual a los elementos creados
    liImg.src = item.imageUrl; // Establecer la fuente de la imagen
    liName.textContent = item.name; // Establecer el nombre del personaje
    liShortDescription.textContent = item.shortDescription; // Establecer la descripción corta del personaje

    // Crear una cadena combinada para la información detallada del personaje
    const combinedDetails = `Raza: ${item.facts.race}<br>Edad: ${item.facts.age}<br>Estatura: ${item.facts.height}<br>Año de nacimiento: ${item.facts.yearOfBirth}`;
    
    // Establecer el HTML interno del elemento de detalles con la cadena combinada
    liDetails.innerHTML = combinedDetails;

    // Asignar los atributos "itemtype" e "itemscope" a los elementos <li>
    liElement.setAttribute("itemtype", "actors");
    liElement.setAttribute("itemscope","")
    
    // Agregar los elementos en el orden deseado al <li>
    liElement.appendChild(liName); // Agregar el nombre
    liElement.appendChild(liShortDescription); // Agregar la descripción corta
    liElement.appendChild(liImg); // Agregar la imagen
    liElement.appendChild(liDetails); // Agregar los detalles
    
    // Agregar el elemento <li> al elemento <ul>
    ulElement.appendChild(liElement);
  });

  // Retornar el elemento <ul> completo con todos los elementos <li> generados
  return ulElement;
};
