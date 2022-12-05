  
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
  const customButton= document.querySelector('#custom-btn');
  const porcentagemCustom=document.querySelector('tip-custom');

  var tipsPerPerson = document.querySelector(".tip-amount-result");
  var totalPerPerson = document.querySelector(".total-result");

  customButton.addEventListener("input", function(){
    if(gorjeta.value == "" || quantidade.value == ""){
        totalPerPerson.innerHTML = "0";
        tipsPerPerson.innerHTML = "0";

    }else{
        var calculo = parseFloat(Number(customButton.value)/100 * Number(gorjeta.value));
        totalPerPerson.innerHTML =  "R$" + calculo.toFixed(2);
   
         var porPessoa = (Number(calculo) / Number(quantidade.value));
        tipsPerPerson.innerHTML = "R$" + porPessoa.toFixed(2) ;
    }  
  });
 

  
  
  function valorDaConta(){    
    var inputGorjeta = gorjeta.value;
    
    if (inputGorjeta >0){
        return inputGorjeta;
    }else
    return alert("O valor da conta não pode estar vazio");
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
    
    tipsPerPerson.innerHTML="R$" + valorGorjeta.toFixed(2);
    // console.log("Valor da Gorjeta " + valorGorjeta);
    
    
    totalPerPerson.innerHTML="R$" + totalPorPessoa.toFixed(2);
    return valorGorjeta;
};


function clearResults(){
    
    var resetButton = clearFields.addEventListener('click', function(){
        var resetGorjeta = gorjeta.value='';
        var resetQuantidade = quantidade.value='1';

    
        tipsPerPerson.innerHTML="R$ " + 0;

        
        totalPerPerson.innerHTML="R$ " + 0;
        
        
    });
    
};


