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

  if (typeof value === 'string' && value.split(' ').length === 2) {
    const años = value.split(' ');
    resultadoFiltro4 = data.filter(element =>
      element.facts[filterBy] >= parseInt(años[0], 10) && element.facts[filterBy] <= parseInt(años[1], 10)
    );
  } else if (value === '999') {
    resultadoFiltro4 = data.filter(element => element.facts[filterBy] < 1000);
  } else if (value === '1000 1999') {
    resultadoFiltro4 = data.filter(element => element.facts[filterBy] >= 1000 && element.facts[filterBy] <= 1999);
  } else if (value === '2000 2899') {
    resultadoFiltro4 = data.filter(element => element.facts[filterBy] >= 2000 && element.facts[filterBy] <= 2899);
  } else if (value === '2900 2999') {
    resultadoFiltro4 = data.filter(element => element.facts[filterBy] >= 2900 && element.facts[filterBy] <= 2999);
  } else if (value === 'Desconocida') {
    resultadoFiltro4 = data.filter(element => element.facts[filterBy] === 'Desconocida' || element.facts[filterBy] === 'Desconocido');
  }

  return resultadoFiltro4;
};




//Lógica para la función "Ordenar"
// Función para filtrar y ordenar datos de acuerdo al criterio especificado.
export const sortData = (data, sortBy, sortOrder) => {
  return data.sort((a, b) => {
    if (sortOrder === 'asc') {
      return a[sortBy] > b[sortBy] ? 1 : -1;
    } else if (sortOrder === 'desc') {
      return a[sortBy] < b[sortBy] ? 1 : -1;
    } else {
      return 0;
    }
  });
};

//Lógica para la función calcular
export const computeStats = (data) => {

  const personasConEdadConocida = data.filter(persona => typeof persona.facts.age === 'number');

  if (personasConEdadConocida.length === 0) return 0;

  const edades = personasConEdadConocida.map(persona => persona.facts.age);

  const totalEdad = edades.reduce((acumulador, edad) => {
    return acumulador + edad;
  }, 0);

  return Math.floor(totalEdad / personasConEdadConocida.length);
}