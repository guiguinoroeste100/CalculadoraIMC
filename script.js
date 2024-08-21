// Função para calcular o IMC
function calcularIMC() {
    // Captura os valores inseridos pelo usuário
    var peso = document.getElementById('peso').value;
    var altura = document.getElementById('altura').value;

    // Verifica se os valores são válidos
    if (peso > 0 && altura > 0) {
        // Calcula o IMC
        var imc = peso / (altura * altura);

        // Define a categoria do IMC
        var categoria;
        if (imc < 18.5) {
            categoria = "Abaixo do peso";
        } else if (imc >= 18.5 && imc < 24.9) {
            categoria = "Peso normal";
        } else if (imc >= 25 && imc < 29.9) {
            categoria = "Sobrepeso";
        } else {
            categoria = "Obeso";
        }

        // Exibe o resultado na página
        var resultado = "Seu IMC é " + imc.toFixed(2) + ". Você está " + categoria + ".";
        document.getElementById('resultado').innerText = resultado;
    } else {
        // Exibe uma mensagem de erro se os valores forem inválidos
        document.getElementById('resultado').innerText = "Por favor, insira valores válidos para peso e altura.";
    }
}