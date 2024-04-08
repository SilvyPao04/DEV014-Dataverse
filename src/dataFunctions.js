//import dataset from "./data/dataset";

export const filterData = (data, filterBy, value) => {
  let  resultadoFiltro = []
  resultadoFiltro = data.filter((element)=>{
    
    return element.facts[filterBy] === value
  })

  return resultadoFiltro
}

export const filterData2 = (data, filterBy, sortBy) => {
  let  resultadoFiltro2 = []
  resultadoFiltro2 = data.filter((element)=>{

    if(sortBy.split(' ').length === 2){
      const edad = sortBy.split(' ');
      return  element.facts[filterBy] >= edad[0] && element.facts[filterBy] <= edad[1] 
    }if(sortBy === '100'){
      return element.facts[filterBy] <= sortBy 
    }if(sortBy === '2000'){
      return element.facts[filterBy] >= sortBy && element.facts[filterBy] <= 4000
    }if(sortBy === 'Desconocida'){
      return element.facts[filterBy] === sortBy 
    }
  })

  return resultadoFiltro2
}

// Restablecer los valores predeterminados de los selectores
document.getElementById('limpiar').addEventListener('click', function() {
  
  document.getElementById('filtro1').selectedIndex = 0;
  document.getElementById('filtro2').selectedIndex = 0;
  document.getElementById('filtro3').selectedIndex = 0;
  document.getElementById('filtro4').selectedIndex = 0;
});