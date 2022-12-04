  
  // function valorDaConta(){
  //     const gorjeta = document.getElementById("bill").value;
  //     if (gorjeta>0){
  //         alert(gorjeta);
  //     }else{
  //         alert("Você precisar por um valor maior que Zero")
  //     }
  //     console.log(gorjeta);
  //     // return gorjeta;
  // };
  
  // function numberOfPeople(){
  //     const quantidade = document.getElementById("number-of-people").value;
  //     if (quantidade>0){
  //         alert(quantidade);
  //     }else{
  //         alert("A quantidade de pessoas não pode ser menor que 1");
  //     }
  // };
  
  const gorjeta = document.getElementById("bill");
  const quantidade = document.getElementById("number-of-people");
  const clearFields= document.querySelector('#reset-button');
  const error= document.querySelector('.error');
  
  
  function valorDaConta(){    
    var inputGorjeta = gorjeta.value;
    
    if (inputGorjeta >0){
        return inputGorjeta;
    }else
    return alert("erro");
};
function numberOfPeople(){
    var inputQuantidade = quantidade.value;
    
    if(inputQuantidade<1){
        quantidade.style.border= "thick solid red";
        error.style.display="flex";
    
    }else{
        quantidade.style.border= "none";
        error.style.display="none";
        return inputQuantidade;
    }
    
    
};

function calcularGorjeta(porcentagem){
    // console.log("Valor da Conta " + valorDaConta());
    // console.log("Quantidade de Pessoas " + numberOfPeople());
    let valorGorjeta = valorDaConta() * (Number(porcentagem)/100) / numberOfPeople();
    let totalPorPessoa = valorDaConta()/ numberOfPeople();
    var tipsPerPerson = document.querySelector(".tip-amount-result");
    tipsPerPerson.innerHTML="R$" + valorGorjeta.toFixed(2);
    // console.log("Valor da Gorjeta " + valorGorjeta);
    
    var totalPerPerson = document.querySelector(".total-result");
    totalPerPerson.innerHTML="R$" + totalPorPessoa.toFixed(2);
    return valorGorjeta;
};

function clearResults(){
    
    var resetButton = clearFields.addEventListener('click', function(){
        var resetGorjeta = gorjeta.value='';
        var resetQuantidade = quantidade.value='1';
        var tipsPerPerson = document.querySelector(".tip-amount-result");
        tipsPerPerson.innerHTML="R$ " + 0;
        var totalPerPerson = document.querySelector(".total-result");
        totalPerPerson.innerHTML="R$ " + 0;
        
        
    });
    
};


