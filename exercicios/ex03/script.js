function contador() {
    var inicio = window.document.getElementById('num_inicio')
    var fim = window.document.getElementById('num_fim')
    var passo = window.document.getElementById('pas')
    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        window.alert('[ERRO] Insira os valores')
    } else if(passo.value == 0) {
        window.alert('[ERRO] o passo não pode ter valor zero')
    } else {
        res.innerHTML = 'Contando'
        for (var cont = inicio; cont <= fim; cont + inicio +passo) {
            res.innerHTML += `${cont}`
        }

    }
} 