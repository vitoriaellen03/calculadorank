// Verificação do Documento Carregado
$(document).ready(function () {
    // Mascara de Dinheiro
    $("#demo4").maskMoney();

    // Verifica o Input
    verificarPreenchimento();

    // Imprime a Imagem
    $("#download").on("click", function () {
        var element = document.getElementById("htmlContent");

        // Define a largura e altura desejadas para a imagem em pixels
        var canvasWidth = 5900;
        var canvasHeight = 7000;

        // Calcula a escala com base na largura desejada do canvas e a largura do elemento
        var scale = canvasWidth / element.offsetWidth;

        // Cria um novo canvas com a resolução desejada
        var canvas = document.createElement("canvas");
        canvas.width = canvasWidth;
        canvas.height = canvasHeight;
        var context = canvas.getContext("2d");

        // Usa a biblioteca html2canvas para renderizar o conteúdo no canvas
        html2canvas(element, { scale: scale })
            .then(function (renderedCanvas) {
                // Desenha a imagem renderizada no novo canvas
                context.drawImage(renderedCanvas, 0, 0, canvasWidth, canvasHeight);

                // Obtém a URL da imagem a partir do canvas
                var imageData = canvas.toDataURL("image/jpeg", 1.0);

                // Cria um link para baixar a imagem
                var link = document.createElement("a");
                link.setAttribute("download", "image.jpg");
                link.setAttribute("href", imageData);
                link.click();
            })
            .catch(function (error) {
                console.error("Erro ao renderizar a imagem:", error);
            });
    });
});

// Função para verificar o preenchimento do input
function verificarPreenchimento() {
    var inputValor = document.getElementById("demo4").value.trim();
    var buttonsDiv = document.getElementById("buttons_div");

    if (inputValor !== "" && parseFloat(inputValor.replace(/[^\d.]/g, '')) > 0) {
        buttonsDiv.style.display = "block";
    } else {
        buttonsDiv.style.display = "none";
    }
}