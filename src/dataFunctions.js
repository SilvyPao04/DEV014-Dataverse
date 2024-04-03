// Estas funciones son ejemplos, aquí puedes desarrollar tus propias funciones.

//import dataset from "./data/dataset";

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
    } else if (value === 'Desconocida') {
      return element.facts[filterBy] === value;
    }
  });

  return resultadoFiltro3;
};


export const filterData4 = (data, filterBy, value) => {
  let resultadoFiltro4 = [];

  resultadoFiltro4 = data.filter((element) => {
    if(value.split(' ').length === 2){
      const año = value.split(' ');
      return  element.facts[filterBy] >= año[0] && element.facts[filterBy] <= año[1] 
    }if(value === '1000'){
      return element.facts[filterBy] <= value 
    }if(value === '1999'){
      return element.facts[filterBy] >= value && element.facts[filterBy] <= 2000
    }if(value === 'Desconocida'){
      return element.facts[filterBy] === value 
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
