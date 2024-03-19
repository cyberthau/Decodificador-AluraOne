const textArea = document.querySelector(".entrada-texto");
const mensagem = document.querySelector(".saida-textarea");
btnCriptografar.onclick = criptografar;
btnDescriptografar.onclick = descriptografar;

// botoes criptografar e descriptografar
function btnCriptografar() {
    const textoCriptografado = criptografar (textArea.value);
    mensagem.value = textoCriptografado;
    document.getElementById("figuraProcura").style.display = "none";
    document.getElementById("mensagem-informacao").style.display = "none";
    document.getElementById("mensagem-aviso").style.display = "none";
    textArea.value = ""
}

function btnDescriptografar() {
    const textoDescriptografado = descriptografar (mensagem.value);
    mensagem.value = textoDescriptografado;
    document.getElementById("figuraProcura").style.display = "none";
    document.getElementById("mensagem-informacao").style.display = "none";
    document.getElementById("mensagem-aviso").style.display = "none";
    textArea.value = ""
}

//função criptografar
function criptografar(stringCriptografada) {
    
    let matrizCodigo = [["e", "enter"],["i", "imes"],["a", "ai"],["o", "ober"],["u", "ufat"]];
    stringCriptografada = stringCriptografada.toLowerCase ();

    for(let i = 0; i < matrizCodigo.length; i++) {
        if(stringCriptografada.includes(matrizCodigo[i][0])){
            stringCriptografada = stringCriptografada.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1]);
        }
    }
    
    return stringCriptografada;
}

//função descriptografar
function descriptografar(stringDescriptografar) {
    let matrizCodigo = [["e", "enter"],["i", "imes"],["a", "ai"],["o", "ober"],["u", "ufat"]];
    stringDescriptografar = stringDescriptografar.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++) {
        if(stringDescriptografar.includes(matrizCodigo[i][1])) {
            stringDescriptografar = stringDescriptografar.replaceAll(matrizCodigo[i][1],matrizCodigo[i][0]);
        }
    }

    return stringDescriptografar;
}

// função copiar e botao copiar
document.getElementById("inputTexto").addEventListener("btn-copiar");

function btnCopiar() {
    document.querySelector("#inputTexto").select();
    document.getElementById("figuraProcura").style.display = "none";
    document.getElementById("mensagem-informacao").style.display = "none";
    document.getElementById("mensagem-aviso").style.display = "none";
    document.execCommand("copy");
    textArea.value = ""
    
    alert("seu texto foi copiado.");
}

