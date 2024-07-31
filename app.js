function encriptar() {

    let textoNormal = document.querySelector('#texto_normal').value;
    //console.log(texto_normal);

    let cadenaPermitida = /[A-Z0-9~!@#$%&*()_+|{}[\]\\\/?><^:"`;.,áéíóúàèìòù']/; 

    if (textoNormal.match(cadenaPermitida) != textoNormal.match(cadenaPermitida)) {
        document.querySelector('#mensaje_caracteres_especiales').removeAttribute('hidden');
        document.querySelector("#div_grafico").style.display = "block";

    } else {
        let textoEncriptado = textoNormal.replace(/e/gi, "enter").replace(/i/gi, "imes").replace(/a/gi, "ai").replace(/o/gi, "ober").replace(/u/gi, "ufat");
        document.querySelector('#texto_encriptado').value = textoEncriptado;

    }
}

function desencriptar() {

    let textoNormal = document.querySelector('#texto_normal').value;
  
    let textoDesencriptado = textoNormal.replace(/ai/gi, "a").replace(/enter/gi, "e").replace(/imes/gi, "i").replace(/ober/gi, "o").replace(/ufat/gi, "u");
    document.querySelector('#texto_encriptado').value = textoDesencriptado;
}


function validarTexto() {
   
    if(document.querySelector('#texto_normal').value == "") {
        document.querySelector('#mensaje_caja_vacia').removeAttribute('hidden');
        document.querySelector("#div_grafico").style.display = "block";
    } else {
        document.querySelector('#mensaje_caja_vacia').style.display = "none";
    }
}

function ocultarGrafico() {
    document.querySelector("#div_grafico").style.display = "none";
    document.querySelector("#mensaje").removeAttribute('hidden');
}

function copiarTextoEncriptado() {
    let textoCopia = document.querySelector("#texto_encriptado");
    textoCopia.select();
    navigator.clipboard.writeText(textoCopia.value);
}
