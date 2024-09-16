function minhaFuncao(){
    document.querySelector('.minhaDiv').classList.add("classe1","classe2","classe3")
}

function minhaFuncao2(){
    document.querySelector('.minhaDiv').classList.remove("classe1","classe2","classe3")
}

function fundoAzul(){
    let elemento = document.querySelector('#style')
    elemento.style.backgroundColor = "blue"
}

function fundoTransp(){
    document.querySelector('#style').style.backgroundColor = 'transparent'
}

function fonteVer(){
    let elemento = document.querySelector('#style')
    elemento.classList.add('red-color')
}

function fonteNor(){
    let elemento = document.querySelector('#style')
    elemento.classList.remove('red-color')
}
