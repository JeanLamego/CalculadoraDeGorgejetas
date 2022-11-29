// function valorDaConta(){
//     document.getElementById("bill").value;
//     console.log(bill);
// }

function calcularGorjeta(){
    var gorjeta = document.getElementById("bill").value;
        
    alert("valor da conta" + gorjeta);
}

function numberOfPeople(){
    var quantidade= document.getElementById("number-of-people").value;
    if (quantidade>0){
        alert(quantidade);
    }else{
        alert("A quantidade de pessoas não pode ser menor que 1");
    }
}