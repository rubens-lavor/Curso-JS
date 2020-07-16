function tabuada() {
    let num_txt=document.getElementById('txtn')
    let res = document.getElementById('res')
    let tab = document.getElementById('seltab')
    if (num_txt.value.length == 0) {
        window.alert('[ERRO] Faltam dados!')
    }else{
        let num = Number(num_txt.value)

        tab.innerHTML = '' //limpar o select
        for(let cont = 1;cont < 11; cont++){
            let item = document.createElement('option')
            //pelo que eu entendi o createElement
            //cria um elemento dinamicamente na pag
            //como se estivesse sendo colocado lá no .html
            //no momento em que o programa ta rodando
            //em "tempo de execução"
            item.text = `${num} x ${cont} = ${cont*num}`
            tab.appendChild(item)
            //res.innerHTML += `${num} x ${cont} = ${cont*num} <br>`    
        }
    }
}