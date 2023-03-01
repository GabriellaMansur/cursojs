function contador() {
    var inicio = window.document.getElementById('num_inicio')
    var fim = window.document.getElementById('num_fim')
    var passo = window.document.getElementById('pas')
    var res = window.document.getElementById('res')
    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        res.innerHTML = 'Impossível contar'
        window.alert('[ERRO] Insira os valores')
    } else {
        res.innerHTML = 'Contando'
        let ini = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if (p <= 0) {
            window.alert('Passo inválido! Considerando passo 1')
            p = 1
        }
        if (ini < f) {
            //Contagem crescente
            for (var cont = ini; cont <= f; cont += p) {
            res.innerHTML += ` ${cont} \u{1F449}`
        }
        } else {
            //Contagem regressiva
            for(var cont = ini; cont >= f;cont -= p) {
                res.innerHTML += ` ${cont} \u{1F449}`
            }
        }
        
    }
} 