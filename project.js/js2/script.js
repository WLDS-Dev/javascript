function verificar () {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
            if (fsex[0].checked) {
            gênero = 'Homem'
            if (idade >=0 && idade < 12) { 
                img.setAttribute('src', 'imagens/menino.png')
            } else if (idade < 22) {  
                img.setAttribute('src', 'imagens/menino2.png')
            } else if (idade < 42) { 
                img.setAttribute('src', 'imagens/homem.png')             
            } else if (idade < 57) {  
                img.setAttribute('src', 'imagens/homem2.png')     
            } else {
                img.setAttribute('src', 'imagens/velho.png')

            }
        } else if (fsex[1].checked) {
            gênero = 'Mulher'
            if (idade >=0 && idade < 12) {  
                img.setAttribute('src', 'imagens/menina.png') 
            } else if (idade < 22) {   
                img.setAttribute('src', 'imagens/menina2.png')             
            } else if (idade < 42) {   
                img.setAttribute('src', 'imagens/mulher.png')    
            } else if (idade < 57) {
                img.setAttribute('src', 'imagens/mulher2.png')
            } else {
                img.setAttribute('src', 'imagens/velha.png')

            }
        }

        res.style.textAlign = 'center'
        res.innerHTML = `${gênero} com ${idade} ano(s).`
        res.appendChild(img)
          
    }

}



