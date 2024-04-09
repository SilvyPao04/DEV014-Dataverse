// Lógica para la función "Filtrar"
export const filterData = (data, filterBy, value) => {
  let  resultadoFiltro = []
  resultadoFiltro = data.filter((element)=>{
    return element.facts[filterBy] === value
  })

  return resultadoFiltro
}

export const filterData2 = (data, filterBy, value) => {
  let  resultadoFiltro2 = []
  resultadoFiltro2 = data.filter((element)=>{

    if(value.split(' ').length === 2){
      const edad = value.split(' ');
      return  element.facts[filterBy] >= edad[0] && element.facts[filterBy] <= edad[1] 
    }if(value === '100'){
      return element.facts[filterBy] <= value 
    }if(value === '2000'){
      return element.facts[filterBy] >= value && element.facts[filterBy] <= 4000
    }if(value === 'Desconocida'){
      return element.facts[filterBy] === value 
    }
  })

  return resultadoFiltro2
}

export const filterData3 = (data, filterBy, value) => {
  let resultadoFiltro3 = [];

  resultadoFiltro3 = data.filter((element) => {
    if (value.split(' ').length === 2) {
      const estatura = value.split(' ');
      return parseFloat(element.facts[filterBy]) >= parseFloat(estatura[0]) && parseFloat(element.facts[filterBy]) <= parseFloat(estatura[1]);
    } else if (value === '1.5') {
      return parseFloat(element.facts[filterBy]) < 1.5;
    } else if (value === '1.5 1.9') {
      const estatura = value.split(' ');
      return parseFloat(element.facts[filterBy]) >= parseFloat(estatura[0]) && parseFloat(element.facts[filterBy]) <= parseFloat(estatura[1]);
    } else if (value === '2') {
      return parseFloat(element.facts[filterBy]) >= 2;
    } else if (value === 'Variable') {
      return element.facts[filterBy] === 'Variable';
    } 
  });

  return resultadoFiltro3;
};

export const filterData4 = (data, filterBy, value) => {
  let resultadoFiltro4 = [];

  resultadoFiltro4 = data.filter((element) => {
    if (value.split(' ').length === 2) {
      const año = value.split(' ');
      return element.facts[filterBy] >= año[0] && element.facts[filterBy] <= año[1];
    } else if (value === '999') {
      return element.facts[filterBy] < 1000; // Filtra antes de 1000
    } else if (value === '1000 1999') {
      return element.facts[filterBy] >= 1000 && element.facts[filterBy] <= 1999; // Filtra entre 1000 y 1999
    } else if (value === '2000 2899') {
      return element.facts[filterBy] >= 2000 && element.facts[filterBy] <= 2899; // Filtra entre 2000 y 2899
    } else if (value === '2900 2999') {
      return element.facts[filterBy] >= 2900 && element.facts[filterBy] <= 2999; // Filtra entre 2900 y 2999
    } else if (value === 'Desconocida') {
      return element.facts[filterBy] === 'Desconocida' || element.facts[filterBy] === 'Desconocido'; // Considera ambas representaciones
    }
  });

  return resultadoFiltro4;
};


//Lógica para la función "Ordenar"
// Función para filtrar y ordenar datos de acuerdo al criterio especificado.
export const sortData = (data, sortBy, sortOrder) => {
  
  // Verificar el tipo de orden especificado
  if (sortOrder === 'asc') {
    
    // Ordenar los datos de acuerdo a la propiedad especificada
    return data.sort((a, b) => {
      if (a[sortBy] < b[sortBy]) { // Compara las propiedades de los objetos 'a' y 'b'
        return -1; // Retorna -1 si 'a' debe estar antes que 'b'
      }
      if (a[sortBy] > b[sortBy]) { // Compara las propiedades de los objetos 'a' y 'b'
        return 1; // Retorna 1 si 'a' debe estar después que 'b'
      }
      return 0; // Retorna 0 si los elementos son iguales
    });
  }
  
  // Si es orden descendente (Z - A)
  
  // Ordenar los datos de acuerdo a la propiedad especificada y luego revertir el orden
  return data.sort((a, b) => {
    if (a[sortBy] < b[sortBy]) { // Compara las propiedades de los objetos 'a' y 'b'
      return -1; // Retorna -1 si 'a' debe estar antes que 'b'
    }
    if (a[sortBy] > b[sortBy]) { // Compara las propiedades de los objetos 'a' y 'b'
      return 1; // Retorna 1 si 'a' debe estar después que 'b'
    }
    return 0; // Retorna 0 si los elementos son iguales
  }).reverse(); // Invierte el orden del arreglo resultante
}




export const computeStats = (data) => {
  
  const personasConEdadConocida = data.filter(persona => typeof persona.facts.age === 'number');

    if (personasConEdadConocida.length === 0) return 0;

    const totalEdad = personasConEdadConocida.reduce((acumulador, persona) => {
        return acumulador + persona.facts.age;
    }, 0);

    return Math.floor(totalEdad / personasConEdadConocida.length);
}

