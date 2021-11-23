function Converter(){
    
    var valorElemento = document.getElementById("valor");
    var valor = valorElemento.value;
    var valorEmDolar = parseFloat(valor);

    // converter o valor dolar em Real
    var valorEmReal = valorEmDolar * 5;
    console.log(valorEmReal);

    var elementoValorConvertido = document.getElementById("valorConvertido");
    var valorConvertido = "O Resultado em Real é R$ " + valorEmReal;
    elementoValorConvertido.innerHTML = valorConvertido;

}

function Converter2() {
    var valorElemento = document.getElementById("valor");
    var valor = valorElemento.value;
    var valorEmDolar = parseFloat(valor);

    // converter o valor dolar em Bitcoin
    var valorEmBitcoin = valorEmDolar * 0.000024;
    console.log(valorEmBitcoin);
  
    var elementoValorConvertidoBitcoin = document.getElementById("valorConvertidoBitcoin");
    var valorConvertidoBitcoin = "O Resultado em Bitcoin é " + valorEmBitcoin;
    elementoValorConvertidoBitcoin.innerHTML = valorConvertidoBitcoin;
  }
  
