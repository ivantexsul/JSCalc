var valorAntigoTela = "" // o que foi mostrado na tela antes de escolher a operacao
var valorTela = ""; // o que está sendo mostrado na tela no momento
var acaoEscolhida; // a açao escolhida 

function atualizaTela(valor) {
    var tela = document.getElementById("tela");
    valorTela = valor;
    tela.innerText = valorTela;
}

/**
 * Essa função faz a captura da tecla pressionada e interpreta ela como número,
 * assim podemos ao invés de clicar no número, também digitar
 * 
 * Usa as mesmas funções já criadas, apenas interpreta os números
 * 
 * TODO: tratar teclas não numéricas
 */
$('body').keypress(function(event){
    var keycode = (event.keyCode ? event.keyCode : event.which);
    // console.log('tecla pressionada:'+keycode);
    if(keycode != 43){
        switch (keycode) {
            case 49:
                var numero = 1;
                break;
            case 50:
                var numero = 2;
                break;
            case 51:
                var numero = 3;
                break;
            case 52:
                var numero = 4;
                break;
            case 53:
                var numero = 5;
                break;
            case 54:
                var numero = 6;
                break;
            case 55:
                var numero = 7;
                break;
            case 56:
                var numero = 8;
                break;
            case 57:
                var numero = 9;
                break;
        
            default:
                break;
        }

        atualizaTela(`${valorTela}${numero}`);
    }
    if(keycode == 43){
        acao = '+';
        rodarAcao(acao);
    }
    if(keycode == 45){
        acao = '-';
        rodarAcao(acao);
    }
    if(keycode == 42){
        acao = 'x';
        rodarAcao(acao);
    }
    
    if(keycode == 47){
        acao = '/';
        rodarAcao(acao);
    }

    if(keycode == 13){
        acao = '=';
        rodarAcao(acao);
    }

  });

function botaoDigitoClick (e) { 
    var digito = e.target.value;
    atualizaTela(`${valorTela}${digito}`);
}

function botaoAcaoClick (e) {
    var acao = e.target.value;
    rodarAcao(acao);
}

function rodarAcao (acao) {
    if (acao === "=") {
        var resultado;
        if (acaoEscolhida === "+") {
            resultado = parseInt(valorAntigoTela) + parseInt(valorTela);
        }

        if (acaoEscolhida === "-") {
            resultado = parseInt(valorAntigoTela) - parseInt(valorTela);
        }


        if (acaoEscolhida === "/") {
            resultado = parseInt(valorAntigoTela) / parseInt(valorTela);
        }


        if (acaoEscolhida === "*") {
            resultado = parseInt(valorAntigoTela) * parseInt(valorTela);
        }

        
        atualizaTela(resultado)
        valorAntigoTela = "" // explicar isso só depois da primeira conta 
        return
    }

    if (acao === "l") {
        location.reload();
    }

    valorAntigoTela = valorTela;
    acaoEscolhida = acao;
    atualizaTela('');
}