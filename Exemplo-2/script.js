function verificar(){
    var data = new Date()
    var ano =data.getFullYear()
    var formAno = document.getElementById('txtano')
    var res = window.document.querySelector('div#res')

    if (formAno.value.length == 0 || Number(formAno.value) > ano) {
        //value.length verifca se a caixa está vazia a partir do tamanho, 
        //pois é igual a zero se nao tiver nada escrito
        window.alert('[ERRO] Verifique os dados e tente novamente')
    }else{
        var fsex = window.document.getElementsByName('radsex')
        var idade = ano - Number(formAno.value)
        //res.innerHTML = `Idade calculada: ${idade}`
        var genero = ''
        var img = document.createElement('img') //colocando uma foto dinamicamente
        img.setAttribute('id','foto')// img com id foto
        
        if (fsex[0].checked) {
            genero ='homem'
            if (idade>=0 && idade < 10) {
                //criança
                genero='uma criança'
                img.setAttribute('src','./img/bebemenino.png')
            }else if (idade<21) {
                //jovem
                genero='um jovem'
                img.setAttribute('src','./img/jovemhomem.png')
            } else if(idade<50){
                //adulto
                genero='um homem'
                img.setAttribute('src','./img/adultohomem.png')
            }else{
                //idoso
                genero='um senhor'
                img.setAttribute('src','./img/senhor.png')
            }
        }else{
            genero ='mulher'
            if (idade>=0 && idade < 10) {
                //criança
                genero='uma criança'
                img.setAttribute('src','./img/bebemenina.png')
            }else if (idade<21) {
                //jovem
                genero='uma jovem'
                img.setAttribute('src','./img/jovemmulher.png')
            } else if(idade<50){
                //adulto
                genero='uma mulher'
                img.setAttribute('src','./img/adultamulher.png')
            }else{
                //idoso
                genero='uma senhora'
                img.setAttribute('src','./img/senhora.png')
            }
        }
        res.style.textAlign = 'center'
        //centralzando pelo js
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img) //add um elemento
    }
}