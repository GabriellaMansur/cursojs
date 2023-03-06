function tabuada () {
    var num = window.document.getElementById('num_tab')
    var res = window.document.getElementById('res')
    if (num.value.length == 0 || num.value >= 1000) {
        window.alert('Insira um valor válido')
    } else {
        var n = Number(num.value)
        for(var i = 0; i <= 10; i++){
        res.innerHTML += `${n} X ${i} = ${n*i}` + "<br/>"
    }
    }










    
}