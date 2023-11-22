
function agregarProblemas() {
    
    let numero = document.getElementById('numero').value;
    let problema = document.getElementById('problema').value;
  
   
    let problemaspc = [problema];
  
    
    mostrarResultados(numero, problema);
  
    
    document.getElementById('numero').value = '';
    document.getElementById('problema').value = '';
  }
  

  function mostrarResultados(numero, problema) {
    
    let listaResultados = document.getElementById('resultados');
  
    
    let nuevoElemento = document.createElement('li');
  
    
    nuevoElemento.textContent = `Numero de Computadora: ${numero}, Problema: ${problema}`;
  
    
    listaResultados.appendChild(nuevoElemento);
  }
  
  
  