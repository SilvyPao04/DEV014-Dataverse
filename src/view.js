export const renderItems = (data) => {
  // Crear un elemento <ul>
  const ulElement = document.createElement('ul');
  
  // Recorrer la data
  data.forEach(item => {
    // Crear un elemento <li> para cada item
    const liElement = document.createElement('li');
    const liImg = document.createElement('img');
    const liName = document.createElement('h3'); // h3 para el nombre
    const liShortDescription = document.createElement('p'); // Para la descripción corta
    const liDetails = document.createElement('p'); // Para la información de raza, edad, estatura, año de nacimiento.

    // Asignar la clase item al <li>
    liElement.classList.add("item");

    // Asignar el contenido del item a los elementos correspondientes
    liImg.src = item.imageUrl;
    liName.textContent = item.name;
    liShortDescription.textContent = item.shortDescription;
    const combinedDetails = `Raza: ${item.facts.race}<br>Edad: ${item.facts.age}<br>Estatura: ${item.facts.height}<br>Año de nacimiento: ${item.facts.yearOfBirth}`;
    liDetails.innerHTML = combinedDetails;

    // Asignar el atributo itemtype a los elementos <li>
    liElement.setAttribute("itemtype", "actors");
    liElement.setAttribute("itemscope","")
    
    // Agregar los elementos al <li> en el orden deseado
    liElement.appendChild(liName); // Nombre arriba
    liElement.appendChild(liShortDescription); // Descripción corta arriba
    liElement.appendChild(liImg); // Imagen en medio
    liElement.appendChild(liDetails); // Información abajo

    // Agregar el <li> al <ul>
    ulElement.appendChild(liElement);
  });

  // Retornar el elemento <ul>
  return ulElement;
};