function desabilitaTexto() {
    if (document.getElementById('opcao-select').value == "desabilitado") {
        document.getElementById('texto').setAttribute('disabled', '')
        document.querySelector('.texto').innerHTML = "DESABILITADO"
        let elemento = document.querySelector('#style')
        elemento.style.backgroundColor = "red"
    } else {
        document.getElementById('opcao-select').setAttribute('enable', '');
    }
}