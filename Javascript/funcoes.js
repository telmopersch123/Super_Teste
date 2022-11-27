
// bilioteca de JQuery está no html (qualsupersoldado)

//                            |
//Javascript externo simples  V

 function clique(){
   
   var valor = document.querySelector('input.escolha').value;

   switch (valor){
        case valor = 'Capitão América': window.location.href = 'Capitão.html';
        break
        case valor = 'Soldado Invernal': window.location.href = 'invernal.html';
        break
        case valor = 'Caveira Vermelha': window.location.href = 'caveira.html';
        break
        case valor = 'Agente Americano': window.location.href = 'agente.html';
        break
        case valor = 'Isaiah Bredley': window.location.href = 'bredley.html';
        break
        case valor = 'Guardião Vermelho': window.location.href = 'guardiaored.html';
        break
        default: window.location.href = 'error.html';
        break
   }
 }
  

