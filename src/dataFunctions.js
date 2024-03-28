// Estas funciones son ejemplos, aquí puedes desarrollar tus propias funciones.

//import dataset from "./data/dataset";

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
    
    return element.facts[filterBy] <= value 
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