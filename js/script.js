function verificaimc() {
    const nomeUsuario = document.getElementById('nome').value;
    const pesoRecebido = document.getElementById('peso').value;
    const alturaRecebida = document.getElementById('alturacm').value;
    const altura = parseFloat(alturaRecebida);
    const peso = parseFloat(pesoRecebido);
    const alturaMetros = alturaRecebida / 100;
    const imc = peso / (alturaMetros * alturaMetros);

   if (imc < 16 ) {
        document.getElementById('resultado').innerHTML = nomeUsuario + ', seu IMC é de:' + imc.toFixed(2) + ', você está com Baixo Peso Muito Grave, recomendamos que você procure ajuda profissional';
   } else if ( imc >= 16 && imc <= 16.99 ) {
        document.getElementById('resultado').innerHTML = nomeUsuario + ', seu IMC é de:' + imc.toFixed(2) + ', você está com Baixo Peso Grave, continue assim!';
   } else if ( imc >= 17 && imc <= 18.49 ) {
        document.getElementById('resultado').innerHTML = nomeUsuario + ', seu IMC é de:' + imc.toFixed(2) +  ', você está com Baixo Peso, recomendamos que você procure ajuda profissional';
   } else if ( imc >= 18.50 && imc <= 24.99 ) {
        document.getElementById('resultado').innerHTML = nomeUsuario + ', seu IMC é de:' + imc.toFixed(2) +  ', você está com Peso Normal, recomendamos que você procure ajuda profissional';
   } else if ( imc >= 25 && imc <= 29.99 ) {
        document.getElementById('resultado').innerHTML = nomeUsuario + ', seu IMC é de:' + imc.toFixed(2) +  ', você está Sobrepeso, recomendamos que você procure ajuda profissional';
   } else if ( imc >= 30 && imc <= 34.99 ) {
        document.getElementById('resultado').innerHTML = nomeUsuario + ', seu IMC é de:' + imc.toFixed(2) +  ', você está com Obesidade Grau I, recomendamos que você procure ajuda profissional';
   } else if ( imc >= 35 && imc <= 39.99 ) {
        document.getElementById('resultado').innerHTML = nomeUsuario + ', seu IMC é de:' + imc.toFixed(2) +  ', você está com Obesidade Grau II ou Mórbida, recomendamos que você procure ajuda profissional';
   } else if ( imc > 40 ) {
        document.getElementById('resultado').innerHTML = nomeUsuario + ', seu IMC é de:' + imc.toFixed(2) +  ', você está com Obesidade Grau III ou Mórbida, recomendamos que você procure ajuda profissional';
   } else {
        document.getElementById('resultado').innerHTML = 'Entrada não suportada pelo sistema, por favor, tente novamente';
   }
}