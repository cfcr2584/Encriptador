const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje");

function btnEncriptar() {
    const textoEncriptado = encriptar(textArea.value)
    mensaje.value = textoEncriptado;
    textArea.value = "";
    mensaje.style.backgroundImage = "none"
}

function encriptar(stringEncriptada){
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]]; 
    stringEncriptada = stringEncriptada.toLowerCase()

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringEncriptada.includes(matrizCodigo[i][0])){
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
        }
    }
    return stringEncriptada
}

function btnDesencriptar() {
    const textoEncriptado = desencriptar(textArea.value)
    mensaje.value = textoEncriptado;
    textArea.value = "";
}

function desencriptar(stringDesencriptada){

    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]]; 
    stringDesencriptada = stringDesencriptada.toLowerCase()

    for(let i = 0; i < matrizCodigo.length; i++){

        if(stringDesencriptada.includes(matrizCodigo[i][1])){
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0])
        }
    }
    return stringDesencriptada
}

function copiaralportapapeles(){
    let texto = document.getElementById('texto');
    texto.select();
    texto.setSelectionRange(0, 99999);
    document.execCommand('copy');
}

function pasar(){
    var editor = document.getElementById('texto').value;
    document.getElementById('texto1').value=editor;
    mensaje.value = "";

}

function SoloLetras(e){
    key = e.keyCode || e.which;
    tecla = String.fromCharCode(key).toString();
    letras = "abcdefghijklmnopqrstuvwxyz";

    especiales = [8,13];
    tecla_especial = false
    for(var i in especiales) {
    if(key == especiales[i]){
    tecla_especial = true;
    break;
    }
}

if(letras.indexOf(tecla) == -1 && !tecla_especial){
    alert("Ingresar solo letras minúsculas y sin acentos");
    return false;
    }
}
