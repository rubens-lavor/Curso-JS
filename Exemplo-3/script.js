function contar() {
    let ini = document.getElementById('txti')
    let fim = document.getElementById('txtf')
    let passo = document.getElementById('txtp')
    
    //testei com queryselector mas não deu certo na hora de 
    //testar se as caixas de diálogo estavam vazia ou não

    let res = document.getElementById('res')

    //verificando se as caixas de diálogo estam vazias
    //as variáveis tem que ser do tipo string
    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        window.alert('[ERRO] Faltam dados!')
    } else{
        res.innerHTML = 'Contando... '
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)

        if (p <= 0) {
            alert('[ATEÇÃO] Passo = 0 não é permitido!! Passo será = 1')
            p=1
        }
        if (p >= i && p >= f) {
            alert('[ATEÇÃO] Passo inválido!! Passo será = 1')
            p=1
        }

        if (i < f) {
            //contagem progressiva
            for (let cont = i; cont <= f; cont += p){
                res.innerHTML += `\u{1F449} ${cont} ` //\u{aqui dentro vem o código (sem a letra iinicial antes do traço -}
                // \u{1F449} e só funciona entre crase ``
            }    
        } else{
            for (let cont = i; cont >= f; cont -= p){
                res.innerHTML += `\u{1F449} ${cont} `
            }
        }
        res.innerHTML += `\u{1F3C1}`
    } 
}