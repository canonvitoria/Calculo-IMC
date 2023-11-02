function calcular() {
    let peso = document.querySelector('#ipeso').value;
    let altura = document.querySelector('#ialtura').value;

    const imc = peso / (altura * altura);
    
    document.querySelector('.resultado').textContent = imc.toFixed(2)
}

function substitui(altura, peso){
    return altura.replace(/,/g,".");
    return peso.replace(/,/g,".");
}

function limpar(){
    let resultado = document.querySelector('.resultado');

    resultado.innerHTML = ' ';
}

// Rolagem da página após o clique 

document.querySelectorAll('a[href^="#secao-destino"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
  
      const targetId = this.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);
  
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth',
        });
      }
    });
  });