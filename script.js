function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.querySelector('input#txtano') //formulario-ano
    var vrf = document.querySelector('div#vrf')

    if(fano.value.length == 0 || Number(fano.value) > ano){
        alert('[Erro] Verifique os dados e tente novamente.')
    }else{
        var fsex = document.getElementsByName('radsex') // formulario-sex
        var idade = ano - Number(fano.value)
        var genero = '' // variavel 
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        
        if(fsex[0].checked){
            // homem
            genero = 'Homem'
            document.body.style.background = 'darkblue'
            if(idade >= 0 && idade < 10){
                // criança
                img.setAttribute('src', 'imagens/menino.png')
            }else if(idade < 31){
                // Jovem
                img.setAttribute('src', 'imagens/homem-jovem.png')
            }else if(idade < 55){
                // adulto
                img.setAttribute('src', 'imagens/homem-adulto.png')
            }else{
                // idoso
                img.setAttribute('src', 'imagens/homem-idoso.png')
            }

        }else if(fsex[1].checked){
            // mulher
            genero = 'Mulher'
            document.body.style.background = 'darkred'
            if(idade >= 0 && idade < 10){
                // criança
                img.setAttribute('src', 'imagens/menina.png')
            }else if(idade < 31){
                // Jovem
                img.setAttribute('src', 'imagens/mulher-jovem.png')
            }else if(idade < 55){
                // adulto
                img.setAttribute('src', 'imagens/mulher-adulta.png')
            }else{
                // idoso
                img.setAttribute('src', 'imagens/mulher-idosa.png')
            }
        }
        vrf.innerHTML = `<strong>Verificamos ${genero} de ${idade} anos de idade.</strong>` 
        vrf.appendChild(img)
    }

}