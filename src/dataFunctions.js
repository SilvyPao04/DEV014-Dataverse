//import dataset from "./data/dataset";

export const filterData = (data, filterBy, sortBy) => {
  let  resultadoFiltro = []
  resultadoFiltro = data.filter((element)=>{
    
    return element.facts[filterBy] === sortBy
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

//funcion para filtra de forma ASD Y DS
export const sortData = (data, sortBy,sortOrder) => {
  
  if(sortOrder === 'A - Z'){
    return data.sort((a, b) => {
      if (a[sortBy] < b[sortBy]) {
        return -1;
      }
      if (a[sortBy] > b[sortBy]) {
        return 1;
      }
      return 0;
    })
  }
  return data.sort((a, b) => {
    if (a[sortBy] < b[sortBy]) {
      return -1;
    }
    if (a[sortBy] > b[sortBy]) {
      return 1;
    }
    return 0;
  }).reverse()
}
 