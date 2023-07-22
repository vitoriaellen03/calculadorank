/// Imprimir Imagem ///
$(document).ready(function () {
    $("#download").on("click", function () {
        var element = document.getElementById("htmlContent");

        // Define a largura e altura desejadas para a imagem em pixels
        var canvasWidth = 5000;
        var canvasHeight = 7000;

        // Cria um novo canvas com a resolução desejada
        var canvas = document.createElement("canvas");
        canvas.width = canvasWidth;
        canvas.height = canvasHeight;
        var context = canvas.getContext("2d");

        // Usa a biblioteca html2canvas para renderizar o conteúdo no canvas
        html2canvas(element, { scale: canvasWidth / element.offsetWidth })
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


/// Mascara de Dinheiro
$(function () {
    $("#demo4").maskMoney();
}) 

/// Verifica o Input
function verificarPreenchimento() {
    var inputValor = document.getElementById("demo4").value.trim();
    var buttonsDiv = document.getElementById("buttons_div");

    if (inputValor !== "" && parseFloat(inputValor.replace(/[^\d.]/g, '')) > 0) {
        buttonsDiv.style.display = "block";
    } else {
        buttonsDiv.style.display = "none";
    }
}

//Importar Variaveis
var nav = document.getElementById('nav');
var opcao = document.getElementById('opcao');
var planilha = document.getElementById('planilha');
var btn = document.getElementById('download');
var html = document.getElementById('htmlContent');
var dg = document.getElementById('digite');
var dg2 = document.getElementById('digite2');

var titulo = document.querySelector('th');
var borda = document.querySelector('td');

//debito
var valorde1 = document.getElementById('valorde1');
var valorde = document.getElementById('valorde');
var valordeb = document.getElementById('valordeb');

// Credito
var linha1 = document.getElementById('valorjur1');
var linha2 = document.getElementById('valorjur2');
var linha3 = document.getElementById('valorjur3');
var linha4 = document.getElementById('valorjur4');
var linha5 = document.getElementById('valorjur5');
var linha6 = document.getElementById('valorjur6');
var linha7 = document.getElementById('valorjur7');
var linha8 = document.getElementById('valorjur8');
var linha9 = document.getElementById('valorjur9');
var linha10 = document.getElementById('valorjur10');
var linha11 = document.getElementById('valorjur11');
var linha12 = document.getElementById('valorjur12');

var linha13 = document.getElementById('valorjuru1');
var linha14 = document.getElementById('valorjuru2');
var linha15 = document.getElementById('valorjuru3');
var linha16 = document.getElementById('valorjuru4');
var linha17 = document.getElementById('valorjuru5');
var linha18 = document.getElementById('valorjuru6');
var linha19 = document.getElementById('valorjuru7');
var linha20 = document.getElementById('valorjuru8');
var linha21 = document.getElementById('valorjuru9');
var linha22 = document.getElementById('valorjuru10');
var linha23 = document.getElementById('valorjuru11');
var linha24 = document.getElementById('valorjuru12');

var te1 = document.getElementById('te1');
var te2 = document.getElementById('te2');
var te3 = document.getElementById('te3');
var te4 = document.getElementById('te4');
var te5 = document.getElementById('te5');
var te6 = document.getElementById('te6');
var te7 = document.getElementById('te7');
var te8 = document.getElementById('te8');
var te9 = document.getElementById('te9');
var te10 = document.getElementById('te10');
var te11 = document.getElementById('te11');
var te12 = document.getElementById('te12');


/// Escreve os Valores MERCADO PAGO ///
function escrevermp() {
    const valorTexto = document.getElementById('demo4').value;
    const valorNumerico = parseFloat(valorTexto.replace(/[^\d]/g, '')) / 100;

    document.getElementById('valorde').innerHTML = "R$ " + (valorNumerico / 0.971).toFixed(2);
    document.getElementById('valorjur1').innerHTML = "R$ " +((valorNumerico / 0.938) / 1).toFixed(2);
    document.getElementById('valorjur2').innerHTML = "R$ " +((valorNumerico / 0.901) / 2).toFixed(2);
    document.getElementById('valorjur3').innerHTML = "R$ " +((valorNumerico / 0.887) / 3).toFixed(2);
    document.getElementById('valorjur4').innerHTML = "R$ " +((valorNumerico / 0.874) / 4).toFixed(2);
    document.getElementById('valorjur5').innerHTML = "R$ " +((valorNumerico / 0.86) / 5).toFixed(2);
    document.getElementById('valorjur6').innerHTML = "R$ " +((valorNumerico / 0.847) / 6).toFixed(2);
    document.getElementById('valorjur7').innerHTML = "R$ " +((valorNumerico / 0.834) / 7).toFixed(2);
    document.getElementById('valorjur8').innerHTML = "R$ " +((valorNumerico / 0.861) / 8).toFixed(2);
    document.getElementById('valorjur9').innerHTML = "R$ " +((valorNumerico / 0.81) / 9).toFixed(2);
    document.getElementById('valorjur10').innerHTML = "R$ " +((valorNumerico / 0.798) / 10).toFixed(2);
    document.getElementById('valorjur11').innerHTML = "R$ " +((valorNumerico / 0.786) / 11).toFixed(2);
    document.getElementById('valorjur12').innerHTML = "R$ " +((valorNumerico / 0.774) / 12).toFixed(2);

    document.getElementById('valordeb').innerHTML = "R$ " +(valorNumerico / 0.971).toFixed(2);
    document.getElementById('valorjuru1').innerHTML = "R$ " +(valorNumerico / 0.938).toFixed(2);
    document.getElementById('valorjuru2').innerHTML = "R$ " +(valorNumerico / 0.901).toFixed(2);
    document.getElementById('valorjuru3').innerHTML = "R$ " +(valorNumerico / 0.887).toFixed(2);
    document.getElementById('valorjuru4').innerHTML = "R$ " +(valorNumerico / 0.874).toFixed(2);
    document.getElementById('valorjuru5').innerHTML = "R$ " +(valorNumerico / 0.86).toFixed(2);
    document.getElementById('valorjuru6').innerHTML = "R$ " +(valorNumerico / 0.847).toFixed(2);
    document.getElementById('valorjuru7').innerHTML = "R$ " +(valorNumerico / 0.834).toFixed(2);
    document.getElementById('valorjuru8').innerHTML = "R$ " +(valorNumerico / 0.861).toFixed(2);
    document.getElementById('valorjuru9').innerHTML = "R$ " +(valorNumerico / 0.81).toFixed(2);
    document.getElementById('valorjuru10').innerHTML = "R$ " +(valorNumerico / 0.798).toFixed(2);
    document.getElementById('valorjuru11').innerHTML = "R$ " +(valorNumerico / 0.786).toFixed(2);
    document.getElementById('valorjuru12').innerHTML = "R$ " + (valorNumerico / 0.774).toFixed(2);
    
    nav.style = "background-color: #009bdb;"; // Nav bar
    btn.style = "background-color: #009bdb;"; // Botão Baixar
    html.style = "background-color: #009bdb;"; // Conteudo Da Planilha
    titulo.style = "background-color: #009bdb;"; // Titulo Da Planilha
    opcao.style = "border: 2px solid #009bdb;"; // Borda Calculadora
    planilha.style = "border: 2px solid #009bdb;";// Borda da planilha
    dg.style = "color: #009bdb;";
    dg2.style = "color: #009bdb;";


    // Debito
    valorde1.style = "background-color: #a2cff0; border: 2px solid #009bdb;";
    valorde.style = "background-color: #a2cff0; border: 2px solid #009bdb;";
    valordeb.style = "background-color: #a2cff0; border: 2px solid #009bdb;";

    // Crédito
    linha1.style = "border: 2px solid #009bdb; background-color: white; border: 2px solid #009bdb; color: #009bdb;";
    linha2.style = "border: 2px solid #009bdb; background-color: white; border: 2px solid #009bdb; color: #009bdb;";
    linha3.style = "border: 2px solid #009bdb; background-color: white; border: 2px solid #009bdb; color: #009bdb;";
    linha4.style = "border: 2px solid #009bdb; background-color: white; border: 2px solid #009bdb; color: #009bdb;";
    linha5.style = "border: 2px solid #009bdb; background-color: white; border: 2px solid #009bdb; color: #009bdb;";
    linha6.style = "border: 2px solid #009bdb; background-color: white; border: 2px solid #009bdb; color: #009bdb;";
    linha7.style = "border: 2px solid #009bdb; background-color: white; border: 2px solid #009bdb; color: #009bdb;";
    linha8.style = "border: 2px solid #009bdb; background-color: white; border: 2px solid #009bdb; color: #009bdb;";
    linha9.style = "border: 2px solid #009bdb; background-color: white; border: 2px solid #009bdb; color: #009bdb;";
    linha10.style = "border: 2px solid #009bdb; background-color: white; border: 2px solid #009bdb; color: #009bdb;";
    linha11.style = "border: 2px solid #009bdb; background-color: white; border: 2px solid #009bdb; color: #009bdb;";
    linha12.style = "border: 2px solid #009bdb; background-color: white; border: 2px solid #009bdb; color: #009bdb;";

    linha13.style = "border: 2px solid #009bdb; background-color: white; border: 2px solid #009bdb; color: #009bdb;";
    linha14.style = "border: 2px solid #009bdb; background-color: white; border: 2px solid #009bdb; color: #009bdb;";
    linha15.style = "border: 2px solid #009bdb; background-color: white; border: 2px solid #009bdb; color: #009bdb;";
    linha16.style = "border: 2px solid #009bdb; background-color: white; border: 2px solid #009bdb; color: #009bdb;";
    linha17.style = "border: 2px solid #009bdb; background-color: white; border: 2px solid #009bdb; color: #009bdb;";
    linha18.style = "border: 2px solid #009bdb; background-color: white; border: 2px solid #009bdb; color: #009bdb;";
    linha19.style = "border: 2px solid #009bdb; background-color: white; border: 2px solid #009bdb; color: #009bdb;";
    linha20.style = "border: 2px solid #009bdb; background-color: white; border: 2px solid #009bdb; color: #009bdb;";
    linha21.style = "border: 2px solid #009bdb; background-color: white; border: 2px solid #009bdb; color: #009bdb;";
    linha22.style = "border: 2px solid #009bdb; background-color: white; border: 2px solid #009bdb; color: #009bdb;";
    linha23.style = "border: 2px solid #009bdb; background-color: white; border: 2px solid #009bdb; color: #009bdb;";
    linha24.style = "border: 2px solid #009bdb; background-color: white; border: 2px solid #009bdb; color: #009bdb;";

    te1.style = "border: 2px solid #009bdb; background-color: white; border: 2px solid #009bdb; color: #009bdb;";
    te2.style = "border: 2px solid #009bdb; background-color: white; border: 2px solid #009bdb; color: #009bdb;";
    te3.style = "border: 2px solid #009bdb; background-color: white; border: 2px solid #009bdb; color: #009bdb;";
    te4.style = "border: 2px solid #009bdb; background-color: white; border: 2px solid #009bdb; color: #009bdb;";
    te5.style = "border: 2px solid #009bdb; background-color: white; border: 2px solid #009bdb; color: #009bdb;";
    te6.style = "border: 2px solid #009bdb; background-color: white; border: 2px solid #009bdb; color: #009bdb;";
    te7.style = "border: 2px solid #009bdb; background-color: white; border: 2px solid #009bdb; color: #009bdb;";
    te8.style = "border: 2px solid #009bdb; background-color: white; border: 2px solid #009bdb; color: #009bdb;";
    te9.style = "border: 2px solid #009bdb; background-color: white; border: 2px solid #009bdb; color: #009bdb;";
    te10.style = "border: 2px solid #009bdb; background-color: white; border: 2px solid #009bdb; color: #009bdb;";
    te11.style = "border: 2px solid #009bdb; background-color: white; border: 2px solid #009bdb; color: #009bdb;";
    te12.style = "border: 2px solid #009bdb; background-color: white; border: 2px solid #009bdb; color: #009bdb;";

}

function escreveripmaq() {
    const valorTexto = document.getElementById('demo4').value;
    const valorNumerico = parseFloat(valorTexto.replace(/[^\d]/g, '')) / 100;

    document.getElementById('valorde').innerHTML = "R$ " +(valorNumerico / 0.9742).toFixed(2);
    document.getElementById('valorjur1').innerHTML = "R$ " +((valorNumerico / 0.9509) / 1).toFixed(2);
    document.getElementById('valorjur2').innerHTML = "R$ " +((valorNumerico / 0.9353) / 2).toFixed(2);
    document.getElementById('valorjur3').innerHTML = "R$ " +((valorNumerico / 0.928) / 3).toFixed(2);
    document.getElementById('valorjur4').innerHTML = "R$ " +((valorNumerico / 0.9208) / 4).toFixed(2);
    document.getElementById('valorjur5').innerHTML = "R$ " +((valorNumerico / 0.9137) / 5).toFixed(2);
    document.getElementById('valorjur6').innerHTML = "R$ " +((valorNumerico / 0.9067) / 6).toFixed(2);
    document.getElementById('valorjur7').innerHTML = "R$ " +((valorNumerico / 0.8997) / 7).toFixed(2);
    document.getElementById('valorjur8').innerHTML = "R$ " +((valorNumerico / 0.8928) / 8).toFixed(2);
    document.getElementById('valorjur9').innerHTML = "R$ " +((valorNumerico / 0.8859) / 9).toFixed(2);
    document.getElementById('valorjur10').innerHTML = "R$ " +((valorNumerico / 0.8792) / 10).toFixed(2);
    document.getElementById('valorjur11').innerHTML = "R$ " +((valorNumerico / 0.8725) / 11).toFixed(2);
    document.getElementById('valorjur12').innerHTML = "R$ " +((valorNumerico / 0.8659) / 12).toFixed(2);

    document.getElementById('valordeb').innerHTML = "R$ " +(valorNumerico / 0.9742).toFixed(2);
    document.getElementById('valorjuru1').innerHTML = "R$ " +(valorNumerico / 0.9509).toFixed(2);
    document.getElementById('valorjuru2').innerHTML = "R$ " +(valorNumerico / 0.9353).toFixed(2);
    document.getElementById('valorjuru3').innerHTML = "R$ " +(valorNumerico / 0.928).toFixed(2);
    document.getElementById('valorjuru4').innerHTML = "R$ " +(valorNumerico / 0.9208).toFixed(2);
    document.getElementById('valorjuru5').innerHTML = "R$ " +(valorNumerico / 0.9137).toFixed(2);
    document.getElementById('valorjuru6').innerHTML = "R$ " +(valorNumerico / 0.9067).toFixed(2);
    document.getElementById('valorjuru7').innerHTML = "R$ " +(valorNumerico / 0.8997).toFixed(2);
    document.getElementById('valorjuru8').innerHTML = "R$ " +(valorNumerico / 0.8928).toFixed(2);
    document.getElementById('valorjuru9').innerHTML = "R$ " +(valorNumerico / 0.8859).toFixed(2);
    document.getElementById('valorjuru10').innerHTML = "R$ " +(valorNumerico / 0.8792).toFixed(2);
    document.getElementById('valorjuru11').innerHTML = "R$ " +(valorNumerico / 0.8725).toFixed(2);
    document.getElementById('valorjuru12').innerHTML = "R$ " + (valorNumerico / 0.8659).toFixed(2);
    
    nav.style = "background-color: #00dbbb;"; // Nav bar
    btn.style = "background-color: #00dbbb;"; // Botão Baixar
    html.style = "background-color: #00dbbb;"; // Conteudo Da Planilha
    titulo.style = "background-color: #00dbbb;"; // Titulo Da Planilha
    opcao.style = "border: 2px solid #00dbbb;"; // Borda Calculadora
    dg.style = "color: #00dbbb;";
    dg2.style = "color: #00dbbb;";
    planilha.style = "border: 2px solid #00dbbb;"; // Borda da planilha

    // Debito
    valorde1.style = "background-color: #a2e7f0; border: 2px solid #00dbbb;";
    valorde.style = "background-color: #a2e7f0; border: 2px solid #00dbbb;";
    valordeb.style = "background-color: #a2e7f0; border: 2px solid #00dbbb;";

    // Crédito
    linha1.style = "border: 2px solid #00dbbb; background-color: white; color: #00dbbb;";
    linha2.style = "border: 2px solid #00dbbb; background-color: white; color: #00dbbb;";
    linha3.style = "border: 2px solid #00dbbb; background-color: white; color: #00dbbb;";
    linha4.style = "border: 2px solid #00dbbb; background-color: white; color: #00dbbb;";
    linha5.style = "border: 2px solid #00dbbb; background-color: white; color: #00dbbb;";
    linha6.style = "border: 2px solid #00dbbb; background-color: white; color: #00dbbb;";
    linha7.style = "border: 2px solid #00dbbb; background-color: white; color: #00dbbb;";
    linha8.style = "border: 2px solid #00dbbb; background-color: white; color: #00dbbb;";
    linha9.style = "border: 2px solid #00dbbb; background-color: white; color: #00dbbb;";
    linha10.style = "border: 2px solid #00dbbb; background-color: white; color: #00dbbb;";
    linha11.style = "border: 2px solid #00dbbb; background-color: white; color: #00dbbb;";
    linha12.style = "border: 2px solid #00dbbb; background-color: white; color: #00dbbb;";

    linha13.style = "border: 2px solid #00dbbb; background-color: white; color: #00dbbb;";
    linha14.style = "border: 2px solid #00dbbb; background-color: white; color: #00dbbb;";
    linha15.style = "border: 2px solid #00dbbb; background-color: white; color: #00dbbb;";
    linha16.style = "border: 2px solid #00dbbb; background-color: white; color: #00dbbb;";
    linha17.style = "border: 2px solid #00dbbb; background-color: white; color: #00dbbb;";
    linha18.style = "border: 2px solid #00dbbb; background-color: white; color: #00dbbb;";
    linha19.style = "border: 2px solid #00dbbb; background-color: white; color: #00dbbb;";
    linha20.style = "border: 2px solid #00dbbb; background-color: white; color: #00dbbb;";
    linha21.style = "border: 2px solid #00dbbb; background-color: white; color: #00dbbb;";
    linha22.style = "border: 2px solid #00dbbb; background-color: white; color: #00dbbb;";
    linha23.style = "border: 2px solid #00dbbb; background-color: white; color: #00dbbb;";
    linha24.style = "border: 2px solid #00dbbb; background-color: white; color: #00dbbb;";

    te1.style = "border: 2px solid #00dbbb; background-color: white; color: #00dbbb;";
    te2.style = "border: 2px solid #00dbbb; background-color: white; color: #00dbbb;";
    te3.style = "border: 2px solid #00dbbb; background-color: white; color: #00dbbb;";
    te4.style = "border: 2px solid #00dbbb; background-color: white; color: #00dbbb;";
    te5.style = "border: 2px solid #00dbbb; background-color: white; color: #00dbbb;";
    te6.style = "border: 2px solid #00dbbb; background-color: white; color: #00dbbb;";
    te7.style = "border: 2px solid #00dbbb; background-color: white; color: #00dbbb;";
    te8.style = "border: 2px solid #00dbbb; background-color: white; color: #00dbbb;";
    te9.style = "border: 2px solid #00dbbb; background-color: white; color: #00dbbb;";
    te10.style = "border: 2px solid #00dbbb; background-color: white; color: #00dbbb;";
    te11.style = "border: 2px solid #00dbbb; background-color: white; color: #00dbbb;";
    te12.style = "border: 2px solid #00dbbb; background-color: white; color: #00dbbb;";

}

function escreveriplink() {
    const valorTexto = document.getElementById('demo4').value;
    const valorNumerico = parseFloat(valorTexto.replace(/[^\d]/g, '')) / 100;

    document.getElementById('valorde').innerHTML = ('-');
    document.getElementById('valorjur1').innerHTML = "R$ " +((valorNumerico / 0.958) / 1).toFixed(2);
    document.getElementById('valorjur2').innerHTML = "R$ " +((valorNumerico / 0.939) / 2).toFixed(2);
    document.getElementById('valorjur3').innerHTML = "R$ " +((valorNumerico / 0.93) / 3).toFixed(2);
    document.getElementById('valorjur4').innerHTML = "R$ " +((valorNumerico / 0.921) / 4).toFixed(2);
    document.getElementById('valorjur5').innerHTML = "R$ " +((valorNumerico / 0.912) / 5).toFixed(2);
    document.getElementById('valorjur6').innerHTML = "R$ " +((valorNumerico / 0.903) / 6).toFixed(2);
    document.getElementById('valorjur7').innerHTML = "R$ " +((valorNumerico / 0.874) / 7).toFixed(2);
    document.getElementById('valorjur8').innerHTML = "R$ " +((valorNumerico / 0.866) / 8).toFixed(2);
    document.getElementById('valorjur9').innerHTML = "R$ " +((valorNumerico / 0.857) / 9).toFixed(2);
    document.getElementById('valorjur10').innerHTML = "R$ " +((valorNumerico / 0.849) / 10).toFixed(2);
    document.getElementById('valorjur11').innerHTML = "R$ " +((valorNumerico / 0.841) / 11).toFixed(2);
    document.getElementById('valorjur12').innerHTML = "R$ " +((valorNumerico / 0.833) / 12).toFixed(2);

    document.getElementById('valordeb').innerHTML = ('-');
    document.getElementById('valorjuru1').innerHTML = "R$ " +(valorNumerico / 0.958).toFixed(2);
    document.getElementById('valorjuru2').innerHTML = "R$ " +(valorNumerico / 0.939).toFixed(2);
    document.getElementById('valorjuru3').innerHTML = "R$ " +(valorNumerico / 0.93).toFixed(2);
    document.getElementById('valorjuru4').innerHTML = "R$ " +(valorNumerico / 0.921).toFixed(2);
    document.getElementById('valorjuru5').innerHTML = "R$ " +(valorNumerico / 0.912).toFixed(2);
    document.getElementById('valorjuru6').innerHTML = "R$ " +(valorNumerico / 0.903).toFixed(2);
    document.getElementById('valorjuru7').innerHTML = "R$ " +(valorNumerico / 0.874).toFixed(2);
    document.getElementById('valorjuru8').innerHTML = "R$ " +(valorNumerico / 0.866).toFixed(2);
    document.getElementById('valorjuru9').innerHTML = "R$ " +(valorNumerico / 0.857).toFixed(2);
    document.getElementById('valorjuru10').innerHTML = "R$ " +(valorNumerico / 0.849).toFixed(2);
    document.getElementById('valorjuru11').innerHTML = "R$ " +(valorNumerico / 0.841).toFixed(2);
    document.getElementById('valorjuru12').innerHTML = "R$ " + (valorNumerico / 0.833).toFixed(2);
    
    nav.style = "background-color: #3f9622;"; // Nav bar
    btn.style = "background-color: #3f9622;"; // Botão Baixar
    html.style = "background-color: #3f9622;"; // Conteudo Da Planilha
    titulo.style = "background-color: #3f9622;"; // Titulo Da Planilha
    opcao.style = "border: 2px solid #3f9622;"; // Borda Calculadora
    dg.style = "color: #3f9622;";
    dg2.style = "color: #3f9622;";
    planilha.style = "border: 2px solid #3f9622;";// Borda da planilha

    // Debito
    valorde1.style = "background-color: #abdebb; border: 2px solid #3f9622;";
    valorde.style = "background-color: #abdebb; border: 2px solid #3f9622;";
    valordeb.style = "background-color: #abdebb; border: 2px solid #3f9622;";

    // Crédito
    linha1.style = "border: 2px solid #3f9622; background-color: white; border: 2px solid #3f9622; color: #3f9622;";
    linha2.style = "border: 2px solid #3f9622; background-color: white; border: 2px solid #3f9622; color: #3f9622;";
    linha3.style = "border: 2px solid #3f9622; background-color: white; border: 2px solid #3f9622; color: #3f9622;";
    linha4.style = "border: 2px solid #3f9622; background-color: white; border: 2px solid #3f9622; color: #3f9622;";
    linha5.style = "border: 2px solid #3f9622; background-color: white; border: 2px solid #3f9622; color: #3f9622;";
    linha6.style = "border: 2px solid #3f9622; background-color: white; border: 2px solid #3f9622; color: #3f9622;";
    linha7.style = "border: 2px solid #3f9622; background-color: white; border: 2px solid #3f9622; color: #3f9622;";
    linha8.style = "border: 2px solid #3f9622; background-color: white; border: 2px solid #3f9622; color: #3f9622;";
    linha9.style = "border: 2px solid #3f9622; background-color: white; border: 2px solid #3f9622; color: #3f9622;";
    linha10.style = "border: 2px solid #3f9622; background-color: white; border: 2px solid #3f9622; color: #3f9622;";
    linha11.style = "border: 2px solid #3f9622; background-color: white; border: 2px solid #3f9622; color: #3f9622;";
    linha12.style = "border: 2px solid #3f9622; background-color: white; border: 2px solid #3f9622; color: #3f9622;";

    linha13.style = "border: 2px solid #3f9622; background-color: white; border: 2px solid #3f9622; color: #3f9622;";
    linha14.style = "border: 2px solid #3f9622; background-color: white; border: 2px solid #3f9622; color: #3f9622;";
    linha15.style = "border: 2px solid #3f9622; background-color: white; border: 2px solid #3f9622; color: #3f9622;";
    linha16.style = "border: 2px solid #3f9622; background-color: white; border: 2px solid #3f9622; color: #3f9622;";
    linha17.style = "border: 2px solid #3f9622; background-color: white; border: 2px solid #3f9622; color: #3f9622;";
    linha18.style = "border: 2px solid #3f9622; background-color: white; border: 2px solid #3f9622; color: #3f9622;";
    linha19.style = "border: 2px solid #3f9622; background-color: white; border: 2px solid #3f9622; color: #3f9622;";
    linha20.style = "border: 2px solid #3f9622; background-color: white; border: 2px solid #3f9622; color: #3f9622;";
    linha21.style = "border: 2px solid #3f9622; background-color: white; border: 2px solid #3f9622; color: #3f9622;";
    linha22.style = "border: 2px solid #3f9622; background-color: white; border: 2px solid #3f9622; color: #3f9622;";
    linha23.style = "border: 2px solid #3f9622; background-color: white; border: 2px solid #3f9622; color: #3f9622;";
    linha24.style = "border: 2px solid #3f9622; background-color: white; border: 2px solid #3f9622; color: #3f9622;";

    te1.style = "border: 2px solid #3f9622; background-color: white; border: 2px solid #3f9622; color: #3f9622;";
    te2.style = "border: 2px solid #3f9622; background-color: white; border: 2px solid #3f9622; color: #3f9622;";
    te3.style = "border: 2px solid #3f9622; background-color: white; border: 2px solid #3f9622; color: #3f9622;";
    te4.style = "border: 2px solid #3f9622; background-color: white; border: 2px solid #3f9622; color: #3f9622;";
    te5.style = "border: 2px solid #3f9622; background-color: white; border: 2px solid #3f9622; color: #3f9622;";
    te6.style = "border: 2px solid #3f9622; background-color: white; border: 2px solid #3f9622; color: #3f9622;";
    te7.style = "border: 2px solid #3f9622; background-color: white; border: 2px solid #3f9622; color: #3f9622;";
    te8.style = "border: 2px solid #3f9622; background-color: white; border: 2px solid #3f9622; color: #3f9622;";
    te9.style = "border: 2px solid #3f9622; background-color: white; border: 2px solid #3f9622; color: #3f9622;";
    te10.style = "border: 2px solid #3f9622; background-color: white; border: 2px solid #3f9622; color: #3f9622;";
    te11.style = "border: 2px solid #3f9622; background-color: white; border: 2px solid #3f9622; color: #3f9622;";
    te12.style = "border: 2px solid #3f9622; background-color: white; border: 2px solid #3f9622; color: #3f9622;";

}

function escreveripcell() {
    const valorTexto = document.getElementById('demo4').value;
    const valorNumerico = parseFloat(valorTexto.replace(/[^\d]/g, '')) / 100;

    document.getElementById('valorde').innerHTML = "R$ " +(valorNumerico / 0.9742).toFixed(2);
    document.getElementById('valorjur1').innerHTML = "R$ " +((valorNumerico / 0.9509) / 1).toFixed(2);
    document.getElementById('valorjur2').innerHTML = "R$ " +((valorNumerico / 0.9353) / 2).toFixed(2);
    document.getElementById('valorjur3').innerHTML = "R$ " +((valorNumerico / 0.928) / 3).toFixed(2);
    document.getElementById('valorjur4').innerHTML = "R$ " +((valorNumerico / 0.9208) / 4).toFixed(2);
    document.getElementById('valorjur5').innerHTML = "R$ " +((valorNumerico / 0.9137) / 5).toFixed(2);
    document.getElementById('valorjur6').innerHTML = "R$ " +((valorNumerico / 0.9067) / 6).toFixed(2);
    document.getElementById('valorjur7').innerHTML = "R$ " +((valorNumerico / 0.8997) / 7).toFixed(2);
    document.getElementById('valorjur8').innerHTML = "R$ " +((valorNumerico / 0.8928) / 8).toFixed(2);
    document.getElementById('valorjur9').innerHTML = "R$ " +((valorNumerico / 0.8859) / 9).toFixed(2);
    document.getElementById('valorjur10').innerHTML = "R$ " +((valorNumerico / 0.8792) / 10).toFixed(2);
    document.getElementById('valorjur11').innerHTML = "R$ " +((valorNumerico / 0.8725) / 11).toFixed(2);
    document.getElementById('valorjur12').innerHTML = "R$ " +((valorNumerico / 0.8659) / 12).toFixed(2);

    document.getElementById('valordeb').innerHTML = "R$ " +(valorNumerico / 0.9742).toFixed(2);
    document.getElementById('valorjuru1').innerHTML = "R$ " +(valorNumerico / 0.9509).toFixed(2);
    document.getElementById('valorjuru2').innerHTML = "R$ " +(valorNumerico / 0.9353).toFixed(2);
    document.getElementById('valorjuru3').innerHTML = "R$ " +(valorNumerico / 0.928).toFixed(2);
    document.getElementById('valorjuru4').innerHTML = "R$ " +(valorNumerico / 0.9208).toFixed(2);
    document.getElementById('valorjuru5').innerHTML = "R$ " +(valorNumerico / 0.9137).toFixed(2);
    document.getElementById('valorjuru6').innerHTML = "R$ " +(valorNumerico / 0.9067).toFixed(2);
    document.getElementById('valorjuru7').innerHTML = "R$ " +(valorNumerico / 0.8997).toFixed(2);
    document.getElementById('valorjuru8').innerHTML = "R$ " +(valorNumerico / 0.8928).toFixed(2);
    document.getElementById('valorjuru9').innerHTML = "R$ " +(valorNumerico / 0.8859).toFixed(2);
    document.getElementById('valorjuru10').innerHTML = "R$ " +(valorNumerico / 0.8792).toFixed(2);
    document.getElementById('valorjuru11').innerHTML = "R$ " +(valorNumerico / 0.8725).toFixed(2);
    document.getElementById('valorjuru12').innerHTML = "R$ " + (valorNumerico / 0.8659).toFixed(2);
    
    nav.style = "background-color: #12c35b;"; // Nav bar
    btn.style = "background-color: #12c35b;"; // Botão Baixar
    html.style = "background-color: #12c35b;"; // Conteudo Da Planilha
    titulo.style = "background-color: #12c35b;"; // Titulo Da Planilha
    opcao.style = "border: 2px solid #12c35b;"; // Borda Calculadora
    dg.style = "color: #12c35b;";
    dg2.style = "color: #12c35b;";
    planilha.style = "border: 2px solid #12c35b;"; // Borda da planilha

    // Debito
    valorde1.style = "background-color: #a6e9db; border: 2px solid #12c35b;";
    valorde.style = "background-color: #a6e9db; border: 2px solid #12c35b;";
    valordeb.style = "background-color: #a6e9db; border: 2px solid #12c35b;";

    // Crédito
    linha1.style = "border: 2px solid #12c35b; background-color: white; border: 2px solid #12c35b; color: #12c35b;";
    linha2.style = "border: 2px solid #12c35b; background-color: white; border: 2px solid #12c35b; color: #12c35b;";
    linha3.style = "border: 2px solid #12c35b; background-color: white; border: 2px solid #12c35b; color: #12c35b;";
    linha4.style = "border: 2px solid #12c35b; background-color: white; border: 2px solid #12c35b; color: #12c35b;";
    linha5.style = "border: 2px solid #12c35b; background-color: white; border: 2px solid #12c35b; color: #12c35b;";
    linha6.style = "border: 2px solid #12c35b; background-color: white; border: 2px solid #12c35b; color: #12c35b;";
    linha7.style = "border: 2px solid #12c35b; background-color: white; border: 2px solid #12c35b; color: #12c35b;";
    linha8.style = "border: 2px solid #12c35b; background-color: white; border: 2px solid #12c35b; color: #12c35b;";
    linha9.style = "border: 2px solid #12c35b; background-color: white; border: 2px solid #12c35b; color: #12c35b;";
    linha10.style = "border: 2px solid #12c35b; background-color: white; border: 2px solid #12c35b; color: #12c35b;";
    linha11.style = "border: 2px solid #12c35b; background-color: white; border: 2px solid #12c35b; color: #12c35b;";
    linha12.style = "border: 2px solid #12c35b; background-color: white; border: 2px solid #12c35b; color: #12c35b;";

    linha13.style = "border: 2px solid #12c35b; background-color: white; border: 2px solid #12c35b; color: #12c35b;";
    linha14.style = "border: 2px solid #12c35b; background-color: white; border: 2px solid #12c35b; color: #12c35b;";
    linha15.style = "border: 2px solid #12c35b; background-color: white; border: 2px solid #12c35b; color: #12c35b;";
    linha16.style = "border: 2px solid #12c35b; background-color: white; border: 2px solid #12c35b; color: #12c35b;";
    linha17.style = "border: 2px solid #12c35b; background-color: white; border: 2px solid #12c35b; color: #12c35b;";
    linha18.style = "border: 2px solid #12c35b; background-color: white; border: 2px solid #12c35b; color: #12c35b;";
    linha19.style = "border: 2px solid #12c35b; background-color: white; border: 2px solid #12c35b; color: #12c35b;";
    linha20.style = "border: 2px solid #12c35b; background-color: white; border: 2px solid #12c35b; color: #12c35b;";
    linha21.style = "border: 2px solid #12c35b; background-color: white; border: 2px solid #12c35b; color: #12c35b;";
    linha22.style = "border: 2px solid #12c35b; background-color: white; border: 2px solid #12c35b; color: #12c35b;";
    linha23.style = "border: 2px solid #12c35b; background-color: white; border: 2px solid #12c35b; color: #12c35b;";
    linha24.style = "border: 2px solid #12c35b; background-color: white; border: 2px solid #12c35b; color: #12c35b;";

    te1.style = "border: 2px solid #12c35b; background-color: white; border: 2px solid #12c35b; color: #12c35b;";
    te2.style = "border: 2px solid #12c35b; background-color: white; border: 2px solid #12c35b; color: #12c35b;";
    te3.style = "border: 2px solid #12c35b; background-color: white; border: 2px solid #12c35b; color: #12c35b;";
    te4.style = "border: 2px solid #12c35b; background-color: white; border: 2px solid #12c35b; color: #12c35b;";
    te5.style = "border: 2px solid #12c35b; background-color: white; border: 2px solid #12c35b; color: #12c35b;";
    te6.style = "border: 2px solid #12c35b; background-color: white; border: 2px solid #12c35b; color: #12c35b;";
    te7.style = "border: 2px solid #12c35b; background-color: white; border: 2px solid #12c35b; color: #12c35b;";
    te8.style = "border: 2px solid #12c35b; background-color: white; border: 2px solid #12c35b; color: #12c35b;";
    te9.style = "border: 2px solid #12c35b; background-color: white; border: 2px solid #12c35b; color: #12c35b;";
    te10.style = "border: 2px solid #12c35b; background-color: white; border: 2px solid #12c35b; color: #12c35b;";
    te11.style = "border: 2px solid #12c35b; background-color: white; border: 2px solid #12c35b; color: #12c35b;";
    te12.style = "border: 2px solid #12c35b; background-color: white; border: 2px solid #12c35b; color: #12c35b;";

}

// // /// Imprimir Imagem ///
// $(document).ready(function () {
//     $("#download").on("click", function () {
//         var element = $("#htmlContent");

//         html2canvas(element, {
//             onrendered: function (canvas) {
//                 var imageData = canvas.toDataURL("image/jpeg");
//                 var newData = imageData.replace(/^data:image\/jpeg/, "data:application/octet-stream");
//                 var link = document.createElement("a");
//                 link.setAttribute("download", "image.jpg");
//                 link.setAttribute("href", newData);
//                 link.click();
//             }
//         });
//     });
// });
///