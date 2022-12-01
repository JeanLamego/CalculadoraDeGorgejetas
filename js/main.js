// function valorDaConta(){
//     document.getElementById("bill").value;
//     console.log(bill);
// }








const valorDaConta = function (){
    var gorjeta = document.getElementById("bill").value;
    if (gorjeta>0){
        alert(gorjeta);
    }else{
        alert("Você precisar por um valor maior que Zero")
    }
    // return gorjeta;
   
};

numberOfPeople = function (){
    var quantidade = document.getElementById("number-of-people").value;
    if (quantidade>0){
        alert(quantidade);
    }else{
        alert("A quantidade de pessoas não pode ser menor que 1");
    }
};

    function calcularGorjeta(){
    var calcular= numberOfPeople(quantidade)*valorDaConta(gorjeta);
    
 console.log(calcular);
    }
