// switch

var op = Number(prompt("Selecione uma opcões :  " 
+ "\n" + "\n"  +

"[1] - Coverter Dolar em Reais " + "\n" + "\n" +

"[2] - Coverter Reais em Dolar" + "\n" + "\n" +

"[3] - Conveter temperaturas °F em C°" + "\n" + "\n" +

"[4] - Conveter temperaturas °C em F°" + "\n"+"\n"));

switch (op) {

    case 1:
        alert("Conversor de Moedas[-Dolar em Reais-]");

        var dolar = parseFloat(prompt("Digite o cotação do dolar","Digite aqui"));

        var real = parseFloat(prompt("Digite o valor do real","Digite aqui"));

        conversao = (dolar*real);

        alert(`O valor em dolar convertido em reais é ${conversao.toFixed(2).replace(".",",")} R$`);

        break;

        case 2:
            alert("Conversor de Moedas[-Reais em Dolar-]");

        var dolar = parseFloat(prompt("Digite o cotação do dolar","Digite aqui"));

        var real = parseFloat(prompt("Digite o valor do real","Digite aqui"));

        conversao = (real/dolar);

        alert(`O valor em reais convertido em dolar é ${conversao.toFixed(2).replace(".",",")} USD`);
            
        break;

        case 3:

        alert("Conversor de Temperatura °F / °C ")

        var f = parseFloat(prompt("Informe a temperatura em Fahrenheit","Temperatura em °F"));
        
        convTemp = ( (f-32) * (5/9) )
        // (32 °F − 32) × 5/9 = 0 °C

        alert(`A temperatura ${f} °F convertida em Ceisius é  : ${convTemp.toFixed(2)} C°`);


            break;

            case 4:
                alert("Conversor de Temperatura °F / °C ")

                var c = parseFloat(prompt("Informe a temperatura em Celsius","Temperatura em °C"));
                
                convTemp = ( (c*1.8)+32 );
                // (0 °C × 1.8) + 32 = 32 °F

        
                alert(`A temperatura ${c} °C  convertida em Fahrenheit é  : ${convTemp.toFixed(2)} °F`);
            break;

    default:
        alert("!! OPÇÃO  INVALIDA !!")
        break;
}