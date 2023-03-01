function tabuada () {
    var num = window.document.getElementById('num_tab')
    var res = window.document.getElementById('res')
    let n = Number(num.value)
    for(let i = 0; i <= 10; num*i){
        res.innerHTML = `${num} X ${i} = `
    }
}