function verificar (){
    var data = new Date()
    var ano = data.getFullYear()
    var formano = document.querySelector('input#anodigitado')
    var resultado = document.querySelector('div#resultado')

    if(formano.value.length == 0 || formano.value > ano){
        alert('Verifique as informações digitadas e tente novamente')
    }else{
        var formsex = document.getElementsByName('radiosexo')
        var idade = ano - Number(formano.value)
        var genero = ''
        var imagem = document.createElement('img')

        if(formsex[0].checked){
            genero = 'Homem'
            if(idade >=0 && idade < 10){
                imagem.setAttribute('src', 'imagens/foto-bebe-m.png')
            }else if(idade < 21){
                imagem.setAttribute('src', 'imagens/foto-jovem-m.png')
            }else if(idade < 60){
                imagem.setAttribute('src', 'imagens/foto-adulto-m.png')
            }else{
                imagem.setAttribute('src', 'imagens/foto-idoso-m.png')
            }

        }else{
            genero = 'Mulher'
            if(idade >=0 && idade < 10){
                imagem.setAttribute('src', 'imagens/foto-bebe-f.png')
            }else if(idade < 21){
                imagem.setAttribute('src', 'imagens/foto-jovem-f.png')
            }else if(idade < 60){
                imagem.setAttribute('src', 'imagens/foto-adulto-f.png')
            }else{
                imagem.setAttribute('src', 'imagens/foto-idoso-f.png')
            }
        }
        resultado.style.textAlign = 'center'
        resultado.innerHTML = `Indentificamos ${genero} com idade de ${idade} anos`
        resultado.appendChild(imagem)
    }
}